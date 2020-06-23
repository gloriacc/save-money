import React, {useState} from 'react';
import {useTags} from '../hooks/useTags';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Header} from '../components/Header';
import {TagsLayout} from '../components/TagsLayout';
import {CategorySection} from './Bills/CategorySection';

const InputWrapper = styled.div`
  background: #FFF;
  margin: 12px 16px;
  border-radius: 18px;
  border: 2px solid #19241C;
  display: flex;
  flex-direction: column;
  > p {
    text-align: center;
    color: #BEBEBE;
    font-size: 14px;
    line-height: 44px;
  }
`;

const TagAdd: React.FC = () => {
  const {addTag} = useTags();
  const [name, setName] = useState('');
  const [category, setCategory] = useState<'-'|'+'>('-');
  return (
    <TagsLayout onClick={()=>addTag({name, category})} iconName="save" buttonName="保存">
      <Header>新建标签</Header>
      <CategorySection value={category}
                       type="mini"
                       onChange={value => setCategory(value)}/>
      <InputWrapper>
        <Input label="名称" type="text" placeholder="在这里添加标签名" value={name}
               onChange={(e)=> {setName(e.target.value);}}/>
        <p>不超过4个汉字</p>
      </InputWrapper>
    </TagsLayout>
  );
}
export {TagAdd};