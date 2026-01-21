"use client"

interface AvatarDisplayProps {
  speaking: boolean
}

export default function AvatarDisplay({ speaking }: AvatarDisplayProps) {
  return (
    <div className="w-64 h-96 bg-card rounded-2xl border border-border flex flex-col items-center justify-center overflow-hidden relative shadow-lg">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>

      {/* Avatar */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Head */}
        <div
          className={`w-32 h-32 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 relative border-2 border-amber-300 shadow-md ${speaking ? "scale-105 transition-transform" : "transition-transform"}`}
        >
          {/* Eyes */}
          <div
            className={`absolute top-10 left-8 w-4 h-4 bg-foreground rounded-full transition-transform ${speaking ? "" : "avatar-blink"}`}
          ></div>
          <div
            className={`absolute top-10 right-8 w-4 h-4 bg-foreground rounded-full transition-transform ${speaking ? "" : "avatar-blink"}`}
          ></div>

          {/* Mouth */}
          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${speaking ? "w-6 h-3 bg-foreground rounded-full" : "w-8 h-1 bg-foreground rounded-full"} transition-all`}
          ></div>
        </div>

        {/* Body hint */}
        <div className="w-24 h-16 bg-gradient-to-b from-blue-400 to-blue-500 rounded-t-3xl mt-2 border-t-2 border-blue-300"></div>

        {/* Status */}
        <div className="mt-6 text-center">
          <p className="text-sm font-semibold text-foreground mb-2">{speaking ? "Speaking..." : "Listening"}</p>
          {speaking && (
            <div className="flex gap-1 justify-center">
              <div className="w-1.5 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0s" }}></div>
              <div
                className="w-1.5 h-6 bg-primary rounded-full animate-pulse"
                style={{ animationDelay: "0.15s" }}
              ></div>
              <div className="w-1.5 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.3s" }}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
