import { HomeIcon, PersonIcon, SettingsIcon } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function SideMenu() {
  return (
    <aside>
      <div className={`flex flex-col justify-center items-center h-20 w-20`}>
        <Logo />
      </div>
      <ul>
        <MenuItem url="/" text="Home" icon={HomeIcon} />
        <MenuItem url="/settings" text="Configurações" icon={SettingsIcon} />
        <MenuItem url="/person" text="Pessoas" icon={PersonIcon} />
      </ul>
    </aside>
  );
}