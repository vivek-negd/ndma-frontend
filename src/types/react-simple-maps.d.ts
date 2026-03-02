declare module "react-simple-maps" {
  import * as React from "react";

  export interface GeographyProps {
    geography: any;
    style?: React.CSSProperties | {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
  }

  export interface GeographiesChildrenArgs {
    geographies: any[];
  }

  export interface GeographiesProps {
    geography: string | object;
    children: (args: GeographiesChildrenArgs) => React.ReactNode;
  }

  export interface ComposableMapProps {
    projection?: string | ((width: number, height: number) => any);
    projectionConfig?: Record<string, unknown>;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export const ComposableMap: React.FC<ComposableMapProps>;
  export const Geographies: React.FC<GeographiesProps>;
  export const Geography: React.FC<GeographyProps>;
}

