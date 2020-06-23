import Layout from '../components/Layout';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Bills/TagsSelection';
import {RemarkSection} from './Bills/RemarkSection';
import {CategorySection} from './Bills/CategorySection';
import {NumbersSection} from './Bills/NumbersSection';
import {useBillRecords} from '../hooks/useBillRecords';
import {useParams} from 'react-router-dom';
import {useHistory} from 'react-router-dom';


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

type Params = {
  id: string
}

const Bills = () => {
  const {addBillRecord, findBillRecord, updateBillRecord} = useBillRecords();
  const {id} = useParams<Params>();
  const curBillRecord = findBillRecord(parseInt(id));
  const [value, setValue] = useState(defaultBillRecord);
  const history = useHistory();
  useEffect(() => {
    if (curBillRecord) {
      setValue(curBillRecord);
    }
  }, [curBillRecord]);
  const onChange = (obj: Partial<typeof value>) => {
    setValue({...value,...obj});
  };
  const submit = () => {
    if (addBillRecord(value)) {
      alert('保存成功');
      setValue(defaultBillRecord);
    }
  };
  const update = () => {
    if (updateBillRecord()) {
      alert('修改成功');
      history.goBack();
    }
  };
  return (
    <BillsLayout>
      <CategorySection value={value.category}
                       backEnabled={!!curBillRecord}
                       onChange={(category)=>onChange({category})}/>
      <TagsSection value={value.tagIds}
                   category={value.category}
                   onChange={(tagIds)=>onChange({tagIds})}/>
      <RemarkSection value={value.remark}
                     onChange={(remark)=>onChange({remark})}/>
      <NumbersSection value={value.amount}
                          onChange={(amount)=>onChange({amount})}
                          onOk={curBillRecord ? update : submit}/>
    </BillsLayout>
  );
}
export default Bills;