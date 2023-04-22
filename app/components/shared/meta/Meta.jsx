const { default: Head } = require("next/head");

const Meta = ({title, keywords}) => {
  return (
    <Head>
      <meta charset="UTF-8" />
      {title && <title>{title}</title>}
      <meta name="description" content="To Do List" />
      {keywords && (
        <meta
          name="keywords"
          content={[
            "todo",
            "задания",
            "блокнот",
            "ежедневник",
            ...keywords,
          ].join(", ")}
        />
      )}
    </Head>
  );
};

export default Meta;
