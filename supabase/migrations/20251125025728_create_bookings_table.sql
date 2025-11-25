/*
  # Create bookings table for Diaz Automation

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key) - Unique identifier for each booking
      - `name` (text) - Contact person's full name
      - `email` (text) - Contact email address
      - `company` (text) - Company name
      - `phone` (text, optional) - Phone number
      - `message` (text, optional) - Additional message or requirements
      - `created_at` (timestamptz) - Timestamp when booking was submitted
      - `status` (text) - Booking status (pending, contacted, completed)

  2. Security
    - Enable RLS on `bookings` table
    - Add policy for public insert (allow anyone to submit a booking)
    - Add policy for authenticated users to view all bookings (for admin access)
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  phone text DEFAULT '',
  message text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a booking"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update booking status"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
