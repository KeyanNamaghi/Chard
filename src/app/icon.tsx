import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <svg baseProfile='tiny' viewBox='0 0 24 24' fill='#42815d' height='32' width='32' role='presentation'>
      <path d='M20 11c0-4.9-3.499-9.1-8.32-9.983L11.5.983l-.18.033a10.15 10.15 0 00-.82 19.779V22a1 1 0 102 0v-1.205A10.147 10.147 0 0020 11zm-7.5 7.7v-2.993l4.354-4.354a.5.5 0 00-.707-.707L12.5 14.293v-3.586l2.354-2.354a.5.5 0 00-.707-.707L12.5 9.293V6a1 1 0 10-2 0v3.293L8.854 7.646a.5.5 0 00-.707.707l2.354 2.354v3.586l-3.646-3.646a.5.5 0 00-.707.707l4.354 4.354V18.7A8.144 8.144 0 0111.5 3.019a8.145 8.145 0 011 15.681z' />
    </svg>,
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    },
  )
}
