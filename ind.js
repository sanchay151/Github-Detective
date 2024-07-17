let currmode = "light";
let wrapper = document.querySelector("#wrapper");
let devdec = document.querySelector("h1");
let sb = document.querySelector(".search-box");
let st = document.querySelector("#search-text");
let ib = document.querySelector(".infobox");
let mchange = document.querySelector("#mode");
let mi = document.querySelector("#modeimage");
let er = document.querySelector("#noResults");
let un = document.querySelector("h2");
let ul = document.querySelector("#userlink");
let jd = document.querySelector("#joindate");
let ub = document.querySelector("#userbio");
let rn = document.querySelector("#reponum");
let fe=document.querySelector(".followers");
let follower = document.querySelector("#follownum");
let following = document.querySelector("#followingnum");
let uimage = document.querySelector("#userimage");
let li = document.querySelector("#loctext");
let ti = document.querySelector("#twittertext");
let wi = document.querySelector("#webtext");
let ci = document.querySelector("#companytext");
let btn = document.querySelector("#btn");
let pa=document.querySelector("#papa");
let ai=document.querySelector("#ai");
let repo=document.querySelector("#repotext");
let follow=document.querySelector("#followtext");
let fol=document.querySelector("#followingtext");
let repos=document.querySelector("#reponum");
let follows=document.querySelector("#follownum");
let fols=document.querySelector("#followingnum");

mchange.addEventListener("click", changemode);

function changemode() {
    if (currmode == "light") {
        wrapper.classList.add("dark");
        devdec.classList.add("dark");
        sb.classList.add("dark");
        st.classList.add("dark");
        ib.classList.add("dark");
        mchange.classList.add("dark");
        pa.classList.add("dark");     
        fe.classList.add("dark");
        ai.classList.add("dark");
        jd.classList.add("dark");
        ub.classList.add("dark");
        li.classList.add("dark");
        wi.classList.add("dark");
        ti.classList.add("dark");
        ci.classList.add("dark");
        repo.classList.add("dark");
        fol.classList.add("dark");
        follow.classList.add("dark");
        repos.classList.add("dark");
        fols.classList.add("dark");
        follows.classList.add("dark");
        ai.textContent = 'Light';
        mi.src = "Images/sun-icon.svg";
        currmode = "dark";
    } else {
        wrapper.classList.remove("dark");
        devdec.classList.remove("dark");
        sb.classList.remove("dark");
        st.classList.remove("dark");
        ub.classList.remove("dark");
        ib.classList.remove("dark");
        pa.classList.remove("dark");
        fe.classList.remove("dark");
        ai.classList.remove("dark");
        li.classList.remove("dark");
        wi.classList.remove("dark");
        ti.classList.remove("dark");
        ci.classList.remove("dark");
        jd.classList.remove("dark");
        repo.classList.remove("dark");
        fol.classList.remove("dark");
        follow.classList.remove("dark");
        repos.classList.remove("dark");
        fols.classList.remove("dark");
        follows.classList.remove("dark");
        mchange.classList.remove("dark");
        ai.textContent = 'Dark';
        mi.src = "Images/moon-icon.svg";
        currmode = "light";
    }
}

const url = "https://api.github.com/users/";
const username = 'loveBabbar';

getGitHubUserInfo(url + username);

btn.addEventListener("click", function (event) {
    const inputValue = document.getElementById('search-text').value;
    if (inputValue) {
        getGitHubUserInfo(url + inputValue);
    }
});

async function getGitHubUserInfo(gitUrl) {
    const response = await fetch(gitUrl);
    if (!response.ok) {
        er.style.display = 'block';
        return;
    }
    er.style.display = 'none';
    const data = await response.json();
    appenddata(data);
}

function appenddata(data) {
    uimage.src = data.avatar_url || 'default-image-path'; 
    un.textContent = data.name || 'N/A';
    ul.href = data.html_url || '#';
    ul.textContent = data.login || 'N/A';
    jd.textContent = data.created_at ? formatDate(data.created_at) : 'N/A';
    ub.textContent = data.bio || 'N/A';
    rn.textContent = data.public_repos || '0';
    follower.textContent = data.followers || '0';
    following.textContent = data.following || '0';
    li.textContent = data.location || 'Not Available';
    ti.href = data.twitter_username ? `https://twitter.com/${data.twitter_username}` : '#';
    ti.textContent = data.twitter_username || 'Not Available';
    ci.textContent = data.company || 'Not Available';
}

function formatDate(isoDate) {
    const date = new Date(isoDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);
    const day = date.getDate();
    const suffix = getOrdinalSuffix(day);
    const dateParts = formattedDate.split(' ');
    return `Joined ${dateParts[0]}${suffix} ${dateParts[1]} ${dateParts[2]}`;
}

function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}
