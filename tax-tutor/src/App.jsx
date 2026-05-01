import { useState } from 'react';
import { LeftNav, TopBar } from './components/Shell';
import { Dashboard } from './components/Dashboard';
import { LessonReader } from './components/LessonReader';
import { TutorRail } from './components/TutorRail';
import { PracticeProblem } from './components/PracticeProblem';
import { Glossary } from './components/Glossary';
import { ProgressView } from './components/ProgressView';

export default function App() {
  const [view, setView] = useState('dashboard');
  const [chapter, setChapter] = useState('ch9');

  const showRail = view === 'lesson';

  const crumbs = (() => {
    if (view === 'dashboard') return ['Dashboard'];
    if (view === 'lesson')    return ['Course', 'Chapter 9 — Partnerships', 'Lesson 3'];
    if (view === 'practice')  return ['Practice', 'Chapter 9', 'Outside basis on formation'];
    if (view === 'glossary')  return ['Glossary'];
    if (view === 'progress')  return ['Progress'];
    return [];
  })();

  const progressPct = view === 'lesson' ? 0.45 : view === 'practice' ? 0.4 : null;

  return (
    <div className={`shell ${showRail ? '' : 'no-rail'}`}>
      <LeftNav
        activeView={view}
        onNav={setView}
        activeChapter={chapter}
        onChapter={setChapter}
      />
      <div className="main">
        <TopBar crumbs={crumbs} progress={progressPct} />
        {view === 'dashboard' && (
          <Dashboard
            onOpenLesson={() => setView('lesson')}
            onOpenPractice={() => setView('practice')}
          />
        )}
        {view === 'lesson' && (
          <LessonReader
            onBack={() => setView('dashboard')}
            onNext={() => setView('practice')}
            onOpenPractice={() => setView('practice')}
          />
        )}
        {view === 'practice' && (
          <PracticeProblem onBack={() => setView('lesson')} />
        )}
        {view === 'glossary' && <Glossary />}
        {view === 'progress' && <ProgressView />}
      </div>
      {showRail && (
        <div className="rail">
          <TutorRail />
        </div>
      )}
    </div>
  );
}
