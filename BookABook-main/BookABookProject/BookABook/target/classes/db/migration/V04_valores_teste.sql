--Valores Testes para Usuários--

INSERT INTO user (name, email, password, active)
VALUES ('Leonardo', 'leo@email.com', '222222', true);

INSERT INTO user (name, email, password, active)
VALUES ('Rafael', 'rafa@email.com', '321321', true);

--Valores Testes para Review--

INSERT INTO review (review_name, book_name, rate, category, description, observation, review_date, user_id)
VALUES ('Uma Jornada por Westeros, Parte 1', 'Guerra dos Tronos, Livro 1', 'MUITO_ALTA', 'FANTASIA', 
'"Game of Thrones," o primeiro livro da série "A Song of Ice and Fire" de George R.R. Martin, é uma obra-prima da fantasia épica. Com intrigas políticas, personagens complexos e reviravoltas surpreendentes, ele tece uma trama cativante em um mundo rico e brutal. Martin cria um universo vívido e imprevisível, onde nenhum personagem está a salvo. Uma leitura emocionante que mantém os leitores ansiosos por mais. Este livro é um marco na literatura fantástica, repleto de personagens inesquecíveis e uma trama que nunca deixa de surpreender.', 
'A leitura foi realizada no idioma original, sendo este, inglês.', 
'2023-09-01', 1);

