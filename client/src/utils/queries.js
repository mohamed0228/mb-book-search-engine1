import { gql } from '@apollo/client';

//TODO add pageCount and publishedDate to savedBooks
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
        pageCount
        publishedDate 
      }
    }
  }
`;
