// Get random girl photo from internet
const getRandomPhoto = () => {
  const randomPhoto = Math.floor(Math.random() * 1000);
  const image = new Image();
  image.src = `https://picsum.photos/id/${randomPhoto}/200/300`;
};

var PROFILES_ARRAY = [
  {
    id: 1,
    name: "Anushka Sen",
    age: 21,
    photo: "https://wallpapercave.com/wp/wp5084755.jpg",
    status: "unknown",
    location: {},
  },
  {
    id: 2,
    name: "Priya Pandey",
    age: 19,
    photo: "https://images.pexels.com/photos/4725133/pexels-photo-4725133.jpeg",
    status: "unknown",
    location: {},
  },
  {
    id: 3,
    name: "Disha Thapar",
    age: 21,
    photo: "https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg",
    status: "unknown",
    location: {},
  },
  {
    id: 4,
    name: "Karishma Kumari",
    age: 20,
    photo: "https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg",
    status: "unknown",
    location: {},
  },
  {
    id: 5,
    name: "Riya Roy",
    age: 19,
    photo: "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg",
    status: "unknown",
    location: {},
  },
  {
    id: 6,
    name: "Trisha",
    age: 24,
    photo: "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg",
    status: "unknown",
    location: {},
  },
];
var PROFILES_ARRAY = [
  {
    name: "Alfa",
    age: 19,
    photo:
      "https://cdn.pixabay.com/photo/2018/07/26/06/46/girl-3562927__340.jpg",
    gender: "female",
  },
  {
    name: "Beta",
    age: 22,
    photo:
      "https://cdn.pixabay.com/photo/2015/03/03/18/58/girl-657753__340.jpg",
    gender: "female",
  },
  {
    name: "Gamma",
    age: 23,
    photo:
      "https://cdn.pixabay.com/photo/2015/01/12/10/44/portrait-597173__340.jpg",
    gender: "male",
  },
  {
    name: "Epsilon",
    age: 19,
    photo:
      "https://cdn.pixabay.com/photo/2016/06/19/12/46/woman-1466628__340.jpg",
    gender: "female",
  },
  {
    name: "Gorf",
    age: 18,
    photo:
      "https://cdn.pixabay.com/photo/2016/06/17/09/54/woman-1462985__340.jpg",
    gender: "male",
  },
  {
    name: "Dolly",
    age: 28,
    photo:
      "https://cdn.pixabay.com/photo/2016/12/31/10/12/american-indian-1942493__340.jpg",
    gender: "female",
  },
  {
    name: "Elli",
    age: 25,
    photo:
      "https://cdn.pixabay.com/photo/2015/09/02/12/25/girl-918417__340.jpg",
    gender: "female",
  },
  {
    name: "Irma",
    age: 26,
    photo:
      "https://cdn.pixabay.com/photo/2019/11/07/17/54/woman-4609514__340.jpg",
    gender: "male",
  },
  {
    name: "Quenty",
    age: 29,
    photo:
      "https://cdn.pixabay.com/photo/2020/05/07/08/30/coronavirus-5140667__340.jpg",
    gender: "female",
  },
  {
    name: "Quenty",
    age: 29,
    photo:
      "https://cdn.pixabay.com/photo/2020/05/07/08/30/coronavirus-5140667__340.jpg",
    gender: "female",
  },
  {
    name: "Eliza",
    age: 97,
    photo: "https://media.istockphoto.com/photos/terrible-dead-ghost-woman-in-the-water-picture-id545359498?k=6&m=545359498&s=612x612&w=0&h=0QN3jOkT_sw0Dv-HV5KK2QfGKmzF3jkQFObZzfmsZgU=",
    gender: "female"
  },
  {
    name: "Priya Verma",
    age: 97,
    photo: "https://thumbs.dreamstime.com/b/ghost-girl-17471592.jpg",
    gender: "female"
  }
];
const PROFILES = [];
const profileContainer = document.querySelector(".profiles");
var current = 3;
function initFillProfiles() {
  PROFILES_ARRAY.forEach((profile, i) => {
    const profileElement = document.createElement("div");
    if (i == current) {
      profileElement.setAttribute("class", "profile current");
    } else if (i < current) {
      profileElement.setAttribute("class", "profile left");
    } else {
      profileElement.setAttribute("class", "profile right");
    }
    profileElement.style.backgroundImage = `linear-gradient(to bottom, #0000 10%,#000), url("${profile.photo}")`;
    profileElement.innerHTML = `
        <div class="info-box">
        <h3 class="name">${profile.name}, ${profile.age}</h3>
        <p><i>📌</i> ${Math.floor(profile.age/3)}km away from you</p>
      </div>
        `;
    profileContainer.appendChild(profileElement);
    PROFILES.push(profileElement);
  });
}
initFillProfiles();
const bottomNavs = Array.from(document.querySelectorAll(".bottom ul li"));
const availablePages = ["home", "discover", "favourite"];

bottomNavs.forEach((bottomNav) => {
  bottomNav.addEventListener("click", (e) => {
    bottomNavs.forEach((bottomNav) => {
      bottomNav.classList.remove("selected");
    });
    availablePages.forEach((page) => {
      document.querySelector(`#${page}`).classList.remove("selected");
    });
    document
      .querySelector(`#${e.target.dataset.page}`)
      .classList.add("selected");
    bottomNav.classList.add("selected");
  });
});

let profiles = document.querySelectorAll(".profile");

profiles.forEach((profile) => {
  profile.addEventListener("touchstart", startTouch, false);
  profile.addEventListener("touchmove", moveTouch, false);
});
var initialX = null;
var initialY = null;

function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
}

function moveTouch(e) {
  if (initialX === null) {
    return;
  }

  if (initialY === null) {
    return;
  }

  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;

  var diffX = initialX - currentX;
  var diffY = initialY - currentY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0) {
      console.log("swiped left");
      let right = current + 1;
      if (right == PROFILES_ARRAY.length) {
        right = 0;
        // PROFILES[right].style.transform="rotateZ(30deg) translateX(40%)";
      }
      PROFILES[current].setAttribute("class", "left profile");
      PROFILES[right].setAttribute("class", "current profile");
      current = right;
    } else {
      console.log("swiped right");
      let left = current - 1;
      if (left == -1) {
        left = PROFILES_ARRAY.length - 1;
        // PROFILES[left].style.transform="rotateZ(-30deg) translateX(-40%)";
      }
      PROFILES[current].setAttribute("class", "right profile");
      PROFILES[left].setAttribute("class", "current profile");
      current = left;
    }
  } else {
    // Need In future
    if (diffY > 0) {
      console.log("swiped up");
    } else {
      console.log("swiped down");
    }
  }

  initialX = null;
  initialY = null;

  e.preventDefault();
}
