setInterval(() => {
    let d = new Date();
    let ht = d.getHours();
    let mt = d.getMinutes();
    let st = d.getSeconds();
    let hrotate = 30*ht + mt/2;
    let mrotate = 6*mt;
    let srotate = 6*st;

    hr.style.transform = `rotate(${hrotate}deg)`;
    min.style.transform = `rotate(${mrotate}deg)`;
    sec.style.transform = `rotate(${srotate}deg)`;

}, 1000);