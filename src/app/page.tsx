'use client'
import { Input } from '@/components/ui/input'
import { IconLeaf } from '@/components/Icons'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main className='flex min-h-screen flex-col items-center p-24 text-chard-200'>
      <IconLeaf />
      <h1 className='text-4xl font-bold lowercase tracking-tight mb-12'>Chard</h1>
      <div className='flex flex-col w-full max-w-sm items-center gap-6 font-bold'>
        <div className='grid w-full max-w-sm items-center gap-1.5 tracking-tight'>
          <Label htmlFor='name'>name</Label>
          <Input type='text' id='name' autoComplete={'off'} maxLength={20} min={3} />
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5 tracking-tight'>
          <Label htmlFor='name'>code</Label>
          <Input type='text' id='name' autoComplete={'off'} />
        </div>

        <div className='grid w-full max-w-sm items-center gap-8 tracking-tight'>
          <Button>join</Button>
          <div className='w-full border-t border-chard-300' />
          <Button variant='secondary' onClick={() => router.push('/create')}>
            create
          </Button>
        </div>
      </div>
    </main>
  )
}
