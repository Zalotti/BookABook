CREATE TABLE review (
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    image VARCHAR(250),
	description VARCHAR(8000) NOT NULL,
    category VARCHAR(20) NOT NULL,
    rate VARCHAR(25) NOT NULL, 
    review_name VARCHAR(250) NOT NULL, 
    book_name VARCHAR(250) NOT NULL, 
	review_date DATE NOT NULL,
    observation VARCHAR(150) NOT NULL,
    user_id BIGINT(20),
    FOREIGN KEY (user_id) REFERENCES user(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO review (review_name, book_name, image, rate, category, description, observation, review_date, user_id) values ('Uma Jornada por Westeros, Parte 1', 'Guerra dos Tronos, Livro 1', 'https://down-br.img.susercontent.com/file/795b83ca34e20790c83811961c9868c6', 'MUITO_ALTA', 'FANTASIA', 
'"A Guerra dos Tronos" é o primeiro livro da aclamada série "As Crônicas de Gelo e Fogo" escrita por George R. R. Martin. Publicado em 1996, o livro rapidamente se tornou um fenômeno literário e deu início a uma série de sucesso que viria a ser adaptada para a famosa série de televisão "Game of Thrones".

A trama do livro é uma intrincada teia de política, intriga e fantasia, ambientada em um mundo fictício onde diferentes casas nobres lutam pelo controle do Trono de Ferro e, por conseguinte, do reino de Westeros. O enredo é construído em torno de personagens complexos e multifacetados, cada um com seus próprios objetivos e motivações. Martin tece uma narrativa envolvente, onde a imprevisibilidade e a brutalidade estão sempre à espreita.

A força do livro reside na habilidade do autor em criar personagens memoráveis e cativantes. Desde o nobre Eddard Stark, conhecido por sua honra inflexível, até a astuta e ambiciosa rainha Cersei Lannister, Martin constrói um elenco diversificado que mantém o leitor completamente absorvido na trama. Os personagens não são delineados apenas como heróis ou vilões, mas como seres humanos complexos, sujeitos a falhas e dilemas morais.

A ambientação de Westeros é rica em detalhes, com Martin desenvolvendo não apenas os aspectos políticos, mas também os elementos mágicos e fantásticos do mundo que criou. A presença iminente dos Outros, seres sobrenaturais que habitam as terras além da Muralha, adiciona uma camada de mistério e tensão à narrativa, enquanto o leitor é gradualmente introduzido em um universo onde nada é realmente seguro.

O ritmo do livro é lento em alguns momentos, pois Martin dedica tempo à construção do mundo e ao desenvolvimento dos personagens. No entanto, isso contribui para a profundidade da história, criando uma base sólida para os eventos futuros da série. As reviravoltas surpreendentes e os momentos de grande impacto emocional são distribuídos ao longo da trama, mantendo o leitor ansioso por mais.

"A Guerra dos Tronos" não é apenas uma história de fantasia épica, mas uma exploração profunda dos temas de poder, traição, lealdade e sobrevivência. Martin desafia as convenções do gênero ao subverter expectativas e criar um mundo onde nenhum personagem está a salvo. É uma leitura intensa e envolvente que deixa uma marca duradoura, tornando-se um clássico moderno da literatura fantástica.

A escrita de Martin é rica em detalhes, com uma prosa que combina elegância e brutalidade. Seu estilo descritivo dá vida não apenas aos personagens, mas também aos cenários, desde os corredores frios de Winterfell até os salões luxuosos de Porto Real. A capacidade do autor de criar um senso tangível de lugar adiciona uma dimensão palpável à narrativa, imergindo o leitor em um mundo repleto de intrigas e perigos.

Além disso, a trama política intricada é complementada por elementos de magia e mitologia. A introdução de dragões, lobos gigantes e outros seres fantásticos acrescenta uma camada de maravilha ao universo de Westeros. No entanto, Martin habilmente equilibra esses elementos, garantindo que a fantasia não sobrecarregue a complexidade das relações humanas e das lutas pelo poder.

A estrutura do livro, narrado de múltiplos pontos de vista, oferece uma perspectiva abrangente dos eventos que se desenrolam. Cada capítulo é como uma peça de um quebra-cabeça maior, permitindo que o leitor veja a história de diferentes ângulos. Esse formato enriquece a experiência de leitura, à medida que a trama se desdobra através dos olhos de personagens distintos, cada um contribuindo para a complexidade do enredo.

Contudo, é importante mencionar que a natureza implacável do enredo pode ser desafiadora para alguns leitores. Martin não hesita em eliminar personagens principais, subvertendo as expectativas e criando um senso constante de suspense. Essa imprevisibilidade, embora seja uma das forças da narrativa, também pode gerar angústia e surpresa, desafiando as convenções tradicionais da literatura fantástica.

Em conclusão, "A Guerra dos Tronos" é uma obra-prima que transcende o gênero, oferecendo uma experiência literária única e envolvente. A combinação de personagens complexos, uma trama densa e um mundo ricamente construído solidifica o livro como um marco na literatura fantástica contemporânea. Este é apenas o começo de uma jornada épica, preparando o terreno para uma série que continua a surpreender e cativar leitores em todo o mundo.', 
'A leitura foi realizada no idioma original, sendo este, inglês.', 
'2023-09-01', 1);

