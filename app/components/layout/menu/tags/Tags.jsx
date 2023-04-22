import s from './Tags.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTag, removeActiveTag } from '../../../../redux/slices/tags-slice'

const tags = [
    { title: 'Продуктивность', color: '#7367F0' },
    { title: 'Образование', color: '#28C76F' },
    { title: 'Здоровье', color: '#FF9F43' },
    { title: 'Срочно', color: '#EA5455' },
]

const Tags = () => {
  const dispatch = useDispatch()
  const { activeTags } = useSelector(state => state.tags)

    const toggleTags = (tag) => {
      if (activeTags.includes(tag)) {
        dispatch(removeActiveTag(tag))
      } else {
        dispatch(setActiveTag(tag))
      }
    }

    return (
      <div className={s.tags}>
        <div className={s.wrapper}>
          <h5>Тэги</h5>

          <div>
            {tags.map((i, idx) => (
              <div
                className={[s.item, activeTags.includes(i.title) ? s.active : ''].join(' ')}
                key={idx}
                onClick={() => toggleTags(i.title)}
              >
                <div className={s.mark} style={{ background: i.color }}></div>
                <span>{i.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Tags