import styles from './HeadLiner.module.css'

type HeadLinerProps = {
 onClearCart: () => void;
}
const HeadLiner = ({onClearCart}: HeadLinerProps) => {
    return ( 
        <div className={styles.cartPage}>Check What's in my cart
        <button 
        onClick = {onClearCart}
        className={styles.clearAllButton}>
          Clear All
        </button>
      </div>
     );
}
 
export default HeadLiner;