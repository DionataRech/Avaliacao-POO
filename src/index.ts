import { tweets } from "./components/Twitchs";
import Tweet from "./model/Twitch";
import User from "./model/User";

const user1 = new User("GabrielaUser1", "Gabriela@gmail.com", "00000000000");
const user2 = new User("JuliaUser2", "Julial234@gmail.com", "55555555555555");
const user3 = new User("User3", "Dionata@gmail.com", "66666666666");

const tweet1 = new Tweet("tweet de rafaelHenkel", user1.username, "Tweet");
const tweet2 = new Tweet("tweet de rafael", user1.username, "Tweet");
const tweet3 = new Tweet("ola!", user2.username, "Tweet");

//enviar os tweets do usuario
user1.sendTweet(tweet1);
user1.sendTweet(tweet2);
user2.sendTweet(tweet3);

//seguir outros usuarios
user2.follow(user2);
user2.follow(user1);
user3.follow(user1);

//postar tweets no banco de dados
tweet1.tweetPost();
tweet2.tweetPost();
tweet3.tweetPost();

//replyes de tweets
tweet1.reply("reply show de bola", user1.username);
tweet3.reply("reply show de bola2", user2.username);

//curtir tweets
tweet1.like(user2.username);
tweet1.like(user1.username);
tweet3.like(user3.username);

// user1.showTweets()
user1.showFeed();
