class UI {
    constructor(){
    this.profile = document.querySelector("#profile");
    }

    // Show Profile
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary mt-3">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary mt-3">Public Gist: ${user.public_gists}</span>
                        <span class="badge badge-success mt-3">Followers: ${user.followers}</span>
                        <span class="badge badge-info mt-3">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
    `
    }

    // Show Repo
    showRepo(repos) {
        let output = '';
        repos.forEach(function(repo) {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="/blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary ">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary ">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success ">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `;
            document.querySelector("#repos").innerHTML = output;
        });
    }

    // Show Alert
    showAlert(message, className){
        // Creat div
        this.profile.innerHTML = `<div class="${className}" role="alert">${message}</div>`
    }

    // Clear Profile
    clearProfile() {
        this.profile.innerHTML = ``;
    }
 
}