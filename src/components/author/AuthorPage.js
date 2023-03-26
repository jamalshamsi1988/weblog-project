import React from 'react';
import sanitizeHtml from 'sanitize-html';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { GET_AUTHOR_INFO } from '../graphql/quaries';
import { Container } from '@mui/system';
import { Avatar, Grid, Typography } from '@mui/material';

import CardEL from "../../shared/CardEL";
import Loader from '../../shared/Loader';

const AuthorPage = () => {

  const {slug}=useParams();
  const {loading,data,errors}=useQuery(GET_AUTHOR_INFO, {
    variables:{slug}
  });



  if(loading) return <Loader />
    if(errors) return <h4>Error ...</h4>
    
  console.log({data});

  const {author:{name,avatar,field,posts,description}}=data;

  return (
   
    <Container maxWidth="lg">
      <Grid container mt={10} >
          <Grid item xs={12} display="flex" flexDirection="column" alignItems="center" >
              <Avatar src={avatar.url} sx={{height:250,width:250}}  />
              <Typography component="h3" variant='h5' fontWeight={700} mt={4}>{name}</Typography>
              <Typography component="p" variant='h5' color="text.secondary" mt={2}>{field}</Typography>
          </Grid>
          <Grid item mt={5}>
           <div dangerouslySetInnerHTML={{__html:sanitizeHtml(description.html)}}>
           </div>
          </Grid>
          <Grid item>
            <Typography component="h3" variant='h5' fontWeight={700} mt={6}>مقالات {name}</Typography> 
            <Grid container xs={12} spacing={2} mt={2}>
              {posts.map(post => (
                <Grid item xs={12} sm={6} md={4} key={post.id}> 
                       <CardEL title={post.title} slug={post.slug} coverPhoto={post.coverPhoto}/>
                 </Grid>

              ))}
            </Grid>
          </Grid>
          
      </Grid>
      
    </Container>
  )
}

export default AuthorPage
