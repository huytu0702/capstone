//function esc(element) {
//    document.addEventListener('keydown', event => {
//        if(event.key === 'Escape') {
//            element.style.display = 'none';
//        }
//    });
//    element.parentElement.querySelector('input[type=text]').addEventListener("blur", () => {
//        setTimeout(() => {
//            element.style.display = 'none';
//        },80);
//    });
//}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#flight-from").addEventListener("input", event => {
        flight_from(event);
    });

    document.querySelector("#flight-to").addEventListener("input", event => {
        flight_to(event);
    });

    document.querySelector("#flight-from").addEventListener("focus", event => {
        flight_from(event, true);
    });

    document.querySelector("#flight-to").addEventListener("focus", event => {
        flight_to(event, true);
    });

    document.querySelectorAll('.trip-type').forEach(type => {
        type.onclick = trip_type;
    });

});


function showplaces(input) {
    let box = input.parentElement.querySelector(".places_box");
    box.style.display = 'block';
}

function hideplaces(input) {
    let box = input.parentElement.querySelector(".places_box");
    setTimeout(() => {
        box.style.display = 'none';
    }, 300);
}

function selectplace(option) {
    let input = option.parentElement.parentElement.querySelector('input[type=text]');
    input.value = option.dataset.value.toUpperCase();
    input.dataset.value = option.dataset.value;
}

function flight_to(event, focus=false) {
    let input = event.target;
    let list = document.querySelector('#places_to');
    showplaces(input);
    if(!focus) {
        input.dataset.value = '';
    }
    if(input.value.length > 0) {
        fetch('query/places/'+input.value)
        .then(response => response.json())
        .then(places => {
            list.innerHTML = '';
            places.forEach(element => {
                let div = document.createElement('div');
                div.setAttribute('class', 'each_places_to_list');
                div.classList.add('places__list');
                div.setAttribute('onclick', "selectplace(this)");
                div.setAttribute('data-value', element.code);
                div.innerText = `${element.city} (${element.country})`;
                list.append(div);
            });
        });
    }
}

function flight_from(event, focus=false) {
    let input = event.target;
    let list = document.querySelector('#places_from');
    showplaces(input);
    if(!focus) {
        input.dataset.value = '';
    }
    if(input.value.length > 0) {
        fetch('query/places/'+input.value)
        .then(response => response.json())
        .then(places => {
            list.innerHTML = '';
            places.forEach(element => {
                let div = document.createElement('div');
                div.setAttribute('class', 'each_places_from_list');
                div.classList.add('places__list');
                div.setAttribute('onclick', "selectplace(this)");
                div.setAttribute('data-value', element.code);
                div.innerText = `${element.city} (${element.country})`;
                list.append(div);
            });
        });
    }
}

function trip_type() {
    document.querySelectorAll('.trip-type').forEach(type => {
        if(type.checked) {
            if(type.value === "1") {
                document.querySelector('#return_date').value = '';
                document.querySelector('#return_date').disabled = true;
            }
            else if(type.value === "2") {
                document.querySelector('#return_date').disabled = false;
            }
        }
    })
}

function flight_search() {
    if(!document.querySelector("#flight-from").dataset.value) {
        alert("Please select flight origin.");
        return false;
    }
    if(!document.querySelector("#flight-to").dataset.value) {
        alert("Please select flight destination.");
        return false;
    }
    if(document.querySelector("#one-way").checked) {
        if(!document.querySelector("#depart_date").value) {
            alert("Please select departure date.");
            return false;
        }
    }
    if(document.querySelector("#round-trip").checked) {
        if(!document.querySelector("#depart_date").value) {
            alert("Please select departure date.");
            return false;
        }
        if(!document.querySelector("#return_date").value) {
            alert("Please select return date.");
            return false;
        }
    }
}


    document.addEventListener('DOMContentLoaded', function () {
        var swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            loop: true,
            autoplay: {
                delay: 9000, // Thời gian tự động chuyển (5 giây = 5000ms)
                disableOnInteraction: false, // Không dừng autoplay khi người dùng tương tác
            },
        });
    });

document.addEventListener('DOMContentLoaded', function() {
    // Mảng chứa đường dẫn các ảnh
    const backgrounds = [
        'maldives.jpg',
        'santorini.jpg',
        'paris.jpg'
    ];
    let currentIndex = 0;

    // Hàm thay đổi background
    function changeBackground(direction) {
        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % backgrounds.length;
        } else {
            currentIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
        }
        
        const bannerElement = document.querySelector('.banner-background');
        bannerElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../static/img/${backgrounds[currentIndex]}')`;
    }

    // Thêm event listeners cho các nút
    document.querySelector('.background-nav.prev').addEventListener('click', () => {
        changeBackground('prev');
    });

    document.querySelector('.background-nav.next').addEventListener('click', () => {
        changeBackground('next');
    });

    // Auto change background every 8 seconds
    setInterval(() => {
        changeBackground('next');
    }, 8000);
});



