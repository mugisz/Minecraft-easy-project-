
function sliderV4(){
		const sliderLine = document.querySelector('.slider-line'),
				dots =  document.querySelectorAll('.dot');

		if(window.innerWidth >= 1350){
			let position = 0,
				dotIndex = 0;

			const nextSlide = ()=>{
				if(position <(dots.length -1)* 1065){
					position +=1065;
					dotIndex++;
				}else{
					position = 0;
					dotIndex--;
				}
				sliderLine.style.left = -position +'px';
				thisSlide(dotIndex);
			} 
			const thisSlide= (index)=>{
				for(let dot of dots ){
					dot.classList.remove('active');
				}
				dots[index].classList.add('active');
			}
			dots.forEach((dot,index)=>{
				dot.addEventListener("click",()=>{
					position = 1065 * index;
					sliderLine.style.left = -position + 'px';
					dotIndex = index;
					thisSlide(dotIndex);
				})
			})
			
		





		}

}

//-------Назад\\--------Кнопки----\\
/*const previusSlide = ()=>{
		if(position > 0 ){
			position -=1080;
			dotIndex--;
		}else{
			position =(dots.length -1)* 1080;
			dotIndex = (dots.length -1);
		}
		sliderLine.style.left = -position +'px';
		thisSlide(dotIndex);
	} */

	/*nextBtn.addEventListener("click",nextSlide);
	prevBtn.addEventListener("click",previusSlide);*/s