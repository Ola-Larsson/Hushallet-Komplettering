import { useHousehold } from './../Context/HouseholdContext';
import { Icon } from "./Types";

export const Icons: Icon[] = [
  { Id: 1, Icon: "🐙", Color: "#ee7e86" },
  { Id: 2, Icon: "🦊", Color: "#f7ad71" },
  { Id: 3, Icon: "🦄", Color: "#f795e0" },
  { Id: 4, Icon: "🐋", Color: "#94c3f9" },
  { Id: 5, Icon: "🦉", Color: "#bc9991" },
  { Id: 6, Icon: "🐷", Color: "#f9c9c9" },
  { Id: 7, Icon: "🐸", Color: "#79f189" },
  { Id: 8, Icon: "🐥", Color: "#f1ec79" },
];

export function availableIcons() {
    const { Users } = useHousehold();
    const availableIcons = Icons.filter((x) => Users.filter((y) => y.Icon.Id !== x.Id))

    return availableIcons;
}