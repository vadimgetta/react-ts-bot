import type { IMessage } from "@/types/message";
import { Card } from "@/ui/card/card";
import clsx from "clsx";
import { memo } from "react";
import styles from "./messages-item.module.css";

export const MessageItem = memo(({ message }: { message: IMessage }) => (
	<li className={clsx(styles.message, { [styles.user]: message.user === "user" })}>
		<Card
			appearance={message.user === "user" ? "primary" : "secondary"}
			className={styles.card}
		>
			{message.text}
		</Card>
	</li>
));
