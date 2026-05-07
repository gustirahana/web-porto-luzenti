import axios from 'axios';

export const fetchInstagramPosts = async (username, accessToken) => {
    try {
        const response = await axios.get(`https://graph.instagram.com/${username}/media?fields=id,caption,media_url,permalink&access_token=${accessToken}`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching Instagram posts: ", error);
        return [];
    }
};