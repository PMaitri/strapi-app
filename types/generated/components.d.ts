import type { Attribute, Schema } from '@strapi/strapi';

export interface OrderedItemOrderedItem extends Schema.Component {
  collectionName: 'components_ordered_item_ordered_item_s';
  info: {
    description: '';
    displayName: 'OrderedItem ';
    icon: 'shoppingCart';
  };
  attributes: {
    amount: Attribute.BigInteger;
    product: Attribute.Relation<
      'ordered-item.ordered-item',
      'oneToOne',
      'api::product.product'
    >;
    quantity: Attribute.BigInteger;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ordered-item.ordered-item': OrderedItemOrderedItem;
    }
  }
}
