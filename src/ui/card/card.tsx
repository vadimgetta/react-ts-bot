import clsx from "clsx";
import styles from "./card.module.css";
import type { ICardProps } from "./card.props";

export const Card = ({ className, appearance, children, ...props }: ICardProps) => {
	return (
		<div className={clsx(styles.card, className, {
			[styles.primary]: appearance === "primary",
			[styles.secondary]: appearance === "secondary"
		})} {...props}>{children}</div>
	);
};
