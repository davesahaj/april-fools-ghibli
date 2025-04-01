import { useState } from 'react'
import { Button, Group, Image, Text } from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { useTimeout } from '@mantine/hooks'
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react'

function NavBar() {
  return (
    <nav className="sticky flex justify-between min-h-16 h-16 top-0 left-0 right-full border border-solid border-gray-800 py-4 px-6">
      <Text size="lg" fw={900} ff={'monospace'}>
        Ghibli.ai
      </Text>
      <Button>Get started now</Button>
    </nav>
  )
}

function Hero() {
  return (
    <div>
      <Text span className="!text-4xl font-sans font-thin">
        Generate images with{' '}
      </Text>
      <Text
        span
        className="!text-4xl font-serif font-thin italic"
        variant="gradient"
        gradient={{ from: '#6363fa', to: '#cc53fc', deg: 20 }}
      >
        Ghibli Diffusion
      </Text>
    </div>
  )
}

function ImageUpload() {
  const [loading, setLoading] = useState(false)
  const [showImage, setShowImage] = useState(false)

  const { start } = useTimeout(() => setShowImage(true), 1000)

  if (showImage)
    return (
      <Image
        radius={'md'}
        h="auto"
        w="300px"
        fit="contain"
        src="https://cdn4.vectorstock.com/i/1000x1000/95/58/smiling-monkey-first-april-fool-day-happy-holiday-vector-14659558.jpg"
      />
    )

  return (
    <div>
      <Dropzone
        loading={loading}
        onDrop={() => {
          setLoading(true)
          start()
        }}
        maxSize={5 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        className="!bg-transparent"
      >
        <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
          <Dropzone.Accept>
            <IconUpload size={52} color="var(--mantine-color-blue-6)" stroke={1.5} />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX size={52} color="var(--mantine-color-red-6)" stroke={1.5} />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto size={52} color="var(--mantine-color-dimmed)" stroke={1.5} />
          </Dropzone.Idle>

          <div>
            <Text size="xl" color="white" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" c="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      </Dropzone>
    </div>
  )
}

export const Home = () => {
  return (
    <div className="bg-[#1d1e20] h-screen text-white">
      <NavBar />
      <div className="p-6 flex flex-col gap-5">
        <Hero />
        <ImageUpload />
      </div>
    </div>
  )
}
