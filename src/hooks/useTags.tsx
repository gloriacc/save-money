import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {useUpdate} from './useUpdate';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string, category: '-' | '+' }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: '衣', category: '-'},
        {id: createId(), name: '食', category: '-'},
        {id: createId(), name: '住', category: '-'},
        {id: createId(), name: '行', category: '-'},
        {id: createId(), name: '工资', category: '+'},
        {id: createId(), name: '红包', category: '+'},
      ]
    }
    setTags(localTags);
  }, [])
  useUpdate(() => {window.localStorage.setItem('tags', JSON.stringify(tags));}, tags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const updateTag = (id: number, obj:{name: string}) => {
    const category = findTag(id).category;
    setTags(tags.map(tag => tag.id === id ? {id, name: obj.name, category} : tag));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  const addTag = (category: '-' | '+') => {
    const newTagName = window.prompt('新标签名称为');
    if (newTagName !== null) {
      setTags([...tags, {id: createId(), name: newTagName, category: category}]);
    }
  }
  const getTagName = (id: number) => {
    return findTag(id).name;
  };
  return {tags, setTags, findTag, updateTag, deleteTag, addTag, getTagName};
};
export {useTags};