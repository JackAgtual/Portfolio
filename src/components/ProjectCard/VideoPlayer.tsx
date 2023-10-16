import { forwardRef, ForwardedRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

type VideoPlayerProps = {
  name: string
  videoSrc: string | undefined
  handleClose: () => void
}

function VideoPlayer(
  { name, videoSrc, handleClose }: VideoPlayerProps,
  ref: ForwardedRef<HTMLDialogElement>,
) {
  if (videoSrc === undefined) return

  const handleModalClick = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    if (!ref || typeof ref === 'function') return

    const modalDimensions = ref.current?.getBoundingClientRect()
    if (modalDimensions === undefined) return

    const { clientX, clientY } = e
    if (
      clientX < modalDimensions.left ||
      clientX > modalDimensions.right ||
      clientY > modalDimensions.bottom ||
      clientY < modalDimensions.top
    ) {
      handleClose()
    }
  }

  return (
    <dialog
      ref={ref}
      onClick={handleModalClick}
      className="w-screen sm:w-10/12 rounded-md"
    >
      <div className="flex items-center justify-between px-4 py-2 bg-secondary-bg">
        <h1 className="text-lg text-secondary-text">{name}</h1>
        <AiOutlineClose
          className="h-5 w-5 hover:cursor-pointer text-secondary-text"
          onClick={handleClose}
        />
      </div>
      <iframe
        className="w-full aspect-video"
        src={videoSrc}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
      ></iframe>
    </dialog>
  )
}

export default forwardRef(VideoPlayer)
