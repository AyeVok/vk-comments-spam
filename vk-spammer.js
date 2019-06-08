  let access_token = "token";
  let text = "mytext,vk-comments-spam".split(",");
  let owner_id = "1";  
  let post_id = "1337"; 
  let attachments = "";
  let reply = ""; 
  let group_sender = "1"; 
  let time = "2000";

  vk.access_token = access_token;

  Array.prototype.random = function() {
      return this[Math.floor(this.length * Math.random())];
  };

  setInterval(function() {
      vk._api("wall.createComment", {
          message: text.random(),
          owner_id: owner_id,
          post_id: post_id,
          attachments: attachments,
          reply_to_comment: reply,
          from_group: group_sender,
          version: "5.95"
      }, function(a) {
          kalert.info("Добавлен комментарий к посту vk.com/wall" + owner_id + "_" + post_id);
      });
  }, time);
