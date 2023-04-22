import Importants from '../../app/components/screens/importants/Importants'
import Meta from '../../app/components/shared/meta/Meta'
import axios from 'axios';

export const getStaticProps = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/tasks/status/active");
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

const ImportantsPage = ({tasks}) => {
    return (
        <>
            <Meta title='Важные задачи' />

            <Importants tasks={tasks} />
        </>
    )
}

export default ImportantsPage