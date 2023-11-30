interface Props {
  title: string;
  subtitle: string;
}

export default function Title(props: Props) {
  return (
    <div>
      <h1 className={`font-semibold text-3xl text-gray-900`}>
        {props.title}
      </h1>
      <h2 className={`font-light text-sm text-gray-600`}>
        {props.subtitle}
      </h2>
    </div>
  );
}