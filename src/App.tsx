
import React, { useState, useMemo } from 'react';
import { certifications as initialCertifications } from './quizData';
import { QuizState, UserAnswer, Question, QuizOption, Certification } from './types';

const App: React.FC = () => {
  const [state, setState] = useState<QuizState>('START');
  const [certs, setCerts] = useState<Certification[]>(initialCertifications);
  const [selectedCertId, setSelectedCertId] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [isFeedbackShown, setIsFeedbackShown] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);
  const [isExplanationExpanded, setIsExplanationExpanded] = useState(false);

  // Review & Management State
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [expandedQuestions, setExpandedQuestions] = useState<Set<number>>(new Set());
  const [isEditing, setIsEditing] = useState<Question | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const activeCert = useMemo(() => 
    certs.find(c => c.id === selectedCertId) || certs[0], 
  [certs, selectedCertId]);

  const score = useMemo(() => {
    if (shuffledQuestions.length === 0) return 0;
    const correctCount = userAnswers.filter(a => a.isCorrect).length;
    return Math.round((correctCount / shuffledQuestions.length) * 100);
  }, [userAnswers, shuffledQuestions]);

  const toggleExpand = (id: number) => {
    setExpandedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const resetSession = () => {
    setState('START');
    setSelectedCertId(null);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShuffledQuestions([]);
    setSelectedOptions([]);
    setIsFeedbackShown(false);
    setShowMatrix(false);
    setIsExplanationExpanded(false);
  };

  const startQuiz = (certId: string) => {
    const cert = certs.find(c => c.id === certId);
    if (!cert) return;
    
    setSelectedCertId(certId);
    const shuffled = [...cert.questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setState('QUIZ');
    setShowMatrix(false);
    setSelectedOptions([]);
    setIsFeedbackShown(false);
    setIsExplanationExpanded(false);
  };

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const isMultiSelect = currentQuestion?.options.filter(o => o.isCorrect).length > 1;

  const handleOptionSelect = (index: number) => {
    if (isFeedbackShown) return;
    if (isMultiSelect) {
      setSelectedOptions(prev => 
        prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
      );
    } else {
      setSelectedOptions([index]);
    }
  };

  const checkAnswer = () => {
    if (selectedOptions.length === 0) return;
    
    const correctIndices = currentQuestion.options
      .map((o, i) => o.isCorrect ? i : -1)
      .filter(i => i !== -1);
    
    const isCorrect = 
      selectedOptions.length === correctIndices.length &&
      selectedOptions.every(idx => correctIndices.includes(idx));
    
    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      questionText: currentQuestion.text,
      selectedOptionIndices: selectedOptions,
      correctOptionIndices: correctIndices,
      isCorrect,
      explanation: currentQuestion.insight
    };

    setUserAnswers(prev => {
      const existing = prev.filter(a => a.questionId !== currentQuestion.id);
      return [...existing, newAnswer];
    });
    setIsFeedbackShown(true);
    setIsExplanationExpanded(false);
  };

  const navigateToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    setIsExplanationExpanded(false);
    const existingAnswer = userAnswers.find(a => a.questionId === shuffledQuestions[index].id);
    if (existingAnswer) {
      setSelectedOptions(existingAnswer.selectedOptionIndices);
      setIsFeedbackShown(true);
    } else {
      setSelectedOptions([]);
      setIsFeedbackShown(false);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      navigateToQuestion(currentQuestionIndex + 1);
    } else {
      setState('RESULTS');
    }
  };

  const handleSaveQuestion = (q: Question) => {
    const updatedCerts = certs.map(c => {
      if (c.id === selectedCertId) {
        if (isAdding) {
          return { ...c, questions: [...c.questions, { ...q, id: Date.now() }] };
        }
        return { ...c, questions: c.questions.map(item => item.id === q.id ? q : item) };
      }
      return c;
    });
    setCerts(updatedCerts);
    setIsEditing(null);
    setIsAdding(false);
  };

  const handleDeleteQuestion = (qId: number) => {
    if (!window.confirm('Are you sure you want to delete this scenario? This action cannot be undone.')) return;
    
    const updatedCerts = certs.map(c => {
      if (c.id === selectedCertId) {
        return { ...c, questions: c.questions.filter(q => q.id !== qId) };
      }
      return c;
    });
    setCerts(updatedCerts);
    setExpandedQuestions(prev => {
      const next = new Set(prev);
      next.delete(qId);
      return next;
    });
    setIsEditing(null);
  };

  const QuestionForm = ({ question, isAdding: isAddingMode, onSave, onCancel, onDelete }: { question: Question | null, isAdding: boolean, onSave: (q: Question) => void, onCancel: () => void, onDelete: (id: number) => void }) => {
    const [formData, setFormData] = useState<Question>(question || {
      id: 0,
      text: '',
      insight: '',
      options: [
        { text: '', feedback: '', isCorrect: true },
        { text: '', feedback: '', isCorrect: false },
        { text: '', feedback: '', isCorrect: false },
        { text: '', feedback: '', isCorrect: false }
      ]
    });

    const addOption = () => {
      setFormData({
        ...formData,
        options: [...formData.options, { text: '', feedback: '', isCorrect: false }]
      });
    };

    return (
      <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] w-full max-w-2xl p-10 shadow-2xl my-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-white tracking-tight">{isAddingMode ? 'New Question' : 'Edit Scenario'}</h3>
            <button onClick={onCancel} className="p-2 hover:bg-slate-800 rounded-full text-slate-500 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Prompt Text</label>
              <textarea 
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-5 text-white focus:border-indigo-500 outline-none h-28 resize-none transition-all"
                value={formData.text}
                onChange={e => setFormData({ ...formData, text: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Image Reference URL</label>
              <input 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-indigo-500 outline-none"
                value={formData.imageUrl || ''}
                placeholder="https://..."
                onChange={e => setFormData({ ...formData, imageUrl: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Technical Rationale</label>
              <textarea 
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-5 text-white focus:border-indigo-500 outline-none h-24 resize-none"
                value={formData.insight}
                onChange={e => setFormData({ ...formData, insight: e.target.value })}
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Options (Select Correct)</label>
                <button onClick={addOption} className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">+ Add Option</button>
              </div>
              {formData.options.map((opt, idx) => (
                <div key={idx} className="flex gap-3 items-center bg-slate-950/50 p-2 pr-4 rounded-2xl border border-slate-800">
                  <input 
                    type="checkbox" 
                    checked={opt.isCorrect} 
                    onChange={() => {
                      const nextOpts = [...formData.options];
                      nextOpts[idx].isCorrect = !nextOpts[idx].isCorrect;
                      setFormData({ ...formData, options: nextOpts });
                    }}
                    className="w-6 h-6 accent-indigo-500 rounded-lg cursor-pointer"
                  />
                  <input 
                    className="flex-1 bg-transparent text-white outline-none text-sm"
                    value={opt.text}
                    placeholder={`Response ${String.fromCharCode(65 + idx)}`}
                    onChange={e => {
                      const nextOpts = [...formData.options];
                      nextOpts[idx].text = e.target.value;
                      setFormData({ ...formData, options: nextOpts });
                    }}
                  />
                  <button onClick={() => setFormData({...formData, options: formData.options.filter((_,i) => i !== idx)})} className="p-2 text-slate-600 hover:text-rose-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-6">
              <button onClick={() => onSave(formData)} className="flex-[2] bg-indigo-600 hover:bg-indigo-500 text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-indigo-900/40 text-sm uppercase tracking-widest">Commit</button>
              {!isAddingMode && (
                <button 
                  onClick={() => onDelete(formData.id)} 
                  className="flex-1 bg-rose-900/50 hover:bg-rose-900 text-rose-300 font-bold py-4 rounded-2xl transition-all text-sm uppercase tracking-widest border border-rose-800"
                >
                  Delete
                </button>
              )}
              <button onClick={onCancel} className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-4 rounded-2xl transition-all text-sm uppercase tracking-widest">Discard</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const QuestionMatrix = () => (
    <div className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-12 gap-2 p-5 bg-slate-900/50 rounded-3xl border border-slate-800 max-h-[300px] overflow-y-auto custom-scrollbar shadow-inner">
      {shuffledQuestions.map((q, idx) => {
        const ans = userAnswers.find(a => a.questionId === q.id);
        let bgColor = "bg-slate-800/40 border-slate-800 text-slate-600";
        if (ans) bgColor = ans.isCorrect ? "bg-emerald-500/20 border-emerald-500 text-emerald-400" : "bg-rose-500/20 border-rose-500 text-rose-400";
        return (
          <button 
            key={idx} 
            onClick={() => { navigateToQuestion(idx); if (state !== 'QUIZ') setState('QUIZ'); }} 
            className={`aspect-square flex items-center justify-center rounded-xl font-bold text-xs border-2 transition-all hover:scale-110 active:scale-95 ${bgColor} ${currentQuestionIndex === idx ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-slate-950' : ''}`}
          >
            {idx + 1}
          </button>
        );
      })}
    </div>
  );

  if (state === 'START') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 p-6">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-black text-white mb-5 tracking-tightest">Certification <span className="text-indigo-500">Center</span></h1>
            <p className="text-slate-400 text-xl font-light">Select a path and begin your high-fidelity training session.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certs.map(cert => (
              <div key={cert.id} className="group relative bg-slate-900 border border-slate-800 rounded-[2.5rem] p-10 hover:border-indigo-500/50 transition-all flex flex-col shadow-2xl overflow-hidden min-h-[400px]">
                <div 
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 bg-cover bg-center"
                  style={{ backgroundImage: `linear-gradient(to bottom, transparent, #0f172a), url(${cert.background})` }}
                />
                <div className="relative z-10 flex-1">
                  <h3 className="text-4xl font-black text-white mb-4 leading-tight">{cert.title}</h3>
                  <p className="text-slate-400 font-light text-lg mb-10 leading-relaxed max-w-sm">{cert.description}</p>
                </div>
                <div className="flex gap-4 relative z-10">
                   <button onClick={() => startQuiz(cert.id)} className="flex-[3] bg-indigo-600 hover:bg-indigo-500 text-white font-black py-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest active:scale-95">Start Quiz</button>
                   <button onClick={() => { setSelectedCertId(cert.id); setState('REVIEW'); }} className="flex-1 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700 text-white rounded-2xl border border-slate-700 transition-all flex items-center justify-center group/btn" title="Review All">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400 group-hover/btn:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (state === 'REVIEW') {
    const totalPages = Math.ceil(activeCert.questions.length / itemsPerPage);
    const paginatedQuestions = activeCert.questions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
      <div className="min-h-screen bg-slate-950 text-slate-300 flex flex-col">
        <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-30 px-8 py-5">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button onClick={() => setState('START')} className="p-3 bg-slate-800 border border-slate-700 rounded-2xl hover:bg-slate-700 transition-all text-white"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg></button>
              <h1 className="text-2xl font-black text-white tracking-tight">{activeCert.title} Manager</h1>
            </div>
            <button onClick={() => setIsAdding(true)} className="px-7 py-3 bg-indigo-600 text-white rounded-2xl font-black text-xs transition-all uppercase tracking-[0.2em] shadow-xl shadow-indigo-900/30 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
              New Entry
            </button>
          </div>
        </header>

        <main className="flex-1 max-w-5xl w-full mx-auto p-8 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-6 bg-slate-900/40 p-8 rounded-[2rem] border border-slate-800">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Page Size</span>
              <select className="bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-2 text-sm outline-none focus:border-indigo-500" value={itemsPerPage} onChange={e => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}>
                {[10, 25, 50, activeCert.questions.length].map(v => <option key={v} value={v}>{v === activeCert.questions.length ? 'View All' : `${v} Entries`}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="p-3 rounded-xl bg-slate-800 text-slate-400 hover:text-white disabled:opacity-20 transition-all"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg></button>
              <span className="text-xs font-black text-slate-500 px-5 tabular-nums">Page {currentPage} / {totalPages}</span>
              <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className="p-3 rounded-xl bg-slate-800 text-slate-400 hover:text-white disabled:opacity-20 transition-all"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg></button>
            </div>
          </div>

          <div className="space-y-5">
            {paginatedQuestions.map((q, idx) => {
              const isExpanded = expandedQuestions.has(q.id);
              return (
                <div key={q.id} className="bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl transition-all">
                  <div className="p-8 flex items-start justify-between gap-6">
                    <div className="flex items-start gap-6 flex-1">
                      <span className="w-10 h-10 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-center text-xs font-black text-slate-500 mt-1 tabular-nums">{(currentPage - 1) * itemsPerPage + idx + 1}</span>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white leading-relaxed">{q.text}</h3>
                        {q.imageUrl && <div className="mt-4"><img src={q.imageUrl} alt="Ref" className="h-20 w-auto rounded-xl border border-slate-800 object-cover" /></div>}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setIsEditing(q)} className="p-3 text-slate-500 hover:text-indigo-400 hover:bg-slate-950 rounded-2xl transition-all"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-5M16.5 3.5a2.121 2.121 0 013 3L11.707 15.207a1 1 0 01-.414.293l-3 1a1 1 0 01-1.264-1.264l1-3a1 1 0 01.293-.414L16.5 3.5z" /></svg></button>
                      <button onClick={() => handleDeleteQuestion(q.id)} className="p-3 text-slate-500 hover:text-rose-400 hover:bg-slate-950 rounded-2xl transition-all"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                      <button onClick={() => toggleExpand(q.id)} className={`p-3 transition-all hover:bg-slate-950 rounded-2xl border border-transparent ${isExpanded ? 'text-white rotate-180 bg-slate-950' : 'text-slate-500'}`}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
                    </div>
                  </div>
                  {isExpanded && (
                    <div className="px-8 pb-8 pt-4 border-t border-slate-800 bg-slate-950/40">
                      <div className="space-y-3 mt-4">
                        {q.options.map((opt, i) => (
                          <div key={i} className={`p-5 rounded-2xl border flex items-center justify-between transition-all ${opt.isCorrect ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
                            <div className="flex items-center gap-4">
                              <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-[10px] font-black ${opt.isCorrect ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-600'}`}>{String.fromCharCode(65 + i)}</span>
                              <span className="text-base font-medium">{opt.text}</span>
                            </div>
                            {opt.isCorrect && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>}
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 p-7 bg-slate-900 border border-slate-800 rounded-3xl">
                        <span className="block text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-3">Architectural Insight</span>
                        <div className="text-slate-400 text-base leading-relaxed font-light italic">{q.insight}</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </main>

        {(isEditing || isAdding) && <QuestionForm isAdding={isAdding} question={isEditing} onSave={handleSaveQuestion} onDelete={handleDeleteQuestion} onCancel={() => { setIsEditing(null); setIsAdding(false); }} />}
      </div>
    );
  }

  if (state === 'QUIZ') {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col">
        <div className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-20 px-4">
          <div className="max-w-5xl mx-auto py-5 flex items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <button onClick={() => setShowMatrix(!showMatrix)} className={`p-3 rounded-2xl border transition-all active:scale-90 ${showMatrix ? 'bg-indigo-600 border-indigo-500 text-white shadow-xl shadow-indigo-900/40' : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'}`}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" /></svg></button>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1.5">Progress</span>
                <span className="text-white font-bold tabular-nums text-lg">{currentQuestionIndex + 1} / {shuffledQuestions.length}</span>
              </div>
            </div>
            <div className="flex-1 max-w-sm h-1.5 bg-slate-800 rounded-full overflow-hidden hidden sm:block">
              <div className="h-full bg-indigo-500 transition-all duration-700 ease-out" style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }} />
            </div>
            <button onClick={() => setState('RESULTS')} className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">End Quiz</button>
          </div>
          {showMatrix && <div className="max-w-5xl mx-auto pb-8 animate-in slide-in-from-top duration-500"><QuestionMatrix /></div>}
        </div>

        <main className="flex-1 max-w-4xl w-full mx-auto p-4 md:p-10 flex flex-col overflow-hidden">
          <div className="bg-slate-900 rounded-[3rem] border border-slate-800 overflow-hidden shadow-2xl flex flex-col flex-1">
            <div className="p-10 md:p-14 overflow-y-auto custom-scrollbar flex-1">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.3em]">Certification Scenario</span>
                {isMultiSelect && <span className="text-[10px] font-black bg-indigo-600 text-white px-3 py-1 rounded-full uppercase tracking-widest">Select Multiple</span>}
              </div>
              <h2 className="text-3xl font-bold text-white leading-tight mb-10 tracking-tight">{currentQuestion.text}</h2>
              
              {currentQuestion.imageUrl && (
                <div className="mb-12 rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl max-h-72 bg-slate-950">
                  <img src={currentQuestion.imageUrl} alt="Context" className="w-full h-full object-contain" />
                </div>
              )}
              
              <div className="space-y-4">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedOptions.includes(idx);
                  return (
                    <button key={idx} onClick={() => handleOptionSelect(idx)} disabled={isFeedbackShown} className={`group w-full text-left p-6 md:p-8 rounded-[1.5rem] border-2 transition-all flex items-start gap-6 ${isSelected ? 'border-indigo-500 bg-indigo-500/5' : 'border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'} ${isFeedbackShown && option.isCorrect ? 'border-emerald-500/50 bg-emerald-500/10' : ''} ${isFeedbackShown && isSelected && !option.isCorrect ? 'border-rose-500/50 bg-rose-500/10' : ''}`}>
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all ${isSelected ? 'bg-indigo-600 border-indigo-500 text-white shadow-xl shadow-indigo-500/30' : 'border-slate-800 text-slate-500'} ${isFeedbackShown && option.isCorrect ? 'bg-emerald-600 border-emerald-500 text-white' : ''}`}>
                        {isMultiSelect ? (
                           isSelected ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> : <span className="text-xs font-black">{String.fromCharCode(65+idx)}</span>
                        ) : (
                           <span className="text-base font-black">{String.fromCharCode(65 + idx)}</span>
                        )}
                      </div>
                      <span className={`text-lg md:text-xl font-medium leading-relaxed ${isSelected ? 'text-white' : 'text-slate-400 group-hover:text-slate-300'}`}>{option.text}</span>
                    </button>
                  );
                })}
              </div>

              {isFeedbackShown && (
                <div className="mt-14 p-10 bg-slate-950/60 border border-slate-800 rounded-[2.5rem] shadow-inner animate-in fade-in slide-in-from-bottom-8 duration-700 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500" />
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em]">Architectural Rationale</span>
                  </div>
                  <div className={`text-slate-300 text-xl leading-relaxed font-light whitespace-pre-line italic transition-all duration-500 ${isExplanationExpanded ? '' : 'max-h-40 overflow-hidden line-clamp-4'}`}>
                    {currentQuestion.insight}
                  </div>
                  {currentQuestion.insight.length > 250 && (
                    <button 
                      onClick={() => setIsExplanationExpanded(!isExplanationExpanded)}
                      className="mt-6 text-indigo-400 font-bold text-sm uppercase tracking-widest hover:text-indigo-300 transition-colors flex items-center gap-2"
                    >
                      {isExplanationExpanded ? 'Show Less' : 'Read Full Rationale'}
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isExplanationExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
              )}
            </div>

            <div className="p-10 bg-slate-900 border-t border-slate-800 flex items-center justify-between gap-6">
              <button onClick={() => navigateToQuestion(Math.max(0, currentQuestionIndex - 1))} disabled={currentQuestionIndex === 0} className="px-8 py-5 rounded-2xl font-black bg-slate-800 text-slate-400 hover:text-white disabled:opacity-20 transition-all border border-slate-700 text-xs uppercase tracking-widest active:scale-95 shadow-lg">Previous</button>
              {!isFeedbackShown ? (
                <button onClick={checkAnswer} disabled={selectedOptions.length === 0} className={`px-16 py-5 rounded-2xl font-black transition-all text-xs uppercase tracking-widest active:scale-95 shadow-2xl ${selectedOptions.length > 0 ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-900/50 scale-105' : 'bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-700'}`}>Verify Selection</button>
              ) : (
                <button onClick={nextQuestion} className="px-16 py-5 rounded-2xl font-black bg-white text-slate-950 hover:bg-indigo-50 hover:scale-105 transition-all flex items-center gap-4 text-xs uppercase tracking-widest active:scale-95 shadow-2xl group">
                  {currentQuestionIndex < shuffledQuestions.length - 1 ? 'Next Entry' : 'Finish Quiz'}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
              )}
              <button onClick={() => navigateToQuestion(Math.min(shuffledQuestions.length - 1, currentQuestionIndex + 1))} disabled={currentQuestionIndex === shuffledQuestions.length - 1} className="px-8 py-5 rounded-2xl font-black bg-slate-800 text-slate-400 hover:text-white disabled:opacity-20 transition-all border border-slate-700 text-xs uppercase tracking-widest active:scale-95 shadow-lg">Next</button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (state === 'RESULTS') {
    const correctCount = userAnswers.filter(a => a.isCorrect).length;
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
        <div className="max-w-xl w-full bg-slate-900 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] p-14 text-center border border-slate-800 relative overflow-hidden animate-in zoom-in duration-1000">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
          <h2 className="text-5xl font-black text-white mb-3 tracking-tightest">Quiz <span className="text-indigo-500">Summary</span></h2>
          <p className="text-slate-500 mb-14 font-light text-lg uppercase tracking-[0.2em]">{activeCert.title}</p>
          <div className="flex justify-center mb-16">
            <div className="w-56 h-56 relative flex items-center justify-center group">
              <svg className="w-full h-full transform -rotate-90 filter drop-shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-1000 group-hover:scale-110" viewBox="0 0 36 36"><circle className="text-slate-800 stroke-current" strokeWidth="2" fill="none" r="16" cx="18" cy="18" /><circle className="text-indigo-500 stroke-current" strokeWidth="2" strokeDasharray={`${score}, 100`} strokeLinecap="round" fill="none" r="16" cx="18" cy="18" /></svg>
              <div className="absolute flex flex-col items-center"><span className="text-7xl font-black text-white leading-none">{score}<span className="text-3xl text-indigo-500">%</span></span><span className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black mt-3">Accuracy</span></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-950/50 p-8 rounded-[2.5rem] border border-slate-800 text-left hover:border-slate-700 transition-colors"><span className="text-[10px] font-black text-slate-600 uppercase tracking-widest block mb-3">Score</span><span className="text-4xl font-black text-emerald-500 tabular-nums">{correctCount} <span className="text-slate-800 text-base font-bold">/ {shuffledQuestions.length}</span></span></div>
            <div className="bg-slate-950/50 p-8 rounded-[2.5rem] border border-slate-800 text-left hover:border-slate-700 transition-colors"><span className="text-[10px] font-black text-slate-600 uppercase tracking-widest block mb-3">Result</span><span className={`text-3xl font-black ${score >= 70 ? 'text-indigo-400' : 'text-rose-500'}`}>{score >= 70 ? 'CERTIFIED' : 'RETAKE'}</span></div>
          </div>
          <div className="space-y-5">
            <button onClick={() => { setState('QUIZ'); setShowMatrix(true); }} className="w-full bg-slate-800 hover:bg-slate-700 text-white font-black py-6 rounded-[2rem] border-2 border-slate-700 transition-all flex items-center justify-center gap-4 text-sm uppercase tracking-widest active:scale-95 shadow-xl">Audit Scenarios</button>
            <button onClick={resetSession} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black py-6 rounded-[2rem] transition-all shadow-[0_20px_40px_-10px_rgba(99,102,241,0.4)] text-sm uppercase tracking-widest active:scale-95 scale-105">New Path</button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default App;
