export const getUserFromLocalStorage = () => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      return user.userDetials;
    }
    else {
        console.log("user not logged in")
    }
  };
  

const handleLogout = () => {
    setUser({});
    setUsername("");
    setPassword("");
    localStorage.clear();
};