import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';
import {createId} from '../lib/createId';

export type BillRecord = {
  id: number,
  tagIds: number[],
  remark: string,
  category: '-' | '+',
  amount: number,
  createdDate: string
}

type newBillRecord = Omit<BillRecord, 'id'>;

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
    const thisBillRecord = {...billRecord, id: createId('billId')};
    setBillRecords([...billRecords, thisBillRecord]);
    return true;
  };
  useUpdate(() => {
    window.localStorage.setItem('billRecords', JSON.stringify(billRecords));
  }, billRecords);
  const findBillRecord = (id: number) => {
    return billRecords.filter(billRecord => billRecord.id === id)[0];
  };
  const deleteBillRecord = (id: number) => {
    setBillRecords(billRecords.filter(billRecord => billRecord.id !== id));
  };
  const updateBillRecord = (id:number, billRecord:newBillRecord) => {
    setBillRecords(billRecords.map(br => br.id === id ? {...billRecord, id} : br));
    return true;
  };
  return {billRecords, addBillRecord, findBillRecord, deleteBillRecord, updateBillRecord};
};
export {useBillRecords};