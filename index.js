const express = require('express');
const app = express();
const PORT = 5000;
const postRouter = require('./routes/postRouters.js')
const showAll = require('./routes/showAllRouters.js')
const addComment = require("./routes/commentRouters.js")
const deletePost = require("./routes/deleteRouters.js")

app.use(express.json());
app.use(express.static('views'));
app.use((req,res,next)=> {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use("/post",postRouter)
app.use("/showall",showAll)
app.use("/comment",addComment)
app.use('/delete',deletePost)
// app.get
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });