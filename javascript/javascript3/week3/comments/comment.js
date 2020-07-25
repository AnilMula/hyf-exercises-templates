class UserComment {
  constructor(username, content, time) {
    this.username = username;
    this.content = content;
    this.time = time;
  }
  getTimeSincePost() {
    return new Date().getTime() - this.time.getTime();
  }
  hasSwearWord() {
    const swearWords = ["crap", "damn"];
    const postWords = this.content.split(" ");
    const hasSwearWord = swearWords.find((swearWord) =>
      postWords.includes(swearWord)
    );

    return Boolean(hasSwearWord);
  }
}

class Post {
  constructor(username, content, postTime, likes, comments, shares) {
    this.username = username;
    this.content = content;
    this.postTime = postTime;
    this.likes = likes;
    this.comments = comments;
    this.shares = shares;
  }

  addLike(username, time) {
    const like = {
      username: username,
      time: time,
    };

    this.likes.push(like);
  }

  addComment(username, content, time) {
    this.comments.push(new UserComment(username, content, time));
  }

  doShare() {}

  save() {}

  logThis() {
    console.log(this.username);
    const likes = this.likes.length;
    let comments = " ";
    this.comments.forEach(
      (comment) => (comments = comments + " " + comment.content)
    );
    return `Total likes:${likes} and comments:${comments}`;
  }
}
const userPost = document.getElementById("post1");
const postContentLikesCommentsEtc = userPost.getElementsByTagName("div");

const postContent = postContentLikesCommentsEtc[0].innerHTML;
const postLikes = postContentLikesCommentsEtc[1];
const postComments = postContentLikesCommentsEtc[2];
const postStatus = userPost.querySelector("abbr");

const post1 = new Post("James", postContent, new Date(), [], [], []);

postLikes.addEventListener("click", () => {
  post1.addLike("James", new Date());
});

postComments.addEventListener("change", () => {
  const comment = postComments.querySelector("input").value;
  post1.addComment("James", comment, new Date());
  postComments.querySelector("input").value = "";
});

postStatus.addEventListener("mouseover", () => {
  postStatus.title = post1.logThis();
});
