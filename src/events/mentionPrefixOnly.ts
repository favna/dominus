import { Event, Events, PieceContext } from "@sapphire/framework";
import type { Message } from "discord.js";

export default class extends Event<Events.MentionPrefixOnly> {
	public constructor(context: PieceContext) {
		super(context, { event: Events.MentionPrefixOnly });
	}

	public async run(message: Message) {
		const prefix = await this.client.fetchPrefix(message);
		return message.channel.send(message.guild ? `My prefix in this guild is: \`${prefix}\`` : "You don't have to use a prefix in DMs.");
	}
}