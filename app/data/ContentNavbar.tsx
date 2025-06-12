import type { JSX } from "react";
import {
  Psychology
} from "@mui/icons-material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InventoryIcon from '@mui/icons-material/Inventory';
import TerminalIcon from '@mui/icons-material/Terminal';


export interface NavLinksType {
  id: string;
  title: string;
  idSection: string;
  section: string;
  icon: JSX.Element;
}

export const navBarContent: NavLinksType[] = [
  {
    id: "sobre",
    title: "Sobre Mim",
    idSection: "sobre",
    section: "#sobre",
    icon: <MenuBookIcon className="md:pb-1 pb-0"/>,
  },
  {
    id: "portifolio",
    title: "Portifólio",
    idSection: "portifolio",
    section: "#portifolio",
    icon: <TerminalIcon className="md:pb-1 pb-0"/>,
  },
  {
    id: "contato",
    title: "Contato",
    idSection: "contato",
    section: "#contato",
    icon: <EmailIcon className="md:pb-1 pb-0"/>,
  },
];
