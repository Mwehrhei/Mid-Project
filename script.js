var today = new Date();  
document.body.innerHTML=today;




var posts = [
  {username:"Malibu",
   pic:"https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
   text:"In ancient times cats were worshipped as gods; they have not forgotten this.",
   likes:9,
   retweets:8,
   comments:7,
   // color:"blue",
   // id:1,
  },
   {username:"Michael",
   pic:"https://vignette.wikia.nocookie.net/shrek/images/b/bf/Changes.jpg/revision/latest/scale-to-width-down/340?cb=20170920000934",
   text:"Thank you, gentlemen! Someday, I will repay you. Unless, of course, I can't find you or if I forget.",
   likes:6,
   retweets:2,
   comments:3,
  },
   {username:"Amelia",
   pic:"https://www.biography.com/.image/t_share/MTY2MTkyNTIwNDIwNjY1Mjkx/amelia-earhart.jpg",
   text:"The more one does and sees and feels, the more one is able to do, and the more genuine may be one's appreciation of fundamental things like home, and love, and understanding companionship.",
   likes:8,
   retweets:2,
   comments:3,
  },
   {username:"Danny",
   pic:"https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1533970164/180809-Stern-Danny-Devito-hero_fmoisz",
   text:"I don't care whether I'm good enough. It don't care whether I snore or not. It don't care which God I pray to. There are only three things with that kind of unconditional acceptance: Dogs, donuts, and money.",
   likes:7,
   retweets:8,
   comments:3,
  },
   {username:"Sarah",
   pic:"https://s.abcnews.com/images/Politics/AP_sarah_palin_jt_140713_1_16x9_992.jpg",
   text:"Mr. President, the only thing that stops a bad guy with a nuke is a good guy with a nuke. - Sarah Palin",
   likes:4,
   retweets:2,
   comments:5,
  },
   {username:"Shaleyn",
   pic:"https://www.sandatlas.org/wp-content/uploads/1709-09.08.15_4-phyllite-Friarfjord-27-cm.jpg",
   text:"Black Friday at the geology museum was great! There were so many great shales!",
   likes:1,
   retweets:3,
   comments:5,
  },
]



var tweetEles=[];
 
 function tweet(twt){
   var that=this;
   
   this.container=twt.container; //
   this.username=twt.username;
   this.pic=twt.pic;
   this.text=twt.text;
   this.likes=twt.likes;
   this.retweets=twt.retweets;
   this.comments=twt.comments;
   this.delete=twt.delete; //

   
   document.body.style.backgroundColor="#BB9BA8";
   document.body.style.color="white";
   
   this.ele=document.createElement("div");
  
   this.deleteEle=document.createElement("button"); //
   this.usernameEle=document.createElement("h2");
   this.textEle=document.createElement("div");
   this.retweetsEle=document.createElement("div");
   this.commentsEle=document.createElement("div");
   this.picEle=document.createElement("p");
   this.likesEle=document.createElement("div");
   this.containerEle=document.createElement("div"); //
   
   
   
   this.usernameEle.innerHTML=twt.username;
   this.textEle.innerHTML=twt.text;
   this.retweetsEle.innerHTML="Retweets:"+twt.retweets;
   this.commentsEle.innerHTML="Comments:"+twt.comments;
   this.likesEle.innerHTML="Likes:"+twt.likes;
   this.deleteEle.innerHTML="Delete"; //
   
   
  this.retweetsEle.addEventListener("mouseover", function(){
  that.retweetsEle.style.color="green";  });
  this.retweetsEle.addEventListener("mouseout", function(){
  that.retweetsEle.style.color="white";  });
   
  this.commentsEle.addEventListener("mouseover", function(){
  that.commentsEle.style.color="blue";  });
  this.commentsEle.addEventListener("mouseout", function(){
  that.commentsEle.style.color="white";  }); 
   
  this.likesEle.addEventListener("mouseover", function(){
  that.likesEle.style.color="red";  });
  this.likesEle.addEventListener("mouseout", function(){
  that.likesEle.style.color="white";  });
   
  this.picEle.innerHTML='<img src="'+twt.pic+'"/>'
   
  this.retweetsEle.addEventListener("click", function(){
     that.retweets=that.retweets+1;
     that.retweetsEle.innerHTML="Retweets: "+that.retweets;
      if(that.retweets>=20){
        document.body.style.backgroundColor="green";
        document.body.style.color="white";
         }})
   
  this.commentsEle.addEventListener("click", function(){
     that.comments=that.comments+1;
     that.commentsEle.innerHTML="Comments: "+that.comments;
     if(that.comments>=20){
        document.body.style.backgroundColor="blue";
        document.body.style.color="white";
         }})
   
  this.likesEle.addEventListener("click", function(){
     that.likes=that.likes+1;
     that.likesEle.innerHTML="Likes: "+that.likes;
     if(that.likes>=20){
        document.body.style.backgroundColor="red";
        document.body.style.color="white";
          }})
   
   this.deleteEle.addEventListener("click", function(){
   that.ele.style.display = "none";                            //This is something I need to come back to because it does nothing so far
         });
   
   
   this.ele.appendChild(this.deleteEle);
   this.ele.appendChild(this.usernameEle);
   this.ele.appendChild(this.picEle);
    if(twt.pic){
      this.ele.appendChild(this.picEle);
      }
   this.ele.appendChild(this.picEle);
   this.ele.appendChild(this.textEle);
   this.ele.appendChild(this.likesEle);
   this.ele.appendChild(this.retweetsEle);
   this.ele.appendChild(this.commentsEle);
  
   this.ele.appendChild(this.likesEle);
   
   document.body.appendChild(this.ele);
 }
////////////////////////////////////////////////////////////////
var buttonEle = document.createElement("button");
buttonEle.innerHTML = "Add Tweet";
document.body.appendChild(buttonEle);
buttonEle.addEventListener("click", function(){
     newDummy.push(new dummyTarget());
         });

//////////////////////////////////////////TESTING ZONE FOR DUMMY///////////////////////////////////////////////////////////////////////////////////////////////

var dummy = [
 {username:"Target Dummy",
   pic:"https://gamepedia.cursecdn.com/wowpedia/0/0d/Target_Dummy_HS.jpg",
   text:"I'm a target dummy from WoW!",
   likes:3,
   retweets:1,
   comments:2,
  } 
]
var newDummy = [];
function dummyTarget(dummy){

var that=this;
   
   //this.container=dummy.container; //
   this.username=dummy.username;
   this.pic=dummy.pic;
   this.text=dummy.text;
   this.likes=dummy.likes;
   this.retweets=dummy.retweets;
   this.comments=dummy.comments;
   this.delete=dummy.delete; //

   //that.ele.style.display = "none";
   document.body.style.backgroundColor="#BB9BA8";
   document.body.style.color="white";
   
   this.ele=document.createElement("div");
  
   this.deleteEle=document.createElement("button"); //
   this.usernameEle=document.createElement("h2");
   this.textEle=document.createElement("div");
   this.retweetsEle=document.createElement("div");
   this.commentsEle=document.createElement("div");
   this.picEle=document.createElement("p");
   this.likesEle=document.createElement("div");
   this.containerEle=document.createElement("div"); //
   
   
   
   this.usernameEle.innerHTML=dummy.username;
   this.textEle.innerHTML=dummy.text;
   this.retweetsEle.innerHTML="Retweets:"+dummy.retweets;
   this.commentsEle.innerHTML="Comments:"+dummy.comments;
   this.likesEle.innerHTML="Likes:"+dummy.likes;
   this.deleteEle.innerHTML="Delete"; //
   
   
  this.retweetsEle.addEventListener("mouseover", function(){
  that.retweetsEle.style.color="green";  });
  this.retweetsEle.addEventListener("mouseout", function(){
  that.retweetsEle.style.color="white";  });
   
  this.commentsEle.addEventListener("mouseover", function(){
  that.commentsEle.style.color="blue";  });
  this.commentsEle.addEventListener("mouseout", function(){
  that.commentsEle.style.color="white";  }); 
   
  this.likesEle.addEventListener("mouseover", function(){
  that.likesEle.style.color="red";  });
  this.likesEle.addEventListener("mouseout", function(){
  that.likesEle.style.color="white";  });
   
  this.picEle.innerHTML='<img src="'+dummy.pic+'"/>'
   
  this.retweetsEle.addEventListener("click", function(){
     that.retweets=that.retweets+1;
     that.retweetsEle.innerHTML="Retweets: "+that.retweets;
      if(that.retweets>=20){
        document.body.style.backgroundColor="green";
        document.body.style.color="white";
         }})
   
  this.commentsEle.addEventListener("click", function(){
     that.comments=that.comments+1;
     that.commentsEle.innerHTML="Comments: "+that.comments;
     if(that.comments>=20){
        document.body.style.backgroundColor="blue";
        document.body.style.color="white";
         }})
   
  this.likesEle.addEventListener("click", function(){
     that.likes=that.likes+1;
     that.likesEle.innerHTML="Likes: "+that.likes;
     if(that.likes>=20){
        document.body.style.backgroundColor="red";
        document.body.style.color="white";
          }})
   
   this.deleteEle.addEventListener("click", function(){
   that.ele.style.display = "none";                            //This is something I need to come back to because it does nothing so far *EDIT IT WORKS NOW!!!!!!!!!*
         });
   
 
   this.ele.appendChild(this.deleteEle);
   this.ele.appendChild(this.usernameEle);
   this.ele.appendChild(this.picEle);
    if(dummy.pic){
      this.ele.appendChild(this.picEle);
      }
   this.ele.appendChild(this.picEle);
   this.ele.appendChild(this.textEle);
   this.ele.appendChild(this.likesEle);
   this.ele.appendChild(this.retweetsEle);
   this.ele.appendChild(this.commentsEle);
  
   this.ele.appendChild(this.likesEle);
   
   document.body.appendChild(this.ele);
 }




//////////////////////////////////////////TESTING ZONE FOR DUMMY////////////////////////////////////////////////////////////////////////////////////////////////////////

for(var i=0; i<posts.length; i++){
  tweetEles.push(new tweet(posts[i])) 
}

for(var i=0; i<dummy.length; i++){
  newDummy.push(new dummyTarget(dummy[i])) 
}

buttonEle.addEventListener("click", function(){
   newDummy.push(new dummyTarget(dummy[i]));
});


// Create an array of 6 Posts
// Each post should include the following
//   Username
//   Username profile Image
//   Post Text
//   Likes (max to start is 10)
//   Retweets (max to start is 10)
//   Comments (max to start is 10)
//   Create an overarching Constructor
// The overarching constructor should have
//   Current time
//   Should be listed in the top left corner of the web page
//   Current Date
//   Should be listed in the top left corner of the web page
//   Posts (empty array to start)
//   Theme (Color Property)
// The theme should give the HTML tag this background-color
// Add a Dumb Post
// Add a new post to your posts array including all the information needed for it to be a post. That post then should be visible to the user
// Render each post as a constructor
// Each post should display all the information listed from its object. The Image URL should actually generate an image. The image must have a width of 150px
// When I hover over the likes, retweets comments
// Likes should turn red, then return normal
// Retweets should turn green, then return to normal
// Comments should turn blue, then return to normal
// When I click on the likes, retweets comments should increase their value by 1
// Once one of these turns to 20. It will change the background color of the HTML to the color this button changes to when hovered over
// A delete button should appear in the top right of each post. When I click it, it should delete it from the posts array in the parent. It should no longer be visible after