import useAppData from "@/data/hook/useAppData";
import Content from "./Content";
import Header from "./Header";
import SideMenu from "./SideMenu";

interface Props {
  title: string;
  subtitle: string;
  children?: any;
}

export default function Layout(props: Props) {
  const { theme } = useAppData();  

  return (
    <div className={`${theme} flex h-screen w-screen`}>
      {/* MENU */}
      <SideMenu />

      <div className={`flex flex-col w-full p-7 bg-gray-100 dark:bg-gray-800`}>
        {/* HEADER  */}
        <Header title={props.title} subtitle={props.subtitle} />
        
        {/* CONTENT */}
        <Content>
          {props.children}
        </Content>
      </div>
    </div>
  );
}