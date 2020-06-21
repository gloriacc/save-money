import {useState} from 'react';
import {createId} from './lib/createId';

const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'}
]
const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const updateTag = (id: number, obj:{name: string}) => {
    const tagsClone = JSON.parse(JSON.stringify(tags));
    for (let i = 0; i < tagsClone.length; i++) {
      if (tagsClone[i].id === id) {
        tagsClone[i].name = obj.name;
      }
    }
    console.log(tagsClone);
    setTags(tagsClone);
  };
  const deleteTag = (id: number) => {
    const tagsClone = JSON.parse(JSON.stringify(tags));
    for (let i = 0; i < tagsClone.length; i++) {
      if (tagsClone[i].id === id) {
        tagsClone.splice(i, 1);
        break;
      }
    }
    setTags(tagsClone);
  };
  return {tags, setTags, findTag, updateTag, deleteTag};
};
export {useTags};