import type { IMessage } from "@/types/message";

export interface IMessagesBlockProps {
	messages: IMessage[];
	isLoading?: boolean;
}
