const $trendingTagList = document.querySelector('#trendingTag_list');
const $trendingSection = document.querySelector('#trendingSection');
const $previousBtn = document.querySelector('#previous-btn');
const $nextBtn = document.querySelector('#next-btn');
const $trendingSlider = document.querySelector('#trending__slider');

const Giphytrending = function (ApiKey) {
 this.ApiKey= ApiKey
 this.endpoint = {
     url_base: 'Http://api.giphy.com/v1',
     trending:'/gifs/trending',
     trendingTagsEndpoint:'/trending/searches',
 };

 this.getTrending = function (callback,limit = 12) {
     fetch (this.endpoint.url_base+ this.endpoint.trending+ '?api_key='+ this.ApiKey +'&limit='+limit)
     .then(dataType => dataType.json())
     .then(response => { 
         callback(response.data);
    });
 }

 this.getTrendingTags = function (callback) {
    fetch (this.endpoint.url_base+ this.endpoint.trendingTagsEndpoint + '?api_key='+ this.ApiKey)
    .then(dataType => dataType.json())
    .then(response => { 
        callback(response.data);
   });
}
} 

const giphTrendingService = new Giphytrending(apiKey)

giphTrendingService.getTrending( (data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
		const gifContainer = document.createElement('div');
		gifContainer.classList.add('gif__container');
		gifContainer.innerHTML = ` 
		<img class="gif" onclick="maximizeGif('${data[i].images.original.url}','${data[i].username}','${data[i].title}')" src="${data[i].images.original.url}" alt="${data[i].title}">
	
		<div class="gifActions">
			<div class="gifActions__btn">
				<div class="btn favorite" onclick="addToFav('${data[i].images.original.url}','${data[i].username}','${data[i].title}')"></div>
				<div class="btn download" onclick="downloadGif('${data[i].images.original.url}','${data[i].title}')"></div>
				<div class="btn maximize" onclick="maximizeGif('${data[i].images.original.url}','${data[i].username}','${data[i].title}')"></div>
			</div>
			<div class="gif__info">
				<p class="gif_user">${data[i].username}</p>
				<p class="gif_title">${data[i].title}</p>
			</div>
		</div>
		`;
		$trendingSlider.appendChild(gifContainer);
	}
},12)

giphTrendingService.getTrendingTags( (data) => {
    console.log(data)
    for (let i = 0; i < 6; i++) {
		const trendingTagItem = document.createElement('span');
		trendingTagItem.classList.add('trending__item');
		trendingTagItem.setAttribute(
			'onclick',
			`getSearch("${data[i]}")`
		);
		trendingTagItem.innerHTML = `${data[i]}`;
		$trendingTagList.appendChild(trendingTagItem);
	}
},)

const setTrendingBtn = () => {
	if (localStorage.getItem('dark-mode') === 'true') {
		$previousBtn.src = 'assets/button-slider-left-md-noct.svg';
		$nextBtn.src = 'assets/button-slider-right-md-noct.svg';
	} else {
		$previousBtn.src = 'assets/button-slider-left.svg';
		$nextBtn.src = 'assets/Button-Slider-right.svg';
	}
};

const nextSliderBtn = () => {
	$trendingSlider.scrollLeft += 400;
};

const prevSliderBtn = () => {
	$trendingSlider.scrollLeft -= 400;
};

$nextBtn.addEventListener('click', nextSliderBtn);
$previousBtn.addEventListener('click', prevSliderBtn);

$previousBtn.addEventListener('mouseover', () => {
	$previousBtn.src = 'assets/button-slider-left-hover.svg';
});

$nextBtn.addEventListener('mouseover', () => {
	$nextBtn.src = 'assets/Button-Slider-right-hover.svg';
});

$previousBtn.addEventListener('mouseout', setTrendingBtn);
$nextBtn.addEventListener('mouseout', setTrendingBtn);
