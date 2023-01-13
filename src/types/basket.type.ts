interface IBasket {
  id: string;
  items: IBasketItem[];
}

interface IBasketItem {
  id: number;
  productName: string;
  price: number;
  quantity: number;
  pictureUrl: string;
  brand: string;
  type: string;
}