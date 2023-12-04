import Link from "next/link";

interface Props {
  url?: string;
  text: string;
  icon: any;
  className?: string;
  onClick?: (event: any) => void;
}


export default function MenuItem(props: Props) {
  
  function renderLink() {
    return (
      <a className={`
        flex justify-start items-center 
        h-10 w-full text-gray-600 
        dark:text-gray-200
        ml-3 mr-3
        ${props.className} 
      `}>
        {props.icon}
        <span className={`_text-xs _font-light ml-2`}>
          {props.text}
        </span>
      </a>
    );
  }
  
  return (
    <li onClick={props.onClick} 
        className={`
          hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer
          w-full
    `}>
      {props.url ? (
        <Link href={props.url} legacyBehavior>
          {renderLink()}
        </Link>
      ) : (
        renderLink()
      )}
    </li>
  );
}