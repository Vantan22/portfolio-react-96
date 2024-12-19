import {
  DesktopContainer,
  IconsContainer,
  DesktopIcon,

} from "@styles/desktop";
import { Computer, Network2, RecycleEmpty, Folder } from "@react95/icons";

const desktopIcons = [
  { id: 1, name: "My Computer", icon: <Computer variant="32x32_4" /> },
  { id: 2, name: "Network Neighborhood", icon: <Network2 variant="32x32_4" /> },
  { id: 3, name: "Recycle Bin", icon: <RecycleEmpty variant="32x32_4" /> },
  { id: 4, name: "My Documents", icon: <Folder variant="32x32_4" /> },
];

const Home = () => {

  return (
    <DesktopContainer>
      <IconsContainer>
        {desktopIcons.map((icon) => (
          <DesktopIcon key={icon.id}>
            {icon.icon}
            <span>{icon.name}</span>
          </DesktopIcon>
        ))}
      </IconsContainer>

    </DesktopContainer>
  );
};

export default Home;
