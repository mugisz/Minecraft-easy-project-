//---------TAB---------
document.addEventListener("mousedown",documentActions);	
export function documentActions(e) {
	const targerElement =e.target;
	if(targerElement.closest('[data-adp]')){
		const subMenuId = targerElement.dataset.adp ;
		const subMenu = document.querySelector(`[data-subAdp="${subMenuId}"]`);
		if(subMenu){
			const da = document.querySelector(".open");
			const ne = document.querySelector(".sub_open");
			const backArrTitle = document.querySelectorAll(".back_obj_title");
			const backCrros = document.querySelectorAll(".cros");
			backCrros.forEach((item)=>{
				item.addEventListener("click",()=>{
					targerElement.classList.remove('open'); 
					subMenu.classList.remove('sub_open'); 
				})
			})
			backArrTitle.forEach((item)=>{
				item.addEventListener("click",()=>{
					targerElement.classList.remove('open'); 
					subMenu.classList.remove('sub_open'); 
				})
			})
			
			if(da && da !== targerElement){
				da.classList.remove('open');
				ne.classList.remove('sub_open');
				
				//ne.classList.add('content-hiden');
			}
			targerElement.classList.toggle('open'); 
			subMenu.classList.toggle('sub_open'); 
		}else{
			console.log("Where is pass");
		}
		e.preventDefault();
	}
}
