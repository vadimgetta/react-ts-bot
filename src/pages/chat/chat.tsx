import styles from "./chat.module.css";
import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import type { IMessage } from "@/types/message";

import { Textarea } from "@/ui/textarea/textarea";
import { Button } from "@/ui/button/button";
import { MessageBlock } from "@/modules/messages";

// Можно было бы сразу через handleSubmit отправить например но я решил типа имитация запроса на сервер
// 	const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
// 	e.preventDefault();
// 	setIsLoading(true);
// 	const form = e.currentTarget;
// 	const formData = new FormData(form);
// 	const text = formData.get("message") as string;
// 	setMessages((prev) => ([...prev, { id: crypto.randomUUID(), user: "user", text }]));
// 	form.reset();
// 	textAreaRef.current?.focus();

// 	 setTimeout(() => {
// 	 setMessages((prev) => ([...prev, { id: crypto.randomUUID(), user: "bot", text: prev[prev.length - 1].text }]));
// 	 	setIsLoading(false);
// 	}, 2000);
// }, []);

// Вариант с не контроллируемым компонентом
export const Chat = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [messages, setMessages] = useState<IMessage[]>([]);
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		textAreaRef.current?.focus();
	}, []);

	useEffect(() => {
		if (isLoading) {
			const timer = setTimeout(() => {
				setMessages((prev) => ([...prev, { id: crypto.randomUUID(), user: "bot", text: prev[prev.length - 1].text }]));
				setIsLoading(false);
			}, 2000);
			return () => clearTimeout(timer);
		}
	}, [isLoading]);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		const form = e.currentTarget;
		const formData = new FormData(form);
		const text = formData.get("message") as string;
		setMessages((prev) => ([...prev, { id: crypto.randomUUID(), user: "user", text }]));
		form.reset();
		textAreaRef.current?.focus();

	};
	const handleSubmitOnEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		//для того что бы отправить сообщение при нажатии Enter в textarea
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			e.currentTarget.form?.requestSubmit();
		}
	}
	return (
		<main className={styles.main}>
			<MessageBlock isLoading={isLoading} messages={messages} />
			<form onSubmit={handleSubmit} className={styles.form}>
				<Textarea
					readOnly={isLoading}
					required
					name="message"
					ref={textAreaRef}
					onKeyDown={handleSubmitOnEnter}
				/>
				<Button disabled={isLoading} type="submit">Send</Button>
			</form>
		</main>
	);
};




// export const Chat = () => {
// 	const [isLoading, setIsLoading] = useState<boolean>(false);
// 	const [messages, setMessages] = useState<IMessage[]>([]);
// 	const [text, setText] = useState<string>("");
// 	const textAreaRef = useRef<HTMLTextAreaElement>(null);

// 	useEffect(() => {
// 		textAreaRef.current?.focus();
// 	}, []);

// 	useEffect(() => {
// 		if (isLoading) {
// 			const timer = setTimeout(() => {
// 				setMessages((prev) => ([...prev, { id: crypto.randomUUID(), user: "bot", text: prev[prev.length - 1].text }]));
// 				setIsLoading(false);
// 			}, 2000);
// 			return () => clearTimeout(timer);
// 		}
// 	}, [isLoading]);

// 	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 		setIsLoading(true);
// 		setMessages((prev) => ([...prev, { id: crypto.randomUUID(), user: "user", text }]));
// 		setText("");
// 		textAreaRef.current?.focus();
// 	};


// 	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
// 		setText(e.target.value);
// 	};
// 	const handleSubmitOnEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
// 		//для того что бы отправить сообщение при нажатии Enter в textarea
// 		if (e.key === "Enter" && !e.shiftKey) {
// 			e.preventDefault();
// 			e.currentTarget.form?.requestSubmit();
// 		}
// 	}
// 	return (
// 		<main className={styles.main}>
// 			<MessageBlock isLoading={isLoading} messages={messages} />
// 			<form onSubmit={handleSubmit} className={styles.form}>
// 				<Textarea
// 					readOnly={isLoading}
// 					required
// 					name="message"
// 					ref={textAreaRef}
// 					onChange={handleChange}
// 					onKeyDown={handleSubmitOnEnter}
// 				/>
// 				<Button disabled={isLoading || text.trim().length === 0} type="submit">Send</Button>
// 			</form>
// 		</main>
// 	);
// };
