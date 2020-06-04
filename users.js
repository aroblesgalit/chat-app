// Our array of users
const users = [];

// Helper functions
// Add user
function addUser({ id, name, room }) {
    // Trim and change casings to lowercase
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    // Check if there is an existing user that this user is trying to log in with
    const existingUser = users.find(user => user.room === room && user.name === name);

    if(existingUser) {
        return { error: "Username is taken" };
    }

    const user = { id, name, room };
    users.push(user);

    return { user };
};

// Remove user
function removeUser(id) {
    const index = users.findIndex(user => user.id === id);

    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
};

// Get user
function getUser(id) {
    return users.find(user => user.id === id);
};

// Get users in room
function getUsersInRoom() {

};