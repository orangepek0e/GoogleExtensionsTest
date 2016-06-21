//content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if(request.message === "clicked_browser_action"){
    var firstHref = $("a[href^='http']").eq(0).attr("href");

    alert("Here's the first link on this page:"+" "+firstHref );

    //ooh shiny
    //send a message to background.js containing the first href on a page, which we'll want to open in a new tab.
    chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
  }
}
);
