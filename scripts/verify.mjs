// Verification helper: fetches every official URL in data/awards.json, reports status, and flags listings whose page content changed since the last run.
// Usage: node scripts/verify.mjs   (writes scripts/verify-state.json)
import fs from "node:fs";import crypto from "node:crypto";
const awards=JSON.parse(fs.readFileSync("data/awards.json","utf8"));
const statePath="scripts/verify-state.json";const prev=fs.existsSync(statePath)?JSON.parse(fs.readFileSync(statePath,"utf8")):{};const next={};
const rows=[];
for(const a of awards){let status="ERR",hash="",note="";
  try{const r=await fetch(a.apply,{redirect:"follow",headers:{"user-agent":"Scholio-verify/1.0 (+https://github.com/nirajbhusal/scholio)"}});status=String(r.status);
    const t=(await r.text()).replace(/\s+/g," ");hash=crypto.createHash("sha1").update(t).digest("hex").slice(0,12);
    if(a.deadline&&!t.includes(a.deadline.slice(0,4)))note="year of deadline not found on page";
    if(prev[a.id]&&prev[a.id]!==hash)note=(note?note+"; ":"")+"page changed since last run";
  }catch(e){note=e.message}
  next[a.id]=hash;rows.push([a.id,status,a.checked||"-",note||"ok"]);
}
fs.writeFileSync(statePath,JSON.stringify(next,null,1));
console.log(["id","status","checked","note"].join("\t"));rows.forEach(r=>console.log(r.join("\t")));
