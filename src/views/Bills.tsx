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
    tags: [] as string[],
    remark: '',
    category: '-' as Category,
    amount: 0
  });
  const onChange = (obj: Partial<typeof value>) => {
    setValue({...value,...obj});
  };
  return (
    <BillsLayout>
      {value.tags.join(',')}
      {value.remark}
      {value.category}
      {value.amount}
      <TagsSection value={value.tags}
                   onChange={(tags)=>onChange({tags})}/>
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