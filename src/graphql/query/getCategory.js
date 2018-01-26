import { gql } from 'react-apollo';

export const getCategory = gql`
  query getCategory($id: Int!) {
    Category(id: $id) {
      products {
        id
        image
        priceInCents
      }
      name
      description
    }
  }
`
