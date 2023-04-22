import Deleted from '../../app/components/screens/deleted/Deleted'
import Meta from '../../app/components/shared/meta/Meta'
import axios from 'axios';

export const getStaticProps = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/tasks/status/deleted");
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

const DeletedPage = ({tasks}) => {
    return (
        <>
            <Meta title='Удаленные задачи' />

            <Deleted tasks={tasks} />
        </>
    )
}

export default DeletedPage