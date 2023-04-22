import { useRouter } from "next/router";
import Heading from "../../ui/heading/Heading";
import CardTask from "../../shared/card-task/CardTask";
import { useEffect, useState } from "react";
import ConfirmDeletePopup from "../../shared/confirm-delete-popup/ConfirmDeletePopup";
import NoTasks from "../../shared/no-tasks/NoTasks";
import { ReactSortable } from "react-sortablejs";

const ResultSearch = ({ tasks }) => {
  const router = useRouter();

  const [isShowPopup, setShowPopup] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [resTasks, setResTasks] = useState([]);

  useEffect(() => {
    if (!router.query.injectedValue) {
      router.push("/");
    } else {
      const foundTasks = tasks.filter((i) =>
        i?.name?.toLowerCase().includes(router?.query?.injectedValue?.toLowerCase())
      );
      setResTasks(foundTasks);
    }
  }, []);

  return (
    <div>
      <Heading tag="h2" title="Результаты поиска" />
      <div>
        {!resTasks.length ? (
          <NoTasks title={"Ничего не найдено"} emotion={"find"} />
        ) : (
          <ReactSortable list={resTasks} setList={setResTasks}>
            {resTasks.map((i, idx) => (
              <CardTask
                data={i}
                key={idx}
                setShowPopup={setShowPopup}
                setActiveId={setActiveId}
                setResTasks={setResTasks}
              />
            ))}
          </ReactSortable>
        )}
      </div>

      {isShowPopup ? (
        <ConfirmDeletePopup setShow={setShowPopup} activeId={activeId} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ResultSearch;
