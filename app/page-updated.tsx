'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import LandingPage from '@/components/landing-page'
import InterviewSetup from '@/components/interview-setup'
import InterviewRoom from '@/components/interview-room'
import FeedbackDashboard from '@/components/feedback-dashboard'

type Page = 'landing' | 'setup' | 'interview' | 'feedback'

export default function Home() {
  const [page, setPage] = useState<Page>('landing')
  const [interviewConfig, setInterviewConfig] = useState(null)
  const [feedbackData, setFeedbackData] = useState(null)

  const handleStartSetup = () => {
    setPage('setup')
  }

  const handleStartInterview = (config: any) => {
    setInterviewConfig(config)
    setPage('interview')
  }

  const handleInterviewComplete = (feedback: any) => {
    setFeedbackData(feedback)
    setPage('feedback')
  }

  const handleNewInterview = () => {
    setPage('setup')
  }

  const handleBackHome = () => {
    setPage('landing')
    setInterviewConfig(null)
    setFeedbackData(null)
  }

  return (
    <main className="min-h-screen">
      {page === 'landing' && (
        <LandingPage onStart={handleStartSetup} />
      )}
      {page === 'setup' && (
        <InterviewSetup onStart={handleStartInterview} />
      )}
      {page === 'interview' && interviewConfig && (
        <InterviewRoom config={interviewConfig} onComplete={handleInterviewComplete} />
      )}
      {page === 'feedback' && feedbackData && (
        <FeedbackDashboard
          data={feedbackData}
          onNewInterview={handleNewInterview}
          onBackHome={handleBackHome}
        />
      )}
    </main>
  )
}
