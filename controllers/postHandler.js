var posts = require('../models/model.post.js')

function postHandler(req,res){
    let i = 0;
    let flag = false;
    for(;i<Object.keys(posts).length;i++){
        if(i!=posts[i].id){
            posts.push({
                id:i,
                content:req.params.post,
                comment:[]
            })
            res.status(200).json(posts[i])
            flag=true
            break;
        }
    }
    if(!flag){
        posts.push({
            id:i,
            content:req.params.post,
            comment:[]
        })
        res.status(200).json(posts[i])
    }
}
function showAll(req,res){
    // Object.keys(posts).forEach(([key,value])=>{
    //     console.log(key+value)
    // })
    res.status(200).json(posts)
}
function addComment(req,res){
    // Object.keys(posts).forEach(([key,value])=>{
    //     if(value.)
    // })
    let i = 0;
    let flag = true;
    for(;i<Object.keys(posts).length;i++){
        if(i==req.params.id){
            posts[i].comment.push(req.params.comment);
            res.status(200).json(posts[i]);
            flag=false;
            break;
        }
    }
    if(flag) res.status(404).json({Error: "Post not found"});
}
function deletePost(req,res){
    let i = 0;
    let flag = true;
    for(;i<Object.keys(posts).length;i++){
        if(i==req.params.id){
            delete posts[i]
            var newpost = []
            for(let k =0;k<Object.keys(posts).length;k++) if(posts[k]!=='undefined') newpost.push(posts[k]);
            posts = newpost;
            // posts[i].comment.push(req.params.comment);
            res.status(200).json({status:"post deleted"});
            flag=false;
            break;
        }
    }
    if(flag) res.status(404).json({Error: "No post found"});
}
module.exports = {
    postHandler,
    showAll,
    addComment,
    deletePost
}