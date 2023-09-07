-- users seeds
INSERT INTO users ("username", "first_name", "last_name", "email", "password", "created_at")
VALUES
  ('user1', 'John', 'Doe', 'john.doe@example.com', 'password1', '2023-08-25 10:00:00'),
  ('user2', 'Jane', 'Smith', 'jane.smith@example.com', 'password2', '2023-08-25 10:15:00'),
  ('user3', 'Alice', 'Johnson', 'alice.johnson@example.com', 'password3', '2023-08-25 10:30:00'),
  ('user4', 'Bob', 'Brown', 'bob.brown@example.com', 'password4', '2023-08-25 10:45:00'),
  ('user5', 'Emily', 'Davis', 'emily.davis@example.com', 'password5', '2023-08-25 11:00:00');
