const menuBtn=document.querySelector('#menu-btn');
const closeBtn=document.querySelector('#close-btn');
const menu=document.querySelector('.nav-items');

// Open nav menu
	menuBtn.addEventListener("click",() =>
			{
				menu.style.display="block";
				menuBtn.style.display="none";
				closeBtn.style.display="inline-block";
			})
// Close nav menu
	closeBtn.addEventListener("click",() =>
			{
				menu.style.display="none";
				menuBtn.style.display="inline-block";
				closeBtn.style.display="none";
			})
// show/hide faqs
	const faqs=document.querySelectorAll(".faqs-article");

	faqs.forEach(faq=>
		{
			faq.addEventListener("click",()=>
			{
				faq.classList.toggle("open");
				//change icon
					const icon =faq.querySelector(".faqs-icon i");
						if (icon.className ==='uil uil-plus')
						 	{
						 		icon.className='uil uil-minus';
						 	}
						 else
						 	{
						 		icon.className='uil uil-plus';		
						 	}
			})
		})
//add background to navbar
	window.addEventListener("scroll",() =>
			{
				document.querySelector("nav").classList.toggle('window-scroll',window.scrollY> 0);

			})