"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { Project } from "@/types"

export default function BuildCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover="hover"
      className="relative aspect-video rounded-xl overflow-hidden border border-border bg-card"
    >
      {project.image ? (
        <Image src={project.image} alt={project.name} fill className="object-cover" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-card" />
      )}

      <motion.div
        variants={{ hover: { opacity: 0 } }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
      />

      <div className="absolute inset-0 p-5 flex flex-col justify-end">
        <motion.div
          variants={{ hover: { opacity: 1, y: 0 } }}
          initial={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          className="flex flex-wrap gap-1.5 mb-3"
        >
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-full bg-black/40 text-white backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </motion.div>

        <h3 className="text-white font-semibold text-lg leading-snug">{project.name}</h3>
        <p className="text-white/70 text-sm mt-1 line-clamp-2">{project.description}</p>

        <div className="flex gap-4 mt-3">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/70 hover:text-white transition-colors"
            >
              Live ↗
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/70 hover:text-white transition-colors"
            >
              Repo ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
