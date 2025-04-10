import type { Schema, Struct } from '@strapi/strapi';

export interface ContentBlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_heroes';
  info: {
    description: '';
    displayName: 'hero';
    icon: 'archive';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface ContentBlocksRiver extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_rivers';
  info: {
    description: '';
    displayName: 'river';
    icon: 'chartBubble';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    imageLeft: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    text: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface ContentBlocksText extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_texts';
  info: {
    displayName: 'text';
    icon: 'layer';
  };
  attributes: {
    text: Schema.Attribute.RichText;
  };
}

export interface MenusMenu extends Struct.ComponentSchema {
  collectionName: 'components_menus_menus';
  info: {
    displayName: 'Menu';
    icon: 'bulletList';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SeoOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_seo_open_graph';
  info: {
    displayName: 'Open Graph';
  };
  attributes: {
    ogDescription: Schema.Attribute.Text;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
    icon: 'apps';
  };
  attributes: {
    ogImage: Schema.Attribute.Media<'images'>;
    pageDescription: Schema.Attribute.Text;
    pageTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content-blocks.hero': ContentBlocksHero;
      'content-blocks.river': ContentBlocksRiver;
      'content-blocks.text': ContentBlocksText;
      'menus.menu': MenusMenu;
      'seo.open-graph': SeoOpenGraph;
      'seo.seo': SeoSeo;
    }
  }
}
