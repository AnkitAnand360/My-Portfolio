import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { FaTimes, FaSearchPlus, FaSearchMinus } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ProjectGallery({ images }) {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!images || images.length === 0) return null;

  const openLightbox = (url) => {
    setLightboxImage(url);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setIsZoomed(false);
  };

  const toggleZoom = (e) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="w-full relative selection:bg-lime-400 selection:text-black">
      {/* Swiper Slider Wrapper */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-900 overflow-hidden bg-neutral-100 dark:bg-neutral-950 relative group">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
          spaceBetween={0}
          slidesPerView={1}
          grabCursor={true}
          className="w-full aspect-[16/9]"
        >
          {images.map((url, index) => (
            <SwiperSlide key={index} className="overflow-hidden relative">
              {/* Slide image container */}
              <div 
                onClick={() => openLightbox(url)}
                className="w-full h-full relative cursor-zoom-in group/slide"
              >
                <img
                  src={url}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/slide:scale-102"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
                {/* Floating zoom indicator on slide hover */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/slide:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="bg-black/60 backdrop-blur-md text-white p-3 rounded-full text-sm flex items-center gap-1.5 shadow-lg scale-90 group-hover/slide:scale-100 transition-transform duration-300">
                    <FaSearchPlus /> Click to Expand
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-default select-none"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-full max-h-[85vh] flex flex-col items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Zoom Controls Banner */}
              <div className="absolute top-4 left-4 z-50 flex gap-2">
                <button
                  onClick={toggleZoom}
                  className="bg-black/60 hover:bg-black/80 backdrop-blur-md text-white p-2.5 rounded-full text-xs font-mono tracking-wider flex items-center gap-1.5 cursor-pointer shadow transition duration-200 border border-white/10"
                  title={isZoomed ? "Zoom Out" : "Zoom In"}
                >
                  {isZoomed ? (
                    <>
                      <FaSearchMinus /> Zoom Out
                    </>
                  ) : (
                    <>
                      <FaSearchPlus /> Zoom In
                    </>
                  )}
                </button>
              </div>

              {/* Close Button */}
              <div className="absolute top-4 right-4 z-50">
                <button
                  onClick={closeLightbox}
                  className="bg-black/60 hover:bg-black/80 backdrop-blur-md text-white p-2.5 rounded-full text-xs cursor-pointer shadow transition duration-200 border border-white/10 flex items-center justify-center"
                  aria-label="Close Preview"
                >
                  <FaTimes className="text-sm" />
                </button>
              </div>

              {/* Lightbox Zoomable Image */}
              <div className="w-full h-full overflow-auto flex items-center justify-center scrollbar-none max-h-[80vh] max-w-[90vw]">
                <motion.img
                  src={lightboxImage}
                  alt="Expanded Project Screenshot"
                  animate={{ scale: isZoomed ? 1.5 : 1 }}
                  transition={{ duration: 0.3 }}
                  className={`max-w-full max-h-[80vh] rounded-lg object-contain transition-shadow duration-300 shadow-2xl ${
                    isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                  }`}
                  onClick={toggleZoom}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProjectGallery;
