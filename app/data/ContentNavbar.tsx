import type { JSX } from "react";
import {
  Psychology
} from "@mui/icons-material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';

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
    icon: <AccountCircleIcon />,
  },
  {
    id: "portifolio",
    title: "Portifólio",
    idSection: "portifolio",
    section: "#portifolio",
    icon: <Psychology />,
  },
  {
    id: "contato",
    title: "Contato",
    idSection: "contato",
    section: "#contato",
    icon: <EmailIcon />,
  },
];
