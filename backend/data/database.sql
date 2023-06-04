BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "curso_extracurricular" (
	"nome"	TEXT,
	"instituicao"	TEXT,
	"carga_horaria"	INTEGER,
	"id_curso_pk"	INTEGER NOT NULL,
	"id_pessoa_fk"	INTEGER NOT NULL,
	PRIMARY KEY("id_curso_pk" AUTOINCREMENT),
	FOREIGN KEY("id_pessoa_fk") REFERENCES "pessoa"("id_pessoa_pk")
);
CREATE TABLE IF NOT EXISTS "habilidade_profissional" (
	"nome"	TEXT NOT NULL,
	"id_habilidade_pk"	INTEGER NOT NULL,
	"id_pessoa_fk"	INTEGER NOT NULL,
	"nivel_habilidade"	INTEGER,
	PRIMARY KEY("id_habilidade_pk" AUTOINCREMENT),
	FOREIGN KEY("id_pessoa_fk") REFERENCES "pessoa"("id_pessoa_pk")
);
CREATE TABLE IF NOT EXISTS "competencia_profissional" (
	"nome"	TEXT,
	"id_competencia_pk"	INTEGER NOT NULL,
	"id_pessoa_fk"	INTEGER NOT NULL,
	"nivel_competencia"	INTEGER,
	PRIMARY KEY("id_competencia_pk" AUTOINCREMENT),
	FOREIGN KEY("id_pessoa_fk") REFERENCES "pessoa"("id_pessoa_pk")
);
CREATE TABLE IF NOT EXISTS "pessoa" (
	"nome"	TEXT NOT NULL,
	"idade"	INTEGER NOT NULL,
	"resumo_profissional"	TEXT NOT NULL,
	"celular"	TEXT NOT NULL,
	"url_foto"	TEXT NOT NULL,
	"email"	TEXT NOT NULL,
	"endereco"	TEXT NOT NULL,
	"id_pessoa_pk"	INTEGER NOT NULL,
	"cargo"	TEXT,
	PRIMARY KEY("id_pessoa_pk" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "formacao" (
	"nome"	TEXT NOT NULL,
	"instituticao"	TEXT NOT NULL,
	"data"	TEXT NOT NULL,
	"tipo_de_formacao"	TEXT NOT NULL,
	"id_formacao_pk"	INTEGER NOT NULL,
	"id_pessoa_fk"	INTEGER NOT NULL,
	PRIMARY KEY("id_formacao_pk" AUTOINCREMENT),
	FOREIGN KEY("id_pessoa_fk") REFERENCES "pessoa"("id_pessoa_pk")
);
CREATE TABLE IF NOT EXISTS "experiencia" (
	"cargo"	TEXT,
	"empresa"	TEXT,
	"descricao_atividades"	TEXT,
	"data"	TEXT,
	"id_experiencia_pk"	INTEGER NOT NULL,
	"id_pessoa_fk"	INTEGER NOT NULL,
	PRIMARY KEY("id_experiencia_pk" AUTOINCREMENT),
	FOREIGN KEY("id_pessoa_fk") REFERENCES "pessoa"("id_pessoa_pk")
);
CREATE TABLE IF NOT EXISTS "trabalho_voluntario" (
	"nome"	TEXT,
	"data"	TEXT,
	"id_voluntario_pk"	INTEGER NOT NULL,
	"id_pessoa_fk"	INTEGER NOT NULL,
	"descricao"	TEXT NOT NULL,
	PRIMARY KEY("id_voluntario_pk" AUTOINCREMENT),
	FOREIGN KEY("id_pessoa_fk") REFERENCES "pessoa"("id_pessoa_pk")
);
CREATE TABLE IF NOT EXISTS "projeto" (
	"nome"	TEXT,
	"descricao_projeto"	TEXT,
	"data"	TEXT,
	"id_projeto_pk"	INTEGER NOT NULL,
	"id_pessoa_fk"	INTEGER NOT NULL,
	PRIMARY KEY("id_projeto_pk" AUTOINCREMENT),
	FOREIGN KEY("id_pessoa_fk") REFERENCES "pessoa"("id_pessoa_pk")
);
INSERT INTO "curso_extracurricular" ("nome","instituicao","carga_horaria","id_curso_pk","id_pessoa_fk") VALUES ('HTML','Alura',16,1,6);
INSERT INTO "habilidade_profissional" ("nome","id_habilidade_pk","id_pessoa_fk","nivel_habilidade") VALUES ('HTML',1,6,10);
INSERT INTO "competencia_profissional" ("nome","id_competencia_pk","id_pessoa_fk","nivel_competencia") VALUES ('Comunicação',1,6,10);
INSERT INTO "pessoa" ("nome","idade","resumo_profissional","celular","url_foto","email","endereco","id_pessoa_pk","cargo") VALUES ('Raphaela',18,'Técnica em Redes ','1111111','foto.png','raphaela@teste.com','Rua das Flores, 123',6,'Desenvolvedora Frontend');
INSERT INTO "formacao" ("nome","instituticao","data","tipo_de_formacao","id_formacao_pk","id_pessoa_fk") VALUES ('Técnico em Redes de Computadores','Instituto Federal de Educação, Ciência e Tecnologia','2020 - 2022','Ensino técnico',1,6);
INSERT INTO "experiencia" ("cargo","empresa","descricao_atividades","data","id_experiencia_pk","id_pessoa_fk") VALUES ('Desenvolvedora Frontend','Banco PAN','Responsável pela criação de novas aplicações do banco','2023',1,6);
INSERT INTO "trabalho_voluntario" ("nome","data","id_voluntario_pk","id_pessoa_fk","descricao") VALUES ('Cuidadora de Pets','2023',1,6,'Cuidei de gatos e cachorros muito fofinhos');
INSERT INTO "projeto" ("nome","descricao_projeto","data","id_projeto_pk","id_pessoa_fk") VALUES ('Desenvolvimento de uma aplicação web para democratização do acesso à conteúdos relacionados à cibersegurança','A aplicação web realiza a democratização de conteúdos relacionados à cibersegurança por meio de artigos escritos com uma linguagem acessível, tutoriais e ferramentas complementares','2022',1,6);
COMMIT;
