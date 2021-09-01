$(document).ready(()=>{
    loadPosts();
})
async function loadPosts(){
    const posts=await axios.get('/api/post',{params:{postedBy:{profileUserId}}});
    
    console.log(profileUserId);
    for(let post in posts.data){
        const html=createPostHtml(posts);
        $('.userPostsContainer').prepend(html);
    }
}