import { gql } from "@apollo/client";

export const GET_CUSTOMERS = gql`
  query MyQuery   {
    getCustomers {
      value {
        email
        name
      }
      name
    }
  }
`;

export const GET_ORDERS = gql`
  query MyQuery   {
    getOrders {
      value {
        Address
        carrier
        City
        createdAt
        Lat
        Lng
        shippingCost
        trackingId
        trackingItems {
          items {
            item_id
            name
            price
            quantity
          }
          customer {
            email
            name
          }
          customer_id
        }
      }
    }
  }
`;

