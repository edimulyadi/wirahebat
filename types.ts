import React from 'react';

export interface Story {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  founder: string;
  imageUrl: string;
}

export interface Statistic {
  id: number;
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Course {
  id: number;
  title: string;
  instructor: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  thumbnail: string;
  category: string;
  level: 'Pemula' | 'Menengah' | 'Mahir';
}

export interface ScheduleItem {
  id: number;
  title: string;
  date: string;
  time: string;
  type: 'Mentoring' | 'Deadline' | 'Event';
}

export interface UserRequest {
  id: number;
  name: string;
  businessName: string;
  category: string;
  location: string;
  status: 'Pending' | 'Verified' | 'Rejected';
  date: string;
}