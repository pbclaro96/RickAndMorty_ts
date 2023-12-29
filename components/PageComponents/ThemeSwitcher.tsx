import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../Icons/MoonIcon";
import { SunIcon } from "../Icons/SunIcon";
export const ThemeSwitcher = () => {

  const { theme, setTheme } = useTheme()

  return (
    <div>
      <Switch defaultSelected
      size="lg"
      color="success"
      thumbIcon={({ isSelected, className })=>(
        isSelected ? (
          //setTheme('light'),
          <MoonIcon className= {className}/>
        ) : (
          //setTheme('dark'),
          <SunIcon className = {className}/>
        )
      )}
      
      >
      </Switch>
      {/* The current theme is: {theme}
      <button onClick={() => setTheme('light')}>L</button>
      <button onClick={() => setTheme('dark')}>D</button> */}
    </div>
  )
};