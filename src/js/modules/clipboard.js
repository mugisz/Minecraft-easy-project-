export function clipBoard(){
	const clip = document.querySelector('.clip_ip'),
			mes = document.querySelector('.copy_mes');
	
	clip.addEventListener("click",(event)=>{
		const elem = event.target;
	
		if(navigator.clipboard.writeText(elem.innerHTML)){
			mes.classList.add("active")
		}
		setTimeout(()=>{
			mes.classList.remove("active")
		},500)

	})
}