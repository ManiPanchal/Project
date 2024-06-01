const alarms = {};


app.post("/set-time",(req,res)=>{
   const { userId, time } = req.body;
  alarms[userId] = { time, response: res }; 
  
 cron.schedule(time,()=>{
           if(alarms[userId]){
               const response = alarms[userId].response;
      response.send(`Your alarm set for ${time} has been completed.`);
      delete alarms[userId]; 
           }
})
  res.send('set');
});