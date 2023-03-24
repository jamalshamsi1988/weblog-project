import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_AUTHORS_INFO } from '../graphql/quaries';
import { Avatar, Divider, Grid, Typography } from '@mui/material';

const Authors = () => {
  const {loading,data,errors}=useQuery(GET_AUTHORS_INFO);

  if(loading) return <h3>Loading ...</h3>
  if(errors) return <h3>Error ...</h3>
 
  return (
    <Grid container sx={{boxShadow:"rgba(0,0,0,0.1) 0 4px 12px" , borderRadius:4}}>
    {
      data.authors.map((author,index) => <React.Fragment key={author.id} > 
        
        <Grid item xs={12} padding={2}>
          <a href={`/author/${author.slug}`} style={{display:"flex" , alignItems:"center" , textDecoration:"none"}}>
            <Avatar src={author.avatar.url} sx={{marginLeft:2}}/>
            <Typography component="p" variant='p' color="text.secondary">{author.name}</Typography>
          </a>
        </Grid>
        {
         index !== data.authors.length -1 && (

        <Grid item xs={12}>
          <Divider variant='middle' />
        </Grid>
          )
        }
        </React.Fragment>)
    
     
    
    }
    </Grid>
)
}

export default Authors
