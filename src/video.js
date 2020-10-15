export const on = document.querySelectorAll(".flip-card")

for (let i = 0; i < on.length; i++) {
  on[i].onmouseover = flips
  on[i].onmouseout = backflips
}
export function flips() {
  const addClass = document.querySelectorAll(".flip-card")
  for (let i = 0; i < addClass.length; i++) {
    addClass[i].classList.add("flips");
    let video = document.querySelectorAll("video")
    for (let i = 0; i < video.length; i++) {
      video[i].play()
    }
  }
}
export function backflips() {
  const removeClass = document.querySelectorAll(".flip-card")
  for (let i = 0; i < removeClass.length; i++) {
    removeClass[i].classList.remove("flips");
    let video = document.querySelectorAll("video")
    for (let i = 0; i < video.length; i++) {
      video[i].pause()
    }
  }
}