import * as opList from './modules/functions.js';
import * as clipB from './modules/clipboard.js';
import * as label from './modules/labelChecked.js';
opList.burger();
clipB.clipBoard();
label.labelC();

const da = ()=> {
	const labelName = document.querySelector(".label_indetity");	
	const labelSum = document.querySelector(".labelSum");	

	const payChechout = document.querySelector(".payChechout");
	const checkExamination = document.querySelector(".checkExamination");
	
	const examination = document.querySelector(".examination");

	const nameTitle = document.querySelector(".nameTitle");
	const sumTitle = document.querySelector(".sumTitle");
	
	const donateName = document.querySelector(".donateName");	
	const donateSum = document.querySelector(".donateSum");	
	checkExamination.addEventListener("click",()=>{
		checkExamination.classList.toggle("checkActive")
	})


	payChechout.addEventListener("click",()=>{
	
	
		if(!(labelName.value.length >=4 && labelName.value.length <=16 )){
			nameTitle.style.opacity = "1";
			donateName.style.borderColor = "red";
		}
		if(labelSum.value <49){
			sumTitle.style.opacity = "1";
			donateSum.style.borderColor = "red";
		}
		
		(checkExamination.classList.contains("checkActive"))?examination.style.border = "":examination.style.border = "1px solid red"
	
	})

}
da();