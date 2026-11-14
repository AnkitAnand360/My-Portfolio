import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

function VideoModal({ isOpen, videoUrl, title, projectLink, poster, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    
    // Prevent background scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  // When modal opens, auto-play video unmuted if possible
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser blocks unmuted autoplay, fallback to muted autoplay
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play();
          }
        });
      }
    }
  }, [isOpen]);

  if (!isOpen || !videoUrl) return null;

  const isEmbed =
    videoUrl.includes("youtube.com") ||
    videoUrl.includes("youtu.be") ||
    videoUrl.includes("embed");

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 select-none">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-5xl bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-neutral-800/80 bg-neutral-900/60">
            <div className="flex items-center gap-3 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-lime-400 shrink-0 animate-pulse"></span>
              <h3 className="text-white font-serif text-lg sm:text-xl font-medium tracking-tight truncate">
                {title || "Project Video Demo"}
              </h3>
              <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 rounded border border-lime-400/30 bg-lime-400/10 text-lime-400 shrink-0">
                Demo Video
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0 ml-4">
              {projectLink && (
                <Link
                  to={projectLink}
                  onClick={onClose}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono uppercase text-neutral-400 hover:text-lime-400 transition"
                >
                  Case Study <FaExternalLinkAlt className="text-[10px]" />
                </Link>
              )}
              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 sm:p-2.5 rounded-full transition cursor-pointer border border-white/5 flex items-center justify-center"
                aria-label="Close video"
              >
                <FaTimes className="text-sm" />
              </button>
            </div>
          </div>

          {/* Video Player Container */}
          <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
            {isEmbed ? (
              <iframe
                src={videoUrl}
                title={title || "Project Video"}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                ref={videoRef}
                src={videoUrl}
                poster={poster}
                controls
                playsInline
                className="w-full h-full object-contain bg-black"
              />
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default VideoModal;
