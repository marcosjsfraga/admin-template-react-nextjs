import Content from "./Content";
import Header from "./Header";
import SideMenu from "./SideMenu";

interface Props {
  title: string;
  subtitle: string;
  children?: any;
}

export default function Layout(props: Props) {
  return (
    <div className={`flex h-screen w-screen`}>
      <SideMenu />
      <div className={`flex flex-col w-full p-7 bg-gray-200 dark:bg-gray-800`}>
        <Header title={props.title} subtitle={props.subtitle} />
        <Content>
          {props.children}
        </Content>
      </div>
    </div>
  );
}