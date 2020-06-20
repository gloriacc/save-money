import React, {useState} from 'react';
import styled from 'styled-components';

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
  value: string[],
  onChange: (value:string[])=>void
}

const TagsSection: React.FC<Props> = (props) => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  // const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const selectedTags = props.value;
  const onAddTag = () => {
    const newTagName = window.prompt('新标签名称为');
    if (newTagName !== null) {
      setTags([...tags, newTagName]);
    }
  }
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      props.onChange(selectedTags.filter(t => t !== tag));
    } else {
      props.onChange([...selectedTags, tag]);
    }
  }
  return (
    <Wrapper>
      <ul>
        {tags.map(tag =>
          <li key={tag}
              onClick={()=>{onToggleTag(tag)}}
              className={selectedTags.indexOf(tag) >= 0 ? 'selected' : ''}
          >{tag}</li>
        )}
      </ul>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )
}

export {TagsSection};