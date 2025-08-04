require('dotenv').config()
const express = require("express");

const app = express();

const data = {
  "login": "harshmittal09",
  "id": 183969130,
  "node_id": "U_kgDOCvclag",
  "avatar_url": "https://avatars.githubusercontent.com/u/183969130?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/harshmittal09",
  "html_url": "https://github.com/harshmittal09",
  "followers_url": "https://api.github.com/users/harshmittal09/followers",
  "following_url": "https://api.github.com/users/harshmittal09/following{/other_user}",
  "gists_url": "https://api.github.com/users/harshmittal09/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/harshmittal09/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/harshmittal09/subscriptions",
  "organizations_url": "https://api.github.com/users/harshmittal09/orgs",
  "repos_url": "https://api.github.com/users/harshmittal09/repos",
  "events_url": "https://api.github.com/users/harshmittal09/events{/privacy}",
  "received_events_url": "https://api.github.com/users/harshmittal09/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Harsh_Mittal",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-10-06T05:47:39Z",
  "updated_at": "2025-08-04T05:12:36Z"
}

const port = process.env.port;

app.get("/login",(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>');
})

app.get("/youtube",(req,res)=>{
    res.send("<h2>Chai aur Code</h2>")
});

app.get("/data",(req,res)=>{
    res.json(data);
})

app.listen(process.env.port,()=>{
    console.log(`Server Started at port ${port}!!`);
})