import type { HTMLAttributes, ReactNode } from "react";

export interface IWrapperProps extends HTMLAttributes<HTMLUListElement> {
	children: ReactNode;
}
