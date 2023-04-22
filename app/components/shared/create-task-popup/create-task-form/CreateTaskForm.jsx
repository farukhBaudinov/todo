import { inputsData } from "../inputsData.js";
import MyButton from "../../../shared/button/MyButton";
import s from "./CreateTaskForm.module.scss";
import { useForm } from "react-hook-form";
import MyCheckbox from "../../checkbox/MyCheckbox";
import { useState } from "react";
import MyTextarea from "../../textarea/MyTextarea.jsx";
import MyInput from "../../input/MyInput.jsx";
import { useEffect } from "react";
import axios from "axios";

const tags = ['Продуктивность', 'Образование', 'Здоровье', 'Срочно']

const CreateTaskForm = ({setShowPopup}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const [isImportant, setImportant] = useState(false);
  const [selectedTags, setSelectedTags] = useState([])

  const onSubmit = async (data) => {
    const task = {
      ...data,
      isImportant,
      tags: selectedTags,
      status: 'active'
    }
    await axios.post('http://localhost:5000/api/tasks', task)
    await resetForm()
    await setShowPopup(false)
  };

  const resetForm = (e) => {
    if (e) e.preventDefault();
    reset()
    setImportant(false)
    setSelectedTags([])
  }

  const toggleTags = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(i => i !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <div className={s.inputs}>
        {inputsData.map((i, idx) => {
          if (i.type === "checkbox") {
            return (
              <div key={idx} className={s.checkbox}>
                <MyCheckbox
                  key={idx}
                  value={isImportant}
                  setValue={setImportant}
                />
                <h4>Важная задача</h4>
              </div>
            );
          } else if (i.type === "textarea") {
            return (
              <MyTextarea
                data={i}
                key={idx}
                register={register}
                errors={errors}
              />
            );
          } else {
            return (
              <MyInput data={i} register={register} errors={errors} key={idx} />
            );
          }
        })}
      </div>

      <div className={s.tags}>
        <h4>Тэги</h4>
        <div className={s.items}>
          {tags.map((tag, idx) => (
            <div key={idx} onClick={() => toggleTags(tag)}>
              <MyCheckbox
                value={selectedTags.includes(tag) ? true : false}
                setValue={() => toggleTags(tag)}
              />
              <h4>{tag}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className={s.btns}>
        <MyButton theme={"filled"}>Добавить</MyButton>
        <MyButton theme={"outline"} onClick={(e) => resetForm(e)}>
          Удалить
        </MyButton>
      </div>
    </form>
  );
};

export default CreateTaskForm;
