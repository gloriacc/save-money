import React, {ChangeEventHandler} from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';
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
  const {findTag} = useTags();
  const {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <div>
        <Header>
          <div>
            <Icon name="left"/>
          </div>
          <span>编辑标签</span>
        </Header>
        <InputWrapper>
          <Input label="标签名" type="text" placeholder="在这里添加标签名" defaultValue={tag.name}/>
        </InputWrapper>
        <ButtonWrapper>
          <Button>删除标签</Button>
        </ButtonWrapper>

      </div>
    </Layout>
  );
}
export {Tag};