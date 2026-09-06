const followButton = document.querySelector("#followButton")
const followers = document.querySelector("#followers")

let isFollowing = false

followButton.addEventListener('click', function () {
  isFollowing = true
  if (isFollowing) {
    followButton.innerHTML = "Following"
    followers.innerText += 1
  }
})