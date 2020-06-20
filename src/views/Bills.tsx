import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {TagsSection} from './Bills/TagsSelection';
import {RemarkSection} from './Bills/RemarkSection';
import {CategorySection} from './Bills/CategorySection';
import {NumbersSection} from './Bills/NumbersSection';


const BillsLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const Bills = () => {
  return (
    <BillsLayout>
      <TagsSection/>
      <RemarkSection/>
      <CategorySection/>
      <NumbersSection/>
    </BillsLayout>
  );
}
export default Bills;