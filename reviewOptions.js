var leaf_code_review_template = "https://raw.github.com/leafme/strunk_white/master/review_template.md";
var key = "template";

function change_url(e) {
  var obj = {};
  obj[key] = e.target.value || leaf_code_review_template;
  chrome.storage.sync.set(obj);
  window.alert("set");
}

function restore_options() {
  chrome.storage.sync.get(key, function (obj) {
    document.getElementById("address").value = obj[key];
  });
}

window.alert("doing work");

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#address').addEventListener('change', change_url);
document.querySelector('#reset').addEventListener('click', function () {

  chrome.storage.sync.clear(function () {
    var obj = {};
    obj[key] = leaf_code_review_template;
    chrome.storage.sync.set(obj);
    window.alert(obj[key]);
});
    document.querySelector('#address').value = leaf_code_review_template;
  });
});
document.querySelector('#close').addEventListener('click', function () {
  window.close();
});