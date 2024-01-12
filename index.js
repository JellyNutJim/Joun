import dotenv from 'dotenv'
dotenv.config()
import { Client, GatewayIntentBits, EmbedBuilder  } from 'discord.js';

const client = new Client
    ({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildMembers,
        ],
    });

// Users
const oscar = '256685341723983872';
const jack = '641702978910158849';

// Test Server Channel
const cope_channel_test = '1111364069329485916';

// Big Big Chungus Channels
const cope_channel = '1109161279089807370'

// Load msg
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    });

// Message From User
client.on('messageCreate', async (message) =>
{
    if (message.author.id == jack) {
        const date = new Date().toLocaleString();
        const cope = client.channels.cache.get(cope_channel);
        const MessageContent = message.content;
        var AttachmentURL = (message.attachments.first()?.url);

        if (AttachmentURL != undefined)
        {
            const embed_img = new EmbedBuilder()
            .setTitle(date)
            .setImage(AttachmentURL);

            // Add message content if exists
            if (MessageContent != "")
            {
                embed_img.setDescription('"' + MessageContent + '"');
            }

            cope.send({ embeds: [embed_img] }); 
        }
        else
        {
            cope.send(' ' + date + ':\n `"' + MessageContent + '"`');
        }
    }
});

// Reply Messages
client.on('messageCreate', async (message) =>
{
    let msg = message.content.toLowerCase();

    switch (msg)
    {
        case 'jack':
            message.reply('is balding');
            break;
        case 'stick':
            message.reply({ files: ['assets/stick.png'] });
            break;
    }
});
        
client.login(process.env.CLIENT_TOKEN);
