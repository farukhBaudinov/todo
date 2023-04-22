import ResultSearch from '../../app/components/screens/result-search/ResultSearch'
import Meta from '../../app/components/shared/meta/Meta'
import axios from 'axios';

export const getStaticProps = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/tasks");
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

const ResultSearchPage = ({tasks}) => {
    return (
        <>
        <Meta title="Результаты поиска" />
        
        <ResultSearch tasks={tasks} />
        </>
    )
}

export default ResultSearchPage