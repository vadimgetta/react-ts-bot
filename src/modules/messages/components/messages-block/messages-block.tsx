import { Loader } from "@/ui/loader/loader"
import { MessagesWrapper } from "../messages-wrapper/messages-wrapper"
import { MessageItem } from "../messages-item/messages-item"
import type { IMessagesBlockProps } from "./messages-block.props"

export const MessageBlock = ({ messages, isLoading }: IMessagesBlockProps) => {
	return (
		<MessagesWrapper >
			{messages.map((message) =>
				<MessageItem key={message.id} message={message} />
			)}
			{isLoading &&
				<li><Loader /></li>
			}
		</MessagesWrapper>
	)
}
