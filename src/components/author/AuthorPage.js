import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { GET_AUTHOR_INFO } from '../graphql/quaries';
import { Container } from '@mui/system';
import { Avatar, Grid, Typography } from '@mui/material';

const AuthorPage = () => {

  const {slug}=useParams();
  const {loading,data,errors}=useQuery(GET_AUTHOR_INFO, {
    variables:{slug}
  });



  if(loading) return <h4>Loading ...</h4>
    if(errors) return <h4>Error ...</h4>
    
  console.log({data});

  return (
   
    <Container maxWidth="lg">
      <Grid container mt={10} >
          <Grid item xs={12} display="flex" flexDirection="column" alignItems="center" >
              <Avatar src={data.author.avatar.url} sx={{height:250,width:250}}  />
              <Typography component="h3" variant='h5' fontWeight={700} mt={4}>{data.author.name}</Typography>
              <Typography component="p" variant='h5' color="text.secondary" mt={2}>{data.author.field}</Typography>
          </Grid>
          <Grid item>
            {data.author.description.html}
          </Grid>
      </Grid>
      
    </Container>
  )
}

export default AuthorPage
