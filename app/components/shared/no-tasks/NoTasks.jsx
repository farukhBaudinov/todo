import s from './NoTasks.module.scss'

const NoTask = ({title, emotion}) => {
  const getEmotion = (emotion) => {
    switch (emotion) {
      case 'smile': return s.smile;
      case 'find': return s.find;
      default: return '';
    }
  }

    return (
      <div className={[s.wrapper, getEmotion(emotion)].join(' ')}>
        <h3>{title}</h3>
      </div>
    );
}

export default NoTask;