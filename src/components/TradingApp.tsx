import { useState, useEffect } from "react";
import styles from "../assets/styles/TradingApp.module.scss";

import { WATCHLIST } from "../utils/constants";

import WatchListNav from "./WatchListNav";
import StocksListView from "./StocksListView";
import DetailedView from "./DetailedView";
import { IStocksItem, IWatchListItem } from "../utils/interfaces";
import MobileNav from "./MobileNav";

const TradingApp = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const [activeWatchList, setActiveWatchList] = useState<
    IWatchListItem | undefined
  >(WATCHLIST[0]);
  const [activeStockList, setActiveStockList] = useState<
    IStocksItem[] | undefined
  >(WATCHLIST[0].stocks);
  const [activeStock, setActiveStock] = useState<IStocksItem | undefined>(
    WATCHLIST[0].stocks[0]
  );

  const handleWatchListItemClick = (id: number) => {
    const activeWatchListCopy: IWatchListItem | undefined = WATCHLIST.find(
      (item) => item.id === id
    );
    setActiveWatchList(activeWatchListCopy);
    setActiveStockList(activeWatchListCopy?.stocks);
    setActiveStock(activeWatchListCopy?.stocks[0]);
  };

  const handleStockListItemClick = (syb: string) => {
    const activeStockCopy = activeStockList?.find(
      (item) => item.symbol === syb
    );
    setActiveStock(activeStockCopy);
  };

  return (
    <div className={styles.wrapper}>
      <WatchListNav
        isMobile={isMobile}
        data={WATCHLIST}
        activeWatchList={activeWatchList}
        handleWatchListItemClick={handleWatchListItemClick}
      />
      <StocksListView
        data={activeStockList}
        activeStock={activeStock}
        handleStockListItemClick={handleStockListItemClick}
      />
      <DetailedView data={activeStock} />

      {isMobile && <MobileNav />}
    </div>
  );
};

export default TradingApp;
