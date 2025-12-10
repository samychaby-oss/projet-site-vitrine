const folders = document.querySelectorAll(
  ".folder-1, .folder-2, .folder-3, .folder-4"
);

folders[0].addEventListener("click", () => {
  for (let currentFolder = 0; currentFolder < folders.length; currentFolder++) {
    if (currentFolder == 0) {
      folders[currentFolder].classList.add("level-1-active");
    } else {
      elements[currentElement].classList.remove("level-1-active");
    }
  }
});

// let folderGroup = document.querySelector(".folder-group");

// folders.forEach((folder) => {
//   folder.addEventListener("click", () => {
//     folderGroup.classList.remove(
//       "level-1-active",
//       "level-2-active",
//       "level-3-active",
//       "level-4-active"
//     );
//     console.log(folders.click);
//     let A = folders.click;
//     console.log(A);
//   });
// });

// folderGroup.classList.add("level-1-active");
// folderGroup.classList.add("level-2-active");
// folderGroup.classList.add("level-3-active");
// folderGroup.classList.add("level-4-active");
