import styles from "../assets/styles/WatchListNav.module.scss";
import { IWatchListItem } from "../utils/interfaces";

import Card from "./Card";

type WatchListNavProps = {
  isMobile: Boolean;
  data: IWatchListItem[];
  activeWatchList: IWatchListItem | undefined;
  handleWatchListItemClick: Function;
};

function WatchListNav({
  isMobile,
  data,
  activeWatchList,
  handleWatchListItemClick,
}: WatchListNavProps) {
  return (
    <Card>
      <div className={styles.watchList}>
        {data.map((item) => (
          <WatchListItem
            item={item}
            activeWatchList={activeWatchList}
            handleWatchListItemClick={handleWatchListItemClick}
          />
        ))}
      </div>
    </Card>
  );
}

export default WatchListNav;

type WatchListItemProps = {
  item: IWatchListItem;
  activeWatchList: IWatchListItem | undefined;
  handleWatchListItemClick: Function;
};

const WatchListItem = ({
  item,
  activeWatchList,
  handleWatchListItemClick,
}: WatchListItemProps) => {
  return (
    <div
      className={`${styles.watchListItem} ${
        item.id === activeWatchList?.id && styles.watchListItemActive
      }`}
      onClick={() => handleWatchListItemClick(item.id)}
    >
      {item.name}
    </div>
  );
};
