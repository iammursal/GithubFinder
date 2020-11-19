// Init github
const github = new Github;
// Init ui
const ui = new UI;


// Default show profile
window.onload = getProfile = () => {
    let savedata = localStorage.getItem('username');
    console.log(savedata);
    github.getUser(savedata)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    
                } else {
                    console.log(data);
                    ui.showProfile(data.profile);
                    ui.showRepo(data.repo);
                    
                }
            })
}

// Searchbar input listner
searchUser = e => {
    // Get input text
    const userText = e.value;

    if (userText !== "") {
        // Make Http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // Show Alert
                    ui.showAlert('User not found', 'alert alert-danger')
                } else {
                    localStorage.setItem('username', userText);
                    console.log(data);
                    ui.showProfile(data.profile);
                    ui.showRepo(data.repo);
                    
                }
            })
        // console.log('hello')
    } else {
        // Clear Profile data
        ui.clearProfile();
    }
}