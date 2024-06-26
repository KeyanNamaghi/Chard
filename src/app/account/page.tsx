'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { watchTesting } from '../../lib/firebase/firestore'

const Canvas = dynamic(() => import('./Canvas.jsx'), { ssr: false })

export default function Home() {
  const [data, setData] = useState<string | null>(null)

  useEffect(() => {
    const unsub = watchTesting((data: string) => {
      setData(data)
    })
    return () => {
      unsub()
    }
  }, [])

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex text-white'>
        <p className='fixed left-0 top-0 flex w-full justify-center border-b border-chard-700 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-chard-600 lg:p-4 lg:dark:bg-zinc-800/30'>
          Get started by editing&nbsp;
          <code className='font-mono font-bold'>src/app/page.tsx</code>
        </p>
        <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
          <a
            className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
            href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'>
            By <Image src='/vercel.svg' alt='Vercel Logo' className='dark:invert' width={100} height={24} priority />
          </a>
        </div>
        {data && <p>{JSON.stringify(data)}</p>}
      </div>
      <Canvas />
    </main>
  )
}
