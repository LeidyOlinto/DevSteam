import styles from "./gameCard.module.css";

import Image from "next/image";
import Button from "@/components/forms/button/button";

export default function GameCard() {
  return (
    <div className={styles.gamecard}>
      <Image className={styles.image} src="/products/counter-strike.jpg" width={300} height={145} />
      <div className={styles.info}>
        <h3 className={styles.title}>Couter strike: Global offensive</h3>
        <p className={styles.category}>Ação, estrategia, multijogador.</p>
        <div className={styles.pricing}>
        <h2 className={styles.price}>R$99,90</h2>
        <Button fullWidth>Adicionar ao carrinho</Button>
        </div>
      </div>
    </div>
  );
}
