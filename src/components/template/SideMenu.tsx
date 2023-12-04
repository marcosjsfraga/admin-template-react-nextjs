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
      
      <div className={`flex flex-col justify-center items-center h-20 w-28 mb-10`}>
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" text="Home" icon={HomeIcon(2)} />
        <MenuItem url="/settings" text="Configurações" icon={SettingsIcon(5)} />
        <MenuItem url="/person" text="Pessoas" icon={PersonIcon(5)} />
      </ul>
      <ul>
        <MenuItem 
          onClick={() => console.log('Logout')} 
          text="Sair" 
          icon={ExitIcon(5)} 
          className="text-red-600 hover:bg-red-400 hover:text-white"
        />
      </ul>
    </aside>
  );
}