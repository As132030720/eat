window.onload = function() {
  // 標題文字漸變效果
  document.querySelector('.title h1').style.opacity = 0;
  setTimeout(() => {
      document.querySelector('.title h1').style.transition = 'opacity 1s';
      document.querySelector('.title h1').style.opacity = 1;
  }, 500);

  // 點擊導航按鈕後滾動到相應的部分
  document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          target.scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // 當點擊"查看更多"時彈出視窗
  document.querySelector('.view-complete').addEventListener('click', function(e) {
      e.preventDefault();
      alert('歡迎寄Gmail:123@gmail.com來解決你的問題喔~');
  });

  // 輪播圖片及相應效果
  var items = document.getElementsByClassName("item");
  var circles = document.getElementsByClassName("circle");
  var leftBtn = document.getElementById("btn-left");
  var rightBtn = document.getElementById("btn-right");
  var content = document.querySelector('.content');
  var index = 0;
  var timer = null;

  var clearclass = function() {
      for (let i = 0; i < items.length; i++) {
          items[i].className = "item";
          circles[i].className = "circle";
          circles[i].setAttribute("num", i);
      }
  };

  function move() {
      clearclass();
      items[index].className = "item active";
      circles[index].className = "circle white";
  }

  rightBtn.onclick = function() {
      if (index < items.length - 1) {
          index++;
      } else {
          index = 0;
      }
      move();
  };

  leftBtn.onclick = function() {
      if (index < items.length) {
          index--;
      } else {
          index = items.length - 1;
      }
      move();
  };

  timer = setInterval(function() {
      rightBtn.onclick();
  }, 1500);

  for (var i = 0; i < circles.length; i++) {
      circles[i].addEventListener("click", function() {
          var point_index = this.getAttribute("num");
          index = point_index;
          move();
      });
  }

  content.onmouseover = function() {
      clearInterval(timer);
      timer = setInterval(function() {
          rightBtn.onclick();
      }, 2000);
  };

  content.onmouseleave = function() {
      clearInterval(timer);
      timer = setInterval(function() {
          rightBtn.onclick();
      }, 1500);
  };
};
