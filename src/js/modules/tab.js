//---------TAB---------
document.addEventListener("mousedown",documentActions);	
export function documentActions(e) {
	const targerElement =e.target;
	if(targerElement.closest('[data-parent]')){
		const subMenuId = targerElement.dataset.parent ;
		const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
		if(subMenu){
			const da = document.querySelector(".open");
			const ne = document.querySelector(".sub_open");
			
			if(da && da !== targerElement){
				da.classList.remove('open');
				ne.classList.remove('sub_open');
				//ne.classList.add('content-hiden');
			}
			targerElement.classList.toggle('open'); 
			subMenu.classList.toggle('sub_open'); 
			
		}
		
		
		e.preventDefault();
	}
}
