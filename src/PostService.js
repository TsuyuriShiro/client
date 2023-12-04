import axios  from 'axios';

const url = 'api/posts/'

class PostService {
    // Get Posts
    static getPosts() {
        return new Promise((resolve, reject) => {
            const fetchData = async () => {
                try {
                    const res = await axios.get(url);
                    const data = res.data;
                    resolve(
                        data.map(post => ({
                            ...post,
                            createdAt: new Date(post.createdAt),
                        }))
                    );
                } catch (err) {
                    reject(err);
                }
            };
    
            fetchData();
        });
    }

    // Create Post
    static insertPost (text) {
        return axios.post(url, {
            text
        });
    }

    // Delete Post
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }

}

export default PostService;