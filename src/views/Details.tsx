import Layout from '../components/Layout';
import React, {ReactNode, useState} from 'react';
import {CategorySection} from './Bills/CategorySection';
import styled from 'styled-components';
import {BillRecord, useBillRecords} from '../hooks/useBillRecords';
import day from 'dayjs';
import {useTags} from '../hooks/useTags';

const CategoryWrapper = styled.div`
  background: #FFF;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: #FFF;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .remark {
    margin: 0 auto 0 16px;
    color: #999;
    font-size: 14px;
  }
`;
const Header = styled.header`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;
const Details = () => {
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
      <CategoryWrapper>
        <CategorySection value={category} onChange={value => setCategory(value)}/>
      </CategoryWrapper>
      {sortedBillRecords.map(([date, brs]) => <div key={date}>
        <Header>
          {date}
        </Header>
        <div>
          {brs.map(br => {
            return <Item key={Math.random()}>
              {br.tagIds
                .map(tagId => <span key={tagId}>{getTagName(tagId)}</span>)
                .reduce((result, span, index, array) => result.concat(index < array.length - 1 ? [span, '，'] : [span]), [] as ReactNode[])
              }
              <div className="remark">{br.remark ? br.remark : ''}</div>
              <div>￥{br.amount}</div>
            </Item>
          })}
        </div>
      </div>)}
    </Layout>
  );
}
export {Details};