import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksContacts extends Schema.Component {
  collectionName: 'components_blocks_contacts';
  info: {
    displayName: 'Contacts';
    icon: 'information';
    description: '';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    LucideIcon: Attribute.String;
  };
}

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

export interface BlocksIntroduction extends Schema.Component {
  collectionName: 'components_blocks_introductions';
  info: {
    displayName: 'Introduction';
    icon: 'write';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    background: Attribute.Media<'images'>;
  };
}

export interface BlocksSimpleBlock extends Schema.Component {
  collectionName: 'components_blocks_simple_blocks';
  info: {
    displayName: 'simpleBlock';
    icon: 'command';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    image: Attribute.Media<'images'>;
  };
}

export interface BlocksSocials extends Schema.Component {
  collectionName: 'components_blocks_socials';
  info: {
    displayName: 'Socials';
    icon: 'earth';
    description: '';
  };
  attributes: {
    href: Attribute.String;
    icon: Attribute.Media<'images'>;
  };
}

export interface MerchComponentsColors extends Schema.Component {
  collectionName: 'components_merch_components_colors';
  info: {
    displayName: 'colors';
    icon: 'database';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    hex: Attribute.String;
  };
}

export interface MerchComponentsSizes extends Schema.Component {
  collectionName: 'components_merch_components_sizes';
  info: {
    displayName: 'Sizes';
    icon: 'scissors';
    description: '';
  };
  attributes: {
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.contacts': BlocksContacts;
      'blocks.details': BlocksDetails;
      'blocks.introduction': BlocksIntroduction;
      'blocks.simple-block': BlocksSimpleBlock;
      'blocks.socials': BlocksSocials;
      'merch-components.colors': MerchComponentsColors;
      'merch-components.sizes': MerchComponentsSizes;
    }
  }
}
