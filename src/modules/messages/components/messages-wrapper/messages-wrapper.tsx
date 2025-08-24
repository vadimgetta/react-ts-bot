import type { IWrapperProps } from "./messages-wrapper.props";
import styles from "./messages-wrapper.module.css";
import clsx from "clsx";
import { useEffect, useRef } from "react";

export const MessagesWrapper = ({ className, children, ...props }: IWrapperProps) => {
	const containerRef = useRef<HTMLUListElement>(null);
	useEffect(() => {
		const el = containerRef.current;
		if (el) {
			el.scrollTop = el.scrollHeight;
		}
	}, [children]);
	return (
		<ul ref={containerRef} className={clsx(styles.wrapper, className)} {...props}>{children}</ul>
	);
};
