module.exports = {
  clientes: [
    {
      id: 1,
      nome: "Hérica",
      email: "herica@herica.com.br",
      cpf: "123.456.789-12",
      dataNasc: "26/07/1979",
      endereco: {
        rua: "Teste",
        bairro: "Planalto",
        cidade: "BH",
        estado: "MG",
        pais: "Brasil",
        cep: "31720-000",
        numero: 101,
      },
    },
    {
      id: 2,
      nome: "Paulo",
      email: "paulo@paulo.com.br",
      cpf: "123.456.789-12",
      dataNasc: "26/07/1979",
      endereco: {
        rua: "Teste 2",
        bairro: "Floramar",
        cidade: "BH",
        estado: "MG",
        pais: "Brasil",
        cep: "31720-000",
        numero: 202,
      },
    },
  ],
  produtos: [
    {
      id: 1,
      nome: "Notebook",
      urlImagem: "uploads/1",
      descricao: "Notebook HP 256 G8 Intel Core i3 8GB 256GB SSD - 15,6” LCD Windows 10",
      peso: "2kg",
      preco: 3014.1,
      quantidadeEstoque: 5,
    },
    {
      id: 2,
      nome: "Placa de vídeo",
      urlImagem: "uploads/2",
      descricao:
        "Placa de vídeo 1050TI DDR5 128BIT Versão para jogos de computador desktop no exterior",
      peso: "1kg",
      preco: 623.45,
      quantidadeEstoque: 10,
    },
  ],
  pedidos: [
    {
      id: 1,
      produto: "Notebook",
      dataPedido: String(new Date()),
      parcelas: 3,
      comprador: "Hérica",
      status: "PREPARANDO"
    },
    {
      id: 2,
      produto: "Notebook",
      dataPedido: String(new Date()),
      parcelas: 5,
      comprador: "Hérica",
      status: "PARTIUENTREGA"
    },
    {
      id: 3,
      produto: "Notebook",
      dataPedido: String(new Date()),
      parcelas: 4,
      comprador: "Hérica",
      status: "ENTREGUE"
    }
  ]
};
