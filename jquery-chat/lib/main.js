"use strict";

$(document).ready(function () {
  $(document).on("click", ".chatSmall", function () {
    $(this).hide();
    $(".chat-big").show();
  });
  $(document).on("click", ".bigSmile", function () {
    $(".smile").toggle();
  });
  $(document).on("click", ".line", function () {
    $(".chat-big").hide();
    $(".chatSmall").show();
  });
  var input = document.querySelector('#myInput');
  var chat = document.querySelector(".chat-content");
  var deleteMsg = document.querySelector('.deleted');
  $(document).on("click", ".send", function (e) {
    var userInput = input.value.trim();
    var checkInput = document.createElement('input');
    var pic = document.createElement('div');
    var para = document.createElement('p');
    var div = document.createElement('div');

    if (userInput[0].toUpperCase() === userInput[0]) {
      pic.className = "imageLeft";
      div.classList.add("left");
    } else {
      div.classList.add("right");
      pic.className = "imageRight";
    }

    pic.onmouseover = function () {
      if (pic.className === 'imageLeft') {
        this.style.backgroundImage = 'url(images/call-smile.jpg)';
      }

      return;
    };

    pic.onmouseout = function () {
      if (pic.className === 'imageLeft') {
        this.style.backgroundImage = 'url(images/call.jpg)';
      }

      return;
    };

    pic.onclick = function deletePic() {
      div.classList.toggle('changeDiv');

      if (div.classList.contains("changeDiv")) {
        deleteMsg.classList.add('d-block');
      } else {
        deleteMsg.classList.remove('d-block');
      }
    };

    $(document).on("click", ".deleted", function () {
      $("div.changeDiv").remove();
    });
    para.innerText = userInput;
    div.appendChild(para);
    div.appendChild(pic);
    chat.appendChild(div);
    input.value = "";
  });
  $(document).on("keydown", "#myInput", Chat);

  function Chat(e) {
    if (e.keyCode === 13 && e.shiftKey === false) {
      var userInput = input.value.trim();
      var checkInput = document.createElement('input');
      var pic = document.createElement('div');
      var para = document.createElement('p');
      var div = document.createElement('div');

      if (userInput[0].toUpperCase() === userInput[0]) {
        pic.className = "imageLeft";
        div.classList.add("left");
      } else {
        div.classList.add("right");
        pic.className = "imageRight";
      }

      pic.onmouseover = function () {
        if (pic.className === 'imageLeft') {
          this.style.backgroundImage = 'url(images/call-smile.jpg)';
        }

        return;
      };

      pic.onmouseout = function () {
        if (pic.className === 'imageLeft') {
          this.style.backgroundImage = 'url(images/call.jpg)';
        }

        return;
      };

      pic.onclick = function deletePic() {
        div.classList.toggle('changeDiv');

        if (div.classList.contains("changeDiv")) {
          deleteMsg.classList.add('d-block');
        } else {
          deleteMsg.classList.remove('d-block');
        }
      };

      $(document).on("click", ".deleted", function () {
        $("div.changeDiv").remove();
      });
      para.innerText = userInput;
      div.appendChild(para);
      div.appendChild(pic);
      chat.appendChild(div);
      input.value = "";
    }
  }
});