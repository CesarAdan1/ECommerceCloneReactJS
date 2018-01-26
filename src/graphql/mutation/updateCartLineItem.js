import { gql } from 'react-apollo';

export const updateCartLineItem = gql`
  mutation updateCartListItemQuantity($cartId: String!, $productId: Int!, $quantity: Int!) {
    updateCartLineItem(cartId: $cartId, productId: $productId, quantity: $quantity) {
      cartId
      lineItems {
        quantity
        productId
      }
    }
  }
`;
