import InteractiveBentoGallery, { type MediaItem } from "@/components/ui/InteractiveBentoGallery"
import FadeInOnScroll from "@/components/ui/FadeInOnScroll"

const photoItems: MediaItem[] = [
  {
    id: 1,
    type: "image",
    title: "",
    desc: "",
    url: "/images/photos/photo-1.png",
    span: "col-span-1 row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "",
    desc: "",
    url: "/images/photos/photo-2.png",
    span: "col-span-2 row-span-2",
    objectPosition: "bottom",
  },
  {
    id: 3,
    type: "image",
    title: "",
    desc: "",
    url: "/images/photos/photo-3.png",
    span: "col-span-1 row-span-2",
  },
  {
    id: 4,
    type: "image",
    title: "",
    desc: "",
    url: "/images/photos/photo-4.jpeg",
    span: "col-span-2 row-span-2",
  },
  {
    id: 5,
    type: "image",
    title: "",
    desc: "",
    url: "/images/photos/photo-5.png",
    span: "col-span-2 row-span-2",
  },
]

export default function PhotosSection() {
  return (
    <FadeInOnScroll>
      <div className="border-t border-border pt-8 px-6 max-w-4xl mx-auto">
        <InteractiveBentoGallery mediaItems={photoItems} />
      </div>
    </FadeInOnScroll>
  )
}
