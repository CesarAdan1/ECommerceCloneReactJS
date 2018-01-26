import { gql } from 'react-apollo';

export const initializeCart = gql`
  mutation initCart {
    initializeCart {
      uuid
    }
  }
`;
