import React from 'react'
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded'
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded'
import Slider from '@mui/material/Slider'
import { useTheme } from '@mui/material/styles'

export default function Volume() {
  const theme = useTheme()
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center w-56 space-x-2">
        <VolumeDownRounded />
        <Slider
          aria-label="Volume"
          defaultValue={30}
          sx={{
            color: '#fff',
            '& .MuiSlider-track': {
              border: 'none',
            },
            '& .MuiSlider-thumb': {
              width: 18,
              height: 18,
              backgroundColor: '#fff',
              '&:before': {
                boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible, &.Mui-active': {
                boxShadow: 'none',
              },
            },
          }}
        />
        <VolumeUpRounded />
      </div>
    </div>
  )
}
