'use client';
import { create } from 'zustand';

interface LearningState { progress: Record<string, number>; setProgress: (key: string, value: number) => void; }

export const useLearningStore = create<LearningState>((set) => ({ progress: {}, setProgress: (key, value) => set((state) => ({ progress: { ...state.progress, [key]: value } })) }));
