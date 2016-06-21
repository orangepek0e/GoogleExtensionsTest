//background.js

//Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab){
  //Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

//also shiny!!
//listen for a message from content.js, which will contain a URL which we'll use to open a new tab!
chrome.runtime.onMessage.addListener(function(request, sender, senderResponse){
    if(request.message === "open_new_tab"){
      chrome.tabs.create({"url": request.url});
    }
  }
);
