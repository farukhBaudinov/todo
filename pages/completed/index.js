import Completed from '../../app/components/screens/completed/Completed'
import Meta from '../../app/components/shared/meta/Meta'
import axios from 'axios';

export const getStaticProps = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/tasks/status/completed");
      if (!data) return { notFound: true }
  
      return {
        props: {
          tasks: data,
        },
      };
    } catch (err) {
      console.log(err);
      return {
        props: { tasks: [] }
      }
    }
  };

const CompletedPage = ({tasks}) => {
    return (
        <>
            <Meta title='Выполненные задачи' />

            <Completed tasks={tasks} />
        </>
    )
}

export default CompletedPage