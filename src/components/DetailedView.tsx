import Card from "./Card";
import { IStocksItem } from "../utils/interfaces";

import styles from "../assets/styles/DetailedView.module.scss";
import variables from "../assets/styles/variables.module.scss";

import { ResponsiveContainer, ComposedChart, Area, Bar } from "recharts";
import { formattedAmount, getRandomNumMinMax } from "../utils/common";
import { Button } from "@mui/material";

type DetailedViewProps = {
  data?: IStocksItem;
};
const DetailedView = ({ data }: DetailedViewProps) => {
  const chartData = data?.pricePoints?.map((item) => {
    const randomIncDecPercent = getRandomNumMinMax(-50, 50);
    return {
      ...item,
      secondAmount: item.amount + item.amount * (randomIncDecPercent / 100),
    };
  });
  return (
    <Card>
      <div className={styles.wrapper}>
        <div className={styles.headline}>
          <p className={styles.heading}>{data?.stockName}</p>
          <p className={styles.description}>
            {data?.symbol} | {data?.market}
          </p>
        </div>

        <div className={styles.mainChart}>
          <Card wrapperClassName="padding-none">
            <ResponsiveContainer>
              <ComposedChart
                data={chartData}
                margin={{
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
              >
                <Area
                  type="monotone"
                  dataKey="amount"
                  fillOpacity={0.3}
                  fill={variables.primary}
                  stroke={variables.primary}
                />
                <Bar
                  dataKey="secondAmount"
                  barSize={40}
                  stroke={variables.primary}
                  fill={variables.primary}
                  fillOpacity={1}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </Card>
        </div>
        <div className={styles.otherCharts}>
          {/* left col */}
          <div className={styles.otherChartsColumn}>
            <div className="">
              <Card wrapperClassName="padding-none">
                <div className={styles.book}>
                  <div className={styles.bookHeader}>
                    <div className="">
                      <p className={styles.bookHeaderSubText}>Qty | Order</p>
                      <p
                        className={styles.bookHeaderHeading}
                        style={{ color: variables.secondary }}
                      >
                        BUY
                      </p>
                    </div>
                    <div className="">
                      <p
                        className={styles.bookHeaderHeading}
                        style={{ color: variables.primary }}
                      >
                        SELL
                      </p>
                      <p className={styles.bookHeaderSubText}>Qty | Order</p>
                    </div>
                  </div>

                  {Array(5)
                    .fill(1)
                    .map((item, i) => {
                      const {
                        price: buyPrice,
                        qty: buyQty,
                        totalOrders: buyTotalOrders,
                        volumeFilled: buyVolumeFilled,
                      } = data?.orderBook?.buy?.orders[i] || {};

                      const {
                        price: sellPrice,
                        qty: sellQty,
                        totalOrders: sellTotalOrders,
                        volumeFilled: sellVolumeFilled,
                      } = data?.orderBook?.sell?.orders[i] || {};
                      return (
                        <div className={styles.bookRow}>
                          <div
                            className=""
                            style={{ background: variables.secondaryBG }}
                          >
                            <p className={styles.bookRowQtyOrder}>
                              {formattedAmount(buyQty, false)}
                              {" | "}
                              {formattedAmount(buyTotalOrders, false)}
                            </p>
                            <p className={styles.bookRowPrice}>
                              {formattedAmount(buyPrice)}
                            </p>
                            <div
                              className={styles.bookRowVolumeContainerBuy}
                              style={{
                                transform: `scaleX(${
                                  (buyVolumeFilled || 0) / 100
                                })`,
                              }}
                            />
                          </div>
                          <div
                            className=""
                            style={{ background: variables.primaryBG }}
                          >
                            <p className={styles.bookRowPrice}>
                              {formattedAmount(sellPrice)}
                            </p>
                            <p className={styles.bookRowQtyOrder}>
                              {formattedAmount(sellQty, false)}
                              {" | "}
                              {formattedAmount(sellTotalOrders, false)}
                            </p>
                            <div
                              className={styles.bookRowVolumeContainerSell}
                              style={{
                                transform: `scaleX(${
                                  (sellVolumeFilled || 0) / 100
                                })`,
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}

                  <div className={styles.bookFooter}>
                    <div className="">
                      <p className={styles.bookFooterItemAmount}>
                        {formattedAmount(data?.orderBook?.buy?.totalQty, false)}
                      </p>
                      <p className={styles.bookFooterItemLabel}>Total Qty</p>
                    </div>
                    <div className="">
                      <p className={styles.bookFooterItemAmount}>
                        {formattedAmount(
                          data?.orderBook?.sell?.totalQty,
                          false
                        )}
                      </p>
                      <p className={styles.bookFooterItemLabel}>Total Qty</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className={styles.miniCard}>
              <Card wrapperClassName="padding-sm">
                <div className={styles.miniCardWrapper}>
                  <p>Price Indicators</p>
                  <div className={styles.miniCardContainer}>
                    <div className={styles.indicatorRow}>
                      <div className={styles.indicatorItem}>
                        <p className={styles.indicatorItemAmount}>
                          {formattedAmount(data?.priceIndicators?.open)}
                        </p>
                        <p className={styles.indicatorItemLabel}>OPEN</p>
                      </div>
                      <div className={styles.indicatorItem}>
                        <p className={styles.indicatorItemAmount}>
                          {formattedAmount(data?.priceIndicators?.high)}
                        </p>
                        <p className={styles.indicatorItemLabel}>HIGH</p>
                      </div>
                      <div className={styles.indicatorItem}>
                        <p className={styles.indicatorItemAmount}>
                          {formattedAmount(data?.priceIndicators?.low)}
                        </p>
                        <p className={styles.indicatorItemLabel}>LOW</p>
                      </div>
                      <div className={styles.indicatorItem}>
                        <p className={styles.indicatorItemAmount}>
                          {formattedAmount(data?.priceIndicators?.close)}
                        </p>
                        <p className={styles.indicatorItemLabel}>CLOSE</p>
                      </div>
                    </div>
                    <div className={styles.indicatorRow}>
                      <div className={styles.indicatorItem}>
                        <p className={styles.indicatorItemLabel}>
                          Average Trade Price
                        </p>
                        <p className={styles.indicatorItemAmount}>
                          {formattedAmount(
                            data?.priceIndicators?.avgTradePrice
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* right col */}
          <div className={styles.otherChartsColumn}>
            <div className={styles.miniCard}>
              <Card wrapperClassName="padding-sm">
                <div className={styles.miniCardWrapper}>
                  <p>Volume</p>
                  <div className={styles.miniCardContainer}>
                    <p className={styles.volumeTotal}>
                      {formattedAmount(data?.volume?.total, false)}
                    </p>
                    <div className={styles.volumePrices}>
                      <p className={styles.volumeLabel}>Last Traded Qty</p>
                      <p className={styles.volumeAmount}>
                        {formattedAmount(data?.volume?.lastTradeQty)}
                      </p>
                    </div>
                    <div className={styles.volumePrices}>
                      <p className={styles.volumeLabel}>Lower Circuit</p>
                      <p className={styles.volumeAmount}>
                        {formattedAmount(data?.volume?.lc)}
                      </p>
                    </div>
                    <div className={styles.volumePrices}>
                      <p className={styles.volumeLabel}>Upper Circuit</p>
                      <p className={styles.volumeAmount}>
                        {formattedAmount(data?.volume?.uc)}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className={styles.more}>
              <Card wrapperClassName="padding-sm">
                <div className="">
                  <p>Looks like a good time to trade!</p>
                  <a href="/">Options</a>
                  <Button variant="contained" className="mui-button">
                    Trade
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DetailedView;
