import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

const _dirname = path.resolve();

// app.use(cors({
//     origin: "http://localhost:5173"
// }));

app.get("/api/greet",(req,res) => {
    const name = req.query.name;
    if (name) {
        res.json({
            message: `Hello, ${name}! Welcome to Younglabs.`
        });
    }
    else {
        res.status(400).json({
            error: "Name is required."
        });
    }
})

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*',(_,res) => {
    res.sendFile(path.resolve(_dirname,"frontend", "dist", "index.html"));
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
});