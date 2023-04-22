import Meta from "../app/components/shared/meta/Meta";
import MyTasks from "../app/components/screens/my-tasks/MyTasks";
import axios from "axios";

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

const HomePage = ({tasks}) => {
  return (
    <>
      <Meta title="Мои задачи" />
      <MyTasks tasks={tasks} />
    </>
  );
};

export default HomePage;
