const dictionaries = {
  zh: {
    back:'返回作品集', notice:'浏览器演示 · 全部为虚构数据，修改仅保存在当前浏览器。本演示不连接原项目后端，不提供真实认证。',
    dashboard:'仪表盘', equipment:'设备管理', records:'点检记录', role:'体验角色', admin:'管理员', engineer:'工程师 · 林', roleNote:'工程师仅查看和点检本人负责的设备。角色切换用于演示流程。', reset:'重置演示数据', resetAsk:'恢复全部演示数据？当前浏览器中的修改将被清除。',
    subtitle:'设备状态、点检计划与现场记录，一目了然。', add:'新增设备', inspect:'登记点检', total:'设备总数', healthy:'运行正常', pending:'待点检', fault:'需维护', distribution:'设备状态分布', recent:'最近点检', all:'全部状态', search:'搜索设备名称、编号或位置', id:'设备编号', name:'设备名称', location:'位置', owner:'负责人', status:'状态', due:'下次点检', actions:'操作', detail:'详情', edit:'编辑', remove:'删除', date:'点检日期', result:'点检结果', notes:'备注', inspector:'点检人员', normal:'正常', issue:'发现异常', empty:'暂无符合条件的记录。', cancel:'取消', save:'保存', saved:'已保存。', resetDone:'演示数据已重置。', storageError:'浏览器存储不可用或已满。本次修改仅在当前页面有效。', deleteAsk:'删除这台设备及其点检记录？', next:'下次点检日期', select:'选择设备', details:'设备详情', history:'点检历史', invalidDate:'下次点检日期必须晚于点检日期。', futureDate:'点检日期不能晚于今天。', unauthorized:'当前角色无法执行此操作。', formHint:'所有修改仅用于演示，不会发送到服务器。', employee:'工程师 · 陈', adminName:'演示管理员',
    names:['中央空调 A-01','循环水泵 B-02','排风机 C-03','冷却塔 D-04','空气处理机 E-05','配电柜 F-06'], places:['北楼 · 3F','南楼 · B1','北楼 · 屋顶','西楼 · 屋顶','南楼 · 2F','西楼 · 1F'], seedNote:'例行检查，设备运行正常。'
  },
  en: {
    back:'Back to portfolio', notice:'Browser demo · All data is fictional and changes stay in this browser. This demo does not connect to the original backend or provide real authentication.',
    dashboard:'Dashboard', equipment:'Equipment', records:'Inspections', role:'Demo role', admin:'Administrator', engineer:'Engineer · Lin', roleNote:'Engineers can only view and inspect their assigned equipment. Role switching simulates the workflow.', reset:'Reset demo data', resetAsk:'Restore demo data? Changes in this browser will be cleared.',
    subtitle:'Equipment health, inspection schedules, and field records at a glance.', add:'Add equipment', inspect:'Record inspection', total:'Total equipment', healthy:'Operational', pending:'Inspection due', fault:'Maintenance needed', distribution:'Equipment status', recent:'Recent inspections', all:'All statuses', search:'Search name, ID, or location', id:'Equipment ID', name:'Name', location:'Location', owner:'Assigned to', status:'Status', due:'Next inspection', actions:'Actions', detail:'Details', edit:'Edit', remove:'Delete', date:'Inspection date', result:'Result', notes:'Notes', inspector:'Inspector', normal:'Normal', issue:'Issue found', empty:'No matching records.', cancel:'Cancel', save:'Save', saved:'Saved.', resetDone:'Demo data restored.', storageError:'Browser storage is unavailable or full. Changes will only last on this page.', deleteAsk:'Delete this equipment and its inspection records?', next:'Next inspection date', select:'Select equipment', details:'Equipment details', history:'Inspection history', invalidDate:'The next inspection must be after the inspection date.', futureDate:'The inspection date cannot be in the future.', unauthorized:'This action is unavailable for the current role.', formHint:'Demo changes only. No data is sent to a server.', employee:'Engineer · Chen', adminName:'Demo administrator',
    names:['Air conditioner A-01','Water pump B-02','Exhaust fan C-03','Cooling tower D-04','Air handler E-05','Distribution panel F-06'], places:['North · 3F','South · B1','North · Roof','West · Roof','South · 2F','West · 1F'], seedNote:'Routine inspection. Equipment operating normally.'
  },
  ja: {
    back:'作品集へ戻る', notice:'ブラウザーデモ · すべて架空のデータです。変更はこのブラウザー内にのみ保存されます。元のバックエンドや実際の認証には接続しません。',
    dashboard:'ダッシュボード', equipment:'設備管理', records:'点検記録', role:'体験ロール', admin:'管理者', engineer:'エンジニア · 林', roleNote:'エンジニアは自分の担当設備のみ閲覧・点検できます。ロール切替で操作の流れを体験できます。', reset:'デモデータをリセット', resetAsk:'初期データに戻しますか？このブラウザーでの変更は削除されます。',
    subtitle:'設備の状態・点検予定・現場の記録を一元管理。', add:'設備を追加', inspect:'点検を登録', total:'設備総数', healthy:'正常稼働', pending:'点検待ち', fault:'要メンテナンス', distribution:'設備の状態', recent:'最近の点検', all:'すべての状態', search:'設備名・番号・設置場所で検索', id:'設備番号', name:'設備名', location:'設置場所', owner:'担当者', status:'状態', due:'次回点検', actions:'操作', detail:'詳細', edit:'編集', remove:'削除', date:'点検日', result:'点検結果', notes:'備考', inspector:'点検担当', normal:'正常', issue:'異常あり', empty:'該当する記録はありません。', cancel:'キャンセル', save:'保存', saved:'保存しました。', resetDone:'デモデータを初期化しました。', storageError:'ブラウザーに保存できません。変更はこのページでのみ有効です。', deleteAsk:'この設備と点検記録を削除しますか？', next:'次回点検日', select:'設備を選択', details:'設備詳細', history:'点検履歴', invalidDate:'次回点検日は点検日より後にしてください。', futureDate:'点検日に未来の日付は指定できません。', unauthorized:'現在のロールでは操作できません。', formHint:'変更はデモ専用です。サーバーには送信されません。', employee:'エンジニア · 陳', adminName:'デモ管理者',
    names:['空調機 A-01','循環ポンプ B-02','排気ファン C-03','冷却塔 D-04','空調処理機 E-05','分電盤 F-06'], places:['北棟 · 3F','南棟 · B1','北棟 · 屋上','西棟 · 屋上','南棟 · 2F','西棟 · 1F'], seedNote:'定期点検。正常稼働を確認。'
  }
};
const $ = (id) => document.getElementById(id);
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const key = 'eims-browser-demo-v1';
let lang = new URLSearchParams(location.search).get('lang') || 'zh';
if (!(lang in dictionaries)) lang = 'zh';
let t = dictionaries[lang], view = 'dashboard', role = 'admin', query = '', filter = '', submit = null;
const dateOffset = (offset) => { const d = new Date(); d.setDate(d.getDate()+offset); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; };
function seed() {
  return { version:1, equipment:t.names.map((_,i) => ({id:`EQ-${String(i+1).padStart(3,'0')}`, seed:i, owner:i%2?'chen':'lin', due:dateOffset([-2,12,5,-1,20,8][i]), fault:i===2})), records:[0,1,3,4].map((i,n) => ({id:`seed-${i}`, equipment:`EQ-${String(i+1).padStart(3,'0')}`, date:dateOffset(-n-1), result:'normal', inspector:i%2?'chen':'lin', notes:'', seeded:true})) };
}
const validDate = value => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value));
function valid(data) {
  return data?.version===1 && Array.isArray(data.equipment) && Array.isArray(data.records) && data.equipment.length<=1000 && data.records.length<=10000
    && data.equipment.every(e=>typeof e.id==='string' && ['lin','chen'].includes(e.owner) && validDate(e.due) && typeof e.fault==='boolean' && (Number.isInteger(e.seed)&&e.seed>=0&&e.seed<6 || typeof e.name==='string'&&typeof e.location==='string'))
    && new Set(data.equipment.map(e=>e.id)).size===data.equipment.length
    && data.records.every(r=>typeof r.id==='string' && data.equipment.some(e=>e.id===r.equipment) && validDate(r.date) && ['normal','issue'].includes(r.result) && ['lin','chen','admin'].includes(r.inspector) && typeof r.notes==='string');
}
let data;
let storageFailed = false;
try { const saved=JSON.parse(localStorage.getItem(key)||'null'); data=valid(saved)?saved:seed(); } catch { data=seed(); storageFailed=true; }
function persist() { try { localStorage.setItem(key,JSON.stringify(data)); return true; } catch { return false; } }
function feedback(message) { $('feedback').textContent=message; }
const equipmentName = e => e.name ?? t.names[e.seed];
const equipmentLocation = e => e.location ?? t.places[e.seed];
const ownerName = id => id==='admin'?t.adminName:id==='lin'?t.engineer:t.employee;
const accessible = () => data.equipment.filter(e=>role==='admin'||e.owner==='lin');
const status = e => e.fault?'fault':e.due<=dateOffset(0)?'pending':'healthy';
const badge = (state) => `<span class="badge ${state}">${escapeHtml(t[state])}</span>`;
function visibleRecords() { const ids=new Set(accessible().map(e=>e.id)); return data.records.filter(r=>ids.has(r.equipment)).sort((a,b)=>b.date.localeCompare(a.date)||b.id.localeCompare(a.id)); }
function recordTable(records) {
  return `<div class="table-wrap"><table><thead><tr>${['date','name','inspector','result','notes'].map(k=>`<th>${escapeHtml(t[k])}</th>`).join('')}</tr></thead><tbody>${records.map(r=>{const e=data.equipment.find(e=>e.id===r.equipment); return `<tr><td>${escapeHtml(r.date)}</td><td>${escapeHtml(equipmentName(e))}</td><td>${escapeHtml(ownerName(r.inspector))}</td><td><span class="badge ${r.result==='issue'?'fault':''}">${escapeHtml(t[r.result])}</span></td><td>${escapeHtml(r.seeded?t.seedNote:r.notes||'—')}</td></tr>`;}).join('')}</tbody></table>${records.length?'':`<p class="empty">${t.empty}</p>`}</div>`;
}
function equipmentRows() {
  const rows=accessible().filter(e=>(!filter||status(e)===filter) && `${e.id} ${equipmentName(e)} ${equipmentLocation(e)}`.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  $('equipment-body').innerHTML=rows.map(e=>`<tr><td>${escapeHtml(e.id)}</td><td><strong>${escapeHtml(equipmentName(e))}</strong></td><td>${escapeHtml(equipmentLocation(e))}</td><td>${escapeHtml(ownerName(e.owner))}</td><td>${badge(status(e))}</td><td>${escapeHtml(e.due)}</td><td><button class="secondary" data-action="detail" data-id="${escapeHtml(e.id)}">${t.detail}</button> <button data-action="inspect" data-id="${escapeHtml(e.id)}">${t.inspect}</button>${role==='admin'?` <button class="secondary" data-action="edit" data-id="${escapeHtml(e.id)}">${t.edit}</button> <button class="secondary danger" data-action="delete" data-id="${escapeHtml(e.id)}">${t.remove}</button>`:''}</td></tr>`).join('');
  $('empty').hidden=rows.length>0;
}
function render() {
  document.documentElement.lang=lang==='zh'?'zh-CN':lang;
  document.title=`EIMS · ${t.dashboard}`;
  $('language').value=lang;
  $('back').textContent=t.back; $('back').href=lang==='en'?'/':`/${lang}/`;
  $('notice').textContent=t.notice;
  $('role-label').textContent=t.role; $('role-note').textContent=t.roleNote;
  $('role').innerHTML=`<option value="admin">${t.admin}</option><option value="engineer">${t.engineer}</option>`; $('role').value=role;
  $('reset').textContent=t.reset;
  $('nav').innerHTML=['dashboard','equipment','records'].map(v=>`<button data-view="${v}" class="${view===v?'active':''}" ${view===v?'aria-current="page"':''}>${t[v]}</button>`).join('');
  $('heading').textContent=t[view]; $('subtitle').textContent=t.subtitle;
  $('add').textContent=view==='equipment'&&role==='admin'?t.add:t.inspect;
  $('add').disabled=!(view==='equipment'&&role==='admin')&&!accessible().length;
  if(view==='dashboard') {
    const entries=accessible(); const counts={total:entries.length,healthy:0,pending:0,fault:0}; entries.forEach(e=>counts[status(e)]++);
    $('content').innerHTML=`<div class="metrics">${Object.entries(counts).map(([k,n])=>`<article class="metric ${k==='fault'||k==='pending'?'alert':''}"><span>${t[k]}</span><strong>${n}</strong></article>`).join('')}</div><section class="panel"><h2>${t.distribution}</h2><div class="bars">${['healthy','pending','fault'].map(k=>`<div class="bar-line"><span>${t[k]}</span><div class="track"><div class="fill" style="width:${entries.length?counts[k]/entries.length*100:0}%"></div></div><strong>${counts[k]}</strong></div>`).join('')}</div></section><section class="panel"><div class="panel-head"><h2>${t.recent}</h2><button class="secondary" data-view="records">${t.records} →</button></div>${recordTable(visibleRecords().slice(0,5))}</section>`;
  } else if(view==='equipment') {
    $('content').innerHTML=`<section class="panel"><div class="filters"><input id="search" type="search" aria-label="${t.search}" placeholder="${t.search}" value="${escapeHtml(query)}"><select id="filter" aria-label="${t.status}"><option value="">${t.all}</option>${['healthy','pending','fault'].map(k=>`<option value="${k}" ${filter===k?'selected':''}>${t[k]}</option>`).join('')}</select></div><div class="table-wrap"><table><thead><tr>${['id','name','location','owner','status','due','actions'].map(k=>`<th>${t[k]}</th>`).join('')}</tr></thead><tbody id="equipment-body"></tbody></table><p id="empty" class="empty">${t.empty}</p></div></section>`;
    equipmentRows(); $('search').addEventListener('input',e=>{query=e.target.value; equipmentRows();}); $('filter').addEventListener('change',e=>{filter=e.target.value; equipmentRows();});
  } else { $('content').innerHTML=`<section class="panel"><h2>${t.records}</h2>${recordTable(visibleRecords())}</section>`; }
}
const field = (label,html) => `<label>${escapeHtml(label)}${html}</label>`;
function openModal(title,html,handler) { $('modal-title').textContent=title; $('fields').innerHTML=html; $('save').textContent=t.save; $('cancel').textContent=t.cancel; $('save').hidden=!handler; submit=handler; $('modal').showModal(); }
function saveDone() { const stored=persist(); $('modal').close(); render(); feedback(stored?t.saved:t.storageError); }
function inspect(id) {
  const entries=accessible(); if(!entries.length) return;
  openModal(t.inspect,field(t.select,`<select name="equipment" required>${entries.map(e=>`<option value="${escapeHtml(e.id)}" ${e.id===id?'selected':''}>${escapeHtml(equipmentName(e))} (${escapeHtml(e.id)})</option>`).join('')}</select>`)+field(t.date,`<input name="date" type="date" value="${dateOffset(0)}" max="${dateOffset(0)}" required>`)+field(t.result,`<select name="result"><option value="normal">${t.normal}</option><option value="issue">${t.issue}</option></select>`)+field(t.next,`<input name="next" type="date" value="${dateOffset(30)}" required>`)+field(t.notes,'<textarea name="notes" rows="3" maxlength="500"></textarea>')+`<p class="hint">${t.formHint}</p>`, values=>{
    const equipment=accessible().find(e=>e.id===values.get('equipment')); if(!equipment) return feedback(t.unauthorized);
    const date=values.get('date'), next=values.get('next');
    if(date>dateOffset(0)){ $('form').elements.namedItem('date').setCustomValidity(t.futureDate); return $('form').reportValidity(); }
    if(next<=date){ $('form').elements.namedItem('next').setCustomValidity(t.invalidDate); return $('form').reportValidity(); }
    equipment.due=next; equipment.fault=values.get('result')==='issue';
    data.records.unshift({id:crypto.randomUUID(),equipment:equipment.id,date,result:values.get('result'),inspector:role==='admin'?'admin':'lin',notes:values.get('notes').trim()}); saveDone();
  });
}
function editEquipment(id) {
  if(role!=='admin') return feedback(t.unauthorized);
  const equipment=id?data.equipment.find(e=>e.id===id):null;
  openModal(equipment?t.edit:t.add,field(t.name,`<input name="name" required maxlength="80" value="${equipment?escapeHtml(equipmentName(equipment)):''}">`)+field(t.location,`<input name="location" required maxlength="80" value="${equipment?escapeHtml(equipmentLocation(equipment)):''}">`)+field(t.owner,`<select name="owner"><option value="lin">${t.engineer}</option><option value="chen" ${equipment?.owner==='chen'?'selected':''}>${t.employee}</option></select>`)+field(t.next,`<input name="next" type="date" required value="${equipment?.due||dateOffset(7)}">`)+`<p class="hint">${t.formHint}</p>`,values=>{
    if(role!=='admin') return feedback(t.unauthorized);
    const name=values.get('name').trim(), place=values.get('location').trim();
    if(!name||!place) { const input=$('form').elements.namedItem(!name?'name':'location'); input.value=''; input.reportValidity(); return; }
    const changes={name,location:place,owner:values.get('owner'),due:values.get('next')};
    if(equipment) { Object.assign(equipment,changes); delete equipment.seed; }
    else { const n=Math.max(0,...data.equipment.map(e=>Number(e.id.replace('EQ-',''))||0))+1; data.equipment.push({id:`EQ-${String(n).padStart(3,'0')}`,fault:false,...changes}); }
    saveDone();
  });
}
function detail(id) {
  const e=accessible().find(e=>e.id===id); if(!e) return;
  openModal(t.details,`<div class="detail-grid">${[['id',e.id],['name',equipmentName(e)],['location',equipmentLocation(e)],['owner',ownerName(e.owner)],['due',e.due]].map(([k,v])=>`<p><strong>${t[k]}</strong> · ${escapeHtml(v)}</p>`).join('')}</div><h2>${t.history}</h2>${recordTable(visibleRecords().filter(r=>r.equipment===id))}`,null);
}
document.addEventListener('click',event=>{
  const button=event.target.closest('button'); if(!button) return;
  if(button.dataset.view){view=button.dataset.view; feedback(''); render();}
  const {action,id}=button.dataset;
  if(action==='inspect') inspect(id);
  if(action==='detail') detail(id);
  if(action==='edit') editEquipment(id);
  if(action==='delete'&&role==='admin'&&confirm(t.deleteAsk)){data.equipment=data.equipment.filter(e=>e.id!==id);data.records=data.records.filter(r=>r.equipment!==id);const stored=persist();render();feedback(stored?t.saved:t.storageError);}
});
$('language').addEventListener('change',event=>{lang=event.target.value;t=dictionaries[lang];const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState(null,'',url);feedback('');render();});
$('role').addEventListener('change',event=>{role=event.target.value;query='';filter='';feedback('');render();});
$('add').addEventListener('click',()=>view==='equipment'&&role==='admin'?editEquipment():inspect());
$('reset').addEventListener('click',()=>{if(confirm(t.resetAsk)){data=seed();query='';filter='';const stored=persist();render();feedback(stored?t.resetDone:t.storageError);}});
$('form').addEventListener('submit',event=>{event.preventDefault();if(submit)submit(new FormData($('form')));});
$('form').addEventListener('input',event=>{if('setCustomValidity' in event.target)event.target.setCustomValidity('');});
for(const id of ['close','cancel']) $(''+id).addEventListener('click',()=>$('modal').close());
render(); if(storageFailed)feedback(t.storageError);

export {};
