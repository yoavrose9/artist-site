const songs=[
 {title:"תשעבערב",note:"פתיח עם ים וירח.",spotify:"https://open.spotify.com/search/%D7%AA%D7%A9%D7%A2%D7%91%D7%A2%D7%A8%D7%91%20%D7%A8%D7%95%D7%96%D7%9F",apple:"https://music.apple.com/il/search?term=%D7%A8%D7%95%D7%96%D7%9F%20%D7%AA%D7%A9%D7%A2%D7%91%D7%A2%D7%A8%D7%91",youtube:"https://www.youtube.com/results?search_query=%D7%A8%D7%95%D7%96%D7%9F%20%D7%AA%D7%A9%D7%A2%D7%91%D7%A2%D7%A8%D7%91"},
 {title:"אני לא חוזר",note:"עם כיוון של שקיעה שקטה.",spotify:"https://open.spotify.com/search/%D7%90%D7%A0%D7%99%20%D7%9C%D7%90%20%D7%97%D7%95%D7%96%D7%A8%20%D7%A8%D7%95%D7%96%D7%9F",apple:"https://music.apple.com/il/search?term=%D7%A8%D7%95%D7%96%D7%9F%20%D7%90%D7%A0%D7%99%20%D7%9C%D7%90%20%D7%97%D7%95%D7%96%D7%A8",youtube:"https://www.youtube.com/results?search_query=%D7%A8%D7%95%D7%96%D7%9F%20%D7%90%D7%A0%D7%99%20%D7%9C%D7%90%20%D7%97%D7%95%D7%96%D7%A8"},
 {title:"איזה סימן",note:"עם באס וירוק זורם.",spotify:"https://open.spotify.com/search/%D7%90%D7%99%D7%96%D7%94%20%D7%A1%D7%99%D7%9E%D7%9F%20%D7%A8%D7%95%D7%96%D7%9F",apple:"https://music.apple.com/il/search?term=%D7%A8%D7%95%D7%96%D7%9F%20%D7%90%D7%99%D7%96%D7%94%20%D7%A1%D7%99%D7%9E%D7%9F",youtube:"https://www.youtube.com/results?search_query=%D7%A8%D7%95%D7%96%D7%9F%20%D7%90%D7%99%D7%96%D7%94%20%D7%A1%D7%99%D7%9E%D7%9F"},
 {title:"שאלות",note:"שיר שמבקש תשובה.",spotify:"https://open.spotify.com/search/%D7%A9%D7%90%D7%9C%D7%95%D7%AA%20%D7%A8%D7%95%D7%96%D7%9F",apple:"https://music.apple.com/il/search?term=%D7%A8%D7%95%D7%96%D7%9F%20%D7%A9%D7%90%D7%9C%D7%95%D7%AA",youtube:"https://www.youtube.com/results?search_query=%D7%A8%D7%95%D7%96%D7%9F%20%D7%A9%D7%90%D7%9C%D7%95%D7%AA"},
 {title:"הכל בשבילך",note:"בלדה עם אופק כחול.",spotify:"https://open.spotify.com/search/%D7%94%D7%9B%D7%9C%20%D7%91%D7%A9%D7%91%D7%99%D7%9C%D7%9A%20%D7%A8%D7%95%D7%96%D7%9F",apple:"https://music.apple.com/il/search?term=%D7%A8%D7%95%D7%96%D7%9F%20%D7%94%D7%9B%D7%9C%20%D7%91%D7%A9%D7%91%D7%99%D7%9C%D7%9A",youtube:"https://www.youtube.com/results?search_query=%D7%A8%D7%95%D7%96%D7%9F%20%D7%94%D7%9B%D7%9C%20%D7%91%D7%A9%D7%91%D7%99%D7%9C%D7%9A"},
 {title:"חלק מהלב (Feat. רוזן)",note:"שיתוף פעולה שמחבר חופים.",spotify:"https://open.spotify.com/search/%D7%97%D7%9C%D7%A7%20%D7%9E%D7%94%D7%9C%D7%91%20%D7%A8%D7%95%D7%96%D7%9F",apple:"https://music.apple.com/il/search?term=%D7%97%D7%9C%D7%A7%20%D7%9E%D7%94%D7%9C%D7%91%20%D7%A8%D7%95%D7%96%D7%9F",youtube:"https://www.youtube.com/results?search_query=%D7%97%D7%9C%D7%A7%20%D7%9E%D7%94%D7%9C%D7%91%20%D7%A8%D7%95%D7%96%D7%9F"},
 {title:"סובבת אותי (Feat. רוזן)",note:"משהו מסתובב באוויר.",spotify:"https://open.spotify.com/search/%D7%A1%D7%95%D7%91%D7%91%D7%AA%20%D7%90%D7%95%D7%AA%D7%99%20%D7%A8%D7%95%D7%96%D7%9F",apple:"https://music.apple.com/il/search?term=%D7%A1%D7%95%D7%91%D7%91%D7%AA%20%D7%90%D7%95%D7%AA%D7%99%20%D7%A8%D7%95%D7%96%D7%9F",youtube:"https://www.youtube.com/results?search_query=%D7%A1%D7%95%D7%91%D7%91%D7%AA%20%D7%90%D7%95%D7%AA%D7%99%20%D7%A8%D7%95%D7%96%D7%9F"},
 {title:"נופל לזה שוב",note:"שיר שמחפש קלילות.",spotify:"https://open.spotify.com/search/%D7%A0%D7%95%D7%A4%D7%9C%20%D7%9C%D7%96%D7%94%20%D7%A9%D7%95%D7%91%20%D7%A8%D7%95%D7%96%D7%9F",apple:"https://music.apple.com/il/search?term=%D7%A8%D7%95%D7%96%D7%9F%20%D7%A0%D7%95%D7%A4%D7%9C%20%D7%9C%D7%96%D7%94%20%D7%A9%D7%95%D7%91",youtube:"https://www.youtube.com/results?search_query=%D7%A8%D7%95%D7%96%D7%9F%20%D7%A0%D7%95%D7%A4%D7%9C%20%D7%9C%D7%96%D7%94%20%D7%A9%D7%95%D7%91"}
];

const songsEl=document.getElementById('songs');
if(songsEl){songsEl.innerHTML=songs.map(s=>{
 const note=s.note||'עוד מעט נכתוב פה סיפור לכל שיר.';
 return `<article class="song"><h3>${s.title}</h3><p>${note}</p>`+
        `<a class="button" href="${s.spotify}" target="_blank" rel="noopener">Spotify</a>`+
        `<a class="button" href="${s.apple}" target="_blank" rel="noopener">Apple Music</a>`+
        `</article>`;
}).join('');}

const year=document.getElementById('year');
if(year){year.textContent=String(new Date().getFullYear());}

if(window.gsap){
 gsap.registerPlugin(ScrollTrigger);
 gsap.utils.toArray('.section__head, .song, .card, .embed-card').forEach((el,i)=>{
 gsap.fromTo(el,{autoAlpha:0,y:18},{autoAlpha:1,y:0,duration:.6,delay:.05*(i%6),scrollTrigger:{trigger:el,start:'top 80%'}});
 });
}

// light canvas vibes
const canvas=document.getElementById('viz');
if(canvas && canvas.getContext){
 const ctx=canvas.getContext('2d');
 const dpr=window.devicePixelRatio||1;
 let w=0,h=0;
 const particles=[];
 const k=52;
 function reset(){
 canvas.width=window.innerWidth*dpr;
 canvas.height=window.innerHeight*dpr;
 w=canvas.width;h=canvas.height;
 particles.length=0;
 for(let i=0;i<k;i++){
 particles.push({
 x:Math.random()*w,
 y:Math.random()*h,
 r:2+Math.random()*5*dpr,
 vx:(Math.random()-.5)*.25*dpr,
 vy:(Math.random()-.5)*.25*dpr,
 c:`hsla(${180+Math.random()*120},95%,70%,.55)`
 });
 }
 }
 function tick(){
 ctx.setTransform(dpr,0,0,dpr,0,0);
 ctx.globalCompositeOperation='source-over';
 ctx.fillStyle='rgba(0,0,0,0.14)';
 ctx.fillRect(0,0,w/dpr,h/dpr);
 ctx.globalCompositeOperation='lighter';
 for(const p of particles){
 p.x+=p.vx; p.y+=p.vy;
 if(p.x<0) p.x+=w; if(p.x>w) p.x-=w;
 if(p.y<0) p.y+=h; if(p.y>h) p.y-=h;
 ctx.beginPath();
 ctx.fillStyle=p.c;
 ctx.arc(p.x/dpr,p.y/dpr,p.r/dpr,0,Math.PI*2);
 ctx.fill();
 }
 requestAnimationFrame(tick);
 }
 reset();
 tick();
 window.addEventListener('resize',reset);
}
