import Menu from "./menu/Menu"
import s from './Layout.module.scss'
import InputSearch from '../shared/input-search/InputSearch'

const Layout = ({children}) => {
    return (
      <div className={s.layout}>
        <Menu />
        <main>
          <div className={s.search}><InputSearch /></div>
          <div>{children}</div>
        </main>
      </div>
    );
}

export default Layout