import ApolloClient, { gql } from "apollo-boost";
import "regenerator-runtime/runtime";

const getData = async () => {
  const client = new ApolloClient({
    uri: "https://noroff-wf2-ma3.herokuapp.com/graphql",
  });

  const response = await client.query({
    query: gql`
      {
        users(id: 5) {
          posts {
            title
            body
          }
        }
      }
    `,
  });

  const data = response.data.users[0].posts;
  data.forEach((post) => {
    console.log(post.title);
  });
};

getData();
