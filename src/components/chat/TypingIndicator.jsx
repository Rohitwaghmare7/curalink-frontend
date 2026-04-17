// TypingIndicator — three animated dots shown while AI is generating a response
import AppIcon from '../common/AppIcon';
import styles from './TypingIndicator.module.css';

export default function TypingIndicator() {
  return (
    <div className={styles.wrapper} aria-label="Curalink is thinking" role="status">
      <AppIcon size={28} className={styles.avatarIcon} />
      <div className={styles.dots} aria-hidden="true">
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
    </div>
  );
}
