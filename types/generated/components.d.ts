import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksDetails extends Schema.Component {
  collectionName: 'components_blocks_details';
  info: {
    displayName: 'Details';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.details': BlocksDetails;
    }
  }
}
