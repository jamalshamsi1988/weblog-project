import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography,Divider } from '@mui/material'


const CardEL = ({title,author,coverPhoto,slug}) => {
  return (
    <Card sx={{boxShadow:"rgba(0,0,0,0.1) 0 4px 12px" , borderRadius:4}}>
      {
        author &&
      <CardHeader avatar={<Avatar src={author.avatar.url} sx={{marginLeft:2}} />} title={<Typography component="p" variant='p' color="text.secondary">{author.name}</Typography>} />
      }
      <CardMedia component="img" height="194" image={coverPhoto.url} alt={slug} />
      <CardContent>
            <Typography component="h3" variant='p' color="text.primary" fontWeight="600">{title}</Typography>
      </CardContent>
           <Divider variant="middle" sx={{margin:"10px"}}/>
    <Link to={`/blogs/${slug}`} style={{width:"100%" , textDecoration:"none"}}>     
      <CardActions >
        <Button variant="outlined" sx={{width:"100%" , borderRadius:3}} size="small" >
         مطالعه مقاله
        </Button>
      </CardActions>
      </Link> 
    </Card>
  )
}

export default CardEL
