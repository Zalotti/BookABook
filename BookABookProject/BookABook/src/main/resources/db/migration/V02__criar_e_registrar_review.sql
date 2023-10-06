CREATE TABLE review (
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	description VARCHAR(250) NOT NULL,
    category VARCHAR(20) NOT NULL,
    rate VARCHAR(25) NOT NULL, 
    review_name VARCHAR(250) NOT NULL, 
    book_name VARCHAR(250) NOT NULL, 
	review_date DATE NOT NULL,
    observation VARCHAR(150) NOT NULL,
    user_id BIGINT(20),
    FOREIGN KEY (user_id) REFERENCES user(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO review (review_name, book_name, rate, category, description, observation, review_date, user_id) values ('Uma Jornada por Westeros, Parte 1', 'Guerra dos Tronos, Livro 1', 'MUITO_ALTA', 'FANTASIA', 
'"Game of Thrones," o primeiro livro da série "A Song of Ice and Fire" de George R.R. Martin, é uma obra-prima da fantasia épica. Com intrigas políticas, personagens complexos e reviravoltas surpreendentes, ele tece uma trama cativante em um mundo rico e brutal. Martin cria um universo vívido e imprevisível, onde nenhum personagem está a salvo. Uma leitura emocionante que mantém os leitores ansiosos por mais. Este livro é um marco na literatura fantástica, repleto de personagens inesquecíveis e uma trama que nunca deixa de surpreender.', 
'A leitura foi realizada no idioma original, sendo este, inglês.', 
'2023-09-01', 1);

