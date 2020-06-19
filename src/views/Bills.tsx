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
      <NumbersSection>
        <div className="output">
          100
        </div>
        <div className="keyboard">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">完成</button>
          <button className="zero">0</button>
          <button>.</button>
        </div>
      </NumbersSection>
    </BillsLayout>
  );
}
export default Bills;