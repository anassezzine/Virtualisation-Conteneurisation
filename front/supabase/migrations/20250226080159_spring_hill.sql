/*
  # Create names table
  
  1. New Tables
    - `names`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on `names` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS names (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE names ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON names
  FOR SELECT
  TO public
  USING (true);