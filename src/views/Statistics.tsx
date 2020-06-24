import Layout from '../components/Layout';
import React, {ReactNode, useState} from 'react';
import {CategorySection} from './Bills/CategorySection';
import styled from 'styled-components';
import {BillRecord, useBillRecords} from '../hooks/useBillRecords';
import day from 'dayjs';
import {useTags} from '../hooks/useTags';

const PanelWrapper = styled.div`
  background: #FFF;
  margin: 12px 16px;
  border-radius: 18px;
  border: 2px solid #19241C;
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  > .title {
    padding-bottom: 12px;
    border-bottom: 2px solid #19241C;
  }
  > .surplus {
    font-size: 24px;
    color: #E88294;
    line-height: 48px;
  }
`;

const Statistics = () => {
  const [category, setCategory] = useState<'-'|'+'>('-');
  const {billRecords} = useBillRecords();
  const {getTagName} = useTags();
  const hash: {[k: string]: BillRecord[]} = {};
  const billRecordsByCategory = billRecords.filter(br => br.category === category);
  billRecordsByCategory.forEach(br => {
    const key = day (br.createdDate).format('YYYY-MM-DD');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(br);
  })
  const sortedBillRecords = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0
  });
  return (
    <Layout>
      <CategorySection value={category} onChange={value => setCategory(value)}/>
      <PanelWrapper>
        <div className="title">结余</div>
        <div className="surplus">￥980</div>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </PanelWrapper>
      <PanelWrapper>
        <div className="title">趋势</div>
        <ul>
          <li>单日最高支出</li>
          <li>平均每日支出</li>
          <li>累计支出笔数</li>
        </ul>
      </PanelWrapper>
      <PanelWrapper>
        <div className="title">占比</div>
      </PanelWrapper>
    </Layout>
  );
}
export {Statistics};