import { ExitIcon, HomeIcon, PersonIcon, SettingsIcon } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function SideMenu() {
  return (
    <aside 
      className={`
        flex flex-col justify-center items-center
        bg-white text-gray-700
        dark:bg-gray-900
      `}>
      
      <div className={`flex flex-col justify-center items-center h-20 w-24`}>
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" text="Home" icon={HomeIcon} />
        <MenuItem url="/settings" text="Configurações" icon={SettingsIcon} />
        <MenuItem url="/person" text="Pessoas" icon={PersonIcon} />
      </ul>
      <ul>
        <MenuItem 
          onClick={() => console.log('Logout')} 
          text="Sair" 
          icon={ExitIcon} 
          className="text-red-600 hover:bg-red-400 hover:text-white"
        />
      </ul>
    </aside>
  );
}