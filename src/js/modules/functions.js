//---------OPEN_CLOSE-BLOCK---------
/*
export function tel() {
	const arr=document.querySelector('.arow'),
			content=document.querySelector('.sub-menu');
	arr.addEventListener('click', ()=>{
		arr.classList.toggle('close')
		content.style.maxHeight = null;
		if(arr.classList.contains('close')){
			
			content.style.maxHeight = content.scrollHeight +'px';			
		}
	})

}
*/
//--------------two functions((((--------------
export function burger(){
	const buttons = document.querySelector(".burger_menu")
	const menu = document.querySelector(".header_first-section")

	buttons.addEventListener('click' , () => {
		menu.classList.toggle("active");
		buttons.classList.toggle("active");
	})
	
}

//--------------Func--------------\\




