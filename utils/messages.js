const MESSAGES = {
    'INTERNAL_SERVER_ERROR': 'Internal Server Error',
    "DATABASE_ERROR": "Erro ao gravar informações no banco de dados. Tente novamente mais tarde.",
    'NAME_REQUIRED': 'Nome é um campo obrigatório',
    'NAME_MUST_BE_A_STRING': 'O campo nome precisa ser do tipo String',
    'ENDERECO_MUST_BE_A_STRING': 'O campo endereço precisa ser do tipo String',
    '404_LABORATORIOS': 'Nenhum láboratório cadastrado ativo.',
    '404_LABORATORIO': 'Este laboratório não está cadastrado ou não está ativo na nossa base de dados.',
    '404_EXAMES': 'Nenhum exame cadastrado ativo.',
    '404_EXAME': 'Este exame não está cadastrado ou não está ativo em nossa base de dados.',
    '404_LABORATORIOS_POR_EXAME': 'Não existem laboratorios associados a este exame',
    '404_EXAMES_POR_LABORATORIO': 'Não existem exames associados a este laboratorio',
    '404_EXAME_LABORATORIO': 'Essa associação entre esse exame e esse laboratorio não existe em nossa base de dados',
    'LABORATORIO_ASSOCIADO_A_EXAME': 'Este laboratório já está associado a um exame.',
    'ENDERECO_REQUIRED': "Endereço é um campo obrigatório",
    'TIPO_ENUM': 'Tipo é um ENUM que aceita os seguintes valores: [ANALISE_CLINICA|IMAGEM]',
    'TIPO_REQUIRED': 'Tipo é um campo obrigatório',
    'EXAME_ID_REQUIRED': 'exameId é um campo obrigatório',
    'LABORATORIO_ID_REQUIRED': 'laboratorioId é um campo obrigatório',
    'EXAME_ID_MUST_BE_A_STRING': 'exameId precisa ser do tipo String',
    'LABORATORIO_ID_MUST_BE_A_STRING': 'laboratorioId precisa ser do tipo String'
}

module.exports = MESSAGES