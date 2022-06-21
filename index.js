const menuToggler = document.querySelector('#toggler'),
      body = document.querySelector('body'),
      mainContainer = document.querySelector('.main__inner > .thumbnails');

    //   data = require('./resources.json');

menuToggler.addEventListener('click',(e) => {
    console.log('clicked',e.target.checked)
    e.target.checked ?
        body.classList.add('no-scroll'):
        body.classList.remove('no-scroll')
})


async function loadImage(){
    try{
        let data = await fetch('./resources.json');
        data = await data.json();
        data.forEach(data => {
            const li = document.createElement('li');
            li.classList.add('shot-thumbnail');
            li.setAttribute('id',data.id);
            if(data.videoTeaser){
                li.innerHTML = `
                <div class="shot-thumbnail__main video" data-video-teaser = "${data.videoTeaser}">
                    <figure>
                        <img src = "${data.thumbnailImage}" /> 
                     </figure>
                </div>
                <div class="shot-thumbnail__info">
                    <div class="info__user">
                        <img src="${data.profileImage}" alt="">
                        <span class="username">
                            ${data.userName}
                        </span>
                        <span class="badge pro">${data.badge}</span>
                    </div>
                    <div class="extra-info">
                        <div class="likes">
                            <i class="fas fa-heart"></i>
                            <span>${data.likes}</span>
                        </div>
                        <div class="views">
                            <i class="fas fa-eye"></i>
                            <span>${data.views}</span>
                        </div>
                    </div>
                </div>
            `;
            }else{
                li.innerHTML = `
                    <div class="shot-thumbnail__main">
                     <figure>
                        <img src = "${data.thumbnailImage}" /> 
                     </figure>
                    </div>
                    <div class="shot-thumbnail__info">
                        <div class="info__user">
                            <img src="${data.profileImage}" alt="">
                            <span class="username">
                                ${data.userName}
                            </span>
                            <span class="badge pro">${data.badge}</span>
                        </div>
                        <div class="extra-info">
                            <div class="likes">
                                <i class="fas fa-heart"></i>
                                <span>${data.likes}</span>
                            </div>
                            <div class="views">
                                <i class="fas fa-eye"></i>
                                <span>${data.views}</span>
                            </div>
                        </div>
                    </div>
                `;
            }
            mainContainer.append(li);
        })
        document.querySelectorAll('.shot-thumbnail').forEach(shot => {
            console.log('shot = ',shot)
            shot.addEventListener('mouseover',(e) => {
                console.log(e.target);
                if(e.target.children[0].dataset.videoTeaser
                    && !e.target.children[0].children[1] 
                    ){
                    const video = document.createElement('video');
                    // const autoplay = document.createAttribute('autoplay');
                    video.setAttribute('autoplay',true);
                    video.src = e.target.children[0].dataset.videoTeaser;
                    e.target.children[0].append(video);
                    console.log('added')
                }
            })
        })
    }catch(err){
        console.log(err);
    }
}




window.addEventListener('DOMContentLoaded',() => {
    console.log('loaded');
    loadImage();
    // for(let i = 0 ; i < 20 ; i++){
    // const li = document.createElement('li');
    // li.classList.add('shot-thumbnail');
    // li.setAttribute('id','18525438');
    // li.innerHTML = `
    //         <div class="shot-thumbnail__main">
    //             <figure>
    //                 <img src="https://cdn.dribbble.com/users/3293385/screenshots/18525438/media/0871580201c01307eddc89e5b7a2808f.png" alt="">
    //             </figure>
    //         </div>
    //         <div class="shot-thumbnail__info">
    //             <div class="info__user">
    //                 <div class="profile-image">
    //                     <img src="https://cdn.dribbble.com/users/6567474/avatars/mini/b849c692c6c9fc9cfdca178b90e354d2.png?1607746416" alt="">
    //                 </div>
    //                 <span class="username">
    //                     Vektora
    //                 </span>
    //                 <span class="badge pro">Team</span>
    //             </div>
    //             <div class="extra-info">
    //                 <div class="likes">
    //                     <i class="fas fa-heart"></i>
    //                     <span>99</span>
    //                 </div>
    //                 <div class="views">
    //                     <i class="fas fa-eye"></i>
    //                     <span>7.4k</span>
    //                 </div>
    //             </div>
    //         </div>
    //     `;
    //     mainContainer.append(li);
    // }
})

window.addEventListener('scroll',(e) => {
    // console.log('scrolling')
    // if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    //     loadImage();
    // }
})