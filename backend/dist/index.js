import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
const PORT = process.env.PORT || 3008;
connectToDatabase().then(() => {
    // app.get("/hello",(req,res,next)=>{
    //     return res.send("HEYYY");
    // })
    app.listen(PORT, () => console.log("Server open and conected to database 👍"));
}).catch(err => console.log(err));
//# sourceMappingURL=index.js.map