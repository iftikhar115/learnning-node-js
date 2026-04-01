const bluebg = document.querySelector('#blue')
const redbg = document.querySelector('#red')
const greeenbg = document.querySelector('#green');
const resetbg = document.querySelector('#simplemode');
// if(bluebg) {bluebg.addEventListener('click', () => document.body.style.backgroundColor = 'blue')

// };
// if(redbg) {
//     redbg.addEventListener('click', () => document.body.style.backgroundColor = 'red')
// }
// if(greeenbg) {
//     greeenbg.addEventListener('click', () => document.body.style.backgroundColor = 'green');
// };
if(bluebg) {
    bluebg.addEventListener('click',function(e) {
        document.body.style.backgroundColor = e.target.id;
        document.body.style.color = 'white';
    } )
};
if(redbg) {
    redbg.addEventListener('click', function(e) {
        document.body.style.backgroundColor = e.target.id
        document.body.style.color = 'white';
    })
};
if(greeenbg) {
    greeenbg.addEventListener('click', function(e) {
        document.body.style.backgroundColor = e.target.id
        document.body.style.color = 'white';
    })
}
if(resetbg) {
    resetbg.addEventListener('click', function(e) {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    })
}

