import React from 'react';
import styled from 'styled-components';
import {useTags} from '../../useTags';
import {createId} from '../../lib/createId';

const Wrapper = styled.section`
  background-color: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ul {
    color: #484848;
    margin: 0 -12px;
    > li {
      display: inline-block;
      background: #D9D9D9;
      border-radius: 18px;
      line-height: 24px;
      font-size: 14px;
      padding: 0 18px;
      margin: 8px 12px;
      &.selected {
        background: red;
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

type Props = {
  value: number[],
  onChange: (value:number[])=>void
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags, addTag} = useTags();
  const selectedTagIds = props.value;

  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  }
  return (
    <Wrapper>
      <ul>
        {tags.map(tag =>
          <li key={tag.id}
              onClick={()=>{onToggleTag(tag.id)}}
              className={selectedTagIds.indexOf(tag.id) >= 0 ? 'selected' : ''}
          >{tag.name}</li>
        )}
      </ul>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  )
}
export {TagsSection};