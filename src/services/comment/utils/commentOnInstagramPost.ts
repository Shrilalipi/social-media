/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 17:35.
 */

// import { IgApiClient } from 'instagram-private-api';

// // Replace with your Instagram credentials
// const username = 'your_username';
// const password = 'your_password';

// // Replace 'POST_ID' with the actual ID of the post you want to comment on
// const postId = 'POST_ID';

// // Replace 'Your comment text' with the text of your comment
// const commentText = 'Your comment text';


const commentOnInstagramPost = async (username: string, password: string, postId: string, commentText: string) => {
    try {
        // const ig = new IgApiClient();

        // // Perform login
        // ig.state.generateDevice(username);
        // await ig.account.login(username, password);

        // // Comment on the post
        // const commentResult = await ig.media.comment({
        //     mediaId: postId,
        //     text: commentText,
        // });

        // console.log('Comment posted successfully:', commentResult);
    } catch (error) {
        console.error('Error posting comment:', error);
    }
};

export default commentOnInstagramPost;
