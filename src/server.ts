import app from "./app";
import dotenv from "./config/dotenv";

const PORT = dotenv.port;

app.listen(PORT, ()=>{
    console.log(`Server running on the port: ${PORT}`);
});