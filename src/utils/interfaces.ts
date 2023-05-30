export interface IOrderBookBuySellOrderItem {
  qty: number;
  totalOrders: number;
  price: number;
  volumeFilled: number;
}

export interface IOrderBookBuySell {
  totalQty: number;
  orders: IOrderBookBuySellOrderItem[];
}

export interface IOrderBook {
  buy: IOrderBookBuySell;
  sell: IOrderBookBuySell;
}
export interface IPricePointsIndicators {
  open: number;
  close: number;
  high: number;
  low: number;
  avgTradePrice: number;
}

export interface IPricePointsVolume {
  total: number;
  lastTradeQty: number;
  lc: number;
  uc: number;
}

export interface IPricePointsItem {
  date: string;
  amount: number;
}

export interface IStocksItem {
  stockName: string;
  symbol: string;
  market: string;
  pricePoints: IPricePointsItem[];
  volume?: IPricePointsVolume;
  priceIndicators?: IPricePointsIndicators;
  orderBook?: IOrderBook;
}

export interface IWatchListItem {
  id: number;
  name: string;
  theme: string;
  stocks: IStocksItem[];
}
