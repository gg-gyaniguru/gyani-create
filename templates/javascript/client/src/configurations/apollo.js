import {ApolloClient, InMemoryCache} from "@apollo/client";

const apollo = new ApolloClient({
    uri: 'http://localhost:9060/api/apollo',
    cache: new InMemoryCache()
});

export default apollo;