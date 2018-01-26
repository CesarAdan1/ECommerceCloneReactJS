import { gql } from 'react-apollo';

export const getProduct = gql`
  query getProduct($id: Int!) {
    Product(id: $id) {
      id
      name
      description
      categories {
        name
      }
      image
      priceInCents
      createdAt
    }
  }
`
