const cidades = [
    { nome: 'Patos de Minas', populacao: 153585 },
    { nome: 'Lages', populacao: 157349 },
    { nome: 'Ibiúna', populacao: 79479 },
    { nome: 'Maringá', populacao: 403063 },
    { nome: 'Curitiba', populacao: 1963726 },
    { nome: 'Florianópolis', populacao: 508826 },
    { nome: 'Pato Branco', populacao: 84779 },
  ];
  
  const checkHabi = () => {
    console.log(cidades.filter((pop) => pop.populacao >= 200000));
  };

  checkHabi();

  const ordemHabi = () => {
      console.log(cidades.sort(function(a, b){return a.populacao - b.populacao}));
  }

  ordemHabi();