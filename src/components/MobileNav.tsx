import styles from "../assets/styles/MobileNav.module.scss";
import { IconArrowUp, IconBoxes, IconRightArrow } from "../utils/icons";
import { IconButton } from "@mui/material";

const MobileNav = () => {
  return (
    <div className={styles.wrapper}>
      <IconButton size="large" aria-label="back">
        {IconArrowUp}
      </IconButton>
      <IconButton size="large" aria-label="home">
        {IconBoxes}
      </IconButton>
      <IconButton size="large" aria-label="forward">
        {IconRightArrow}
      </IconButton>
    </div>
  );
};

export default MobileNav;
