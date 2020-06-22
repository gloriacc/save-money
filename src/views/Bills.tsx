import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Bills/TagsSelection';
import {RemarkSection} from './Bills/RemarkSection';
import {CategorySection} from './Bills/CategorySection';
import {NumbersSection} from './Bills/NumbersSection';
import {useBillRecords} from '../hooks/useBillRecords';


const BillsLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+';

const defaultBillRecord = {
  tagIds: [] as number[],
  remark: '',
  category: '-' as Category,
  amount: 0
}

const Bills = () => {
  const [value, setValue] = useState(defaultBillRecord);
  const {addBillRecord} = useBillRecords();
  const onChange = (obj: Partial<typeof value>) => {
    setValue({...value,...obj});
  };
  const submit = () => {
    if (addBillRecord(value)) {
      alert('保存成功');
      setValue(defaultBillRecord);
    }
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
                      onOk={()=>{submit()}}/>
    </BillsLayout>
  );
}
export default Bills;