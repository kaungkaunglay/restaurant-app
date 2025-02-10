import axios from "axios";

export default axios.create({   
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer rUj-yK43WsOTSp6zK35mLL7K5lw9Po0uVvprLTQ7VmBqZ-jV2iGxx9ZwRwQLbns28W5RRKZTlr75uqvvBEGFNUvx6FyR3PChR_6VGJhUGgQZagAWxkHLLXwD8nenZ3Yx',
    }
}); 