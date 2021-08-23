$(document).ready(()=>{
    loadPosts();
})
async function loadPosts(){
    const posts=await axios.get('/api/post');
    console.log(posts);
    // for(let post in posts.data){
        const html=createPostHtml(posts[8]);
        $('.userPostsContainer').prepend(html);
    // }
}