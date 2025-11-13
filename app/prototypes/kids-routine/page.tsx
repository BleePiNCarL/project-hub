'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type RoutineType = 'morning' | 'evening'

interface Task {
  id: string
  icon: string
  text: string
  completed: boolean
}

const defaultMorningTasks: Task[] = [
  { id: 'm1', icon: '🪥', text: 'Brush teeth', completed: false },
  { id: 'm2', icon: '👕', text: 'Get dressed', completed: false },
  { id: 'm3', icon: '🥣', text: 'Eat breakfast', completed: false },
  { id: 'm4', icon: '🎒', text: 'Pack backpack', completed: false },
  { id: 'm5', icon: '🧦', text: 'Put on shoes', completed: false },
]

const defaultEveningTasks: Task[] = [
  { id: 'e1', icon: '📚', text: 'Do homework', completed: false },
  { id: 'e2', icon: '🍽️', text: 'Help with dinner', completed: false },
  { id: 'e3', icon: '🛁', text: 'Take a bath', completed: false },
  { id: 'e4', icon: '👔', text: 'Put on pajamas', completed: false },
  { id: 'e5', icon: '📖', text: 'Read a book', completed: false },
  { id: 'e6', icon: '😴', text: 'Go to bed', completed: false },
]

export default function KidsRoutinePrototype() {
  const [routineType, setRoutineType] = useState<RoutineType>('morning')
  const [morningTasks, setMorningTasks] = useState<Task[]>(defaultMorningTasks)
  const [eveningTasks, setEveningTasks] = useState<Task[]>(defaultEveningTasks)
  const [showCelebration, setShowCelebration] = useState(false)
  const [parentMode, setParentMode] = useState(false)
  const [streak, setStreak] = useState(3)

  const currentTasks = routineType === 'morning' ? morningTasks : eveningTasks
  const setCurrentTasks = routineType === 'morning' ? setMorningTasks : setEveningTasks

  const completedCount = currentTasks.filter(t => t.completed).length
  const totalCount = currentTasks.length
  const progressPercent = (completedCount / totalCount) * 100

  const toggleTask = (taskId: string) => {
    const updatedTasks = currentTasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )
    setCurrentTasks(updatedTasks)

    // Check if all tasks are completed
    const allCompleted = updatedTasks.every(t => t.completed)
    if (allCompleted) {
      setTimeout(() => setShowCelebration(true), 300)
    }
  }

  const closeCelebration = () => {
    setShowCelebration(false)
  }

  const toggleRoutineType = (type: RoutineType) => {
    setRoutineType(type)
    setShowCelebration(false)
  }

  const addTask = () => {
    const newTask: Task = {
      id: `new-${Date.now()}`,
      icon: '⭐',
      text: 'New task',
      completed: false
    }
    setCurrentTasks([...currentTasks, newTask])
  }

  const removeTask = (taskId: string) => {
    setCurrentTasks(currentTasks.filter(t => t.id !== taskId))
  }

  if (parentMode) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🔒</span>
                <h1 className="text-3xl font-bold text-gray-800">Parent Setup</h1>
              </div>
              <button
                onClick={() => setParentMode(false)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-xl font-semibold transition-colors"
              >
                Exit
              </button>
            </div>

            <div className="mb-6">
              <div className="flex gap-4 mb-4">
                <button
                  onClick={() => toggleRoutineType('morning')}
                  className={`flex-1 py-3 rounded-xl font-bold text-lg transition-all ${
                    routineType === 'morning'
                      ? 'bg-yellow-400 text-gray-800'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  ☀️ Morning
                </button>
                <button
                  onClick={() => toggleRoutineType('evening')}
                  className={`flex-1 py-3 rounded-xl font-bold text-lg transition-all ${
                    routineType === 'evening'
                      ? 'bg-indigo-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  🌙 Evening
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {currentTasks.map((task, index) => (
                <div key={task.id} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                  <span className="text-2xl">{task.icon}</span>
                  <input
                    type="text"
                    value={task.text}
                    onChange={(e) => {
                      const updated = currentTasks.map(t =>
                        t.id === task.id ? { ...t, text: e.target.value } : t
                      )
                      setCurrentTasks(updated)
                    }}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                  />
                  <button
                    onClick={() => removeTask(task.id)}
                    className="px-3 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg font-semibold"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={addTask}
              className="w-full mt-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg"
            >
              + Add New Task
            </button>

            <p className="mt-6 text-sm text-gray-500 text-center">
              Changes are saved automatically (in this demo, they persist during the session)
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-purple-100 to-pink-100 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-black text-gray-800">My Routines</h1>
          <button
            onClick={() => setParentMode(true)}
            className="text-2xl opacity-30 hover:opacity-50 transition-opacity"
            title="Parent Settings"
          >
            ⚙️
          </button>
        </div>

        {/* Mode Toggle */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => toggleRoutineType('morning')}
            className={`flex-1 py-6 rounded-3xl font-black text-2xl transition-all transform hover:scale-105 ${
              routineType === 'morning'
                ? 'bg-gradient-to-br from-yellow-300 to-orange-400 text-gray-800 shadow-xl scale-105'
                : 'bg-white text-gray-400 shadow-md'
            }`}
          >
            ☀️ Morning
          </button>
          <button
            onClick={() => toggleRoutineType('evening')}
            className={`flex-1 py-6 rounded-3xl font-black text-2xl transition-all transform hover:scale-105 ${
              routineType === 'evening'
                ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-xl scale-105'
                : 'bg-white text-gray-400 shadow-md'
            }`}
          >
            🌙 Evening
          </button>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-3xl p-6 mb-6 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-bold text-gray-700">
              {completedCount} of {totalCount} tasks done!
            </span>
            <span className="text-2xl">🔥 {streak} day streak</span>
          </div>
          <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Task List */}
        <div className="space-y-4">
          <AnimatePresence>
            {currentTasks.map((task, index) => (
              <motion.button
                key={task.id}
                onClick={() => toggleTask(task.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                className={`w-full p-6 rounded-3xl shadow-lg transition-all transform hover:scale-105 active:scale-95 ${
                  task.completed
                    ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white'
                    : 'bg-white text-gray-800'
                }`}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-2xl border-4 transition-all ${
                    task.completed
                      ? 'border-white bg-white/20'
                      : 'border-gray-300 bg-gray-50'
                  }`}>
                    {task.completed && <span className="text-2xl">✓</span>}
                  </div>
                  <span className="text-6xl">{task.icon}</span>
                  <span className="flex-1 text-left text-2xl font-bold">{task.text}</span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {/* Celebration Modal */}
        <AnimatePresence>
          {showCelebration && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={closeCelebration}
              />
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
              >
                <div className="bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-500 rounded-[3rem] p-12 shadow-2xl max-w-md text-center pointer-events-auto">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                    className="text-9xl mb-6"
                  >
                    ⭐
                  </motion.div>
                  <h2 className="text-5xl font-black text-white mb-4">
                    You Did It!
                  </h2>
                  <p className="text-2xl text-white/90 mb-8">
                    All tasks complete! Great job! 🎉
                  </p>
                  <button
                    onClick={closeCelebration}
                    className="px-8 py-4 bg-white text-purple-600 rounded-2xl font-black text-xl hover:bg-purple-50 transition-colors"
                  >
                    Awesome!
                  </button>
                  
                  {/* Confetti Effect */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[3rem]">
                    {[...Array(50)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 rounded-full"
                        style={{
                          background: ['#FFD700', '#FF69B4', '#00CED1', '#FF6347', '#9370DB'][i % 5],
                          left: `${Math.random() * 100}%`,
                          top: '-10%',
                        }}
                        animate={{
                          y: [0, window.innerHeight],
                          x: [0, (Math.random() - 0.5) * 200],
                          rotate: [0, Math.random() * 360],
                          opacity: [1, 0],
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

