export interface product {
  id: number
  title: string
  description: string
  price: number
  imageURL: string
  sizeOptions: [
    {
      id: number
      label: string
    }
  ]
}
