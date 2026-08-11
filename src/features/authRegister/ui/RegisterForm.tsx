import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { groupRegistrationSchema, defaultValues } from "../model";
import styles from "./RegisterForm.module.css";
import type { GroupRegistrationValues } from "../model/schema";

export const RegisterForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<GroupRegistrationValues>({
    resolver: zodResolver(groupRegistrationSchema),
    defaultValues,
    mode: "onTouched",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "socialLinks",
  });

  const onSubmit = (values: GroupRegistrationValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Имя</label>
          <input
            {...register("username")}
            className={`${styles.input} ${touchedFields.username && errors.username ? styles.inputError : ""}`}
          />
          {errors.username && (
            <div className={styles.errorText}>{errors.username.message}</div>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Почта</label>
          <input
            type="email"
            {...register("email")}
            className={`${styles.input} ${touchedFields.email && errors.email ? styles.inputError : ""}`}
          />
          {errors.email && (
            <div className={styles.errorText}>
              {errors.email.message}
            </div>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Пароль</label>
          <input
            type="password"
            {...register("password")}
            className={`${styles.input} ${touchedFields.password && errors.password ? styles.inputError : ""}`}
          />
          {errors.password && (
            <div className={styles.errorText}>
              {errors.password.message}
            </div>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Повторите пароль</label>
          <input
            type="password"
            {...register("confirmPassword")}
            className={`${styles.input} ${touchedFields.confirmPassword && errors.confirmPassword ? styles.inputError : ""}`}
          />
          {errors.confirmPassword && (
            <div className={styles.errorText}>
              {errors.confirmPassword.message}
            </div>
          )}
        </div>

         <div className={styles.arrayContainer}>
          <h3>Список ссылок</h3>

          <div>
            {fields.map((field, index) => (
                <div key={field.id} className={styles.arrayRow}>
                    <input 
                        {...register(`socialLinks.${index}.url`)}
                        className={`${styles.input} ${errors.socialLinks?.[index]?.url ? styles.inputError : ""}`}
                    />
                    {errors.socialLinks?.[index]?.url && (
                        <div className={styles.errorText}>
                            {errors.socialLinks[index].url.message}
                        </div>
                    )}
                    <button type="button" className={styles.removeBtn} onClick={() => remove(index)}>
                        Удалить
                    </button>
                </div>
                ))}
                <button type="button" className={styles.addBtn} onClick={() => append({ url: "" })}>
                    Добавить ссылку
                </button>
            </div>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Зарегистрировать
        </button>
      </form>
    </div>
  );
};