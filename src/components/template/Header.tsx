import Title from "./Title";

interface Props {
  title: string;
  subtitle: string;
  children?: any;
}

export default function Header(props: Props) {
  return (
    <div>
      <Title title={props.title} subtitle={props.subtitle} />
    </div>
  );
}