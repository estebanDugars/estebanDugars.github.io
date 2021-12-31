const faker = require("faker");
/* const fs = require('fs') */

function generateUsers() {
  let users = [];

  for (let id = 1; id <= 100; id++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();
    /* let avatarUrl = faker.image.avatar(200, 150, true, false); */
    let avatarUrl = faker.image.imageUrl(200, 150, "arch", true); // animals, tech, nature, arch(architecture), people

    users.push({
      id: id,
      first_name: firstName,
      last_name: lastName,
      email: email,
      avatar_Url: avatarUrl,
    });
  }

  return { data: users };
}

let dataObj = generateUsers();

export default dataObj;
