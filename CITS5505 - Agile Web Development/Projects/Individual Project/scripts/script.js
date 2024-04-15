// // Function to fetch and display the GitHub profile
// function fetchProfile() {
//     var username = document.getElementById("usernameInput").value.trim();
//     if (username === "") {
//       alert("Please enter a GitHub username.");
//       return;
//     }
//     fetch("https://api.github.com/users/" + username)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         document.getElementById("profileData").innerHTML = `
//           <div class="card">
//             <img class="profile-img" src="${data.avatar_url}" alt="Profile Picture">
//             <div class="profile-info">
//               <h2>${data.name}</h2>
//               <p>${data.bio}</p>
//               <p><strong>Followers:</strong> ${data.followers}</p>
//               <p><strong>Following:</strong> ${data.following}</p>
//               <p><strong>Public Repositories:</strong> ${data.public_repos}</p>
//               <p><a class="profile-link" href="${data.html_url}" target="_blank">View Profile on GitHub</a></p>
//             </div>
//           </div>
//         `;
//       })
//       .catch((error) => {
//         document.getElementById("profileData").innerHTML =
//           "<p>Error fetching user profile.</p>";
//         console.error("There was a problem with the fetch operation:", error);
//       });
//   }
  

// Function to fetch and display the GitHub profile based on the username entered in the input field
function fetchProfile() {
  // Get the username from the input field and trim any leading or trailing whitespace
  var username = document.getElementById("usernameInput").value.trim();
  
  // Check if the input is empty and alert the user if so
  if (username === "") {
    alert("Please enter a GitHub username.");
    return; // Exit the function if no username is entered
  }

  // Fetch the user's GitHub profile using the GitHub API
  fetch("https://api.github.com/users/" + username)
    .then((response) => {
      // If the response is not OK, throw an error
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse the JSON in the response
    })
    .then((data) => {
      // Display the fetched data in the 'profileData' element as a profile card
      document.getElementById("profileData").innerHTML = `
        <div class="card">
          <img class="profile-img" src="${data.avatar_url}" alt="Profile Picture">
          <div class="profile-info">
            <h2>${data.name}</h2>
            <p>${data.bio}</p>
            <p><strong>Followers:</strong> ${data.followers}</p>
            <p><strong>Following:</strong> ${data.following}</p>
            <p><strong>Public Repositories:</strong> ${data.public_repos}</p>
            <p><a class="profile-link" href="${data.html_url}" target="_blank">View Profile on GitHub</a></p>
          </div>
        </div>
      `;
    })
    .catch((error) => {
      // Display an error message in 'profileData' and log the error to the console
      document.getElementById("profileData").innerHTML = "<p>Error fetching user profile.</p>";
      console.error("There was a problem with the fetch operation:", error);
    });
}
