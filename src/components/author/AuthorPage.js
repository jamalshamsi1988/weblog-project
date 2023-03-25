import React from 'react'
import { useParams } from 'react-router'
import { useQuery } from '@apollo/client';
import { GET_AUTHOR_INFO } from '../graphql/quaries';

const AuthorPage = () => {

    const {slug} =useParams();

    const {loading,data,errors}=useQuery(GET_AUTHOR_INFO, {
        variables:{slug},
    });

    if(loading) return <h3>Loading ...</h3>
    if(errors) return <h3>Error ...</h3>
    console.log({slug});

  return (
    <div>
      author page
    </div>
  )
}

export default AuthorPage
