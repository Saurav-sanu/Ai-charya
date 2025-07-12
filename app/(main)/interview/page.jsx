import { getAssessments } from '@/actions/interview'
import React from 'react'

import StatsCards from './_component/stats-cards';
import PerformanceChart from './_component/performance';
import QuizList from './_component/quiz-list';

const InterviewPage = async () => {
  const assessments=await getAssessments();
  return (
    <div>
      <div>
        <div>
          <h1 className='"text-6xl font-bold gradient-title mb-5'>
            InterView Preparation
          </h1>
          <div className='space-y-6'>
            <StatsCards assessments={assessments}/>
            <PerformanceChart assessments={assessments}/>
            <QuizList assessments={assessments}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InterviewPage
