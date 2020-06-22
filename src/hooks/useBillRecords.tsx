import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

export type BillRecord = {
  tagIds: number[],
  remark: string,
  category: '-' | '+',
  amount: number,
  createdDate: string
}

type newBillRecord = Omit<BillRecord, 'createdDate'>

const useBillRecords = () => {
  const [billRecords, setBillRecords] = useState<BillRecord[]>([])
  useEffect(() => {
    setBillRecords(JSON.parse(window.localStorage.getItem('billRecords') || '[]'));
  }, []);
  const addBillRecord = (billRecord: newBillRecord) => {
    if (billRecord.amount <= 0) {
      alert('请输入金额');
      return false;
    }
    if (billRecord.tagIds.length === 0) {
      alert('请选择标签');
      return false;
    }
    const thisBillRecord = {...billRecord, createdDate: (new Date()).toISOString()};
    setBillRecords([...billRecords, thisBillRecord]);
    return true;
  };
  useUpdate(() => {
    window.localStorage.setItem('billRecords', JSON.stringify(billRecords));
  }, billRecords);
  return {billRecords, addBillRecord};
};
export {useBillRecords};