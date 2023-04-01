import { ReactElement } from "react";

export interface ICesta {
  header: {
    title: ReactElement<string>;
  };
  details: {
    name: ReactElement<string>;
    logo: HTMLImageElement;
    farmName: ReactElement<string>;
    description: ReactElement<string>;
    price: ReactElement<string>;
    button: ReactElement<string>;
  };
  items: {
    title: ReactElement<string>;
    list: [
      {
        name: ReactElement<string>;
        image: HTMLImageElement;
      },
      {
        name: ReactElement<string>;
        image: HTMLImageElement;
      },
      {
        name: ReactElement<string>;
        image: HTMLImageElement;
      },
      {
        name: ReactElement<string>;
        image: HTMLImageElement;
      },
      {
        name: ReactElement<string>;
        image: HTMLImageElement;
      }
    ];
  };
}
