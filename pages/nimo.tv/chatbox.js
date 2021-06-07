(createActionButton = () => {
  if (!document.querySelector("#root > div.n-fx-sn.n-as-w100 > div.n-fx1 > div:nth-child(1) > div > div.nimo-room__main.n-as-padv-lg.n-as-w-min1050 > div:nth-child(2) > div.nimo-room__theater-section.n-as-mrgh-xxs-back.n-fx-bn.n-as-rel > div.n-as-mrgh-xxs.n-fx1.n-fx-col.n-fx-bn.bsc5 > div.nimo-rm.bc1.n-as-rndt.n-fx-sc.n-as-pad > div > div.n-fx-bc.n-as-w100.n-as-mrgb-xxs > div.nimo-rm_toolbar.n-fx0.n-fx-bc > div.nimo-btn-group.n-fx0.n-as-padh-xxs.nimo-dropdown-trigger")) {
    setTimeout(createActionButton, 1111)
    return false
  }

  let actionButton = document.createElement("button")
  actionButton.innerText = "Hide chat"
  actionButton.setAttribute("class", "nimo-btn n-fx0 nimo-btn-primary")

  let chatbox =
  document.querySelector(
    "#root > div.n-fx-sn.n-as-w100 > div.n-fx1 > div:nth-child(1) > div > div.nimo-room__main.n-as-padv-lg.n-as-w-min1050 > div:nth-child(2) > div.nimo-room__theater-section.n-as-mrgh-xxs-back.n-fx-bn.n-as-rel > div.n-as-mrgh-xxs.n-fx0.n-as-w340px.n-fx-bn.n-fx-col.bsc5.n-as-rnd.bc1.n-as-rel"
  )
  actionButton.addEventListener("click", () => {(
    chatbox.hasAttribute("style") ?
      chatbox.removeAttribute("style")
        : chatbox.setAttribute("style", "display: none")
  )})

  let navbarOfVideo = document.querySelector("#root > div.n-fx-sn.n-as-w100 > div.n-fx1 > div:nth-child(1) > div > div.nimo-room__main.n-as-padv-lg.n-as-w-min1050 > div:nth-child(2) > div.nimo-room__theater-section.n-as-mrgh-xxs-back.n-fx-bn.n-as-rel > div.n-as-mrgh-xxs.n-fx1.n-fx-col.n-fx-bn.bsc5 > div.nimo-rm.bc1.n-as-rndt.n-fx-sc.n-as-pad > div > div.n-fx-bc.n-as-w100.n-as-mrgb-xxs > div.nimo-rm_toolbar.n-fx0.n-fx-bc")
  navbarOfVideo.appendChild(actionButton)
  return true
})()
