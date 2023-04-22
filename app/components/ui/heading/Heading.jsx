import s from './Heading.module.scss'

const Heading = ({tag, title}) => {
    const Tag = tag;

    return (
        <Tag className={s.title} >{title}</Tag>
    )
}

export default Heading