import React from 'react';
import {useTags} from '../hooks/useTags';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Header} from '../components/Header';
import {TagsLayout} from '../components/TagsLayout';

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

type Params = {
  id: string
}
const Tag: React.FC = () => {
  const {findTag, updateTag} = useTags();
  const {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <TagsLayout>
      <Header>编辑标签</Header>
      {tag ?
        <div>
          <InputWrapper>
            <Input label="名称" type="text" placeholder="在这里添加标签名" value={tag.name}
                   onChange={(e)=> {updateTag(tag.id, {name: e.target.value});}}/>
            <p>不超过4个汉字</p>
          </InputWrapper>

        </div>
        :
        <div>tag 不存在</div>}
    </TagsLayout>
  );
}
export {Tag};