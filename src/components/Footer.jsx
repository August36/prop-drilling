import styles from "./Footer.modules.css";

function Footer(Props) {
  return (
    <footer className={styles.Footer}>
      <p>
        Her er en meget standard footer hvor jeg gerne vil vise {Props.contact}
      </p>
    </footer>
  );
}

export default Footer;
