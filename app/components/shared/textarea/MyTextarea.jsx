import s from "./MyTextarea.module.scss";

const MyTextarea = ({data, register, errors}) => {
  let getError = (name, errors) => {
    for (let key in errors) {
      if (key === name) {
        return errors[name].message;
      }
    }
  };

  let getOptions = (options) => {
    let resOpt = {};
    for (let key in options) {
      switch (key) {
        case "required": resOpt.required = options.required; continue;
        case "minLength": resOpt.minLength = options.minLength; continue;
        case "pattern": resOpt.pattern = options.pattern;continue;
        case "maxLength": resOpt.maxLength = options.maxLength; continue;
        default: resOpt.error = "ERROR, no values in options";
      }
    }
    return resOpt;
  };

  return (
    <label
      className={[s.wrapper, getError(data.name, errors) ? s.error : ''].join(" ")}
    >
      <h4>{data.title}</h4>
        <textarea
          placeholder={data.placeholder}
          {...register(data.name, getOptions(data.options))}
        ></textarea>
      <span>{getError(data.name, errors) || "⁣"}</span>
    </label>
  );
};

export default MyTextarea;
