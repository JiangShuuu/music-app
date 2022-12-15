import React from 'react'
import styled from '@emotion/styled'
import { FiPauseCircle } from 'react-icons/fi'
import {
  HiOutlineArrowUturnRight,
  HiOutlineArrowUturnLeft,
} from 'react-icons/hi2'
import { AiFillStepForward, AiFillStepBackward } from 'react-icons/ai'
import { FaRandom } from 'react-icons/fa'
import { BiRepeat } from 'react-icons/bi'

export default function Controller() {
  return (
    <div className="flex-center w-full h-full">
      {/* icons */}
      <div className="flex-center space-x-4">
        <Button>
          <FaRandom />
        </Button>
        <Button>
          <AiFillStepBackward />
        </Button>
        <Button>
          <HiOutlineArrowUturnLeft />
        </Button>
        <Player>
          <FiPauseCircle className="w-10 h-10" />
        </Player>
        <Button>
          <HiOutlineArrowUturnRight />
        </Button>
        <Button>
          <AiFillStepForward />
        </Button>
        <Button>
          <BiRepeat className="rotate-180" />
        </Button>
      </div>
      {/* process */}
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
