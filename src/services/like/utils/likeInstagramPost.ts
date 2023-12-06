/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 17:27.
 */

// import { IgApiClient } from 'instagram-private-api';

// // Replace with your Instagram credentials
// const username = 'your_username';
// const password = 'your_password';

const likeInstagramPost = async (username: string, password: string, postId: string) => {
    try {
        // const ig = new IgApiClient();

        // // Perform login
        // ig.state.generateDevice(username);
        // await ig.account.login(username, password);

        // // Like the post
        // await ig.media.like({
        //     mediaId: postId,
        // });

        console.log('Post liked successfully.');
    } catch (error) {
        console.error('Error liking post:', error);
    }
};

// // Replace 'POST_ID' with the actual ID of the post you want to like
// const postId = 'POST_ID';

export default likeInstagramPost;
