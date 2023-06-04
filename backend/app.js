const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const sqlite3 = require('sqlite3').verbose();
const DBPATH = './backend/data/projeto_curriculo.db';
const hostname = '127.0.0.1';
const port = 3000;
const app = express();  

//Carrega toda a parte estática no frontend 
app.use(express.static('./frontend/'));

/* Definição dos endpoints */
/******** CRUD ************/
app.use(express.json());

// Retorna todos registros de currículo (R do CRUD - Read)
app.get('/curriculos', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH); 
  var sql = 'SELECT * FROM pessoa';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); 
});

// Insere um registro de currículo (é o C do CRUD - Create)
app.post('/insereCurriculo', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH); 
  sql =
    "INSERT INTO pessoa (nome, idade, resumo_profissional, celular, url_foto, email, rua, numero, cep, cidade) VALUES ('" +
    req.body.nome +
    "', '" +
    req.body.idade +
    "', '" +
    req.body.resumo.replace("'", '') +
    "', '" +
    req.body.celular +
    "', '" +
    req.body.url_foto +
    "', '" +
    req.body.email +
    "', '" +
    req.body.rua +
    "', '" +
    req.body.numero +
    "', '" +
    req.body.cep +
    "', '" +
    req.body.cidade +
    "')";
  console.log(sql);
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
  });
  res.write('<p>CURRICULO INSERIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
  db.close(); 
  res.end();
});

// Monta o formulário para o update do currículo (é o U do CRUD - Update)
app.get('/atualizaCurriculo', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  sql = 'SELECT * FROM pessoa WHERE id_pessoa_pk=' + req.query.id_pessoa_pk;
  console.log(sql);
  var db = new sqlite3.Database(DBPATH); 
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close();
});

// Atualiza um registro de um currículo já existente (é o U do CRUD - Update)
app.post('/atualizaCurriculo', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  sql =
    "UPDATE pessoa SET nome ='" +
    req.body.nome +
    "', idade = '" +
    req.body.idade +
    "', resumo_profissional='" +
    req.body.resumo_profissional +
    "', celular='" +
    req.body.celular +
    "', url_foto='" +
    req.body.url_foto +
    "', email='" +
    req.body.email +
    "', rua='" +
    req.body.rua +
    "', numero='" +
    req.body.numero +
    "', cep='" +
    req.body.cep +
    "', cidade='" +
    req.body.cidade +
    "', id_pessoa_pk='" +
    req.body.id_pessoa_pk +
    "' WHERE id_pessoa_pk='" +
    req.body.id_pessoa_pk +
    "'";
  console.log(sql);
  var db = new sqlite3.Database(DBPATH);
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
    res.end();
  });
  res.write('<p>CURRICULO ATUALIZADO COM SUCESSO!</p><a href="/">VOLTAR</a>');
  db.close();
});

// Exclui um registro de um currículo (é o D do CRUD - Delete)
app.get('/removeCurriculo', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  sql =
    "DELETE FROM pessoa WHERE id_pessoa_pk='" + req.query.id_pessoa_pk + "'";
  console.log(sql);
  var db = new sqlite3.Database(DBPATH); 
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
    res.write('<p>CURRICULO REMOVIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
    res.end();
  });
  db.close();
});

// Retorna todos registros de competências profissionais (R do CRUD - Read)
app.get('/competencias', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH);
  var sql = 'SELECT * FROM competencia_profissional';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); 
});

// Retorna todos registros de cursos extracurriculares (R do CRUD - Read)
app.get('/cursos', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH); 
  var sql = 'SELECT * FROM curso_extracurricular';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); 
});

// Retorna todos registros de experiências profissionais (R do CRUD - Read)
app.get('/experiencias', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH); 
  var sql = 'SELECT * FROM experiencia';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); 
});

// Retorna todos registros de formação acadêmica (R do CRUD - Read)
app.get('/formacao', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH); 
  var sql = 'SELECT * FROM formacao';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); 
});

// Retorna todos registros de habilidades profissionais (R do CRUD - Read)
app.get('/habilidades', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH); 
  var sql = 'SELECT * FROM habilidade_profissional';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); 
});

// Retorna todos registros de projetos (R do CRUD - Read)
app.get('/projetos', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH); 
  var sql = 'SELECT * FROM projeto';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); 
});

// Retorna todos registros de trabalhos voluntários (R do CRUD - Read)
app.get('/voluntarios', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH); 
  var sql = 'SELECT * FROM trabalho_voluntario';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close();
});

// Retorna o acesso ao servidor
app.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
