import s from "./MyInput.module.scss";

const MyInput = ({data, register, errors}) => {
  let getOptions = (options) => {
    let resOpt = {};
    for (let key in options) {
      switch (key) {
        case "required": resOpt.required = options.required; continue;
        case "minLength": resOpt.minLength = options.minLength; continue;
        case "pattern": resOpt.pattern = options.pattern; continue;
        case "maxLength": resOpt.maxLength = options.maxLength; continue;
        default: resOpt.error = "ERROR, no values in options";
      }
    }
    return resOpt;
  };

  let getError = (name, errors) => {
    for (let key in errors) {
      if (key === name) {
        return errors[name].message;
      }
    }
  };

  return (
    <label
      className={[s.wrapper, getError(data.name, errors) && s.error].join(" ")}
    >
      <h4>{data.title}</h4>
      <div>
        <input
          type={data.type}
          placeholder={data.placeholder}
          {...register(data.name, getOptions(data.options))}
        />
      </div>
      <span>{getError(data.name, errors) || "⁣"}</span>
    </label>
  );
};

export default MyInput;
