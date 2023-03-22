import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`

        query{
                posts{
                    author{
                    name
                    avatar{
                        url
                    }
                    slug
                    }
                    id
                    title
                    coverPhoto {
                    url
                    }
                }
}
       
`;

export {GET_BLOGS_INFO};