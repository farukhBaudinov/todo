import s from './InputSearch.module.scss'
import SearchIcon from '../../ui/icons/SearchIcon'
import { useState } from 'react'
import { useRouter } from 'next/router'

const InputSearch = () => {
    const router = useRouter()
    const [injectedValue, setInjectedValue] = useState('')

    const searchTasks = () => {
        router.push({
            pathname: '/resultSearch',
            query: { injectedValue }
        })
    }
    
    return (
      <label className={s.wrapper}>
        <SearchIcon className={s.icon} onClick={searchTasks} />
        <input
          type="text"
          placeholder="Поиск"
          value={injectedValue}
          onChange={(e) => setInjectedValue(e.target.value)}
        />
      </label>
    );
}

export default InputSearch