import { useState, useMemo } from 'react';
import { LeftNav, TopBar } from './components/Shell';
import { Dashboard } from './components/Dashboard';
import { LessonReader } from './components/LessonReader';
import { TutorRail } from './components/TutorRail';
import { PracticeProblem } from './components/PracticeProblem';
import { Glossary } from './components/Glossary';
import { Topics } from './components/Topics';
import { PremiumAnnotated } from './components/PremiumAnnotated';
import {
  CRAM_LESSON_ORDER,
  DEFAULT_LESSON_ID,
  DEFAULT_PRACTICE_SET_ID,
} from './data/cramSession';

export default function App() {
  const [view, setView] = useState('dashboard');
  const [chapter, setChapter] = useState('ch11');
  const [lessonId, setLessonId] = useState(DEFAULT_LESSON_ID);
  const [practiceSetId, setPracticeSetId] = useState(DEFAULT_PRACTICE_SET_ID);

  const showRail = view === 'lesson';

  const cramIdx = useMemo(() => CRAM_LESSON_ORDER.indexOf(lessonId), [lessonId]);
  const inCram = cramIdx >= 0;
  const hasPrev = inCram && cramIdx > 0;
  const hasNext = inCram && cramIdx >= 0 && cramIdx < CRAM_LESSON_ORDER.length - 1;

  const crumbs = (() => {
    if (view === 'dashboard') return ['Dashboard'];
    if (view === 'topics') return ['Topics'];
    if (view === 'lesson') return ['Topics', 'Lesson'];
    if (view === 'practice') return ['Practice'];
    if (view === 'glossary') return ['Glossary'];
    if (view === 'premium') return ['Premium, Inc.', 'Annotated'];
    return [];
  })();

  function goNextLesson() {
    if (hasNext) setLessonId(CRAM_LESSON_ORDER[cramIdx + 1]);
    else setView('topics');
  }

  function goPrevLesson() {
    if (hasPrev) setLessonId(CRAM_LESSON_ORDER[cramIdx - 1]);
  }

  function startCram() {
    setLessonId(CRAM_LESSON_ORDER[0] ?? DEFAULT_LESSON_ID);
    setView('lesson');
  }

  return (
    <div className={`shell ${showRail ? '' : 'no-rail'}`}>
      <LeftNav activeView={view} onNav={setView} activeChapter={chapter} onChapter={setChapter} />
      <div className="main">
        <TopBar crumbs={crumbs} />
        {view === 'dashboard' && (
          <Dashboard
            onStartCram={startCram}
            onOpenTopics={() => setView('topics')}
            onOpenLesson={id => {
              setLessonId(id);
              setView('lesson');
            }}
            onOpenPractice={id => {
              setPracticeSetId(id);
              setView('practice');
            }}
            onOpenPremium={() => setView('premium')}
          />
        )}
        {view === 'topics' && (
          <Topics
            activeChapter={chapter}
            onOpenLesson={id => {
              setLessonId(id);
              setView('lesson');
            }}
          />
        )}
        {view === 'lesson' && (
          <LessonReader
            lessonId={lessonId}
            onOpenPractice={() => {
              setPracticeSetId(DEFAULT_PRACTICE_SET_ID);
              setView('practice');
            }}
            onOpenTopics={() => setView('topics')}
            onNextLesson={goNextLesson}
            onPrevLesson={goPrevLesson}
            hasNext={hasNext}
            hasPrev={hasPrev}
          />
        )}
        {view === 'practice' && (
          <PracticeProblem
            setId={practiceSetId}
            onBack={() => setView('dashboard')}
            onOpenTopics={() => setView('topics')}
          />
        )}
        {view === 'glossary' && <Glossary />}
        {view === 'premium' && <PremiumAnnotated onBack={() => setView('dashboard')} />}
      </div>
      {showRail && (
        <div className="rail">
          <TutorRail key={lessonId} lessonId={lessonId} />
        </div>
      )}
    </div>
  );
}
