$(document).ready(function() {
  // Armazena HTML da parte de informações pessoais
  const nome = document.querySelector('[data-nome]');
  const cargo = document.querySelector('[data-cargo]');
  const endereco = document.querySelector('[data-endereco]');
  const celular = document.querySelector('[data-celular]');
  const email = document.querySelector('[data-email]');
  const resumoProfissional = document.querySelector('[data-resumo]');

  // Armazena HTML da parte de formação acadêmica
  const nomeCursoFormacao = document.querySelector('[data-nome-curso]');
  const nomeInstituicaoFormacao = document.querySelector('[data-nome-instituicao]');
  const periodoFormacao = document.querySelector('[data-periodo-formacao]');

  // Armazena HTML da parte de experiência profissional
  const cargoExperiencia = document.querySelector('[data-nome-cargo]');
  const nomeEmpresaExperiencia = document.querySelector('[data-nome-empresa]');
  const periodoExperiencia = document.querySelector('[data-periodo-experiencia]');

  // Armazena HTML da parte de trabalho voluntário
  const nomeTrabalhoVoluntario = document.querySelector('[data-nome-voluntario]');
  const descricaoTrabalhoVoluntario = document.querySelector('[data-descricao-voluntario]');
  const dataTrabalhoVoluntario = document.querySelector('[data-periodo-voluntario]');

  // Armazena HTML da parte de projeto
  const nomeProjeto = document.querySelector('[data-nome-projeto]');
  const descricaoProjeto = document.querySelector('[data-descricao-projeto]');
  const periodoProjeto = document.querySelector('[data-periodo-projeto]');

  // Armazena HTML da parte de curso extracurricular
  const nomeCursoExtracurricular = document.querySelector('[data-nome-extracurricular]');
  const nomeInstituicaoCursoExtracurricular = document.querySelector('[data-instituicao-extracurricular]');
  const cargaHoraria = document.querySelector('[data-carga-horaria]');

  // Armazena HTML da parte de competência profissional
  const nomeCompetencia = document.querySelector('[data-competencia]');
  const nivelCompetencia = document.querySelector('[data-nivel-competencia]');

  // Armazena HTML da parte de habilidade profissional
  const nomeHabilidade = document.querySelector('[data-habilidade]');
  const nivelHabilidade = document.querySelector('[data-nivel-habilidade]');

  // Armazenam os endpoints
  let urlCurriculos = '/curriculos';
  let urlFormacao = '/formacao';
  let urlExperiencia = '/experiencias';
  let urlTrabalhoVoluntario = '/voluntarios';
  let urlProjetos = '/projetos';
  let urlCursosExtracurriculares = '/cursos';
  let urlCompetencias = '/competencias';
  let urlHabilidades = '/habilidades';

  // Requisição GET para pegar as informações pessoais
  $.ajax({
    url: urlCurriculos,
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      let curriculo = data[0];
      nome.innerText = curriculo.nome;
      cargo.innerText = curriculo.cargo;
      endereco.innerText = curriculo.endereco;
      celular.innerText = curriculo.celular;
      email.innerText = curriculo.email;
      resumoProfissional.innerText = curriculo.resumo_profissional;
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log('Erro na requisição. Status: ' + textStatus + ', erro: ' + errorThrown);
    }
  });

  // Requisição GET para pegar as informações sobre formação acadêmica
  $.ajax({
    url: urlFormacao,
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      let formacao = data[0];
      nomeCursoFormacao.innerText = formacao.nome;
      nomeInstituicaoFormacao.innerText = formacao.instituticao;
      periodoFormacao.innerText = formacao.data;
    },
    error: function(jqXHR, textStatus, errorThrown) {}
  });

  // Requisição GET para pegar as informações sobre experiência profissional
  $.ajax({
    url: urlExperiencia,
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      let experiencia = data[0];
      cargoExperiencia.innerText = experiencia.cargo;
      nomeEmpresaExperiencia.innerText = experiencia.empresa;
      periodoExperiencia.innerText = experiencia.data;
    },
    error: function(jqXHR, textStatus, errorThrown) {}
  });

  // Requisição GET para pegar as informações sobre trabalho voluntário
  $.ajax({
    url: urlTrabalhoVoluntario,
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      let trabalhoVoluntario = data[0];
      nomeTrabalhoVoluntario.innerText = trabalhoVoluntario.nome;
      descricaoTrabalhoVoluntario.innerText = trabalhoVoluntario.descricao;
      dataTrabalhoVoluntario.innerText = trabalhoVoluntario.data;
    },
    error: function(jqXHR, textStatus, errorThrown) {}
  });

  // Requisição GET para pegar as informações sobre projetos
  $.ajax({
    url: urlProjetos,
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      let projeto = data[0];
      nomeProjeto.innerText = projeto.nome;
      descricaoProjeto.innerText = projeto.descricao_projeto;
      periodoProjeto.innerText = projeto.data;
    },
    error: function(jqXHR, textStatus, errorThrown) {}
  });

  // Requisição GET para pegar as informações sobre curso extracurricular
  $.ajax({
    url: urlCursosExtracurriculares,
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      let cursoExtracurricular = data[0];
      nomeCursoExtracurricular.innerText = cursoExtracurricular.nome;
      nomeInstituicaoCursoExtracurricular.innerText = cursoExtracurricular.instituicao;
      cargaHoraria.innerText = cursoExtracurricular.carga_horaria;
    },
    error: function(jqXHR, textStatus, errorThrown) {}
  });

  // Requisição GET para pegar as informações sobre competências profissionais
  $.ajax({
    url: urlCompetencias,
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      let competencia = data[0];
      nomeCompetencia.innerText = competencia.nome;
      nivelCompetencia.innerText = competencia.nivel_competencia;
    },
    error: function(jqXHR, textStatus, errorThrown) {}
  });

  // Requisição GET para pegar as informações sobre habilidades profissionais
  $.ajax({
    url: urlHabilidades,
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      let habilidade = data[0];
      nomeHabilidade.innerText = habilidade.nome;
      nivelHabilidade.innerText = habilidade.nivel_habilidade;
    },
    error: function(jqXHR, textStatus, errorThrown) {}
  });
});
