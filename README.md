# Atividade 01 - extra
## 01) Explique com suas palavras a diferença entre uma classe e um objeto e como esses dois conceitos se relacionam. Além disso, apresente um exemplo do mundo real para cada um (por exemplo, usando a classe Carro e instâncias como Fusca e
Civic).
Enquanto um objeto é uma entidade concreta que executa algum papel no
sistema como um todo, uma classe captura a estrutura e o comportamento comum a todos os
objetos que são relacionados. Um objeto possui uma identidade e suas características serão
definidas para a classe. A relação entre eles pode ser entendida da seguinte forma: a classe serve como a base ou a estrutura, enquanto o objeto é a concretização dessa estrutura. Vários objetos podem ser criados a partir da mesma classe. 
Exemplo do mundo real: Classe: Animal, objetos: gato, cachorro.
## 02) De forma breve, conceitue atributos e métodos. Pesquise e exemplifique um objetos ou classes que possuam atributos e métodos. Por exemplo um Carro:
Classe: Filme
Atributos: título, diretor, gênero, duração, ano_lancamento
Métodos: assistir(), pausar(), exibir_informacoes(), classificar(nota)
Objeto: filme_exemplo
titulo: Se7en - Os Sete Crimes Capitais
diretor: David Fincher 
gênero: Crime
duração: 2h
ano_lancamento: 1995
## 03) Enumere na tabela abaixo contextos/sistemas distintos em que os atributos abaixo seriam relevantes:
- CPF
  Não é importante: Redes sociais
  Moderadamente importante: Inscrição em eventos
  Essencial: Serviços bancários
- Histórico de Saúde
  Não é importante: Sistema bancário
  Moderadamente: Sistema de uma academia
  Essencial: Atendimento médico de emergência
- Quantidade de seguidores
  Não é importante: aplicativos de pagamentos 
  Moderadamente: redes sociais
  Essencial: plataformas de marketing
- Habilidade destra
  Não é importante: inscrição do enem 
  Moderadamente: plataforma de avaliação de habilidades
  Essencial: sistema que irá selecionar candidatos para participar de um programa esportivo
- Endereço
  Não é importante: plataformas de streaming 
  Moderadamente: E-commerce
  Essencial: compra online
- Saldo em conta
  Não é importante: redes sociais 
  Moderadamente: E-commerce
  Essencial: transação bancária
- Etnia
  Não é importante: streaming 
  Moderadamente: sistema de inscrição em um concurso público 
  Essencial: censos e estudos demográficos
## 04) Considerando os objetos Pessoa e Conta:
### a) Seria interessante em um sistema bancário um objeto "conta" possuir uma "pessoa" como um atributo interno representando o titular da conta?
Sim, isso vai permitir que exista uma relação clara entre a conta e o seu proprietário, facilitando o gerenciamento e a consulta de informações.
### b) Olhando no sentido inverso, seria interessante uma pessoa possuir mais de uma conta como atributo? Que elemento da programação estruturada melhor representaria o conjunto de contas de uma pessoa?
Sim, na prática é possível uma pessoa ter mais de uma conta bancária. O elemento da programação estruturada que melhor representaria o conjunto de contas de uma pessoa é uma lista ou 
array.
## 05) Identifique pelo menos 5 objetos de um sistema de controle acadêmico. Ex: aluno, Professor, disciplina, turma, coordenador, sala.
Curso, matriz curricular, notas, sala.
## 06) Imagine um jogo qualquer. Identifique o máximo de objetos possíveis e eventuais características (atributos) e comportamentos (métodos) que eles poderiam ter.
Jogo de Futebol
Objetos: 
- Jogo
   - Atributos:
     Duração;
     Local;
     Data;
     Hora;
     Time1;
     Time2;
     Placar;
     Tipo (amistoso, campeonato)
  - Métodos:
    Iniciar partida;
    Finalizar partida;
    visualizar placar;
    atualizar placar;
    adicionar jogador;
    remover jogador;
- Time
  - Atributos:
    Nome do time;
    Lista de jogadores;
    Técnico;
    Categoria (masculino, feminino);
  - Métodos:
    Adicionar jogador;
    Remover jogador;
- Jogador
  - Atributos:
    Nome;
    Número;
    Posição;
    Quantidade de cartão amarelo recebido;
    Quantidade de cartão vermelho recebido;
 - Métodos:
   driblar;
   tocar;
   chutar;
   defender;
   receber cartão;
- Árbitro
  - Atributos
    Nome;
    Registro;
    Experiência (anos);
    Tipo (princiapl, assistente);
  - Métodos
    apitar gol;
    aplicar cartão amarelo (jogador);
    aplicar cartão vermelho (jogador);
    dar acrescimos;
    apitar para inicio ao jogo;
    apitar para fim do jogo;
- Placar
  - Atributos
    Gols (time)
    Cartões amarelos
    Cartões vermelhos
    Tempo de jogo
  - Métodos
    exibir placar;
    atualizar cartão amarelo(jogador);
    atualizar cartão vermelho (jogador);
    exibir estatísticas;
    
   
    
   
    
  
  





  




