import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Bills/TagsSelection';
import {RemarkSection} from './Bills/RemarkSection';
import {CategorySection} from './Bills/CategorySection';
import {NumbersSection} from './Bills/NumbersSection';


const BillsLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+';

const Bills = () => {
  const [value, setValue] = useState({
    tagIds: [] as number[],
    remark: '',
    category: '-' as Category,
    amount: 0
  });
  const onChange = (obj: Partial<typeof value>) => {
    setValue({...value,...obj});
  };
  return (
    <BillsLayout>
      <TagsSection value={value.tagIds}
                   onChange={(tagIds)=>onChange({tagIds})}/>
      <RemarkSection value={value.remark}
                     onChange={(remark)=>onChange({remark})}/>
      <CategorySection value={value.category}
                       onChange={(category)=>onChange({category})}/>
      <NumbersSection value={value.amount}
                      onChange={(amount)=>onChange({amount})}
                      onOk={()=>{}}/>
    </BillsLayout>
  );
}
export default Bills;