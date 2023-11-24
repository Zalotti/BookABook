CREATE TABLE user (
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(150) NOT NULL,
	active_user BOOLEAN NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- senhas: 123123
INSERT INTO user (id, name, email, password, active_user) values (1, 'João Vitor', 'jojo@ifsp.edu.br', '$1$ga14p2wj$fENYct9yUu5LUM1vBDtRb/', '1');
INSERT INTO user (id, name, email, password, active_user) values (2, 'Iago Moraes', 'iago@ifsp.edu.br', '$1$ga14p2wj$fENYct9yUu5LUM1vBDtRb/', '1');