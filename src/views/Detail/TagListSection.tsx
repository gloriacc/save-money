import {MonthYearSection} from './MonthYearSection';
import React, {ReactNode, useState} from 'react';
import {Link} from 'react-router-dom';
import Icon from '../../components/Icon';
import styled from 'styled-components';
import day from 'dayjs';
import {BillRecord, useBillRecords} from '../../hooks/useBillRecords';
import {useTags} from '../../hooks/useTags';

const TagListWrapper = styled.div`
  flex-grow: 1;
  overflow: auto;
  flex-shrink: 1;
`;

const Header = styled.header`
  font-size: 14px;
  line-height: 18px;
  padding: 10px 16px;
  > div {
    display: inline-block;
    border-bottom: 1px solid #A6E0C8;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: #FFF;
  line-height: 20px;
  padding: 10px 16px;
  > .remark {
    margin: 0 auto 0 16px;
    color: #999;
    font-size: 14px;
  }
  .icon {
    margin-left: 8px;
    width: 18px;
    height: 18px;
    &.edit {
      fill: #97C4DB;
    }
    &.delete {
      fill: #E88294;
    }       
  }
`;

type Props = {
  category: '-' | '+'
  date: Date | Date[]
};

const TagListSection:React.FC<Props> = (props) => {
  const {billRecords, deleteBillRecord} = useBillRecords();
  const {getTagName} = useTags();
  const hash: {[k: string]: BillRecord[]} = {};
  const billRecordsBySelected = billRecords.filter(br => br.category === props.category
    && day(br.createdDate).month() === day(props.date instanceof Array ? props.date[0] : props.date).month());
  billRecordsBySelected.forEach(br => {
    const key = day (br.createdDate).format('YYYY.MM.DD');
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
    <TagListWrapper>

      {sortedBillRecords.map(([date, brs]) => <div key={date}>
        <Header>
          <div>{date}</div>
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
              <Link to={'/bills/' + br.id}>
                <Icon className="edit" name="edit"/>
              </Link>
              <Icon className="delete" name="delete" onClick={() => deleteBillRecord(br.id)}/>
            </Item>
          })}
        </div>
      </div>)}
    </TagListWrapper>
  )
};
export {TagListSection};