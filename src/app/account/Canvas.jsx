'use client'
import { useEffect, useRef, useState } from 'react'
import { Layer, Line, Stage } from 'react-konva'

const DrawingCanvas = () => {
  const [lines, setLines] = useState([])
  const isDrawing = useRef(false)

  const handleMouseDown = (e) => {
    isDrawing.current = true
    const pos = e.target.getStage().getPointerPosition()
    setLines([...lines, { points: [pos.x, pos.y] }])
  }

  const handleMouseMove = (e) => {
    if (!isDrawing.current) {
      return
    }
    const stage = e.target.getStage()
    const point = stage.getPointerPosition()
    const lastLine = lines[lines.length - 1]
    lastLine.points = lastLine.points.concat([point.x, point.y])

    setLines([...lines.slice(0, lines.length - 1), lastLine])
  }

  const handleMouseUp = () => {
    isDrawing.current = false
    console.log(new Blob([JSON.stringify(lines)]).size)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'r') {
        setLines([])
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className='bg-slate-100'>
      <Stage
        width={window.innerWidth * 0.6}
        height={window.innerHeight * 0.6}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseUp={handleMouseUp}>
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={`line-${i.toString()}`}
              points={line.points}
              stroke='black'
              strokeWidth={5}
              tension={0.5}
              lineCap='round'
              globalCompositeOperation={line.tool === 'eraser' ? 'destination-out' : 'source-over'}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  )
}

export default DrawingCanvas
