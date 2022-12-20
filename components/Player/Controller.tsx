import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FiPauseCircle } from 'react-icons/fi'
import {
  HiOutlineArrowUturnRight,
  HiOutlineArrowUturnLeft,
} from 'react-icons/hi2'
import { AiFillStepForward, AiFillStepBackward } from 'react-icons/ai'
import { FaRandom } from 'react-icons/fa'
import { BiRepeat } from 'react-icons/bi'

import Slider from '@mui/material/Slider'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

export default function Controller() {
  const theme = useTheme()
  const duration = 200 // seconds
  const [position, setPosition] = React.useState(32)

  function formatDuration(value: number) {
    const minute = Math.floor(value / 60)
    const secondLeft = value - minute * 60
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`
  }

  const TinyText = styled(Typography)({
    fontSize: '0.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
  })

  return (
    <div className="flex-col w-full h-full flex-center">
      {/* icons */}
      <div className="space-x-4 flex-center">
        <Button>
          <FaRandom className="w-5 h-5" />
        </Button>
        <Button>
          <AiFillStepBackward className="w-5 h-5" />
        </Button>
        <Button>
          <HiOutlineArrowUturnLeft className="w-5 h-5" />
        </Button>
        <Player>
          <FiPauseCircle className="w-10 h-10" />
        </Player>
        <Button>
          <HiOutlineArrowUturnRight className="w-5 h-5" />
        </Button>
        <Button>
          <AiFillStepForward className="w-5 h-5" />
        </Button>
        <Button>
          <BiRepeat className="w-5 h-5 rotate-180" />
        </Button>
      </div>
      {/* process */}
      <div className="relative w-full">
        <Slider
          aria-label="time-indicator"
          size="small"
          value={position}
          min={0}
          step={1}
          max={duration}
          onChange={(_, value) => setPosition(value as number)}
          sx={{
            color: '#ffffff',
            height: 4,
            '& .MuiSlider-thumb': {
              width: 8,
              height: 8,
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&:before': {
                boxShadow: '0 2px 12px 0 #ffffff66',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${
                  theme.palette.mode === 'dark'
                    ? 'rgb(255 255 255 / 16%)'
                    : 'rgb(0 0 0 / 16%)'
                }`,
              },
              '&.Mui-active': {
                width: 20,
                height: 20,
              },
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
            },
          }}
        />
        <div className="absolute flex items-center justify-between w-full text-sm top-5">
          <p>{formatDuration(position)}</p>
          <p>-{formatDuration(duration - position)}</p>
        </div>
      </div>
    </div>
  )
}

const Button = styled.button`
  color: #dedddd;
  transition: 0.3s;
  &:hover {
    color: white;
  }
`

const Player = styled.button`
  color: white;
  transition: 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`
