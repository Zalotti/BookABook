CREATE TABLE review (
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	description VARCHAR(250) NOT NULL,
    category VARCHAR(20) NOT NULL,
    rate VARCHAR(25) NOT NULL, 
    review_name VARCHAR(250) NOT NULL, 
    book_name VARCHAR(250) NOT NULL, 
	review_date DATE NOT NULL,
    observation VARCHAR(150) NOT NULL,
    user_id BIGINT(20)
    FOREIGN KEY (user_id) REFERENCES user(id),
)
