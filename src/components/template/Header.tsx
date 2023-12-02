import useAppData from "@/data/hook/useAppData";
import Title from "./Title";
import ChangeThemeButton from "./changeThemeButton";

interface Props {
  title: string;
  subtitle: string;
  children?: any;
}

export default function Header(props: Props) {
  const { theme, changeTheme } = useAppData();

  return (
    <div className="flex">
      {/* Text */}
      <Title title={props.title} subtitle={props.subtitle} />

      {/* Change Theme Button */}
      <div className="flex flex-grow justify-end items-center">
        <ChangeThemeButton theme={theme} changeTheme={changeTheme} />
      </div>
    </div>
  );
}