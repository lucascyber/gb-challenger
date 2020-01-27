export interface UserProducts {
  _id: string,
  product: {
    _id: string,
    codigoProduto: number
    produtoNome: string
    produtoValor: number
    image: string
    produtoCashback: number,
    valorCashback: number,
  },
  user: string,
  produtoStatus: string,
}