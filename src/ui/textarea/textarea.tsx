import { forwardRef } from "react";
import clsx from "clsx";
import styles from "./textarea.module.css";
import { type ITextareaProps } from "./textarea.props";

export const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
	({ className, ...props }, ref) => {
		return (
			<textarea
				ref={ref}
				className={clsx(styles.textarea, className)}
				{...props}
			/>
		);
	}
);
