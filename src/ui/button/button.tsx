import type { IButtonProps } from "./button.props";
import styles from "./button.module.css";
import clsx from "clsx";
export const Button = ({ children, className, ...props }: IButtonProps) => {
	return (
		<button className={clsx(styles.button, className)}  {...props}>{children}</button>
	);
};
