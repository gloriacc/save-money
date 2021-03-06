import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {useUpdate} from './useUpdate';
import {useHistory} from 'react-router-dom';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string, category: '-' | '+' }[]>([]);
  const history = useHistory();
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createId('tagId'), name: '衣', category: '-'},
        {id: createId('tagId'), name: '食', category: '-'},
        {id: createId('tagId'), name: '住', category: '-'},
        {id: createId('tagId'), name: '行', category: '-'},
        {id: createId('tagId'), name: '工资', category: '+'},
        {id: createId('tagId'), name: '红包', category: '+'},
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
  const addTag = (tag:{name: string, category: '-' | '+'}) => {
    if (tag.name !== null && tag.name !== '') {
      setTags([...tags, {id: createId('tagId'), ...tag}]);
      history.goBack();
    }
  };
  const getTagName = (id: number) => {
    return findTag(id).name;
  };
  return {tags, setTags, findTag, updateTag, deleteTag, addTag, getTagName};
};
export {useTags};