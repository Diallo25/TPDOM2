let Blog = document.getElementsByClassName('body')
console.log(Blog);
for (let i = 0; i < Blog.length; i++) {
    let prix  = Blog[i].children[2];
    console.log(prix);
    let btnplus = Blog[i].children[3].children[0]
    !console.log(btnplus);

    let quantite = Blog[i].children[3].children[1];
    let btnmoins = Blog[i].children[3].children[2];
    let qtt = parseInt(quantite.innerHTML)
    let count = parseInt(prix.innerHTML)
    console.log(qtt)

    btnplus.addEventListener('click', () => {
        qtt++
        quantite.innerText = qtt < 10 ? '0' + qtt : qtt 
        prix.innerHTML = qtt * count
    });

    btnmoins.addEventListener('click', () => {
        qtt--;
        quantite.innerText = qtt < 10 ? '0' + qtt : qtt 
        prix.innerText = qtt * count
        if (quantite > 0) {
            qtt--
            qtt > 0
        }
    })
}