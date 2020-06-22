import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {useUpdate} from './useUpdate';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'}
      ]
    }
    setTags(localTags);
  }, [])
  useUpdate(() => {window.localStorage.setItem('tags', JSON.stringify(tags));}, tags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const updateTag = (id: number, obj:{name: string}) => {
    setTags(tags.map(tag => tag.id === id ? {id, name: obj.name} : tag));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  const addTag = () => {
    const newTagName = window.prompt('新标签名称为');
    if (newTagName !== null) {
      setTags([...tags, {id: createId(), name: newTagName}]);
    }
  }
  const getTagName = (id: number) => {
    return findTag(id).name;
  };
  return {tags, setTags, findTag, updateTag, deleteTag, addTag, getTagName};
};
export {useTags};