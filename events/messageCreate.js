const { Events } = require('discord.js');
const {jack_id, cope_channel_id} = require('../config.json');
// testing code
// const {oscar_id, test_channel_id} = require('../config.json');
const { EmbedBuilder  } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {

        // Jack Cope
        if (message.author.id == jack_id) {
            const date = new Date().toLocaleString();
            const cope = message.client.channels.cache.get(cope_channel_id);
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

        // Regular reply
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
    },
};