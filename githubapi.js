import { formatDistance } from 'date-fns'

async function ghRepoDate(){
    let data = await fetch("https://api.github.com/repos/Cooki-Studios/tiles/commits")
        .then((response) => response.text())
        .then(data => {
            var dtStr = JSON.parse(data)[0].commit.committer.date;
            dtStr = JSON.stringify(dtStr).split("T");

            const [y, m, d] = dtStr[0].split(/-/);
            const [h, mm, s] = dtStr[1].split("Z")[0].split(/:/);
            date = new Date(y.split(/"/)[1], m - 1, d, h, mm, s);
            dist = formatDistance(date, new Date(), { addSuffix: true });
            return dist;
        })
        .catch(error => {
            console.error(error);
        });

    return data;
};