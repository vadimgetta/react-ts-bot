// Я бы наверное использовал enum но че то ошибку ts + swc дает
export type TUserVariant = "user" | "bot";
export interface IMessage {
	id: string;
	user: TUserVariant;
	text: string;
}
