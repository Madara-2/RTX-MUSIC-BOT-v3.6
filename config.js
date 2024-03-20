module.exports = {
  TOKEN: "MTIwNjIyOTY3Mjg0NTYzOTcxMA.Gc5TpX.M2XNy7ex7tYLZ2DnfYI1uwcaUltwn9dFcAgC0Q",
  ownerID: ["1004206704994566164", ""],
  botInvite: "https://discord.com/oauth2/authorize?client_id=1206229672845639710&permissions=277028550656&scope=bot",
  supportServer: "",
  mongodbURL: "mongodb+srv://shiva:shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",
  status: 'ARL8 | help',
  commandsDir: './commands',
  language: "en",
  embedColor: "00fbff",
  errorLog: "",


  

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "playnormal", "playlist", "queue", "resume", "save", "play", "skip", "stop", "time", "volume"],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false
  },

  playlistSettings: {
    maxPlaylist: 100,
    maxMusic: 100,
  },

  opt: {
    DJ: {
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle']
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: true,
        cooldown: 10000000,
      },

    },

    maxVol: 150,

  }
}
