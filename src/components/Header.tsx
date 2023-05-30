import styles from "../assets/styles/Header.module.scss";
import { IconButton, Button } from "@mui/material";
import { IconBell, IconMagnifyingGlass } from "../utils/icons";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchbar}>
        <IconButton>{IconMagnifyingGlass}</IconButton>
      </div>
      <Button startIcon={IconBell} variant="contained" className="mui-button">
        11
      </Button>
    </div>
  );
};

export default Header;
