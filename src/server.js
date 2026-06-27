const express=require('express'),app=express(),PORT=process.env.PORT||3000;
app.use(express.json());
app.get('/api/health',(q,r)=>r.json({status:'ok',uptime:process.uptime()}));
app.listen(PORT,()=>console.log(`Signal Flow on http://localhost:${PORT}`));
