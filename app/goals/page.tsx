
'use client';

import { useState } from 'react';
import Header from '../components/Header';
import GoalCard from './GoalCard';
import NewGoalModal from './NewGoalModal';

interface Goal {
  id: string;
  title: string;
  description: string;
  category: string;
  targetDate: string;
  priority: string;
  progress: number;
  owner: string;
  status: string;
  createdAt: string;
  milestones: Array<{
    id: string;
    title: string;
    completed: boolean;
    completedDate?: string;
  }>;
}

export default function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: '1',
      title: 'Plan Our Dream Wedding',
      description: 'Organize and execute the perfect wedding celebration with all our loved ones',
      category: 'relationship',
      targetDate: '2024-08-15',
      priority: 'high',
      progress: 75,
      owner: 'both',
      status: 'in-progress',
      createdAt: '2024-01-15',
      milestones: [
        { id: '1', title: 'Book venue', completed: true, completedDate: '2024-02-01' },
        { id: '2', title: 'Choose catering', completed: true, completedDate: '2024-02-15' },
        { id: '3', title: 'Send invitations', completed: true, completedDate: '2024-03-01' },
        { id: '4', title: 'Final dress fitting', completed: false },
        { id: '5', title: 'Rehearsal dinner', completed: false }
      ]
    },
    {
      id: '2',
      title: 'Save for House Down Payment',
      description: 'Build up savings for our first home together with a target of $50,000',
      category: 'financial',
      targetDate: '2024-12-31',
      priority: 'high',
      progress: 60,
      owner: 'both',
      status: 'in-progress',
      createdAt: '2024-01-01',
      milestones: [
        { id: '1', title: 'Open joint savings account', completed: true, completedDate: '2024-01-05' },
        { id: '2', title: 'Save $20,000', completed: true, completedDate: '2024-04-01' },
        { id: '3', title: 'Save $30,000', completed: true, completedDate: '2024-06-01' },
        { id: '4', title: 'Save $40,000', completed: false },
        { id: '5', title: 'Save $50,000', completed: false }
      ]
    },
    {
      id: '3',
      title: 'Learn Italian Together',
      description: 'Master conversational Italian for our honeymoon trip to Italy',
      category: 'personal',
      targetDate: '2024-07-01',
      priority: 'medium',
      progress: 40,
      owner: 'both',
      status: 'in-progress',
      createdAt: '2024-02-01',
      milestones: [
        { id: '1', title: 'Complete beginner course', completed: true, completedDate: '2024-03-15' },
        { id: '2', title: 'Practice daily for 30 days', completed: true, completedDate: '2024-04-15' },
        { id: '3', title: 'Have first Italian conversation', completed: false },
        { id: '4', title: 'Watch Italian movie together', completed: false }
      ]
    },
    {
      id: '4',
      title: 'Run Marathon Together',
      description: 'Train for and complete our first marathon as a couple',
      category: 'health',
      targetDate: '2024-10-15',
      priority: 'medium',
      progress: 30,
      owner: 'both',
      status: 'in-progress',
      createdAt: '2024-03-01',
      milestones: [
        { id: '1', title: 'Complete 5K run', completed: true, completedDate: '2024-03-20' },
        { id: '2', title: 'Complete 10K run', completed: true, completedDate: '2024-04-10' },
        { id: '3', title: 'Complete half marathon', completed: false },
        { id: '4', title: 'Complete full marathon', completed: false }
      ]
    },
    {
      id: '5',
      title: 'Create YouTube Channel',
      description: 'Start a couples vlog documenting our journey together',
      category: 'creative',
      targetDate: '2024-09-01',
      priority: 'low',
      progress: 20,
      owner: 'both',
      status: 'in-progress',
      createdAt: '2024-04-01',
      milestones: [
        { id: '1', title: 'Plan channel concept', completed: true, completedDate: '2024-04-15' },
        { id: '2', title: 'Create channel artwork', completed: false },
        { id: '3', title: 'Film first video', completed: false },
        { id: '4', title: 'Publish first video', completed: false }
      ]
    }
  ]);

  const [showNewGoalModal, setShowNewGoalModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Goals', color: 'bg-gray-100 text-gray-700' },
    { id: 'relationship', name: 'Relationship', color: 'bg-pink-100 text-pink-700' },
    { id: 'financial', name: 'Financial', color: 'bg-green-100 text-green-700' },
    { id: 'health', name: 'Health', color: 'bg-blue-100 text-blue-700' },
    { id: 'personal', name: 'Personal', color: 'bg-purple-100 text-purple-700' },
    { id: 'creative', name: 'Creative', color: 'bg-orange-100 text-orange-700' }
  ];

  const filteredGoals = selectedCategory === 'all' 
    ? goals 
    : goals.filter(goal => goal.category === selectedCategory);

  const handleAddGoal = (goalData: Omit<Goal, 'id' | 'createdAt'>) => {
    const newGoal: Goal = {
      ...goalData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setGoals([newGoal, ...goals]);
    setShowNewGoalModal(false);
  };

  const handleUpdateGoal = (goalId: string, updates: Partial<Goal>) => {
    setGoals(goals.map(goal => 
      goal.id === goalId ? { ...goal, ...updates } : goal
    ));
  };

  const handleDeleteGoal = (goalId: string) => {
    setGoals(goals.filter(goal => goal.id !== goalId));
  };

  const completedGoals = goals.filter(goal => goal.status === 'completed').length;
  const inProgressGoals = goals.filter(goal => goal.status === 'in-progress').length;
  const averageProgress = Math.round(goals.reduce((sum, goal) => sum + goal.progress, 0) / goals.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-8" style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=couple%20planning%20goals%20together%20sitting%20at%20desk%20with%20notebooks%20laptops%20and%20vision%20board%20modern%20bright%20office%20space%20with%20plants%20natural%20lighting%20collaborative%20atmosphere%20organized%20workspace%20motivational%20setting%20clean%20minimalist%20background%20soft%20blue%20and%20white%20tones%20professional%20yet%20warm%20environment&width=1200&height=400&seq=goals-hero&orientation=landscape)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70"></div>
          <div className="relative z-10 px-8 py-12 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Goals Together</h1>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl">
              Dream big, plan smart, and achieve amazing things as a team. Track your progress and celebrate every milestone.
            </p>
            <button
              onClick={() => setShowNewGoalModal(true)}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-add-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              Add New Goal
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-700">Total Goals</h3>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-target-line w-5 h-5 flex items-center justify-center text-blue-600"></i>
              </div>
            </div>
            <p className="text-3xl font-bold text-blue-600">{goals.length}</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-700">In Progress</h3>
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <i className="ri-timer-line w-5 h-5 flex items-center justify-center text-orange-600"></i>
              </div>
            </div>
            <p className="text-3xl font-bold text-orange-600">{inProgressGoals}</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-700">Avg Progress</h3>
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-pie-chart-line w-5 h-5 flex items-center justify-center text-green-600"></i>
              </div>
            </div>
            <p className="text-3xl font-bold text-green-600">{averageProgress}%</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === category.id
                    ? category.color + ' ring-2 ring-offset-2 ring-blue-500'
                    : 'bg-white/60 text-gray-600 hover:bg-white/80'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGoals.map((goal) => (
            <GoalCard
              key={goal.id}
              goal={goal}
              onUpdate={handleUpdateGoal}
              onDelete={handleDeleteGoal}
            />
          ))}
        </div>

        {filteredGoals.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-target-line w-12 h-12 flex items-center justify-center text-gray-400"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No goals found</h3>
            <p className="text-gray-500 mb-4">
              {selectedCategory === 'all' 
                ? 'Start by creating your first goal together!' 
                : `No goals in the ${categories.find(c => c.id === selectedCategory)?.name} category yet.`
              }
            </p>
            <button
              onClick={() => setShowNewGoalModal(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Add Your First Goal
            </button>
          </div>
        )}
      </main>

      {showNewGoalModal && (
        <NewGoalModal
          onClose={() => setShowNewGoalModal(false)}
          onSave={handleAddGoal}
        />
      )}
    </div>
  );
}
