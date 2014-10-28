function showReviewTemplate() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var el = document.getElementById('new_comment_field');
      if (el !== null) {
        el.innerText = xhr.responseText;
      }
    }
  };

  var k = "template"
 chrome.storage.sync.get(null, function(all) {
  console.log(all)
});

  chrome.storage.sync.get(k, function (obj) {
    xhr.open("GET",
      "https://raw.github.com/leafme/strunk_white/master/review_template.md",
      true);
    xhr.send();
  });
};