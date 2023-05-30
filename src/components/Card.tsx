import styles from "../assets/styles/Card.module.scss";

type CardProps = {
  children: string | JSX.Element | JSX.Element[];
  wrapperClassName?: string;
};

const Card = ({ children, wrapperClassName }: CardProps) => {
  return (
    <div
      className={`${styles.wrapper} ${
        wrapperClassName ? wrapperClassName : null
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
