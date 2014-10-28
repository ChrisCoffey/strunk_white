function loadPullRequestTemplate() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var el = document.getElementById('comment[body]');
      if (el !== null) {
        el.innerText = xhr.responseText;
      }
    }
  };

  chrome.storage.sync.get("template", function (obj) {
    xhr.open("GET",
      obj.template,
      true);
    xhr.send();
  });
};