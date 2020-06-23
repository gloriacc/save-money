import React, {useState} from 'react';
import {useTags} from '../hooks/useTags';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {CategorySection} from './Bills/CategorySection';
import {Header} from '../components/Header';
import Icon from '../components/Icon';
import {TagsLayout} from '../components/TagsLayout';

const TagList = styled.ul`
  background: #FFF;
  font-size: 16px;
  > li {
    line-height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    .icon {
      width: 18px;
      height: 18px;
    }
    > .otherButtons {
      .icon {
        margin-left: 8px;
        &.edit {
          fill: #97C4DB;
        }
        &.delete {
          fill: #E88294;
        }       
      }
    }
    .addButton {
      display: flex;
      justify-content: center;
      align-items: center;
    }  
  }
`;

const Tags = () => {
  const {tags, deleteTag} = useTags();
  const [category, setCategory] = useState<'-'|'+'>('-');
  const tagsByCategory = tags.filter(t => t.category === category);
  return (
    <TagsLayout link="/tags/add"
                iconName="add"
                buttonName="新建">
      <Header>管理标签</Header>
      <CategorySection value={category}
                       type="mini"
                       onChange={value => setCategory(value)}/>
      <TagList>
        {tagsByCategory.map((tag =>
            <li key={tag.id}>
              {tag.name}
              <div className="otherButtons">
                <Link to={'/tags/' + tag.id}>
                  <Icon className="edit" name="edit"/>
                </Link>
                <Icon className="delete" name="delete" onClick={() => deleteTag(tag.id)}/>
              </div>
            </li>
        ))}
      </TagList>
    </TagsLayout>
  );
}

export default Tags;