import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import styled from 'styled-components';
import {Button} from '../components/Button';

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
        <div>
          <label>标签名</label>
          <input
            type="text"
            placeholder="在这里添加标签名"
          />
        </div>
        <div>
          <Button>删除标签</Button>
        </div>

      </div>
    </Layout>
  );
}
export {Tag};