import Button from "@/components/forms/button/button";
import styles from "./saleCard.module.css";
import Image from "next/image";

export default function SaleCard() {
  return (
    <div className={styles.salecard}>
      <Image className={styles.image}
       src="/products/league-of-legends.jpg"
        width={250} 
        height={300} />

      <div className={styles.info}>
        <h3 className={styles.title}>OFERTA EXCLUSIVA</h3>
        <div className={styles.pricecard}>
          <div className={styles.percent}>-20%</div>
          <div className={styles.price}>
            <p className={styles.fullprice}>99,90</p>
            <h4 className={styles.discountprice}>89,90</h4>
          </div>
        </div>
        <Button>Adicionar ao carrinho</Button>
      </div>
    </div>
  );
}
