import Layout from '../components/Layout';
import React, {useEffect, useState} from 'react';
import {CategorySection} from './Bills/CategorySection';
import styled from 'styled-components';
import {BillRecord, useBillRecords} from '../hooks/useBillRecords';
import day from 'dayjs';
import {MonthYearSection} from './Detail/MonthYearSection';
// import {useTags} from '../hooks/useTags';

const PanelWrapper = styled.div`
  background: #FFF;
  margin: 12px 16px;
  border-radius: 18px;
  border: 2px solid #19241C;
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  &.surplus {
    > .total {
      font-size: 24px;
      color: #E88294;
      line-height: 48px;
    }
    > ul {
      > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 24px;
        font-size: 12px;
        > div:first-child {
          color: #999;
        }
      }
    }
  }
  &.trend {
    > ul {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
      > li {
        > ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
      li {
        line-height: 24px;
        font-size: 12px;
        > div:first-child {
          color: #999;
        }
        span {
          color: #E88294;
        }
      }
    }
  }
  > .title {
    padding-bottom: 12px;
    border-bottom: 2px solid #19241C;
  }
`;

const StatisticsSection = styled.section`
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
`;

const Statistics = () => {
  const map = {'-': '支出', '+': '收入'};
  const [list] = useState<('+'|'-')[]>(['-', '+']);
  const [category, setCategory] = useState<'-'|'+'>('-');
  const [curDate, setCurDate] = useState<Date|Date[]>(new Date());
  const {billRecords} = useBillRecords();
  // const {getTagName} = useTags();
  const hash: {[k: string]: BillRecord[]} = {};
  const billRecordsBySelected = billRecords.filter(br => day(br.createdDate).month() === day(curDate instanceof Array ? curDate[0] : curDate).month());
  for (let i =0;i<list.length;i++) {
    const key = list[i];
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key] = billRecordsBySelected.filter(billRecord => billRecord.category === list[i]);
  }
  const billRecordsByCategory = Object.entries(hash);
  const total = billRecordsBySelected.reduce((prev, curr) => {
    prev = prev + parseFloat(curr.category + curr.amount)
    return prev
  }, 0);

  const highestBillRecord = hash[category].sort((a, b) => {
    return a.amount - b.amount;
  })[hash[category].length - 1];
  return (
    <Layout>
      <CategorySection value={category} onChange={value => setCategory(value)}/>
      <MonthYearSection value={curDate} onChange={value => setCurDate(value)}/>
      <StatisticsSection>
        <PanelWrapper className="surplus">
          <div className="title">本月结余</div>
          <div className="total">{total >= 0 ? '￥' + total : '-￥' + Math.abs(total)}</div>
          <ul>
            {billRecordsByCategory.map((billRecords, index) =>
              <li key={index}>
                <div>本月{map[list[index]]}</div>
                <div>
                  {billRecords[0]}￥{billRecords[1].reduce((prev,curr) => prev + curr.amount, 0)}
                </div>
              </li>
            )}
          </ul>
        </PanelWrapper>
        {hash[category].length > 0 ? <PanelWrapper className="trend">
          <div className="title">{map[category]}趋势</div>
          <ul>
            <li>
              <div>本月内单日最高{map[category]}</div>
              <div>
                在<span>{day(highestBillRecord.createdDate).format('MM.DD')}</span>这一天，你{map[category]}了<span>￥{highestBillRecord.amount}</span></div>
            </li>
            <li>
              <ul>
                <li>
                  <div>本月内平均每日{map[category]}</div>
                  <div>￥{(hash[category].reduce((prev, curr) => prev + curr.amount, 0)/day(highestBillRecord.createdDate).daysInMonth()).toFixed(2)}</div>
                </li>
                <li>
                  <div>本月内累计{map[category]}笔数</div>
                  <div>{hash[category].length}笔</div>
                </li>
              </ul>
            </li>
          </ul>
        </PanelWrapper> : ''}
      </StatisticsSection>
    </Layout>
  );
}
export {Statistics};