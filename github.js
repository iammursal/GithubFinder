class Github {
    constructor() {
        // this.client_id = 'c0226c7723dcb9b31ef7';
        // this.client_secret = '607ec94820444b0f2939ef047243cfada060c05d';
        this.token = '899f4ff8107a23b7c958583ef42eca3cd9fd4e48';
    }

    async getUser (user) {
        // const profileRes = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileRes = await fetch(`https://api.github.com/users/${user}`, {
            headers: { authorization: "token 899f4ff8107a23b7c958583ef42eca3cd9fd4e48" }
         });
        const repoRes = await fetch(`https://api.github.com/users/${user}/repos?per_page=5&sort_by=created:asc`, { headers: {
         authorization: "toker 899f4ff8107a23b7c958583ef42eca3cd9fd4e48"
        }});
        const profile = await profileRes.json();
        const repo = await repoRes.json();
        
        return {
            profile,
            repo
        }
    }


}