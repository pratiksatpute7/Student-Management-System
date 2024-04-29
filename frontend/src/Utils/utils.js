export const getUserFromLocalStorage = () => {
    const loggedInUser = localStorage.getItem("user");
    return loggedInUser;
  };
  

export const handleLogout = () => {
   
    localStorage.clear();
};