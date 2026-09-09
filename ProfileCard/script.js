const followButton = document.querySelector("#followButton")
const followers = document.querySelector("#followers")
const messageButton = document.querySelector("#messageButton")
const formInput = document.getElementById("formInput")
const sendBtn = document.getElementById("sendBtn")
const msgInput = document.getElementById("msgInput")
const messageList = document.getElementById("messageList")

let isFollowing = false

followButton.addEventListener('click', function () {
  let sumFollowers = parseInt(followers.textContent)
  if (!isFollowing) {
    isFollowing = true
    followButton.textContent = "Following"
    sumFollowers += 1
    followers.textContent = sumFollowers
  } else {
    isFollowing = false
    sumFollowers -= 1
    followButton.textContent = "Follow"
  }

  followers.textContent = sumFollowers
})

messageButton.addEventListener("click", function() {
  if (formInput.style.display === "none") {
    formInput.style.display = "block"
  } else {
    formInput.style.display = "none"
  }
})

sendBtn.addEventListener("click", function() {
  if (msgInput.value.trim() !== "") {
    const newMsg = document.createElement("p")
    newMsg.textContent = msgInput.value

    messageList.appendChild(newMsg)

    msgInput.value = ""
  }
})