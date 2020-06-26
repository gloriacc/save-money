import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Bills/CategorySection';
import {TagListSection} from './Detail/TagListSection';
import {MonthYearSection} from './Detail/MonthYearSection';

const Details = () => {
  const [category, setCategory] = useState<'-'|'+'>('-');
  const [curDate, setCurDate] = useState<Date|Date[]>(new Date());
  return (
    <Layout>
      <CategorySection value={category} onChange={value => setCategory(value)}/>
      <MonthYearSection value={curDate} onChange={value => setCurDate(value)}/>
      <TagListSection category={category} date={curDate}/>
    </Layout>
  );
}
export {Details};