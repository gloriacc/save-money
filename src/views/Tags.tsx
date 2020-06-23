import Layout from '../components/Layout';
import React, {useState} from 'react';
import {useTags} from '../hooks/useTags';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Button} from '../components/Button';
import {CategorySection} from './Bills/CategorySection';
import {Header} from '../components/Header';

const TagList = styled.ul`
  background: #FFF;
  font-size: 16px;
  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    //margin-left: 16px;
    > a {
      padding: 12px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
// const Center = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 32px 0;
// `;

const Tags = () => {
  const {tags, addTag} = useTags();
  const [category, setCategory] = useState<'-'|'+'>('-');
  const tagsByCategory = tags.filter(t => t.category === category);
  return (
    <div>
      <Header>管理标签</Header>
      <CategorySection value={category}
                       onChange={value => setCategory(value)}/>
      <TagList>
        <li onClick={()=>addTag(category)}>
          <a>新建标签</a>
        </li>
        {tagsByCategory.map((tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>{tag.name}</Link>
          </li>
        ))}
      </TagList>
      {/*<Center>*/}
      {/*  <Button onClick={addTag}>新建标签</Button>*/}
      {/*</Center>*/}
    </div>
  );
}

export default Tags;