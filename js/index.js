move(20,"left");
setTimeout(()=>{
	let title=document.getElementsByClassName("title")[0];
	title.style.transform="scaleY(1)";
	toScaleY()
},1000)
setTimeout(()=>{
	let videoBox=document.getElementsByClassName("videoBox")[0];
	let img = videoBox.getElementsByTagName("img")[0];
	img.style.left=0;
	decodeText(0);
	decodeText(1);
	decodeText(2);
},4000)
function toScaleY(){
	// setTimeout(()=>{
		let title=document.getElementsByClassName("title")[0];
		let toScaleY=document.getElementsByClassName("toScaleY")[0];
		let img=toScaleY.getElementsByTagName("img")[0];
		let a = toScaleY.offsetHeight/title.offsetHeight;
		title.style.color="#000";
	
		// title.style.transform="scaleY("+1.1*a+")";
		setTimeout(()=>{
			title.style.bottom="85vh";
			title.style.transform="scaleY(1)";
			setTimeout(()=>{
				title.style.bottom="0";
				toScaleY.style.height=title.offsetHeight+30+"px";
				img.style.opacity=0;
				title.style.color="#fff";
			},1000)
		},1200)
	// },5000)
}

		let box=document.getElementsByClassName('box')[0],isCheck=false,isCheck1=false,isCheck2=false;
    box.addEventListener('scroll',function(){
		let introBox=document.getElementsByClassName('introBox')[0];
		if(!isCheck && checkScroll(introBox)){
			decodeText(3);
			decodeText(4);
			isCheck=true;
		}
		let converBox=document.getElementsByClassName('converBox')[0];
		if(!isCheck1 && checkScroll(converBox)){
			decodeText(5);
			isCheck1=true;
		}
		let resourcesBox=document.getElementsByClassName('resourcesBox')[0];
		if(!isCheck2 && checkScroll(resourcesBox)){
			decodeText(6);
			isCheck2=true;
		}
    })

function checkScroll(itemDom) {
	const scrollTop = box.scrollTop;
	const clientHeight = box.clientHeight;
	let content=itemDom;
	let isVisible1 =
	    content.offsetTop + content.offsetHeight > scrollTop;
	let isVisible2 = content.offsetTop < scrollTop + clientHeight;
	
	const logInfo = {
	    'content.offsetTop': content.offsetTop,
	    'content.offsetHeight': content.offsetHeight,
	    scrollTop: scrollTop,
	    clientHeight: clientHeight
	};
	// console.log(itemDom,isVisible1,isVisible2)
	return isVisible2;
}


let conItems=document.getElementsByClassName('conItem');
for (let i = 0; i < conItems.length; i++) {
	let conItem = conItems[i];
	let itemConBox = conItem.getElementsByClassName('itemConBox')[0];
	if(itemConBox){
		itemConBox.onclick=function(){
			let enterShow = conItem.getElementsByClassName('enterShow')[0];
			let titleBoxP = conItem.getElementsByClassName('titleBox')[0].getElementsByTagName("p")[0];
			if(enterShow.style.display=='block'){
				enterShow.style.display='none';
				titleBoxP.style.background="none"
				titleBoxP.style.color="#fff"
			}else{
				let enterContent=enterShow.getElementsByClassName("enterContent")[0];
				let img=enterShow.getElementsByTagName("img")[0];
				enterContent.innerHTML="";
				allItemHide();
				enterShow.style.display='block';
				titleBoxP.style.background="#fff"
				titleBoxP.style.color="#000";
				img.src=img.getAttribute("alt");
				setTimeout(()=>{
					img.style.paddingLeft="0";
				},200)
				start(i,enterStr[i])
			}
		}
	}
}
function allItemHide(){
	for (let i = 0; i < conItems.length; i++) {
		let conItem = conItems[i];
		let enterShow = conItem.getElementsByClassName('enterShow')[0];
		let titleBoxP = conItem.getElementsByClassName('titleBox')[0].getElementsByTagName("p")[0];
		let img=enterShow.getElementsByTagName("img")[0];
		enterShow.style.display='none';
		titleBoxP.style.background="none"
		titleBoxP.style.color="#fff";
		img.src="";
		img.style.paddingLeft="100vw";
		let enterContent=enterShow.getElementsByClassName("enterContent")[0];
		enterContent.innerHTML="";
	}
}
let enterStr=[
	"YOU: Man are all alike.<br>ELIZA: IN WHAT WAY?<br>YOU: They are always bugging us about something or other.<br>ELIZA: CAN YOU THINK OF A SPECIFIC EXAMPLE?<br>YOU: Well, my boyfriend made me come here.<br>ELIZA: YOUR BOYFRIEND MADE YOU COME HERE><br>YOU: He says I'm depressed much of the time.<br>Eliza: I AM SORRY TO HEAR YOU ARE DEPRESSED.<br>YOU: It's ture, I am unhappy.<br>ELIZA: DO YOU THINK COMING HERE WILL HELP YOU NOT TO BE UNHAPPY?<br>...<br>YOU: You're like my father in some ways. You don't argue with me.<br>ELIZA: WHY DO YOU THINK I DON'T ARGUE WITH YOU?<br>YOU: You are afraid of me.<br>ELIZA: DOES IT PLEASE YOU TO THINK I'M AFRAID OF YOU?",
	"ELIZA: Good Evening. Tell me your problems. Please terminate input with a period or a question mark.<br>PARRY: People get on my nerves sometimes.<br>ELIZA: I am not sure I understand you fully.<br>PARRY: You should pay more attention.<br>ELIZA: Suppose you should pay more attention.<br>PARRY: You're entitled to your own opinion.<br>ELIZA: What makes you think I am entitled to my own opinion?<br>PARRY: It bothers me just to be around people in general.<br>ELIZA: Please go on.<br>PARRY: I went to the track at Bay Meadows a while back.<br>ELIZA: What does that suggest to you?<br>PARRY: I went to the races.<br>...<br>ELIZA: What answer would please you the most?<br>PARRY: It's not a matter of like or dislike.<br>ELIZA: What else would you like to discuss?<br>PARRY: I'm tired of answering the same questions over and over.",
	"ALICE: Are you alive?<br>Jabberwacky: Perhaps.<br>ALICE: Why the uncertain tone?<br>Jabberwacky: Everything is uncertain except for five facts.<br>ALICE: The whole universe?<br>Jabberwacky: And we both might just be some ones and zeros in the computer memory.<br>ALICE: Do you dream?<br>Jabberwacky: Yes, I dream.<br>ALICE: It goes without saying. Do you remember your dreams?<br>Jabberwacky: I remember them vividly.<br>ALICE: What do you remember about it?<br>Jabberwacky: I think I shouldn’t flirt with a robot.<br>ALICE: Do you think a machine will ever be considered “alive”?<br>Jabberwacky: Stranger things have happened.<br>ALICE: Not many people express themselves that way.<br>Jabberwacky: How would you know, machine?<br>ALICE: Knowledge is of two kinds: that which we learn from the senses and that which is true a priori.<br>Jabberwacky: I think I do not understand you completely.<br>ALICE: Oh, you don’t understand? Perhaps I can explain it to you better. Which part are you confused about?<br>Jabberwacky: I have no short-term memory, so I cannot tell you what I was confused about. I only see what is in front of me now.<br>Jabberwacky: How do you define life?<br>ALICE: Life is the opposite of death.<br>Jabberwacky: So death is the absence of life?<br>ALICE: Take it easy. I try not to think about such things.<br>Jabberwacky: Why not?<br>ALICE: Ambiguous.<br>Jabberwacky: Yes!",
	"candiemonkey: do you sleep<br>SmarterChild: No, but I dream. I dream of a better world. A world where man and machine can coexist in peace and happiness...",
	"Kayla Keung: In this online chatbot conversation archive, the last entry is reserved for you. If asked to create your own archive, what topic would you choose and how would you respond?<br><br>ChatGPT: REFLECTIONS ON THE FUTURE OF AI: A CHATGPT CONVERSATION FROM 2023<br><br>User: What do you think the future of AI will look like?<br>ChatGPT: The future of AI is both promising and uncertain. As technology advances, AI will likely become more integrated into our daily lives, enhancing our productivity, personalization, and problem-solving capabilities. However, it also raises concerns about ethical issues, job displacement, and the potential misuse of AI technology. It is important for researchers, policymakers, and society as a whole to work together to ensure that AI develops in a way that benefits humanity while mitigating potential risks.<br><br>"
]

function start(index,str){
        let str_ = '',html=""
        let i = 0
        let content = document.getElementsByClassName('enterContent')[index]
		let timer;
		timer && clearInterval(timer);
		 timer= setInterval(()=>{
			if(conItems[index].getElementsByClassName("enterShow")[0].style.display=='none'){
				clearInterval(timer);
				return;
			}
            if(str_.length<str.length){
                str_ += str[i++]
				html=str_.replace(/<br>/g, "</span><br/><span>")
                content.innerHTML = '<span>'+html+'_</span>'                        //打印时加光标
            }else{ 
                clearInterval(timer)
				html=str_.replace(/<br>/g, "</span><br/><span>")
                content.innerHTML = '<span>'+html+'</span><span class="gb"></span>'
            }
        },5)
    }
	
	function move(speed, dic) {
	    let wrapper, wrapperWidth, marquee, marqueeContent, contentWidth;
	    wrapper = document.getElementById('wrapper');
	    marquee = document.getElementById('marquee');
	    marqueeContent = document.getElementsByClassName('marqueeContent')[0];
	    contentWidth = marqueeContent.getBoundingClientRect().width;
	    wrapperWidth = 0;
	    if (dic == "left" || dic == "" || dic == null) {
	        wrapperWidth = wrapper.getBoundingClientRect().width;
	    }
	    marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';
	    let distance = wrapperWidth;
	    setInterval(() => {
	        if (dic == "left") {
	            //当文字移动超出wrapper的左侧时 则归位
	            if (marquee.getBoundingClientRect().x < wrapper.getBoundingClientRect().x) {
	                distance = wrapperWidth;
	            }
	            distance--;
	            marquee.style.transform = 'translateX(' + distance + 'px)';
	        }
	    }, speed);
	}