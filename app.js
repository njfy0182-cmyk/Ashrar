const SERVER='';
const ADMIN_PASS='ashrar-admin';const H=t=>{let a=0xdeadbeef,b=0x41c6ce57;for(let i=0;i<t.length;i++){const c=t.charCodeAt(i);a=Math.imul(a^c,2654435761);b=Math.imul(b^c,1597334677)}a=Math.imul(a^(a>>>16),2246822507)^Math.imul(b^(b>>>13),3266489909);b=Math.imul(b^(b>>>16),2246822507)^Math.imul(a^(a>>>13),3266489909);return String(4294967296*(2097151&b)+(a>>>0))};
const $=i=>document.getElementById(i),esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),nm=s=>String(s||'').replace(/\s+/g,'').toLowerCase(),fa=n=>Number(n).toLocaleString('fa-IR');
const g=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}},s=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
let D=((g('ash_sess','')==='__adm'||g('ash_loc',0))&&g('ash_data',null))||window.ASH_DATA||{};D.members=D.members||[];D.teams=D.teams||['تیم ۱','تیم ۲','تیم ۳','تیم ۴'];D.ann=D.ann||[];D.cfg=Object.assign({nm:'A§HRAR',sl:'کلن اشرار',t:['اعضا','برترین‌ها','تیم‌ها','اعلان‌ها','تورنمنت','آمار'],i:['','','','','',''],h:[0,0,0,0,0,0],ac:0},D.cfg||{});while(D.cfg.t.length<6)D.cfg.t.push(['اعضا','برترین‌ها','تیم‌ها','اعلان‌ها','تورنمنت','آمار'][D.cfg.t.length]);while(D.cfg.i.length<6)D.cfg.i.push('');while(D.cfg.h.length<6)D.cfg.h.push(0);
const own=()=>!!g('ash_owner',0)&&g('ash_sess','')==='__adm',uid=()=>'m'+Date.now().toString(36)+Math.random().toString(36).slice(2,5),by=id=>D.members.find(m=>m.id===id);
const save=()=>{s('ash_data',D);push()},pw=m=>Math.max(0,Math.min(20,Number(m.power)||0)),tag=m=>m.adm?'<span class="tag">ادمین</span>':'';
function open_(){document.body.classList.remove('locked');$('gate').style.display='none';$('ab').classList.toggle('hide',!own());const sx=g('ash_sess',''),m=by(sx),gs=sx==='__g';document.body.classList.toggle('guest',gs);$('who').textContent=gs?'مهمان':m?'خوش آمدی '+m.name:own()?'حالت مدیر':D.cfg.sl;all();go(gs?4:own()?0:Math.max(0,D.cfg.h.indexOf(0)))}
function login(again){const c=nm($('gc').value);let src=D,m=c&&D.members.find(x=>nm(x.code)===c);
 if(!m&&c&&g('ash_owner',0)){const L=g('ash_data',null),x=L&&(L.members||[]).find(y=>nm(y.code)===c);if(x){m=x;src=L}}
 if(!m||!m.pw||H($('gk').value)!==m.pw){if(!again&&SERVER){$('gm').textContent='در حال بررسی...';ld(()=>login(1));return}$('gm').textContent='کد عضویت یا رمز اشتباه است. (اگر عضو تازه اضافه شده، مدیر باید data.js را منتشر کرده باشد)';return}
 s('ash_loc',src!==D?1:0);D=src;s('ash_sess',m.id);open_()}
function guest(){s('ash_sess','__g');open_()}
function adminIn(){const v=$('gp').value;if(!(D.ah?H(v)===D.ah:v===ADMIN_PASS)){$('gm').textContent='رمز مدیر اشتباه است.';return}apm=v;s('ash_owner',1);if(!g('ash_data',null))save();D=g('ash_data',D);s('ash_sess','__adm');open_()}
function logout(){s('ash_sess','');s('ash_loc',0);location.reload()}
function go(i){document.querySelectorAll('.v').forEach((v,j)=>v.classList.toggle('on',i===j));document.querySelectorAll('nav button').forEach((b,j)=>b.classList.toggle('on',i===j));scrollTo(0,0)}
function rMem(){const q=nm($('q').value),l=D.members.filter(m=>!q||nm(m.name+m.real+m.role).includes(q));
 $('mem').innerHTML=l.length?l.map(m=>`<div class="c" onclick="pf('${m.id}')"><span class="x">X</span><b>${esc(m.name)}${tag(m)}</b><small>${esc(m.role||'عضو')}</small><div class="bar"><i style="width:${pw(m)*5}%"></i></div></div>`).join(''):'<div class="emp">عضوی ثبت نشده است.</div>'}
function rTm(){$('tms').innerHTML=D.teams.map((t,i)=>{const l=D.members.filter(m=>String(m.team)===String(i));return`<div class="tm"><h3>${esc(t)}</h3>${l.length?l.map(m=>`<div onclick="pf('${m.id}')">✕ ${esc(m.name)}${tag(m)}</div>`).join(''):'<div style="color:var(--mut)">خالی</div>'}</div>`}).join('')}
function rAn(){$('ann').innerHTML=D.ann.length?[...D.ann].reverse().map(a=>`<div class="an"><b>${esc(a.title)}</b><p>${esc(a.body)}</p><small>${new Date(a.t).toLocaleDateString('fa-IR')}</small></div>`).join(''):'<div class="emp">اعلانی نیست.</div>'}
function all(){applyCfg();rMem();rTop();rTm();rAn();rTr();rSt()}


D.tr=D.tr||{};let tk='in',tv='ko',lgf='';
const TK={in:'درون‌کلنی',out:'بین‌کلنی',cl:'لیگ قهرمانان'},TKI={in:'🏠 درون‌کلنی',out:'⚔ بین‌کلنی',cl:'⭐ لیگ قهرمانان'},
SUB={in:{ps:'👥 بازیکنان',ko:'🏆 حذفی',tb:'📊 جدول',lg:'📅 بازی‌ها'},cl:{ps:'👥 بازیکنان',gr:'🧩 گروه‌ها',ko:'🏆 حذفی'}},TVS={in:'ko',out:'ko',cl:'gr'},
T=k=>D.tr[k]=D.tr[k]||{ps:[],ko:null,lg:null,gs:null},EM='<div class="emp">هنوز ساخته نشده است.</div>';SUB.out=SUB.in;
const tsel=k=>{TVS[tk]=tv;tk=k;tv=TVS[k];lgf='';rTr()},tsel2=v=>{tv=v;TVS[tk]=v;rTr()},rn=(i,R)=>{const l=R-1-i;return l===0?'فینال':l===1?'نیمه‌نهایی':l===2?'یک‌چهارم':l===3?'یک‌هشتم':l===4?'یک‌شانزدهم':'دور '+fa(i+1)};
const segH=(o,c,f,k)=>`<div class="seg ${k||''}">${Object.keys(o).map(x=>`<button class="${x===c?'on':''}" onclick="${f}('${x}')">${o[x]}</button>`).join('')}</div>`;
const abar=(ad,gen,clr)=>ad?`<div class="row" style="margin-top:14px"><button class="bt g2" onclick="if(confirm('از نو ساخته شود؟'))${gen}">🔁 ساخت دوباره</button><button class="bt g2" onclick="if(confirm('پاک شود؟')){${clr};save();rTr()}">🗑 پاک کردن</button></div>`:'';
function rTr(){const gs=g('ash_sess','')==='__g';if(gs)tk='out';if(!SUB[tk][tv])tv=TVS[tk];const t=T(tk),ad=own(),
 emp=(m,b,f)=>`<div class="emp">${m}</div>`+(ad?`<button class="bt" onclick="${f}">${b}</button>`:''),cl=tk==='cl';
 let b='',has=false;
 if(tv==='ps')b=vPS(t,ad);
 else if(tv==='ko'){has=!!t.ko;b=t.ko?tchips(t)+vKO(t,ad)+abar(ad,cl?'genCLKO()':'genKO()','T(tk).ko=null'):emp(cl?'حذفی بعد از پایان مرحله گروهی ساخته می‌شود.':'حذفی هنوز ساخته نشده است.',cl?'🏁 ساخت حذفی از صعودکننده‌ها':'🏆 ساخت حذفی از لیست بازیکنان',cl?'genCLKO()':'genKO()')}
 else if(tv==='tb'){has=!!t.lg;b=t.lg?tchips(t)+vTB(t)+abar(ad,'genLG()','T(tk).lg=null'):emp('جدول هنوز ساخته نشده است.','📅 ساخت جدول و بازی‌ها','genLG()')}
 else if(tv==='lg'){has=!!t.lg;b=t.lg?tchips(t)+vLG(t,ad)+abar(ad,'genLG()','T(tk).lg=null'):emp('بازی‌ها هنوز ساخته نشده‌اند.','📅 ساخت جدول و بازی‌ها','genLG()')}
 else{has=!!t.gs;b=vGR(t,ad)}
 $('tr').innerHTML=segH(gs?{out:TKI.out}:TKI,tk,'tsel','mk')+segH(SUB[tk],tv,'tsel2','sub')+(has?'<button class="bt g2 shb" onclick="shOpen()">📤 اشتراک‌گذاری تصویر</button>':'')+b}

/* ---------- لیست بازیکنان ---------- */
function addPs(){const t=T(tk),v=$('pn').value.split('\n').map(z=>z.trim()).filter(Boolean),dup=[];v.forEach(n=>{if(t.ps.some(p=>nm(p)===nm(n)))dup.push(n);else t.ps.push(n)});save();rTr();if(dup.length)alert('این نام‌ها قبلاً بودند: '+dup.join('، '))}
const delPs=i=>{T(tk).ps.splice(i,1);save();rTr()},mvPs=(i,d)=>{const p=T(tk).ps,j=i+d;if(j<0||j>=p.length)return;[p[i],p[j]]=[p[j],p[i]];save();rTr()},
fillPs=()=>{const t=T(tk);D.members.forEach(m=>{if(!t.ps.some(p=>nm(p)===nm(m.name)))t.ps.push(m.name)});save();rTr()},
clrPs=()=>{if(confirm('همه بازیکنان لیست پاک شوند؟')){T(tk).ps=[];save();rTr()}},
mkKO=()=>{const t=T(tk);if(t.ko&&!confirm('حذفی فعلی پاک و دوباره ساخته شود؟'))return;genKO();if(T(tk).ko)tsel2('ko')},
mkLG=()=>{const t=T(tk);if(t.lg&&!confirm('جدول و بازی‌های فعلی پاک و دوباره ساخته شوند؟'))return;genLG();if(T(tk).lg)tsel2('lg')},
mkCL=sh=>{const t=T(tk);if(t.gs&&!confirm('گروه‌ها و حذفی فعلی پاک و دوباره ساخته شوند؟'))return;genCL(sh);if(T(tk).gs)tsel2('gr')};
function vPS(t,ad){const n=t.ps.length,cl=tk==='cl',r=n%4,gm={};if(t.gs)t.gs.forEach(z=>z.ps.forEach(p=>gm[p]=z.n));
 const st=cl?(n<4?'<div class="pst bad">برای گروه‌بندی حداقل ۴ بازیکن لازم است</div>':r?`<div class="pst bad">${fa(n)} بازیکن · برای گروه‌های ۴ نفره ${fa(4-r)} نفر اضافه کن یا ${fa(r)} نفر کم کن</div>`:`<div class="pst ok">✅ ${fa(n)} بازیکن · ${fa(n/4)} گروه ۴ نفره</div>`):`<div class="pst ok">${fa(n)} بازیکن</div>`;
 const add=ad?`<div class="fm"><b>➕ افزودن بازیکن</b><textarea class="in" id="pn" rows="2" placeholder="نام بازیکن را بنویس (برای چند نفر، هر نفر در یک خط)"></textarea><div class="row"><button class="bt" onclick="addPs()">افزودن به لیست</button>${tk==='in'?'<button class="bt g2" onclick="fillPs()">پر کردن با اعضا</button>':''}</div></div>`:'';
 const list=n?`<div class="pl">${t.ps.map((p,i)=>`<div class="pr"><em>${fa(i+1)}</em><i class="bv" style="background:${hue(p)}">${esc(ini(p))}</i><span>${esc(p)}</span>${gm[p]?`<small>${esc(gm[p])}</small>`:''}${ad?`<div class="pa"><button onclick="mvPs(${i},-1)">▲</button><button onclick="mvPs(${i},1)">▼</button><button onclick="delPs(${i})">✕</button></div>`:''}</div>`).join('')}</div>`:'<div class="emp">هنوز بازیکنی نوشته نشده است.</div>';
 const tools=ad?`<div class="fm"><b>🛠 ساخت تورنمنت از این لیست</b>${cl?'<div class="row"><button class="bt" onclick="mkCL(0)">⭐ ساخت گروه‌ها</button><button class="bt" onclick="mkCL(1)">🎲 قرعه‌کشی</button></div>':'<div class="row"><button class="bt" onclick="mkKO()">🏆 ساخت حذفی</button><button class="bt" onclick="mkLG()">📅 ساخت جدول</button></div>'}<p class="hn" style="margin-bottom:0">بعد از تغییر لیست، دوباره بساز.</p>${n?'<button class="bt g2" style="margin-top:8px" onclick="clrPs()">🗑 پاک کردن لیست</button>':''}</div>`:'';
 return st+add+list+tools}

/* ---------- لیگ ---------- */
function genLG(){const t=T(tk),l=t.ps.slice();if(l.length<2){alert('حداقل ۲ شرکت‌کننده بنویس');return}if(l.length%2)l.push(null);const n=l.length,G=[];for(let r=0;r<n-1;r++){for(let i=0;i<n/2;i++){const a=l[i],b=l[n-1-i];if(a&&b)G.push({r:r+1,a,b,sa:null,sb:null})}l.splice(1,0,l.pop())}t.lg={g:G};save();rTr()}
function sg(i,k,v){T(tk).lg.g[i][k]=v===''?null:Number(v);save();rTr()}
function nextG(G){const z=G.find(x=>x.sa==null||x.sb==null);return z?`<div class="nx"><small>⏭ بازی بعدی · دور ${fa(z.r)}</small><div><b>${esc(z.a)}</b><i>VS</i><b>${esc(z.b)}</b></div></div>`:'<div class="nx"><small>✅ همه بازی‌ها انجام شد</small></div>'}
function vLG(t,ad){if(!t.lg)return EM;const G=t.lg.g,ns=[...new Set(G.flatMap(z=>[z.a,z.b]))],ix=G.map((z,i)=>i).filter(i=>!lgf||G[i].a===lgf||G[i].b===lgf);let last=0,c=0;
 const rows=ix.map(i=>{const z=G[i];let hd='';if(!lgf&&z.r!==last){hd=`<div class="rh">دور ${fa(z.r)}</div>`;last=z.r}c++;
  const sc=ad?`<input type="number" class="si" value="${z.sa==null?'':z.sa}" onchange="sg(${i},'sa',this.value)"><b>:</b><input type="number" class="si" value="${z.sb==null?'':z.sb}" onchange="sg(${i},'sb',this.value)">`:(z.sa==null?'<b>—</b>':`<b>${fa(z.sa)} : ${fa(z.sb)}</b>`);
  return hd+`<div class="gm">${lgf?`<small>بازی ${fa(c)}</small>`:''}<span>${esc(z.a)}</span>${sc}<span>${esc(z.b)}</span></div>`}).join('');
 return nextG(G)+`<select class="in" onchange="lgf=this.value;rTr()"><option value="">همه بازی‌ها (به ترتیب دور)</option>${ns.map(n=>`<option ${n===lgf?'selected':''}>${esc(n)}</option>`).join('')}</select>`+rows}
const mkR=r0=>{const R=[r0];for(let m=r0.length/2;m>=1;m/=2)R.push(Array.from({length:m},()=>({a:'',b:'',w:0,sa:null,sb:null})));return R};
function genKO(){const t=T(tk),l=t.ps.slice();if(l.length<2){alert('حداقل ۲ شرکت‌کننده بنویس');return}let P=2;while(P<l.length)P*=2;const n=P/2,r0=[];for(let i=0;i<n;i++)r0.push({a:l[i]||'',b:l[n+i]||'',w:0,sa:null,sb:null});const R=mkR(r0);t.ko=R;r0.forEach((z,i)=>{if(z.a&&!z.b)winIn(R,0,i,1)});save();rTr()}
const KR=()=>T(tk).ko;
const up=(R,r,m)=>{const z=R[r][m];z.w=0;const nx=R[r+1]&&R[r+1][m>>1];if(nx){nx[m%2?'b':'a']='';nx.sa=nx.sb=null;if(nx.w)up(R,r+1,m>>1)}};
function winIn(R,r,m,s){const z=R[r][m];if(!(s===1?z.a:z.b))return;if(z.w===s)s=0;up(R,r,m);if(s){z.w=s;const nx=R[r+1]&&R[r+1][m>>1];if(nx)nx[m%2?'b':'a']=s===1?z.a:z.b}}
function win(r,m,s){winIn(KR(),r,m,s);save();rTr()}
function sn(r,m,k,v){const R=KR(),z=R[r][m];z[k]=v.trim();if(z.w===(k==='a'?1:2)){const nx=R[r+1]&&R[r+1][m>>1];if(nx)nx[m%2?'b':'a']=z[k]}save();rTr()}
function ks(r,m,k,v){const R=KR(),z=R[r][m];z[k==='a'?'sa':'sb']=v===''?null:Number(v);if(z.a&&z.b&&z.sa!=null&&z.sb!=null&&z.sa!==z.sb){const w=z.sa>z.sb?1:2;if(z.w!==w)winIn(R,r,m,w)}save();rTr()}
const BG={CW:236,CH:96,GAP:64,SH:132,HD:46,PD:10},hue=n=>{let h=0;for(const c of String(n))h=(h*31+c.charCodeAt(0))%360;return`hsl(${h},55%,42%)`},ini=n=>(String(n).split('|').pop().replace(/[^A-Za-z0-9\u0600-\u06FF]/g,'').charAt(0)||'X').toUpperCase();
function geo(R,a,b){const{CW,GAP,SH,HD,PD}=BG,cnt=[];let k=0;R.forEach(rd=>{cnt.push(k);k+=rd.length});const pos=[];for(let r=a;r<=b;r++){pos[r]=[];const x=PD+(b-r)*(CW+GAP);for(let m=0;m<R[r].length;m++)pos[r][m]={x,num:cnt[r]+m+1,cy:r===a?HD+(m+.5)*SH:(pos[r-1][2*m].cy+pos[r-1][2*m+1].cy)/2}}return{pos,cnt,W:PD*2+(b-a+1)*CW+(b-a)*GAP,H:HD+R[a].length*SH+8}}
const slab=(G,R,r,m,k)=>{const z=R[r][m];return z[k]||(r>0?'برندهٔ دیدار '+fa(G.cnt[r-1]+2*m+(k==='b'?1:0)+1):k==='b'&&z.a?'BYE':'—')};
function brHTML(R,ad,a,b){const G=geo(R,a,b),{CW,CH,GAP}=BG;let sv='',h='',c='';
 for(let r=a;r<=b;r++){h+=`<div class="bh" style="left:${G.pos[r][0].x}px;width:${CW}px">${rn(r,R.length)}<u></u></div>`;
  R[r].forEach((z,m)=>{const p=G.pos[r][m];
   if(r>a)for(let k=0;k<2;k++){const q=G.pos[r-1][2*m+k],md=q.x-GAP/2;sv+=`<path d="M${q.x} ${q.cy}H${md}V${p.cy}H${p.x+CW}" stroke="${R[r-1][2*m+k].w?'#c9972a':'#34413d'}"/>`}
   const row=k=>{const s=k==='a'?1:2,v=z[k],sc=k==='a'?z.sa:z.sb,cl=z.w===s?'w':z.w?'l':'',av=v?`<i class="bv" style="background:${hue(v)}">${esc(ini(v))}</i>`:'<i class="bv e"></i>',lb=slab(G,R,r,m,k);
    return ad?`<div class="br ${cl}">${av}<input class="bn" value="${esc(v)}" placeholder="${esc(lb)}" onchange="sn(${r},${m},'${k}',this.value)"><input class="bs" type="number" value="${sc==null?'':sc}" placeholder="−" onchange="ks(${r},${m},'${k}',this.value)"><button class="bk" onclick="win(${r},${m},${s})">✓</button></div>`:`<div class="br ${cl}">${av}<span class="bn${v?'':' ph'}">${esc(lb)}</span><b class="bs">${sc==null?'−':fa(sc)}</b></div>`};
   c+=`<div class="bm${z.a&&z.b?' on':''}" style="left:${p.x}px;top:${p.cy-CH/2}px"><small>دیدار ${fa(p.num)}</small>${row('a')}${row('b')}</div>`})}
 return`<div class="bw"><div class="bc" style="width:${G.W}px;height:${G.H}px"><svg class="bsv" width="${G.W}" height="${G.H}" fill="none" stroke-width="2">${sv}</svg>${h}${c}</div></div>`}
const chB=R=>{const f=R[R.length-1][0],ch=f.w?(f.w===1?f.a:f.b):'';return ch?`<div class="champ">👑 قهرمان: ${esc(ch)}</div>`:''};
const quick=R=>`<div class="adx"><b>ثبت سریع برنده‌ها</b>${R.map((rd,r)=>rd.map((z,m)=>z.a&&z.b?`<div class="qw"><small>${rn(r,R.length)}</small><button class="${z.w===1?'on':''}" onclick="win(${r},${m},1)">${esc(z.a)}</button><button class="${z.w===2?'on':''}" onclick="win(${r},${m},2)">${esc(z.b)}</button></div>`:'').join('')).join('')}</div>`;
const vBR=(R,ad)=>chB(R)+brHTML(R,ad,0,R.length-1)+(ad?quick(R):'');
function vKO(t,ad){return vBR(t.ko,ad)}

/* ---------- لیگ قهرمانان ---------- */
const GN='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function rrobin(l){l=l.slice();if(l.length%2)l.push(null);const n=l.length,G=[];for(let r=0;r<n-1;r++){for(let i=0;i<n/2;i++){const a=l[i],b=l[n-1-i];if(a&&b)G.push({r:r+1,a,b,sa:null,sb:null})}l.splice(1,0,l.pop())}return G}
function genCL(sh){const t=T(tk),l=t.ps.slice(),r=l.length%4;if(l.length<4||r){alert(l.length<4?'برای لیگ قهرمانان حداقل ۴ بازیکن لازم است.':fa(l.length)+' بازیکن داری؛ برای گروه‌های ۴ نفره '+fa(4-r)+' نفر اضافه کن یا '+fa(r)+' نفر کم کن.');return}
 if(sh)for(let i=l.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[l[i],l[j]]=[l[j],l[i]]}
 const n=l.length/4,gs=Array.from({length:n},(_,i)=>({n:'گروه '+GN[i%26]+(i>=26?fa(Math.floor(i/26)+1):''),ps:[]}));
 l.forEach((p,i)=>{const row=Math.floor(i/n),c=i%n;gs[row%2?n-1-c:c].ps.push(p)});
 gs.forEach(z=>z.g=rrobin(z.ps));t.gs=gs;t.ko=null;save();rTr()}
function gstd(gr){const S={};gr.ps.forEach(n=>S[n]={n,m:0,w:0,d:0,l:0,gf:0,ga:0,pt:0});gr.g.forEach(z=>{if(z.sa==null||z.sb==null)return;const A=S[z.a],B=S[z.b];A.m++;B.m++;A.gf+=z.sa;A.ga+=z.sb;B.gf+=z.sb;B.ga+=z.sa;if(z.sa>z.sb){A.w++;A.pt+=3;B.l++}else if(z.sa<z.sb){B.w++;B.pt+=3;A.l++}else{A.d++;B.d++;A.pt++;B.pt++}});return Object.values(S).sort((a,b)=>b.pt-a.pt||(b.gf-b.ga)-(a.gf-a.ga)||b.gf-a.gf)}
function genCLKO(){const t=T(tk);if(!t.gs){alert('اول مرحله گروهی را بساز');return}
 if(!t.gs.every(gr=>gr.g.every(z=>z.sa!=null&&z.sb!=null))&&!confirm('همه بازی‌های گروهی ثبت نشده‌اند. با وضعیت فعلی ساخته شود؟'))return;
 const S=t.gs.map(gstd),F=S.map(s=>s[0].n),X=S.map(s=>s[1]?s[1].n:''),G=t.gs.length;let r0;
 if(G>=2&&(G&(G-1))===0){const A=[],B=[];for(let i=0;i<G;i+=2){A.push([F[i],X[i+1]]);B.push([F[i+1],X[i]])}r0=A.concat(B).map(p=>({a:p[0],b:p[1],w:0,sa:null,sb:null}))}
 else{const l=F.concat(X.slice().reverse());let P=2;while(P<l.length)P*=2;r0=[];for(let i=0;i<P/2;i++)r0.push({a:l[i]||'',b:l[P-1-i]||'',w:0,sa:null,sb:null})}
 const R=mkR(r0);t.ko=R;r0.forEach((z,i)=>{if(z.a&&!z.b)winIn(R,0,i,1)});save();tsel2('ko')}
function scg(gi,i,k,v){T(tk).gs[gi].g[i][k]=v===''?null:Number(v);save();rTr()}
function vGR(t,ad){if(!t.gs)return'<div class="emp">گروه‌ها هنوز ساخته نشده‌اند.</div>'+(ad?'<div class="row"><button class="bt" onclick="genCL(0)">⭐ ساخت گروه‌ها</button><button class="bt g2" onclick="genCL(1)">🎲 قرعه‌کشی تصادفی</button></div>':'');
 let d=0,tt=0;t.gs.forEach(gr=>gr.g.forEach(z=>{tt++;if(z.sa!=null&&z.sb!=null)d++}));
 let x=`<div class="chips"><div><b>${fa(t.gs.length)}</b><span>گروه ۴ نفره</span></div><div><b>${fa(d)}/${fa(tt)}</b><span>بازی انجام‌شده</span></div><div><b>${fa(t.gs.length*2)}</b><span>صعودکننده</span></div></div><div class="bar" style="margin:0 0 14px"><i style="width:${tt?d/tt*100:0}%"></i></div><p class="hn" style="margin-top:0">دو تیم اول هر گروه به مرحله حذفی صعود می‌کنند.</p>`;
 x+=t.gs.map((gr,gi)=>{const L=gstd(gr);let lr=0;return`<div class="gcd"><div class="gh"><h4>${esc(gr.n)}</h4><span>${fa(gr.ps.length)} بازیکن</span></div><table class="tb g"><tr><th>#</th><th>نام</th><th>بازی</th><th>برد</th><th>مس</th><th>باخت</th><th>تفاضل</th><th>امتیاز</th></tr>${L.map((r,i)=>`<tr class="${i<2?'top q':''}"><td>${fa(i+1)}</td><td>${esc(r.n)}</td><td>${fa(r.m)}</td><td>${fa(r.w)}</td><td>${fa(r.d)}</td><td>${fa(r.l)}</td><td>${fa(r.gf-r.ga)}</td><td><b>${fa(r.pt)}</b></td></tr>`).join('')}</table>${gr.g.map((z,i)=>{let h='';if(z.r!==lr){h=`<div class="rh">دور ${fa(z.r)}</div>`;lr=z.r}const sc=ad?`<input type="number" class="si" value="${z.sa==null?'':z.sa}" onchange="scg(${gi},${i},'sa',this.value)"><b>:</b><input type="number" class="si" value="${z.sb==null?'':z.sb}" onchange="scg(${gi},${i},'sb',this.value)">`:(z.sa==null?'<b>—</b>':`<b>${fa(z.sa)} : ${fa(z.sb)}</b>`);return h+`<div class="gm"><span>${esc(z.a)}</span>${sc}<span>${esc(z.b)}</span></div>`}).join('')}</div>`}).join('');
 return x+(ad?'<button class="bt" onclick="genCLKO()">🏁 ساخت حذفی از صعودکننده‌ها</button>':'')+abar(ad,'genCL(0)','T(tk).gs=null;T(tk).ko=null')}

function shUI(){const t=T(tk),op=(v,l,cur)=>`<option value="${v}" ${String(v)===String(cur)?'selected':''}>${esc(l)}</option>`;let ctl='';const R=tv==='ko'?t.ko:null;
 if(tv==='gr'&&t.gs)ctl+=`<select class="in" onchange="shSet('p',this.value)">${op('ga','همه گروه‌ها',sh.p)}${t.gs.map((z,i)=>op('g'+i,z.n,sh.p)).join('')}</select>`;
 if(R){const n=R.length,b=Math.min(sh.b,n-1),a=Math.min(sh.a,b);ctl+=`<div class="row"><select class="in" onchange="shSet('a',+this.value)">${R.map((_,i)=>i<=b?op(i,'از '+rn(i,n),a):'').join('')}</select><select class="in" onchange="shSet('b',+this.value)">${R.map((_,i)=>i>=a?op(i,'تا '+rn(i,n),b):'').join('')}</select></div>`}
 if(tv==='lg'&&t.lg)ctl+=`<select class="in" onchange="shSet('r',this.value)">${op('all','همه دورها',sh.r)}${[...new Set(t.lg.g.map(z=>z.r))].sort((a,b)=>a-b).map(r=>op(r,'دور '+fa(r),sh.r)).join('')}</select>`;
 $('shb').innerHTML=`<div class="ah" style="padding:0 0 8px"><h3>📤 اشتراک‌گذاری تصویر</h3><button class="ib" onclick="$('shm').classList.remove('on')">✕</button></div><p class="hn" style="margin-top:0">بخشی از جدول را که می‌خواهی انتخاب کن و تصویرش را دانلود کن.</p>${ctl}<div class="shp"><div class="emp" id="shl">در حال ساخت تصویر...</div><img id="shi" alt=""></div><div class="row"><button class="bt" onclick="shSave()">⬇ دانلود تصویر</button>${navigator.canShare?'<button class="bt g2" onclick="shSend()">📤 ارسال</button>':''}</div>`;shDraw()}
function shOpen(){sh={p:'ga',a:0,b:99,r:'all'};shUI();$('shm').classList.add('on')}
/* ---------- اشتراک‌گذاری تصویر ---------- */
let sh={p:'ga',a:0,b:99,r:'all'},shCv=null;
const FF="'Noto Sans Arabic',Tahoma,sans-serif",rtl=s=>/[؀-ۿ]/.test(s);
function tx(c,s,x,y,o){o=o||{};s=String(s);c.font=`${o.w||600} ${o.sz||14}px ${FF}`;c.fillStyle=o.col||'#f2ece0';c.textAlign=o.al||'right';c.textBaseline='middle';c.direction=rtl(s)?'rtl':'ltr';
 if(o.max){const f=s;while(s.length>1&&c.measureText(s).width>o.max)s=s.slice(0,-1);if(s!==f)s=s.slice(0,-1)+'…'}c.fillText(s,x,y)}
function rr(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()}
const acc=()=>AC[D.cfg.ac]||AC[0];
function dBR(c,R,a,b,ox){const G=geo(R,a,b),{CW,CH,GAP}=BG;c.save();c.translate(ox,0);c.lineWidth=2;c.lineJoin='round';
 for(let r=a;r<=b;r++)R[r].forEach((z,m)=>{const p=G.pos[r][m];if(r>a)for(let k=0;k<2;k++){const q=G.pos[r-1][2*m+k],md=q.x-GAP/2;c.strokeStyle=R[r-1][2*m+k].w?'#c9972a':'#34413d';c.beginPath();c.moveTo(q.x,q.cy);c.lineTo(md,q.cy);c.lineTo(md,p.cy);c.lineTo(p.x+CW,p.cy);c.stroke()}});
 for(let r=a;r<=b;r++){const x0=G.pos[r][0].x;tx(c,rn(r,R.length),x0+CW/2,16,{al:'center',col:'#f5b301',w:800,sz:15});c.fillStyle='#f5b301';c.fillRect(x0+CW/2-28,30,56,2);
  R[r].forEach((z,m)=>{const p=G.pos[r][m],top=p.cy-CH/2;tx(c,'دیدار '+fa(p.num),p.x+CW-2,top-11,{sz:11,col:'#9aa3a0',w:700});
   rr(c,p.x,top,CW,CH,12);c.fillStyle='#151819';c.fill();c.lineWidth=1.5;c.strokeStyle=z.a&&z.b?'#a8832a':'#3a403d';c.stroke();
   c.strokeStyle='#2a2f2d';c.lineWidth=1;c.beginPath();c.moveTo(p.x+1,top+CH/2);c.lineTo(p.x+CW-1,top+CH/2);c.stroke();
   ['a','b'].forEach((k,i)=>{const s=i+1,v=z[k],sc=k==='a'?z.sa:z.sb,cy=top+CH/4+i*CH/2;c.globalAlpha=z.w&&z.w!==s?.5:1;
    if(v){rr(c,p.x+CW-38,cy-13,26,26,7);c.fillStyle=hue(v);c.fill();tx(c,ini(v),p.x+CW-25,cy+1,{al:'center',w:800,sz:13,col:'#fff'})}else{rr(c,p.x+CW-38,cy-13,26,26,7);c.fillStyle='#23282a';c.fill()}
    tx(c,v||slab(G,R,r,m,k),p.x+CW-46,cy+1,{sz:13,w:z.w===s?800:600,col:v?(z.w===s?'#fff':'#e4e0d6'):'#6c7673',max:CW-100});
    tx(c,sc==null?'−':fa(sc),p.x+24,cy+1,{al:'center',sz:14,w:800,col:z.w===s?'#f5b301':'#bbb'});c.globalAlpha=1})})}
 c.restore()}
function dGrid(c,x,y,W,heads,rows,cw,hl,RH,HH){const fx=cw.reduce((t,v)=>t+(v||0),0),fl=W-20-fx;c.save();rr(c,x,y,W,HH+rows.length*RH,14);c.clip();c.fillStyle='#120b0d';c.fillRect(x,y,W,HH+rows.length*RH);c.fillStyle='#1b0f12';c.fillRect(x,y,W,HH);
 const line=(arr,yy,o)=>{let xr=x+W-10;arr.forEach((s,i)=>{const w=cw[i]||fl;if(i===1)tx(c,s,xr-6,yy,Object.assign({al:'right',max:w-10},o));else tx(c,s,xr-w/2,yy,Object.assign({al:'center'},o));xr-=w})};
 line(heads,y+HH/2,{sz:11,col:acc()[3],w:800});
 rows.forEach((r,i)=>{const yy=y+HH+i*RH;if(hl&&hl(i)){c.fillStyle=`rgba(${acc()[2]},.3)`;c.fillRect(x,yy,W,RH)}c.fillStyle='#222';c.fillRect(x,yy+RH-1,W,1);line(r,yy+RH/2+1,{sz:13,col:'#f2ece0',w:700})});c.restore()}
function dMatch(c,x,y,W,z,h){rr(c,x,y,W,h,12);c.fillStyle='#1c1114';c.fill();c.strokeStyle='#3a2227';c.lineWidth=1;c.stroke();const m=y+h/2+1;
 tx(c,z.a,x+W-14,m,{sz:13,w:700,max:W/2-56});tx(c,z.b,x+14,m,{al:'left',sz:13,w:700,max:W/2-56});
 rr(c,x+W/2-34,m-14,68,26,13);const g=c.createLinearGradient(x+W/2-34,0,x+W/2+34,0);g.addColorStop(0,acc()[1]);g.addColorStop(1,acc()[0]);c.fillStyle=g;c.fill();
 tx(c,z.sa==null||z.sb==null?'—':fa(z.sa)+' : '+fa(z.sb),x+W/2,m,{al:'center',sz:13,w:800,col:'#fff'})}
const gh=gr=>40+28+gr.ps.length*34+12+gr.g.length*32+14;
function dGroup(c,gr,x,y,w){const h=gh(gr),L=gstd(gr);rr(c,x,y,w,h,18);c.fillStyle='#150d10';c.fill();c.strokeStyle='#3a2227';c.lineWidth=1;c.stroke();
 tx(c,gr.n,x+w-16,y+21,{sz:17,w:800,col:'#f5b301'});tx(c,'صعود: دو تیم اول',x+16,y+21,{al:'left',sz:11,col:'#8b8b92'});
 dGrid(c,x+10,y+40,w-20,['#','نام','بازی','برد','مس','باخت','تفاضل','امتیاز'],L.map((r,i)=>[fa(i+1),r.n,fa(r.m),fa(r.w),fa(r.d),fa(r.l),fa(r.gf-r.ga),fa(r.pt)]),[30,0,40,34,34,40,48,48],i=>i<2,34,28);
 let yy=y+40+28+gr.ps.length*34+12;gr.g.forEach(z=>{dMatch(c,x+10,yy,w-20,z,28);yy+=32});return h}
function shPlan(){const t=T(tk),P=24;
 if(tv==='ko'){const R=t.ko;if(!R)return null;const b=Math.min(sh.b,R.length-1),a=Math.min(sh.a,b),G=geo(R,a,b);return{T:'حذفی',W:Math.max(G.W+2*P-2*BG.PD,340),H:G.H,draw:(c,W)=>dBR(c,R,a,b,Math.max(P-BG.PD,(W-G.W)/2))}}
 if(tv==='tb'){if(!t.lg)return null;const L=std(t);return{T:'جدول امتیازات',W:640,H:34+L.length*40+8,draw:(c,W)=>dGrid(c,P,0,W-2*P,['#','نام','بازی','برد','مس','باخت','تفاضل','امتیاز'],L.map((r,i)=>[fa(i+1),r.n,fa(r.m),fa(r.w),fa(r.d),fa(r.l),fa(r.gf-r.ga),fa(r.pt)]),[40,0,52,44,44,52,60,62],i=>i<3&&L[i].m,40,34)}}
 if(tv==='lg'){if(!t.lg)return null;const rs=[...new Set(t.lg.g.map(z=>z.r))].sort((a,b)=>a-b).filter(r=>sh.r==='all'||String(r)===String(sh.r));const it=[];rs.forEach(r=>{it.push({h:r});t.lg.g.filter(z=>z.r===r).forEach(z=>it.push({z}))});
  return{T:'برنامه و نتایج لیگ',W:640,H:it.reduce((s,i)=>s+(i.h?36:46),0),draw:(c,W)=>{let y=0;it.forEach(i=>{if(i.h){tx(c,'دور '+fa(i.h),W-P,y+16,{sz:16,w:800,col:'#f5b301'});y+=36}else{dMatch(c,P,y,W-2*P,i.z,40);y+=46}})}}}
 if(tv==='gr'){const c0=t.gs;if(!c0)return null;const gs=sh.p==='ga'?c0:[c0[+String(sh.p).slice(1)]||c0[0]],two=gs.length>1,cw=460,W=two?P*3+cw*2:cw+P*2,rows=[];for(let i=0;i<gs.length;i+=two?2:1)rows.push(gs.slice(i,i+(two?2:1)));
  return{T:'مرحله گروهی',W,H:rows.reduce((s,r)=>s+Math.max(...r.map(gh))+16,0)-16,draw:c=>{let y=0;rows.forEach(r=>{r.forEach((gr,i)=>dGroup(c,gr,W-P-cw-i*(cw+P),y,cw));y+=Math.max(...r.map(gh))+16})}}}
 return null}
const ldImg=src=>new Promise(r=>{const i=new Image();i.onload=()=>r(i);i.onerror=()=>r(null);i.src=src});
async function shMake(){const pl=shPlan();if(!pl)return null;try{await Promise.all([document.fonts.load('800 14px "Noto Sans Arabic"'),document.fonts.load('600 14px "Noto Sans Arabic"'),document.fonts.load('20px Lalezar')])}catch(e){}
 const lg=await ldImg('logo.png'),S=2,HD=96,FT=44,W=pl.W,H=HD+pl.H+FT+8,cv=document.createElement('canvas');cv.width=W*S;cv.height=H*S;const c=cv.getContext('2d'),a=acc();c.scale(S,S);
 c.fillStyle='#0a0607';c.fillRect(0,0,W,H);let g=c.createRadialGradient(W,0,10,W,0,W*.9);g.addColorStop(0,`rgba(${a[2]},.5)`);g.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=g;c.fillRect(0,0,W,H);
 g=c.createRadialGradient(0,H,10,0,H,W*.8);g.addColorStop(0,`rgba(${a[2]},.32)`);g.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=g;c.fillRect(0,0,W,H);
 if(lg){c.save();c.beginPath();c.arc(W-52,HD/2,32,0,7);c.clip();c.drawImage(lg,W-84,HD/2-32,64,64);c.restore();c.strokeStyle=a[3];c.lineWidth=2;c.beginPath();c.arc(W-52,HD/2,32,0,7);c.stroke()}
 const nx=lg?W-98:W-24;tx(c,NM(D.cfg.nm),nx,HD/2-12,{sz:28,w:800,col:'#fff'});tx(c,TK[tk]+' · '+pl.T,nx,HD/2+16,{sz:13,col:a[3],w:700});
 g=c.createLinearGradient(0,0,W,0);g.addColorStop(0,a[1]);g.addColorStop(.5,a[0]);g.addColorStop(1,a[3]);c.fillStyle=g;c.fillRect(0,HD-2,W,3);
 c.save();c.translate(0,HD+16);pl.draw(c,W);c.restore();
 c.fillStyle=g;c.fillRect(0,H-FT,W,2);tx(c,NM(D.cfg.nm)+' · '+new Date().toLocaleDateString('fa-IR'),W/2,H-FT/2+1,{al:'center',sz:12,col:'#8b8b92',w:600});return cv}
function shSet(k,v){sh[k]=v;shUI()}
async function shDraw(){const im=$('shi'),l=$('shl');shCv=null;try{const cv=await shMake();if(!cv){l.textContent='اول باید جدول این بخش ساخته شود.';return}shCv=cv;im.src=cv.toDataURL('image/png');l.style.display='none';im.style.display='block'}catch(e){l.textContent='ساخت تصویر ناموفق بود.'}}
const shBlob=()=>new Promise(r=>shCv?shCv.toBlob(r,'image/png'):r(null)),shName=()=>'ashrar-'+tk+'-'+tv+'-'+Date.now().toString(36)+'.png';
async function shSave(){const b=await shBlob();if(!b){alert('تصویر هنوز آماده نیست');return}const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=shName();a.click();setTimeout(()=>URL.revokeObjectURL(a.href),4000)}
async function shSend(){const b=await shBlob();if(!b)return;const f=new File([b],shName(),{type:'image/png'});try{if(navigator.canShare({files:[f]}))await navigator.share({files:[f]});else shSave()}catch(e){}}

function setAP(){const v=$('np').value.trim();if(v.length<4){alert('رمز حداقل ۴ حرف باشد');return}D.ah=H(v);save();if(SERVER&&apm)fetch(SERVER+'/pw',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({pass:apm,np:v})}).then(r=>r.json()).then(x=>{if(x.ok)apm=v});alert('رمز مدیر عوض شد. data.js را دوباره منتشر کن.')}
const AC=[['#a3121f','#3f040c','163,18,31','#e8743b'],['#b91c1c','#450a0a','185,28,28','#f59e0b'],['#7f1d1d','#2a0808','127,29,29','#c2410c'],['#9f1239','#3b0716','159,18,57','#d946ef']];
function cf(k,v){D.cfg[k]=v;save();applyCfg()}
function ct(i,k,v){D.cfg[k][i]=v;save();applyCfg()}
function applyCfg(){const c=D.cfg,r=document.documentElement.style,a=AC[c.ac]||AC[0];r.setProperty('--r',a[0]);r.setProperty('--r2',a[1]);r.setProperty('--rgb',a[2]);r.setProperty('--g3',a[3]);document.title=NM(c.nm)+' | کلن';document.querySelectorAll('.ht h1,#gate h1').forEach(e=>e.textContent=NM(c.nm));const w=$('who');if(!/خوش|مهمان|حالت/.test(w.textContent))w.textContent=c.sl;
 document.querySelectorAll('.v').forEach((v,i)=>{const t=v.querySelector('h2');t.textContent=c.t[i];let p=v.querySelector('.in2');if(!p){p=document.createElement('p');p.className='in2';t.after(p)}p.textContent=c.i[i]||'';p.style.display=c.i[i]?'':'none';v.classList.toggle('off',!!c.h[i]&&!own())});
 document.querySelectorAll('nav button').forEach((b,i)=>{b.lastChild.textContent=c.t[i];b.style.display=c.h[i]&&!own()?'none':''})}
function cfgHTML(){const c=D.cfg;return`<div class="sm" style="margin-top:18px"><b>ظاهر و بخش‌های سایت</b></div><input class="in" value="${esc(c.nm)}" placeholder="اسم سایت" onchange="cf('nm',this.value||'A§HRAR')"><input class="in" value="${esc(c.sl)}" placeholder="شعار زیر اسم" onchange="cf('sl',this.value)"><div class="sw">${AC.map((a,i)=>`<button class="${c.ac===i?'on':''}" style="background:${a[0]}" onclick="cf('ac',${i});openAdmin()"></button>`).join('')}</div>${c.t.map((t,i)=>`<div class="cb"><div class="row"><input class="in" value="${esc(t)}" placeholder="عنوان بخش" onchange="ct(${i},'t',this.value||'بخش')"><label class="hd"><input type="checkbox" ${c.h[i]?'checked':''} onchange="ct(${i},'h',this.checked?1:0)"> مخفی</label></div><input class="in" value="${esc(c.i[i])}" placeholder="توضیح زیر عنوان (اختیاری)" onchange="ct(${i},'i',this.value)"></div>`).join('')}`}
let eid='';

function std(t){const S={};t.lg.g.forEach(z=>{[z.a,z.b].forEach(n=>S[n]=S[n]||{n,m:0,w:0,d:0,l:0,gf:0,ga:0,pt:0});if(z.sa==null||z.sb==null)return;const A=S[z.a],B=S[z.b];A.m++;B.m++;A.gf+=z.sa;A.ga+=z.sb;B.gf+=z.sb;B.ga+=z.sa;if(z.sa>z.sb){A.w++;A.pt+=3;B.l++}else if(z.sa<z.sb){B.w++;B.pt+=3;A.l++}else{A.d++;B.d++;A.pt++;B.pt++}});return Object.values(S).sort((a,b)=>b.pt-a.pt||(b.gf-b.ga)-(a.gf-a.ga)||b.gf-a.gf)}
function tchips(t){let d=0,tt=0,l='—';if(tv==='ko'&&t.ko){t.ko.forEach(r=>r.forEach(z=>{if(z.a&&z.b){tt++;if(z.w)d++}}));const f=t.ko[t.ko.length-1][0];l=f.w?(f.w===1?f.a:f.b):'—'}else if(tv!=='ko'&&t.lg){t.lg.g.forEach(z=>{tt++;if(z.sa!=null&&z.sb!=null)d++});const s=std(t);l=d&&s[0]?s[0].n:'—'}
 return`<div class="chips"><div><b>${fa(t.ps.length)}</b><span>شرکت‌کننده</span></div><div><b>${fa(d)}/${fa(tt)}</b><span>بازی انجام‌شده</span></div><div><b>${esc(l)}</b><span>${tv==='ko'?'قهرمان':'صدرنشین'}</span></div></div><div class="bar" style="margin:0 0 14px"><i style="width:${tt?d/tt*100:0}%"></i></div>`}
function vTB(t){if(!t.lg)return EM;const L=std(t),M=['🥇','🥈','🥉'];
 return`<table class="tb g"><tr><th>#</th><th>نام</th><th>بازی</th><th>برد</th><th>مس</th><th>باخت</th><th>تفاضل</th><th>امتیاز</th></tr>${L.map((r,i)=>`<tr class="${i<3&&r.m?'top':''}"><td>${i<3&&r.m?M[i]:fa(i+1)}</td><td>${esc(r.n)}</td><td>${fa(r.m)}</td><td>${fa(r.w)}</td><td>${fa(r.d)}</td><td>${fa(r.l)}</td><td>${fa(r.gf-r.ga)}</td><td><b>${fa(r.pt)}</b></td></tr>`).join('')}</table>`}
const NM=n=>n==='ASHRAR'?'A§HRAR':n;
function KS(){const t=T('in'),R=t.ko,o={},E=n=>o[n]=o[n]||{kw:0,kl:0,kr:-1,ch:false,lw:0,ld:0,ll:0,gf:0,ga:0,pt:0,m:0,rk:0};
 if(R){R.forEach((rd,r)=>rd.forEach(z=>{[z.a,z.b].forEach(n=>{if(n){const e=E(n);e.kr=Math.max(e.kr,r)}});if(z.a&&z.b&&z.w){E(z.w===1?z.a:z.b).kw++;E(z.w===1?z.b:z.a).kl++}}));const f=R[R.length-1][0];if(f.w)E(f.w===1?f.a:f.b).ch=true}
 if(t.lg)std(t).forEach((s,i)=>Object.assign(E(s.n),{lw:s.w,ld:s.d,ll:s.l,gf:s.gf,ga:s.ga,pt:s.pt,m:s.m,rk:i+1}));return o}
function tfin(){const t=T('in'),f=t.ko&&t.ko[t.ko.length-1][0];return{lg:!!(t.lg&&t.lg.g.length&&t.lg.g.every(z=>z.sa!=null&&z.sb!=null)),ko:!!(f&&f.w)}}
function trOrder(){const t=T('in'),F=tfin();if(F.lg)return std(t).map(s=>s.n);if(F.ko){const o=KS();return Object.keys(o).sort((a,b)=>(o[b].ch-o[a].ch)||(o[b].kr-o[a].kr)||(o[b].kw-o[a].kw))}return null}
function memSeries(n){const t=T('in');if(!t.lg)return null;let p=0;const v=[],l=[];t.lg.g.filter(z=>z.a===n||z.b===n).sort((a,b)=>a.r-b.r).forEach(z=>{if(z.sa==null||z.sb==null)return;const a=z.a===n?z.sa:z.sb,b=z.a===n?z.sb:z.sa;p+=a>b?3:a===b?1:0;v.push(p);l.push('دور '+fa(z.r))});return v.length?{v,l}:null}
function allSeries(){const t=T('in');if(!t.lg)return null;const c={},v=[],l=[];t.ps.forEach(n=>c[n]=0);[...new Set(t.lg.g.map(z=>z.r))].sort((a,b)=>a-b).forEach(r=>{const gs=t.lg.g.filter(z=>z.r===r);if(!gs.every(z=>z.sa!=null&&z.sb!=null))return;gs.forEach(z=>{if(z.sa>z.sb)c[z.a]+=3;else if(z.sa<z.sb)c[z.b]+=3;else{c[z.a]++;c[z.b]++}});const k=Object.keys(c);v.push(Math.round(k.reduce((s,x)=>s+c[x],0)/k.length*10)/10);l.push('دور '+fa(r))});return v.length?{v,l}:null}
function lch(l,v){const n=v.length,W=560,H=190,P=30,mx=Math.max(...v,1),x=i=>n===1?W/2:W-P-i*(W-2*P)/(n-1),y=a=>H-34-a/mx*(H-70);
 return`<svg viewBox="0 0 ${W} ${H}" class="lc"><polyline points="${v.map((a,i)=>x(i)+','+y(a)).join(' ')}" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>${v.map((a,i)=>`<circle cx="${x(i)}" cy="${y(a)}" r="4.5" fill="currentColor"/><text x="${x(i)}" y="${y(a)-10}" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">${fa(a)}</text><text x="${x(i)}" y="${H-10}" text-anchor="middle" font-size="10" fill="currentColor" opacity=".7">${esc(l[i])}</text>`).join('')}</svg>`}
function rTop(){let l=[...D.members].sort((a,b)=>pw(b)-pw(a));const ord=trOrder();
 if(ord){const a=ord.map(n=>D.members.find(m=>m.name===n)).filter(Boolean);l=a.concat(l.filter(m=>a.indexOf(m)<0))}l=l.slice(0,10);
 $('top').innerHTML=l.length?`<p class="hn" style="margin-top:0">${ord?'✅ ثبت‌شده بر اساس نتیجه نهایی تورنمنت داخلی':'⏳ فعلاً بر اساس قدرت. بعد از پایان تورنمنت داخلی، بر اساس نتیجه آن ثبت می‌شود.'}</p>`+l.map((m,i)=>`<div class="rk" onclick="pf('${m.id}')"><div class="n">${fa(i+1)}</div><div class="b"><b>${esc(m.name)}${tag(m)}</b><div class="bar"><i style="width:${pw(m)*5}%"></i></div></div><b style="color:var(--y)">${fa(pw(m))}</b></div>`).join(''):'<div class="emp">هنوز عضوی نیست.</div>'}
function pf(id){const m=by(id);if(!m)return;const r=Math.round(pw(m)*5),k=r>=80?'g':r>=60?'s':'b',rank=[...D.members].sort((a,b)=>pw(b)-pw(a)).findIndex(x=>x.id===id)+1,tm=D.teams[m.team]||'—',E=KS()[m.name]||{kw:0,kl:0,kr:-1,lw:0,ld:0,ll:0,pt:0,m:0,rk:0},R=T('in').ko,st=(v,l)=>`<div><b>${v}</b><span>${l}</span></div>`,kr=E.ch?'قهرمان':R&&E.kr>=0?rn(E.kr,R.length):'—',ser=memSeries(m.name);
 $('pb').className='fcw';
 $('pb').innerHTML=`<div class="fc t-${k}"><div class="ft"><div class="fr"><b>${fa(r)}</b><span>${esc(m.role||'عضو')}</span></div>${m.adm?'<div class="fa">👑 ادمین</div>':''}<div class="fv">${esc(ltr(m))}</div></div><div class="fn">${esc(m.name)}</div><div class="fg">${st(fa(pw(m))+'/۲۰','قدرت')+st('#'+fa(rank),'رتبه کلن')+st({g:'افسانه‌ای',s:'نقره‌ای',b:'برنزی'}[k],'سطح')+st(fa(E.lw+E.kw),'برد')+st(fa(E.ll+E.kl),'باخت')+st(E.rk?'#'+fa(E.rk):'—','رتبه لیگ')+st(esc(kr),'پیشرفت حذفی')+st(esc(tm),'تیم')+st(m.adm?'ادمین':'عضو','وضعیت')}</div>
 <div class="fh"><div>🏆 حذفی داخلی: ${E.kw+E.kl?`${fa(E.kw)} برد · ${fa(E.kl)} باخت · ${esc(kr)}`:'ثبت نشده'}</div><div>📅 لیگ داخلی: ${E.m?`رتبه ${fa(E.rk)} · ${fa(E.lw)} برد · ${fa(E.ld)} مساوی · ${fa(E.ll)} باخت · ${fa(E.pt)} امتیاز`:'ثبت نشده'}</div></div>${ser?`<div class="fh">پیشرفت امتیاز در لیگ داخلی</div>${lch(ser.l,ser.v)}`:''}${m.bio?`<p class="fb">${esc(m.bio)}</p>`:''}</div><p class="fx">برای بستن، بیرون کارت را لمس کن</p>`;$('pm').classList.add('on')}
function rSt(){const M=D.members,n=M.length,el=$('st');if(!el)return;if(!n){el.innerHTML='<div class="emp">هنوز عضوی ثبت نشده است.</div>';return}
 const sum=l=>l.reduce((t,m)=>t+pw(m),0),best=[...M].sort((a,b)=>pw(b)-pw(a))[0],K=KS(),A=allSeries(),F=tfin(),roles={},tier=[['افسانه‌ای',M.filter(m=>pw(m)>=16).length],['نقره‌ای',M.filter(m=>pw(m)>=12&&pw(m)<16).length],['برنزی',M.filter(m=>pw(m)<12).length]];
 M.forEach(m=>{const r=m.role||'عضو';roles[r]=(roles[r]||0)+1});
 const row=(l,v,max,u)=>`<div class="sr"><em>${esc(l)}</em><div class="bar"><i style="width:${max?v/max*100:0}%"></i></div><u>${u}</u></div>`,tc=D.teams.map((t,i)=>{const l=M.filter(m=>String(m.team)===String(i));return[t,l.length?sum(l)/l.length:0]}),R=T('in').ko;
 const L=[...M].sort((a,b)=>((K[a.name]&&K[a.name].rk)||99)-((K[b.name]&&K[b.name].rk)||99)||pw(b)-pw(a));
 el.innerHTML=`<div class="sg"><div class="sc"><b>${fa(n)}</b><span>کل اعضا</span></div><div class="sc"><b>${fa(M.filter(m=>m.adm).length)}</b><span>ادمین‌ها</span></div><div class="sc"><b>${fa(Math.round(sum(M)/n*10)/10)}</b><span>میانگین قدرت</span></div><div class="sc" onclick="pf('${best.id}')" style="cursor:pointer"><b style="font-size:20px">${esc(best.name)}</b><span>قوی‌ترین عضو</span></div></div>
 <div class="chips"><div><b>${F.ko?'✅':'⏳'}</b><span>حذفی داخلی</span></div><div><b>${F.lg?'✅':'⏳'}</b><span>لیگ داخلی</span></div><div><b>${fa(T('in').ps.length)}</b><span>شرکت‌کننده</span></div></div>
 <div class="sp"><h4>نمودار پیشرفت کلی کلن (میانگین امتیاز لیگ داخلی)</h4>${A?lch(A.l,A.v):'<div class="emp">بعد از ثبت نتیجه دورهای لیگ داخلی نمایش داده می‌شود.</div>'}</div>
 <div class="sp"><h4>جدول تحلیلی کامل</h4><div class="tw"><table class="tb"><tr><th>#</th><th>عضو</th><th>بازی</th><th>برد</th><th>مس</th><th>باخت</th><th>امتیاز</th><th>حذفی</th><th>قدرت</th></tr>${L.map(m=>{const E=K[m.name]||{kw:0,kl:0,kr:-1,lw:0,ld:0,ll:0,pt:0,m:0,rk:0};return`<tr class="${E.rk&&E.rk<=3&&F.lg?'top':''}" onclick="pf('${m.id}')"><td>${E.rk?fa(E.rk):'—'}</td><td>${esc(m.name)}</td><td>${fa(E.m+E.kw+E.kl)}</td><td>${fa(E.lw+E.kw)}</td><td>${fa(E.ld)}</td><td>${fa(E.ll+E.kl)}</td><td><b>${fa(E.pt)}</b></td><td>${E.ch?'👑':R&&E.kr>=0?esc(rn(E.kr,R.length)):'—'}</td><td>${fa(pw(m))}</td></tr>`}).join('')}</table></div></div>
 <div class="sp"><h4>سطح اعضا</h4>${tier.map(t=>row(t[0],t[1],n,fa(t[1]))).join('')}</div>
 <div class="sp"><h4>میانگین قدرت تیم‌ها</h4>${tc.map(t=>row(t[0],t[1],20,fa(Math.round(t[1]*10)/10))).join('')}</div>
 <div class="sp"><h4>نقش‌ها</h4><div class="rc">${Object.keys(roles).map(r=>`<span>${esc(r)} · ${fa(roles[r])}</span>`).join('')}</div></div>`}
let at='m',mq='',showF=false;
const TABS=[['m','👥','اعضا'],['t','🏷','تیم‌ها'],['a','📢','اعلان'],['x','🥊','تورنمنت'],['s','🎨','ظاهر'],['p','🔐','رمز']];
const ltr=x=>(String(x.name).replace(/[^A-Za-z0-9\u0600-\u06FF]/g,'').charAt(0)||'X').toUpperCase();
function openAdmin(t){if(t)at=t;const st=$('ac')?$('ac').scrollTop:0,b=$('ab2');b.className='sh adm';
 b.innerHTML=`<div class="ah"><h3>⚙ پنل مدیریت</h3><button class="ib" onclick="$('am').classList.remove('on')">✕</button></div><div class="at">${TABS.map(x=>`<button class="${x[0]===at?'on':''}" onclick="openAdmin('${x[0]}')"><span>${x[1]}</span>${x[2]}</button>`).join('')}</div><div id="ac">${AP[at]()}</div>`;
 $('am').classList.add('on');$('ac').scrollTop=st}
const AP={
m(){const m=eid?by(eid):{},q=nm(mq),l=D.members.filter(x=>!q||nm(x.name+x.real).includes(q)).sort((a,b)=>(b.adm?1:0)-(a.adm?1:0));
 return`<div class="row"><input class="in" placeholder="🔍 جستجوی عضو" value="${esc(mq)}" onchange="mq=this.value;openAdmin()"><button class="bt" style="flex:none;width:auto" onclick="eid='';showF=true;openAdmin()">➕ جدید</button></div><p class="hn">👥 ${fa(D.members.length)} عضو · 👑 ${fa(D.members.filter(x=>x.adm).length)} ادمین · با ⭐ ادمین کن${SERVER?'':'<br>⚠ بعد از افزودن یا تغییر عضو، از تب «رمز» فایل data.js را منتشر کن تا عضو روی گوشی خودش بتواند وارد شود.'}</p>
 ${showF?`<div class="fm"><b>${eid?'ویرایش عضو':'عضو جدید'}</b><input class="in" id="fn" placeholder="نام بازی" value="${esc(m.name||'')}"><input class="in" id="fr" placeholder="نام واقعی" value="${esc(m.real||'')}"><input class="in" id="fc" placeholder="کد عضویت (برای ورود)" value="${esc(m.code||'')}"><input class="in" id="fw" placeholder="${m.pw?'رمز تنظیم شده؛ برای تغییر، رمز جدید بنویس':'رمز این عضو (برای ورود لازم است)'}"><div class="row"><input class="in" id="fl" placeholder="نقش" value="${esc(m.role||'')}"><input class="in" id="fp" type="number" min="0" max="20" placeholder="قدرت ۰-۲۰" value="${m.power==null?'':m.power}"></div><select class="in" id="ft"><option value="">بدون تیم</option>${D.teams.map((t,i)=>`<option value="${i}" ${String(m.team)===String(i)?'selected':''}>${esc(t)}</option>`).join('')}</select><textarea class="in" id="fb" rows="2" placeholder="درباره عضو">${esc(m.bio||'')}</textarea><label class="ck"><input type="checkbox" id="fa" ${m.adm?'checked':''}> 👑 ادمین کلن</label><div class="row"><button class="bt" onclick="saveM()">ذخیره عضو</button><button class="bt g2" onclick="eid='';showF=false;openAdmin()">لغو</button></div></div>`:''}
 ${l.map(x=>`<div class="mr${x.adm?' ad':''}"><div class="av${x.adm?' g':''}">${esc(ltr(x))}</div><div class="mi"><b>${esc(x.name)}${tag(x)}</b><small>${esc(x.role||'عضو')}${x.pw?'':' · <i style="color:#ff6b7d;font-style:normal">بدون رمز</i>'}</small></div><div class="mb"><button class="ib${x.adm?' on':''}" onclick="togA('${x.id}')">⭐</button><button class="ib" onclick="eid='${x.id}';showF=true;openAdmin()">✎</button><button class="ib" onclick="delM('${x.id}')">🗑</button></div></div>`).join('')||'<div class="emp">عضوی نیست.</div>'}`},
t(){return`<p class="hn">اسم تیم‌ها را بنویس و برای هر عضو، تیمش را انتخاب کن.</p>${D.teams.map((t,i)=>`<input class="in" value="${esc(t)}" onchange="D.teams[${i}]=this.value||'تیم ${i+1}';save();all()">`).join('')}${D.members.map(x=>`<div class="mr"><div class="av">${esc(ltr(x))}</div><div class="mi"><b>${esc(x.name)}</b></div><select class="in sx" onchange="by('${x.id}').team=this.value;save();all()"><option value="">بدون تیم</option>${D.teams.map((t,i)=>`<option value="${i}" ${String(x.team)===String(i)?'selected':''}>${esc(t)}</option>`).join('')}</select></div>`).join('')}`},
a(){return`<div class="fm"><b>اعلان جدید</b><input class="in" id="an_t" placeholder="عنوان"><textarea class="in" id="an_b" rows="3" placeholder="متن اعلان"></textarea><button class="bt" onclick="addA()">انتشار اعلان</button></div>${D.ann.map(a=>`<div class="mr"><div class="av">📢</div><div class="mi"><b>${esc(a.title)}</b></div><button class="ib" onclick="delA('${a.id}')">🗑</button></div>`).join('')}`},
x(){return`<p class="hn">مدیریت تورنمنت‌ها (لیست بازیکنان، ساخت حذفی، جدول، لیگ و گروه‌ها) مستقیم داخل بخش «تورنمنت» انجام می‌شود.</p><button class="bt" onclick="$('am').classList.remove('on');go(4)">رفتن به تورنمنت</button>`},
s(){return cfgHTML()},
p(){return`<p class="hn">رمز مدیر را عوض کن یا تغییرات را برای اعضا منتشر کن.</p><input class="in" id="np" placeholder="رمز جدید مدیر"><button class="bt g2" onclick="setAP()">تغییر رمز مدیر</button><div class="fm"><b>انتشار برای اعضا</b><p class="hn">${SERVER?'✅ تغییرات خودکار روی سرور ذخیره می‌شود و اعضا تا یک دقیقه بعد می‌بینند. این دکمه فقط برای نسخه پشتیبان است.':'اعضا فقط اطلاعات داخل فایل data.js را می‌بینند. بعد از هر تغییر، این دکمه را بزن و فایل دانلودشده را در گیت‌هاب جایگزین data.js کن.'}</p><button class="bt" onclick="dl()">⬇ دانلود data.js</button></div>`}};
function togA(id){const m=by(id);m.adm=!m.adm;save();all();openAdmin()}
function addA(){const t=$('an_t').value.trim(),b=$('an_b').value.trim();if(!t||!b)return;D.ann.push({id:uid(),t:Date.now(),title:t,body:b});save();all();openAdmin()}
function saveM(){const n=$('fn').value.trim();if(!n){alert('نام بازی را بنویس');return}const c=$('fc').value.trim();
 if(c&&D.members.some(x=>x.id!==eid&&nm(x.code)===nm(c))){alert('این کد برای عضو دیگری ثبت شده');return}
 const o={id:eid||uid(),name:n,real:$('fr').value.trim(),code:c,role:$('fl').value.trim(),power:Math.min(20,Math.max(0,Number($('fp').value)||0)),team:$('ft').value,bio:$('fb').value.trim(),adm:$('fa').checked,pw:$('fw').value?H($('fw').value):((by(eid)||{}).pw||'')};
 const i=D.members.findIndex(x=>x.id===eid);if(i<0)D.members.push(o);else D.members[i]=o;eid='';showF=false;save();all();openAdmin()}
function delM(id){if(!confirm('حذف شود؟'))return;D.members=D.members.filter(x=>x.id!==id);save();all();openAdmin()}
function delA(id){D.ann=D.ann.filter(x=>x.id!==id);save();all();openAdmin()}
function dl(){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['window.ASH_DATA='+JSON.stringify(D)+';'],{type:'text/javascript'}));a.download='data.js';a.click()}
let pt=0,apm='';
function fix(d){const T6=['اعضا','برترین‌ها','تیم‌ها','اعلان‌ها','تورنمنت','آمار'];d.members=d.members||[];d.teams=d.teams||['تیم ۱','تیم ۲','تیم ۳','تیم ۴'];d.ann=d.ann||[];d.tr=d.tr||{};d.cfg=Object.assign({nm:'A§HRAR',sl:'کلن اشرار',t:T6.slice(),i:['','','','','',''],h:[0,0,0,0,0,0],ac:0},d.cfg||{});while(d.cfg.t.length<6)d.cfg.t.push(T6[d.cfg.t.length]);while(d.cfg.i.length<6)d.cfg.i.push('');while(d.cfg.h.length<6)d.cfg.h.push(0);return d}
function ld(cb){const adm=g('ash_sess','')==='__adm';if(!SERVER||adm){cb&&cb();return}
 fetch(SERVER+'/data?t='+Date.now()).then(r=>r.json()).then(d=>{if(d&&d.members){D=fix(d);s('ash_cache',d)}cb&&cb()}).catch(()=>{const c=g('ash_cache',null);if(c)D=fix(c);cb&&cb()})}
function push(){if(!SERVER||g('ash_sess','')!=='__adm')return;clearTimeout(pt);pt=setTimeout(()=>{if(!apm)apm=prompt('رمز مدیر را برای ذخیره روی سرور وارد کن:')||'';if(!apm)return;
 fetch(SERVER+'/save',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({pass:apm,data:D})}).then(r=>r.json()).then(x=>{if(!x.ok){apm='';alert('ذخیره روی سرور انجام نشد؛ رمز مدیر با رمز تنظیم‌شده در Worker یکی نیست.')}}).catch(()=>{})},900)}
function boot(){const ss=g('ash_sess',''),okk=ss==='__g'||(ss==='__adm'&&own())||(ss&&by(ss)),lk=document.body.classList.contains('locked');if(okk){if(lk)open_();else if(!own())all()}else if(!lk)logout()}
applyCfg();boot();ld(boot);setInterval(()=>ld(boot),60000);
