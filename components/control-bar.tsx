"use client"

import { Button } from "@/components/ui/button"
import { Mic, MicOff, Video, VideoOff, Phone, Send } from "lucide-react"

interface ControlBarProps {
  isMicOn: boolean
  isVideoOn: boolean
  onToggleMic: () => void
  onToggleVideo: () => void
  onNext: () => void
  onEnd: () => void
  isRecording: boolean
  disabled: boolean
}

export default function ControlBar({
  isMicOn,
  isVideoOn,
  onToggleMic,
  onToggleVideo,
  onNext,
  onEnd,
  isRecording,
  disabled,
}: ControlBarProps) {
  return (
    <div className="bg-card border-t border-border p-6">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="lg"
          onClick={onToggleMic}
          className={`flex items-center gap-2 rounded-full ${isMicOn ? "border-border" : "border-destructive text-destructive"}`}
        >
          {isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
          {isMicOn ? "Mic On" : "Mic Off"}
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={onToggleVideo}
          className={`flex items-center gap-2 rounded-full ${isVideoOn ? "border-border" : "border-destructive text-destructive"}`}
        >
          {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
          {isVideoOn ? "Camera On" : "Camera Off"}
        </Button>

        <div className="w-px h-8 bg-border"></div>

        <Button
          onClick={onNext}
          disabled={disabled || !isRecording}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 flex items-center gap-2 rounded-full"
        >
          <Send className="w-5 h-5" />
          Next Question
        </Button>

        <Button onClick={onEnd} variant="destructive" size="lg" className="flex items-center gap-2 rounded-full">
          <Phone className="w-5 h-5" />
          End Interview
        </Button>
      </div>
    </div>
  )
}
