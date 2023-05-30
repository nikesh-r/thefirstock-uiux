import Card from "./Card";
import styles from "../assets/styles/StocksListView.module.scss";
import variables from "../assets/styles/variables.module.scss";
import MiniChart from "./MiniChart";
import { IStocksItem } from "../utils/interfaces";

type StocksListViewProps = {
  data?: IStocksItem[];
  activeStock: IStocksItem | undefined;
  handleStockListItemClick: Function;
};
const StocksListView = ({
  data,
  activeStock,
  handleStockListItemClick,
}: StocksListViewProps) => {
  return (
    <Card>
      <div className={styles.stocksList}>
        {data?.map((item: any) => (
          <StocksListItem
            key={item.symbol}
            item={item}
            activeStock={activeStock}
            handleStockListItemClick={handleStockListItemClick}
          />
        ))}
      </div>
    </Card>
  );
};

export default StocksListView;

type StocksListItemProps = {
  item: IStocksItem;
  activeStock: IStocksItem | undefined;
  handleStockListItemClick: Function;
};

const StocksListItem = ({
  item,
  activeStock,
  handleStockListItemClick,
}: StocksListItemProps) => {
  const newPrice = item.pricePoints[item.pricePoints.length - 1]["amount"];
  const oldPrice = item.pricePoints[0]["amount"];

  const activePrice = newPrice.toFixed(2);
  const priceChange = Number((newPrice - oldPrice).toFixed(2));

  const isPercentChangePositive = priceChange >= 0;

  let percentChange = Math.abs((priceChange / oldPrice) * 100).toFixed(2);

  percentChange = isPercentChangePositive
    ? `+${Number(percentChange).toFixed(2)}%`
    : `-${Number(percentChange).toFixed(2)}%`;

  const themeColor = isPercentChangePositive
    ? variables.success
    : variables.danger;

  return (
    <div
      className={`${styles.stocksListItem} ${
        activeStock?.symbol === item.symbol && styles.stockItemActive
      }`}
      onClick={() => handleStockListItemClick(item.symbol)}
    >
      <div className={styles.stockMiniChart}>
        <MiniChart
          id={item.symbol}
          data={item.pricePoints}
          themeColor={themeColor}
        />
      </div>
      <div className={styles.stockDetails}>
        <p className={styles.stockHeading}>{item.symbol}</p>
        <div className={styles.stockPriceDetails}>
          <div
            className={styles.stockPriceChange}
            style={{
              color: "#fff",
              background: themeColor,
            }}
          >
            <span>{percentChange}</span>
            <span> {priceChange}</span>
          </div>
          <p
            className={styles.stockActivePrice}
            style={{
              color: themeColor,
            }}
          >
            {activePrice}
          </p>
        </div>
      </div>
    </div>
  );
};
