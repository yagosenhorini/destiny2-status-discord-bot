import { SlashCommandBuilder } from 'discord.js';
import scrapeInit from '../../../crawler';

module.exports = {
  data: new SlashCommandBuilder()
    .setName('status')
    .setDescription('Replies with Destiny 2 Server status!'),
  async execute(interaction: any) {
    const response = await scrapeInit();
    await interaction.reply(response);
  },
};
