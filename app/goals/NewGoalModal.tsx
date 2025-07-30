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

interface NewGoalModalProps {
  onClose: () => void;
  onSave: (goal: Omit<Goal, 'id' | 'createdAt'>) => void;
}

export default function NewGoalModal({ onClose, onSave }: NewGoalModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'relationship',
    targetDate: '',
    priority: 'medium',
    owner: 'both'
  });

  const [milestones, setMilestones] = useState<Array<{ title: string }>>([
    { title: '' }
  ]);

  const categories = [
    { id: 'relationship', name: 'Relationship' },
    { id: 'financial', name: 'Financial' },
    { id: 'health', name: 'Health' },
    { id: 'personal', name: 'Personal' },
    { id: 'creative', name: 'Creative' }
  ];

  const priorities = [
    { id: 'high', name: 'High Priority' },
    { id: 'medium', name: 'Medium Priority' },
    { id: 'low', name: 'Low Priority' }
  ];

  const owners = [
    { id: 'me', name: 'Just Me' },
    { id: 'partner', name: 'Just Partner' },
    { id: 'both', name: 'Both of Us' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMilestoneChange = (index: number, value: string) => {
    const updatedMilestones = milestones.map((milestone, i) =>
      i === index ? { title: value } : milestone
    );
    setMilestones(updatedMilestones);
  };

  const addMilestone = () => {
    setMilestones([...milestones, { title: '' }]);
  };

  const removeMilestone = (index: number) => {
    if (milestones.length > 1) {
      setMilestones(milestones.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.description.trim() || !formData.targetDate) {
      alert('Please fill in all required fields');
      return;
    }

    const filteredMilestones = milestones
      .filter(milestone => milestone.title.trim() !== '')
      .map((milestone, index) => ({
        id: (index + 1).toString(),
        title: milestone.title.trim(),
        completed: false
      }));

    const newGoal: Omit<Goal, 'id' | 'createdAt'> = {
      ...formData,
      progress: 0,
      status: 'in-progress',
      milestones: filteredMilestones
    };

    onSave(newGoal);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Create New Goal</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <i className="ri-close-line w-4 h-4 flex items-center justify-center text-gray-600"></i>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Goal Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter your goal title..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              maxLength={100}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe your goal in detail..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              rows={3}
              maxLength={500}
              required
            />
          </div>

          {/* Category and Priority */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Priority
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
              >
                {priorities.map(priority => (
                  <option key={priority.id} value={priority.id}>
                    {priority.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Target Date and Owner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Date *
              </label>
              <input
                type="date"
                name="targetDate"
                value={formData.targetDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Who's Working On This?
              </label>
              <select
                name="owner"
                value={formData.owner}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
              >
                {owners.map(owner => (
                  <option key={owner.id} value={owner.id}>
                    {owner.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Milestones */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Milestones
              </label>
              <button
                type="button"
                onClick={addMilestone}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium cursor-pointer whitespace-nowrap"
              >
                <i className="ri-add-line w-4 h-4 flex items-center justify-center mr-1 inline-flex"></i>
                Add Milestone
              </button>
            </div>
            <div className="space-y-3">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="text"
                    value={milestone.title}
                    onChange={(e) => handleMilestoneChange(index, e.target.value)}
                    placeholder={`Milestone ${index + 1}...`}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    maxLength={100}
                  />
                  {milestones.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeMilestone(index)}
                      className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors cursor-pointer"
                    >
                      <i className="ri-close-line w-4 h-4 flex items-center justify-center text-red-600"></i>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium cursor-pointer whitespace-nowrap"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer whitespace-nowrap"
            >
              Create Goal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}