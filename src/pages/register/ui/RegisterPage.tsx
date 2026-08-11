import styles from './RegisterPage.module.css';
import { RegisterForm } from 'features/authRegister/ui/RegisterForm';

export const RegisterPage = () => {

  return (
    <div className={styles.pageWrapper}>
        <RegisterForm />
    </div>
  );
};
