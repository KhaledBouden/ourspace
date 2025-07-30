
'use client';

import { useState } from 'react';

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

interface GoalCardProps {
  goal: Goal;
  onUpdate: (goalId: string, updates: Partial<Goal>) => void;
  onDelete: (goalId: string) => void;
}

export default function GoalCard({ goal, onUpdate, onDelete }: GoalCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors = {
      relationship: 'bg-pink-100 text-pink-700',
      financial: 'bg-green-100 text-green-700',
      health: 'bg-blue-100 text-blue-700',
      personal: 'bg-purple-100 text-purple-700',
      creative: 'bg-orange-100 text-orange-700'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: 'text-red-600',
      medium: 'text-yellow-600',
      low: 'text-green-600'
    };
    return colors[priority as keyof typeof colors] || 'text-gray-600';
  };

  const getOwnerIcon = (owner: string) => {
    const icons = {
      me: 'ri-user-line',
      partner: 'ri-user-heart-line',
      both: 'ri-team-line'
    };
    return icons[owner as keyof typeof icons] || 'ri-user-line';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleMilestoneToggle = (milestoneId: string) => {
    const updatedMilestones = goal.milestones.map(milestone =>
      milestone.id === milestoneId
        ? {
            ...milestone,
            completed: !milestone.completed,
            completedDate: !milestone.completed ? new Date().toISOString() : undefined
          }
        : milestone
    );

    const completedCount = updatedMilestones.filter(m => m.completed).length;
    const newProgress = Math.round((completedCount / updatedMilestones.length) * 100);

    onUpdate(goal.id, {
      milestones: updatedMilestones,
      progress: newProgress,
      status: newProgress === 100 ? 'completed' : 'in-progress'
    });
  };

  const handleProgressUpdate = (newProgress: number) => {
    onUpdate(goal.id, {
      progress: newProgress,
      status: newProgress === 100 ? 'completed' : 'in-progress'
    });
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-lg transition-all">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(goal.category)}`}>
              {goal.category}
            </span>
            <span className={`text-xs font-medium ${getPriorityColor(goal.priority)}`}>
              {goal.priority} priority
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{goal.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{goal.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <i className={`${getOwnerIcon(goal.owner)} w-4 h-4 flex items-center justify-center text-blue-600`}></i>
          </div>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors cursor-pointer"
          >
            <i className="ri-delete-bin-line w-4 h-4 flex items-center justify-center text-red-600"></i>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-bold text-blue-600">{goal.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${goal.progress}%` }}
          ></div>
        </div>
      </div>

      {/* Target Date */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <i className="ri-calendar-line w-4 h-4 flex items-center justify-center text-gray-500"></i>
          <span className="text-sm text-gray-600">Target: {formatDate(goal.targetDate)}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium cursor-pointer whitespace-nowrap"
          >
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
        </div>
      </div>

      {/* Milestones */}
      {showDetails && (
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Milestones</h4>
          <div className="space-y-2">
            {goal.milestones.map((milestone) => (
              <div key={milestone.id} className="flex items-center gap-3">
                <button
                  onClick={() => handleMilestoneToggle(milestone.id)}
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center cursor-pointer ${
                    milestone.completed
                      ? 'bg-green-500 border-green-500'
                      : 'border-gray-300 hover:border-green-500'
                  }`}
                >
                  {milestone.completed && (
                    <i className="ri-check-line w-3 h-3 flex items-center justify-center text-white"></i>
                  )}
                </button>
                <span className={`text-sm flex-1 ${
                  milestone.completed ? 'line-through text-gray-500' : 'text-gray-700'
                }`}>
                  {milestone.title}
                </span>
                {milestone.completed && milestone.completedDate && (
                  <span className="text-xs text-green-600">
                    {formatDate(milestone.completedDate)}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Progress Slider */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Update Progress: {goal.progress}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={goal.progress}
              onChange={(e) => handleProgressUpdate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Delete Goal</h3>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete "{goal.title}"? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onDelete(goal.id);
                  setShowDeleteConfirm(false);
                }}
                className="flex-1 py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
