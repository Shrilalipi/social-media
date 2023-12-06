/**
 * Created By Shrilalipi(shrilalipi@gmail.com) on 05-12-2023 at 17:11.
 */

// import { IgApiClient } from 'instagram-private-api';
// import { readFileSync } from 'fs';

// // Replace with your Instagram credentials
// const username = 'your_username';
// const password = 'your_password';

// // Replace with the path to your photo
// const photoPath = 'path/to/your/photo.jpg';

const uploadToInstagram = async (username: string, password: string, photoPath: string) => {
    try {
        //     const ig = new IgApiClient();

        //     // Perform login
        //     ig.state.generateDevice(username);
        //     await ig.account.login(username, password);

        //     // Upload photo
        //     const photoBuffer = readFileSync(photoPath);
        //     const publishResult = await ig.publish.photo({
        //         file: photoBuffer,
        //         caption: 'Your caption here', // Add a caption if needed
        //     });

        //     console.log('Post uploaded successfully:', publishResult);
    } catch (error) {
        console.error('Error uploading post:', error);
    }
};

export default uploadToInstagram;
