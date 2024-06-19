import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksContacts extends Schema.Component {
  collectionName: 'components_blocks_contacts';
  info: {
    displayName: 'Contacts';
    icon: 'information';
  };
  attributes: {};
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
    title: Attribute.String;
    icon: Attribute.Media<'images', true>;
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
    }
  }
}
