
const { EmbedBuilder, Events  } = require('discord.js');
const axios = require('axios');

// testing code
const {jack_id, cope_channel_id} = require('../config.json');
const {oscar_id, test_channel_id} = require('../config.json');


module.exports = {
	name: Events.MessageCreate,
    data: [],
    holding: false,
	async execute(message) {

        const sender = message.author;
        const id = sender.id;
        
        // Jack Cope
        if (id == jack_id) {
            const date = new Date().toLocaleString();
            const cope = message.client.channels.cache.get(cope_channel_id);
            const MessageContent = message.content;
            var AttachmentURL = (message.attachments.first()?.url);
            //message.react('🤓');
    
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

        // if no timer active
        // start 1 min timer
        // at end of min all data is sent
        // during min words are added to list

        var notExist = true;
        if (this.holding == false)
        {
            this.sendData();
            this.holding = true;
        }
        
        for (var i = 0; i < this.data.length; i++)
        {
            if (this.data[i][0] == id)
            {
                this.data[i][3] = this.data[i][3] + 1;
                notExist = false;
                break;
            }
        }
        
        if (notExist)
        {
            const hash = sender.avatar;
            const name = sender.displayName;
            this.data.push([id, hash, name, 1]);  
        }
        
        
    },
    sendData : async function() {
        const wait = delay => new Promise(resolve => setTimeout(resolve, delay));
        await wait(60000);
        try {
    
            axios.post('http://localhost:3000/api/updateUsers', {
                users: this.data
            });
        } catch (e)
        {
            console.log('Error sending data data: ', e);
        }
        this.holding = false;
        this.data = [];
    },
};


/*
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
        }*/