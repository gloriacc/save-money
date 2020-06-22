import React from 'react';
import {useTags} from '../hooks/useTags';
import {useParams, useHistory} from 'react-router-dom';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import styled from 'styled-components';
import {Button} from '../components/Button';
import {Input} from '../components/Input';

const Header = styled.header`
  font-size: 16px;
  line-height: 48px;
  background: #FFF;
  text-align: center;
  > div {
    position: absolute;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 22px;
  }
`;

const InputWrapper = styled.div`
  background: #FFF;
  margin-top: 8px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
`;

type Params = {
  id: string
}
const Tag: React.FC = () => {
  const {findTag, updateTag, deleteTag} = useTags();
  const {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  const history = useHistory();
  const onClickBack = () => {
    history.goBack();
  };
  return (
    <Layout>
      <Header>
        <div>
          <Icon name="left" onClick={onClickBack}/>
        </div>
        <span>编辑标签</span>
      </Header>
      {tag ?
        <div>
          <InputWrapper>
            <Input label="标签名" type="text" placeholder="在这里添加标签名" value={tag.name}
                   onChange={(e)=> {updateTag(tag.id, {name: e.target.value});}}/>
          </InputWrapper>
          <ButtonWrapper>
            <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
          </ButtonWrapper>
        </div>
        :
        <div>tag 不存在</div>}
    </Layout>
  );
}
export {Tag};