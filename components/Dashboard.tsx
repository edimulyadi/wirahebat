import React, { useState } from 'react';
import { 
  LayoutDashboard, BookOpen, Calendar, Award, Settings, 
  Bell, Search, LogOut, PlayCircle, Clock, CheckCircle, 
  ChevronRight, MoreVertical, FileText
} from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';
import { Course, ScheduleItem } from '../types';

interface DashboardProps {
  onLogout: () => void;
}

const MY_COURSES: Course[] = [
  {
    id: 1,
    title: "Digital Marketing untuk UMKM Kuliner",
    instructor: "Kang Dedi Mulyadi",
    progress: 75,
    totalLessons: 12,
    completedLessons: 9,
    thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    category: "Marketing",
    level: "Pemula"
  },
  {
    id: 2,
    title: "Manajemen Keuangan Warung Modern",
    instructor: "Teh Rina Finance",
    progress: 30,
    totalLessons: 8,
    completedLessons: 2,
    thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    category: "Keuangan",
    level: "Menengah"
  },
  {
    id: 3,
    title: "Fotografi Produk dengan HP",
    instructor: "Rizky Visual",
    progress: 0,
    totalLessons: 15,
    completedLessons: 0,
    thumbnail: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop",
    category: "Kreatif",
    level: "Pemula"
  }
];

const SCHEDULE: ScheduleItem[] = [
  { id: 1, title: "Mentoring Bisnis: Valuasi Produk", date: "Hari Ini", time: "14:00 WIB", type: "Mentoring" },
  { id: 2, title: "Deadline: Pitch Deck Final", date: "Besok", time: "23:59 WIB", type: "Deadline" },
  { id: 3, title: "Webinar: Ekspor Kulit Sukaregang", date: "25 Okt", time: "09:00 WIB", type: "Event" },
];

export const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col z-20">
        <div className="h-20 flex items-center px-6 border-b border-gray-100">
          <Logo variant="dark" />
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          {[
            { id: 'overview', label: 'Ringkasan', icon: LayoutDashboard },
            { id: 'courses', label: 'Kelas Saya', icon: BookOpen },
            { id: 'schedule', label: 'Jadwal', icon: Calendar },
            { id: 'assignments', label: 'Tugas', icon: FileText },
            { id: 'certificates', label: 'Sertifikat', icon: Award },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                activeTab === item.id 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-neutral-500 hover:bg-gray-50 hover:text-neutral-900'
              }`}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-neutral-500 hover:text-neutral-900 rounded-xl hover:bg-gray-50 w-full transition-colors">
            <Settings size={20} />
            Pengaturan
          </button>
          <button 
            onClick={onLogout}
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 hover:text-red-600 rounded-xl hover:bg-red-50 w-full mt-1 transition-colors"
          >
            <LogOut size={20} />
            Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-4 md:hidden">
             {/* Mobile Menu Trigger would go here */}
             <Logo variant="dark" className="scale-75 origin-left" />
          </div>

          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-96 border border-transparent focus-within:border-primary/50 focus-within:bg-white transition-all">
            <Search size={18} className="text-gray-400" />
            <input 
              type="text" 
              placeholder="Cari materi, mentor, atau tugas..." 
              className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full outline-none text-neutral-700 placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <button className="relative p-2 text-gray-400 hover:text-primary transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-neutral-900">Asep Surasep</p>
                <p className="text-xs text-neutral-500">Premium Member</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop" 
                alt="Profile" 
                className="w-10 h-10 rounded-full ring-2 ring-gray-100 object-cover"
              />
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 scroll-smooth">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-xl shadow-primary/20">
              <div className="relative z-10">
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">Wilujeng Enjing, Kang Asep! 🚀</h1>
                <p className="text-blue-100 max-w-xl mb-6">
                  Anda telah menyelesaikan 75% dari target mingguan. Lanjutkan satu modul lagi untuk mendapatkan badge "Rajin Pangkal Kaya".
                </p>
                <Button className="bg-white text-primary hover:bg-gray-100 border-none">
                  Lanjutkan Belajar
                </Button>
              </div>
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                <Award size={240} className="-mr-10 -mb-10" />
              </div>
              {/* Decorative circles */}
              <div className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Kelas Selesai', val: '4', icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-50' },
                { label: 'Jam Belajar', val: '32h', icon: Clock, color: 'text-blue-500', bg: 'bg-blue-50' },
                { label: 'Poin XP', val: '1,250', icon: Award, color: 'text-orange-500', bg: 'bg-orange-50' },
                { label: 'Sertifikat', val: '2', icon: FileText, color: 'text-purple-500', bg: 'bg-purple-50' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${stat.bg}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-neutral-900">{stat.val}</p>
                    <p className="text-xs text-neutral-500 font-medium uppercase tracking-wide">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Course List (Left Column) */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-neutral-900">Pembelajaran Saya</h2>
                  <button className="text-sm font-medium text-primary hover:underline">Lihat Semua</button>
                </div>

                <div className="space-y-4">
                  {MY_COURSES.map((course) => (
                    <div key={course.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-4 sm:gap-6 group">
                      <div className="relative w-full sm:w-40 h-32 sm:h-auto flex-shrink-0 rounded-xl overflow-hidden">
                        <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <PlayCircle className="text-white w-10 h-10" />
                        </div>
                      </div>
                      
                      <div className="flex-1 py-1">
                        <div className="flex justify-between items-start mb-2">
                          <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                            course.level === 'Pemula' ? 'bg-green-100 text-green-700' : 
                            course.level === 'Menengah' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {course.level}
                          </span>
                          <button className="text-gray-400 hover:text-neutral-900">
                            <MoreVertical size={16} />
                          </button>
                        </div>
                        
                        <h3 className="font-bold text-neutral-900 mb-1 group-hover:text-primary transition-colors line-clamp-1">{course.title}</h3>
                        <p className="text-sm text-neutral-500 mb-4">Oleh {course.instructor}</p>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs font-medium text-neutral-500">
                            <span>{course.progress}% Selesai</span>
                            <span>{course.completedLessons}/{course.totalLessons} Materi</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                            <div 
                              className="bg-primary h-full rounded-full transition-all duration-500" 
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column (Schedule & Leaderboard) */}
              <div className="space-y-8">
                {/* Schedule Widget */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-neutral-900 mb-6 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-secondary" />
                    Jadwal Mendatang
                  </h3>
                  <div className="space-y-6">
                    {SCHEDULE.map((item) => (
                      <div key={item.id} className="flex gap-4 relative">
                        <div className="flex flex-col items-center">
                           <div className="w-2 h-2 rounded-full bg-secondary ring-4 ring-secondary/20"></div>
                           <div className="w-0.5 h-full bg-gray-100 absolute top-2 bottom-[-24px] last:hidden"></div>
                        </div>
                        <div className="flex-1 pb-1">
                          <p className="text-xs font-bold text-neutral-400 uppercase tracking-wide mb-1">{item.date} • {item.time}</p>
                          <h4 className="text-sm font-semibold text-neutral-900 mb-1">{item.title}</h4>
                          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-medium border ${
                            item.type === 'Mentoring' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                            item.type === 'Deadline' ? 'bg-red-50 text-red-600 border-red-100' :
                            'bg-purple-50 text-purple-600 border-purple-100'
                          }`}>
                            {item.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" fullWidth className="mt-6 text-sm py-2 h-10">
                    Lihat Kalender Penuh
                  </Button>
                </div>

                {/* Quick Action */}
                <div className="bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
                  <h3 className="font-bold text-secondary-light mb-2">Ingin jadi Mentor?</h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    Bagikan keahlian Anda dan bantu UMKM Garut lainnya berkembang.
                  </p>
                  <Button variant="secondary" size="sm" fullWidth>
                    Daftar Program Mentor
                  </Button>
                </div>
              </div>

            </div>
          </div>
          
          {/* Footer inside dashboard */}
          <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-400 pb-4">
            &copy; 2024 Wira Hebat Garut Learning Management System.
          </div>
        </main>
      </div>
    </div>
  );
};