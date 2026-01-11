interface TranscriptBubbleProps {
  speaker: "ai" | "user"
  text: string
}

export default function TranscriptBubble({ speaker, text }: TranscriptBubbleProps) {
  const isAI = speaker === "ai"

  return (
    <div className={`flex ${isAI ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-xl p-4 rounded-2xl ${
          isAI
            ? "bg-muted border border-border text-foreground"
            : "bg-primary/10 border border-primary/30 text-foreground"
        }`}
      >
        <p className="text-sm">{text}</p>
        <p className={`text-xs mt-2 ${isAI ? "text-muted-foreground" : "text-primary"}`}>
          {isAI ? "Interviewer" : "You"}
        </p>
      </div>
    </div>
  )
}
