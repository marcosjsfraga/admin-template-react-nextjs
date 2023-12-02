import { MoonIcon, SunIcon } from "../icons";

interface Props {
  theme: string;
  changeTheme: () => void;
}

export default function ChangeThemeButton(props: Props) {
  return props.theme === 'dark' ? (
    <div onClick={props.changeTheme} 
        className={`
          hidden sm:flex items-center cursor-pointer
          bg-gradient-to-r from-yellow-300 to-yellow-600
          w-14 lg:w-24 h-8 p-1 rounded-full
      `}>
      {/* ICON */}
      <div className={`
        flex justify-center items-center
        bg-white text-yellow-600 
        w-6 h-6 rounded-full
      `}>
        {SunIcon(3)}
      </div>
      {/* LABEL */}
      <div className="hidden lg:flex items-center ml-1 text-white">Claro</div>
    </div>
  ) : (
    <div onClick={props.changeTheme} 
        className={`
          hidden sm:flex items-center justify-end cursor-pointer
          bg-gradient-to-r from-gray-500 to-gray-900
          w-14 lg:w-24 h-8 p-1 rounded-full
      `}>
      {/* LABEl */}
      <div className="hidden lg:flex items-center mr-1 text-gray-300">Escuro</div>
      {/* ICON */}
      <div className={`
        flex justify-center items-center
        bg-black text-yellow-300 
        w-6 h-6 rounded-full
      `}>
        {MoonIcon}
      </div>
    </div>
  )
} 