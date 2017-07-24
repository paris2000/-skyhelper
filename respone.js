var linebot = require('linebot');
var express = require('express');

var bot = linebot({
    channelId:1526441000,
    channelSecred :66c56d9328699fdd93d9dbc0054c70a2,
    channelAccessToken:lPxdIo6+sv9xFQfXi3LZLjBEI9Cx8xSxfYMTn/E700pDsVNXDZvXi6PXnLvL/E5yTsmrAJ6tQaRAFP+vympkcR4tajnoskwFyQg4vt5QCbT73IzjagV+089GPqYoOL3h9gW+EWbdcme/eOYOY6BZgQdB04t89/1O/w1cDnyilFU=
});

setTimeout(function(){
    var userId = 'paris200088';
    var sendMsg = 'Paris 你最帥了';
    bot.push(userId,sendMsg);
    console.log('send: '+sendMsg);
},5000);