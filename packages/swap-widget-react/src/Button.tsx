import * as React from "react";
import { useThemeSwitch } from "./hooks/useThemeSwitch";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const { theme, setThemeSwitch } = useThemeSwitch();
  return <div className="bg-background text-primary h-80 w-32"><button className="h-10 w-5" onClick={setThemeSwitch}>{theme}</button></div>;
}

Button.displayName = "Button";