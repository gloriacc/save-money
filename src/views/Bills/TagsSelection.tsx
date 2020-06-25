import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {useTags} from '../../hooks/useTags';
import {NavLink} from 'react-router-dom';

const Wrapper = styled.section`
  background-color: #FFF;
  padding: 22px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  //justify-content: flex-end;
  align-items: flex-start;
  //height: ${props => props.theme.height};
  overflow: auto;
  flex-shrink: 1;
  > ul {
    color: #484848;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    > li {
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      margin-bottom: 10px;
      > button {
        background-color: #FFF;
        font-size: 12px;
        width: 60px;
        height: 60px;
        border: 1px solid #19241C;
        color: #19241C;
        border-radius: 50%;
        &.selected {
          border: 2px solid #A6E0C8;
        }
      }
    }
  }
  > button {
    background: none;
    border: none;
    outline: none;
    border-bottom: 1px solid #666;
    color: #999;
    line-height: 22px;
    margin-top: 9px;
    padding: 0 4px;
  }
`;
// Wrapper.defaultProps = {
//   theme: {
//     height: 'auto'
//   }
// }

type Props = {
  value: number[],
  category: '-' | '+',
  onChange: (value:number[])=>void
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags} = useTags();
  const tagsByCategory = tags.filter(t => t.category === props.category);
  const selectedTagIds = props.value;
  // const [height, setHeight] = useState<string>('auto');
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  }
  // useEffect(()=>{
  //   console.log(window.innerHeight);
  //   console.log(document.body.clientHeight);
  //   console.log(document.documentElement.clientHeight);
  //   setHeight(document.body.clientHeight - window.innerHeight > 0 ? (window.innerHeight - 48 - 60 - 289 - 54) + 'px' : 'auto')
  // },[])

  return (
    <Wrapper>
      <ul>
        <li>
          <button><NavLink to="/tags">
            管理标签
          </NavLink></button>
        </li>
        {tagsByCategory.map(tag =>
          <li key={tag.id}>
            <button onClick={()=>{onToggleTag(tag.id)}}
                    className={selectedTagIds.indexOf(tag.id) >= 0 ? 'selected' : ''}
            >{tag.name}</button>
          </li>
        )}
      </ul>
    </Wrapper>
  )
}
export {TagsSection};