import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export default function Cards() {
  return (
    <Card sx={{ maxWidth: 200, maxHeight: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="/images/01.png"
          className="w-48"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            週末清聽
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="line-clamp line-clamp-2"
          >
            到了週末,你應該試著把柔軟的感覺找回來,小小小到了週末,你應該試著把柔軟的感覺找回來,小小小到了週末,你應該試著把柔軟的感覺找回來,小小小
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
