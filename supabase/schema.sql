-- =============================================
-- DARKSIDE BROS PENCA MUNDIAL 2026 — v2
-- Schema de Supabase - ejecutar en SQL Editor
-- =============================================

create table if not exists profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  username text,
  avatar_url text,
  total_pts int default 0,
  streak_exact int default 0,
  streak_exact_best int default 0,
  login_streak int default 0,
  last_login_date date,
  champion_pick text,
  top_scorer_pick text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists predictions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  match_id int not null,
  score_home int not null default 0,
  score_away int not null default 0,
  pts_earned int default 0,
  is_early boolean default false,
  submitted_at timestamptz default now(),
  unique(user_id, match_id)
);

create table if not exists match_results (
  match_id int primary key,
  score_home int not null,
  score_away int not null,
  -- Solo se usa cuando score_home=score_away en partidos de eliminacion:
  -- true si gano el local por penales, false si gano el visitante.
  winner_home boolean,
  resolved_at timestamptz default now()
);

create table if not exists quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  quiz_date date not null default current_date,
  correct int not null default 0,
  total int not null default 10,
  pts_earned int not null default 0,
  answers jsonb,
  created_at timestamptz default now(),
  unique(user_id, quiz_date)
);

create table if not exists points_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  pts int not null,
  reason text not null,
  match_id int,
  quiz_date date,
  created_at timestamptz default now()
);

-- RLS
alter table profiles enable row level security;
alter table predictions enable row level security;
alter table match_results enable row level security;
alter table quiz_attempts enable row level security;
alter table points_log enable row level security;

create policy "Profiles publicos" on profiles for select using (true);
create policy "Users editan perfil" on profiles for update using (auth.uid() = id);
create policy "Users crean perfil" on profiles for insert with check (auth.uid() = id);
create policy "Ver pronosticos" on predictions for select using (auth.uid() = user_id);
create policy "Insertar pronosticos" on predictions for insert with check (auth.uid() = user_id);
create policy "Actualizar pronosticos" on predictions for update using (auth.uid() = user_id);
create policy "Resultados publicos" on match_results for select using (true);
create policy "Ver quizzes" on quiz_attempts for select using (auth.uid() = user_id);
create policy "Insertar quiz" on quiz_attempts for insert with check (auth.uid() = user_id);
create policy "Ver log" on points_log for select using (auth.uid() = user_id);

-- Trigger: crear perfil automático al registrarse
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, username, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', new.email),
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
