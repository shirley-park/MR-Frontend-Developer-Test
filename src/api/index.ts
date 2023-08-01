import request from 'superagent'
import { product } from '../models/product'

export function getProducts(): Promise<product> {
  return request
    .get(
      'https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product'
    )
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.log('Err message:' + err)
    })
}
