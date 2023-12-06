-- senhas: 123123

INSERT INTO user (id, name, email, password, active_user) values (4, 'Michelangelo', 'mimi@ifsp.edu.br', '$1$ga14p2wj$fENYct9yUu5LUM1vBDtRb/', '1');
INSERT INTO user (id, name, email, password, active_user) values (5, 'Rafael', 'rara@ifsp.edu.br', '$1$ga14p2wj$fENYct9yUu5LUM1vBDtRb/', '1');
INSERT INTO user (id, name, email, password, active_user) values (6, 'Leonardo', 'leoleo@ifsp.edu.br', '$1$ga14p2wj$fENYct9yUu5LUM1vBDtRb/', '1');
INSERT INTO user (id, name, email, password, active_user) values (7, 'Donatello', 'dondon@ifsp.edu.br', '$1$ga14p2wj$fENYct9yUu5LUM1vBDtRb/', '1');
INSERT INTO user (id, name, email, password, active_user) values (8, 'Arthur Regiani', 'artart@ifsp.edu.br', '$1$ga14p2wj$fENYct9yUu5LUM1vBDtRb/', '1');

-- Permissões

-- Michelangelo
INSERT INTO user_permission (id_user, id_permission) values (4, 1);
INSERT INTO user_permission (id_user, id_permission) values (4, 3);
INSERT INTO user_permission (id_user, id_permission) values (4, 4);
INSERT INTO user_permission (id_user, id_permission) values (4, 5);
INSERT INTO user_permission (id_user, id_permission) values (4, 6);

-- Rafael
INSERT INTO user_permission (id_user, id_permission) values (5, 1);
INSERT INTO user_permission (id_user, id_permission) values (5, 3);
INSERT INTO user_permission (id_user, id_permission) values (5, 4);
INSERT INTO user_permission (id_user, id_permission) values (5, 5);
INSERT INTO user_permission (id_user, id_permission) values (5, 6);

-- Leonardo
INSERT INTO user_permission (id_user, id_permission) values (6, 1);
INSERT INTO user_permission (id_user, id_permission) values (6, 3);
INSERT INTO user_permission (id_user, id_permission) values (6, 4);
INSERT INTO user_permission (id_user, id_permission) values (6, 5);
INSERT INTO user_permission (id_user, id_permission) values (6, 6);

-- Donatello
INSERT INTO user_permission (id_user, id_permission) values (7, 1);
INSERT INTO user_permission (id_user, id_permission) values (7, 3);
INSERT INTO user_permission (id_user, id_permission) values (7, 4);
INSERT INTO user_permission (id_user, id_permission) values (7, 5);
INSERT INTO user_permission (id_user, id_permission) values (7, 6);

-- Arthur Regiani
INSERT INTO user_permission (id_user, id_permission) values (8, 1);
INSERT INTO user_permission (id_user, id_permission) values (8, 3);
INSERT INTO user_permission (id_user, id_permission) values (8, 4);
INSERT INTO user_permission (id_user, id_permission) values (8, 5);
INSERT INTO user_permission (id_user, id_permission) values (8, 6);
