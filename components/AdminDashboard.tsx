import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, FileCheck, BarChart3, Settings, 
  LogOut, Bell, Search, Shield, Check, X, MoreHorizontal,
  TrendingUp, MapPin, RefreshCcw, Mail, Edit, Trash2,
  PieChart, ArrowUp, ArrowDown, Save, Lock, Globe, BellRing,
  Download
} from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';
import { UserRequest } from '../types';

interface AdminDashboardProps {
  onLogout: () => void;
}

// Initial Data Mockup for Verification
const INITIAL_REQUESTS: UserRequest[] = [
  { id: 1, name: "Kang Ujang", businessName: "Keripik Singkong Pedas", category: "F&B", location: "Tarogong Kaler", status: "Pending", date: "24 Okt 2024" },
  { id: 2, name: "Teh Euis", businessName: "Batik Tulis Garutan", category: "Fashion", location: "Garut Kota", status: "Pending", date: "24 Okt 2024" },
  { id: 3, name: "Pak Dadang", businessName: "Gula Aren Murni", category: "Agrobisnis", location: "Cikajang", status: "Pending", date: "23 Okt 2024" },
  { id: 4, name: "Rina S.", businessName: "Dompet Kulit Custom", category: "Kriya", location: "Sukaregang", status: "Verified", date: "22 Okt 2024" },
  { id: 5, name: "Asep M.", businessName: "Wisata Desa Cisurupan", category: "Pariwisata", location: "Cisurupan", status: "Rejected", date: "21 Okt 2024" },
];

// Initial Data Mockup for Members
const MEMBER_DATA = [
  { id: 101, name: "Asep Surasep", email: "asep@gmail.com", role: "UMKM", status: "Active", joinDate: "12 Jan 2024" },
  { id: 102, name: "Dr. Budi Santoso", email: "budi.s@uniga.ac.id", role: "Mentor", status: "Active", joinDate: "10 Feb 2024" },
  { id: 103, name: "Siti Aminah", email: "siti.fashion@yahoo.com", role: "UMKM", status: "Suspended", joinDate: "05 Mar 2024" },
  { id: 104, name: "PT Investama Jabar", email: "contact@investama.id", role: "Investor", status: "Active", joinDate: "20 Apr 2024" },
  { id: 105, name: "Dinas Koperasi", email: "admin@garut.go.id", role: "Partner", status: "Active", joinDate: "01 Jan 2024" },
];

// Mock Data for Analytics
const ANALYTICS_TRENDS = [
  { month: 'Mei', value: 45, label: '450' },
  { month: 'Jun', value: 60, label: '600' },
  { month: 'Jul', value: 55, label: '550' },
  { month: 'Agu', value: 75, label: '750' },
  { month: 'Sep', value: 90, label: '900' },
  { month: 'Okt', value: 100, label: '1.2k' },
];

const PERFORMANCE_METRICS = [
  { label: 'Tingkat Kelulusan Inkubasi', value: '85%', trend: '+5%', isPositive: true },
  { label: 'Net Promoter Score (NPS)', value: '72', trend: '+2.4', isPositive: true },
  { label: 'Rata-rata Pertumbuhan Omzet', value: '32%', trend: '-1.5%', isPositive: false },
  { label: 'Startup Didanai', value: '12', trend: '+4', isPositive: true },
];

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [requests, setRequests] = useState<UserRequest[]>(INITIAL_REQUESTS);
  const [members, setMembers] = useState(MEMBER_DATA); 
  const [isLoading, setIsLoading] = useState(false);

  // Calculate Stats dynamically
  const pendingCount = requests.filter(r => r.status === 'Pending').length;
  const verifiedCount = 1240 + requests.filter(r => r.status === 'Verified').length; 

  // Handle Approve/Reject Action
  const handleStatusChange = (id: number, newStatus: 'Verified' | 'Rejected') => {
    setIsLoading(true);
    setTimeout(() => {
      setRequests(prevRequests => 
        prevRequests.map(req => 
          req.id === id ? { ...req, status: newStatus } : req
        )
      );
      setIsLoading(false);
    }, 500);
  };

  // Handle Delete Member Action
  const handleDeleteMember = (id: number) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus pengguna ini? Data yang dihapus tidak dapat dikembalikan.")) {
      setMembers(prev => prev.filter(m => m.id !== id));
    }
  };

  // Handle Download CSV
  const handleDownloadCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    let filename = "";

    if (activeTab === 'members') {
      // Header Members
      csvContent += "ID,Nama Lengkap,Email,Role,Status,Tanggal Bergabung\n";
      // Rows Members
      members.forEach((row) => {
        csvContent += `${row.id},"${row.name}","${row.email}","${row.role}","${row.status}","${row.joinDate}"\n`;
      });
      filename = "data_pengguna_wira_hebat.csv";
    } else {
      // Default / Request Data
      // Header Requests
      csvContent += "ID,Nama Pemohon,Nama Bisnis,Kategori,Lokasi,Status,Tanggal Request\n";
      // Rows Requests
      requests.forEach((row) => {
        csvContent += `${row.id},"${row.name}","${row.businessName}","${row.category}","${row.location}","${row.status}","${row.date}"\n`;
      });
      filename = "data_verifikasi_umkm.csv";
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isMembersTab = activeTab === 'members';
  const isAnalyticsTab = activeTab === 'analytics';
  const isSettingsTab = activeTab === 'settings';

  return (
    <div className="flex h-screen bg-neutral-100 font-sans overflow-hidden">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-neutral-900 text-white flex flex-col z-20 shadow-xl">
        <div className="h-20 flex items-center px-6 border-b border-neutral-800">
          <div className="flex items-center gap-3">
             <div className="bg-primary/20 p-2 rounded-lg">
                <Shield className="text-primary w-6 h-6" />
             </div>
             <div>
                <h1 className="font-bold text-lg leading-none">Admin Panel</h1>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Super User</span>
             </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          {[
            { id: 'overview', label: 'Dashboard Utama', icon: LayoutDashboard },
            { id: 'users', label: 'Verifikasi UMKM', icon: FileCheck },
            { id: 'members', label: 'Data Pengguna', icon: Users },
            { id: 'analytics', label: 'Analitik Program', icon: BarChart3 },
            { id: 'settings', label: 'Pengaturan Sistem', icon: Settings },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                activeTab === item.id 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
              }`}
            >
              <item.icon size={18} />
              {item.label}
              {item.id === 'users' && pendingCount > 0 && (
                <span className="ml-auto bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {pendingCount}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-neutral-800">
          <div className="bg-neutral-800 rounded-xl p-4 mb-4">
            <p className="text-xs text-neutral-400 mb-1">Status Server</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-bold text-white">Online (99.9%)</span>
            </div>
          </div>
          <button 
            onClick={onLogout}
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-400 hover:text-red-300 rounded-xl hover:bg-red-400/10 w-full transition-colors"
          >
            <LogOut size={18} />
            Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <h2 className="text-xl font-bold text-neutral-800">
            {activeTab === 'overview' ? 'Ringkasan Eksekutif' : 
             activeTab === 'users' ? 'Verifikasi Pendaftaran' : 
             activeTab === 'members' ? 'Manajemen Pengguna' : 
             activeTab === 'analytics' ? 'Analitik & Wawasan' : 
             activeTab === 'settings' ? 'Pengaturan Sistem' : 'Halaman Admin'}
          </h2>

          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder={isMembersTab ? "Cari nama atau email..." : "Cari data..."}
                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
              />
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold text-neutral-900">Admin Garut</p>
                <p className="text-xs text-neutral-500">Dinas Koperasi & UKM</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white font-bold">
                AG
              </div>
            </div>
          </div>
        </header>

        {/* Content Scroll */}
        <main className="flex-1 overflow-y-auto p-8 relative">
          {isLoading && (
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 z-50">
              <div className="h-full bg-primary animate-pulse w-1/3 mx-auto"></div>
            </div>
          )}

          {/* Stats Cards - Always Visible except in Settings */}
          {!isSettingsTab && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { label: 'Total User Aktif', val: (verifiedCount + members.length).toLocaleString(), change: '+12%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
                { label: 'Menunggu Verifikasi', val: pendingCount, change: pendingCount > 0 ? 'Action Needed' : 'All Clear', icon: FileCheck, color: 'text-orange-600', bg: 'bg-orange-50' },
                { label: 'Total Pendanaan', val: 'Rp 2.4M', change: '+8%', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
                { label: 'Kecamatan Terjangkau', val: '42', change: '100%', icon: MapPin, color: 'text-purple-600', bg: 'bg-purple-50' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl ${stat.bg}`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.label === 'Menunggu Verifikasi' && stat.val > 0 ? 'bg-red-100 text-red-600' : 'bg-green-50 text-green-600'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-neutral-900 mb-1">{stat.val}</h3>
                  <p className="text-sm text-neutral-500">{stat.label}</p>
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area - SWITCHABLE */}
            <div className={`space-y-6 ${isSettingsTab ? 'col-span-3 lg:col-span-3' : 'lg:col-span-2'}`}>
              
              {isSettingsTab ? (
                /* SETTINGS MODULE */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* General Settings */}
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-neutral-100 rounded-lg">
                        <Globe size={20} className="text-neutral-700" />
                      </div>
                      <h3 className="font-bold text-lg text-neutral-900">Konfigurasi Umum</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Nama Platform</label>
                        <input type="text" defaultValue="Wira Hebat Garut" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-primary focus:border-primary" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Email Kontak Utama</label>
                        <input type="email" defaultValue="admin@wirahebatgarut.id" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-primary focus:border-primary" />
                      </div>
                      <div className="pt-4 flex items-center justify-between">
                         <span className="text-sm text-neutral-600">Mode Maintenance</span>
                         <label className="relative inline-flex items-center cursor-pointer">
                           <input type="checkbox" className="sr-only peer" />
                           <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                         </label>
                      </div>
                    </div>
                    <div className="mt-8">
                      <Button fullWidth>
                        <Save size={16} className="mr-2" /> Simpan Perubahan
                      </Button>
                    </div>
                  </div>

                  {/* Security & Notifications */}
                  <div className="space-y-8">
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-neutral-100 rounded-lg">
                          <BellRing size={20} className="text-neutral-700" />
                        </div>
                        <h3 className="font-bold text-lg text-neutral-900">Notifikasi</h3>
                      </div>
                      <div className="space-y-4">
                         {['Notifikasi Pendaftaran Baru', 'Laporan Bulanan Otomatis', 'Peringatan Server Down'].map((item, idx) => (
                           <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                             <span className="text-sm text-neutral-600">{item}</span>
                             <label className="relative inline-flex items-center cursor-pointer">
                               <input type="checkbox" defaultChecked className="sr-only peer" />
                               <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500"></div>
                             </label>
                           </div>
                         ))}
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-neutral-100 rounded-lg">
                          <Lock size={20} className="text-neutral-700" />
                        </div>
                        <h3 className="font-bold text-lg text-neutral-900">Keamanan</h3>
                      </div>
                      <Button variant="outline" fullWidth className="text-red-500 border-red-200 hover:bg-red-50">
                        Ubah Password Admin
                      </Button>
                    </div>
                  </div>
                </div>
              ) : isAnalyticsTab ? (
                /* ANALYTICS VIEW */
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                       <h3 className="font-bold text-lg text-neutral-900">Tren Pertumbuhan Peserta</h3>
                       <p className="text-sm text-neutral-500">Jumlah pendaftar aktif dalam 6 bulan terakhir</p>
                    </div>
                    <select className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5">
                      <option>6 Bulan Terakhir</option>
                      <option>Tahun Ini</option>
                    </select>
                  </div>
                  
                  {/* CSS Bar Chart */}
                  <div className="h-64 flex items-end justify-between gap-4 px-2">
                    {ANALYTICS_TRENDS.map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-2 w-full group cursor-pointer">
                        <div className="relative w-full max-w-[60px] bg-gray-100 rounded-t-lg h-full flex items-end overflow-hidden hover:bg-gray-200 transition-colors">
                           <div 
                             className="w-full bg-primary hover:bg-primary-dark transition-all duration-500 relative group-hover:shadow-[0_0_15px_rgba(0,123,255,0.5)]"
                             style={{ height: `${item.value}%` }}
                           >
                             <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                               {item.label}
                             </div>
                           </div>
                        </div>
                        <span className="text-xs font-medium text-neutral-500">{item.month}</span>
                      </div>
                    ))}
                  </div>

                  {/* Performance Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-100">
                     {PERFORMANCE_METRICS.map((metric, idx) => (
                       <div key={idx} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                         <p className="text-xs text-neutral-500 mb-1">{metric.label}</p>
                         <div className="flex items-end justify-between">
                            <span className="text-xl font-bold text-neutral-900">{metric.value}</span>
                            <span className={`text-xs font-medium flex items-center ${metric.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                              {metric.isPositive ? <ArrowUp size={12} className="mr-1"/> : <ArrowDown size={12} className="mr-1"/>}
                              {metric.trend}
                            </span>
                         </div>
                       </div>
                     ))}
                  </div>
                </div>
              ) : (
                /* TABLE VIEW (Overview/Users/Members) */
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-neutral-900">
                      {isMembersTab ? "Data Pengguna Terdaftar" : "Permintaan Verifikasi Terbaru"}
                    </h3>
                    <div className="flex gap-2">
                      {/* ADDED: Export Button */}
                      <Button variant="outline" size="sm" onClick={handleDownloadCSV} title="Unduh Data CSV">
                        <Download size={16} className="mr-2" />
                        Export CSV
                      </Button>

                      {!isMembersTab && (
                        <Button variant="ghost" size="sm" onClick={() => setRequests(INITIAL_REQUESTS)} title="Reset Data Demo">
                          <RefreshCcw size={16} />
                        </Button>
                      )}
                      <Button variant="outline" size="sm">Lihat Semua</Button>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      {isMembersTab ? (
                        /* MEMBER TABLE HEADER */
                        <thead className="bg-gray-50 text-xs uppercase text-gray-500 font-semibold">
                          <tr>
                            <th className="px-6 py-4">Nama Pengguna</th>
                            <th className="px-6 py-4">Role</th>
                            <th className="px-6 py-4">Bergabung</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Aksi</th>
                          </tr>
                        </thead>
                      ) : (
                        /* REQUEST TABLE HEADER */
                        <thead className="bg-gray-50 text-xs uppercase text-gray-500 font-semibold">
                          <tr>
                            <th className="px-6 py-4">Nama Usaha</th>
                            <th className="px-6 py-4">Kategori</th>
                            <th className="px-6 py-4">Lokasi</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Aksi</th>
                          </tr>
                        </thead>
                      )}

                      <tbody className="divide-y divide-gray-100">
                        {isMembersTab ? (
                          /* MEMBER TABLE BODY */
                          members.map((member) => (
                            <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                                    {member.name.substring(0,2).toUpperCase()}
                                  </div>
                                  <div>
                                    <p className="font-bold text-sm text-neutral-900">{member.name}</p>
                                    <div className="flex items-center gap-1 text-xs text-neutral-500">
                                      <Mail size={10} />
                                      {member.email}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <span className={`px-2 py-1 rounded-md text-xs font-medium border ${
                                  member.role === 'Mentor' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                                  member.role === 'Investor' ? 'bg-green-50 text-green-700 border-green-200' :
                                  'bg-blue-50 text-blue-700 border-blue-200'
                                }`}>
                                  {member.role}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-sm text-neutral-600">
                                {member.joinDate}
                              </td>
                              <td className="px-6 py-4">
                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                                  member.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'
                                }`}>
                                  <span className={`w-1.5 h-1.5 rounded-full ${
                                    member.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'
                                  }`}></span>
                                  {member.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-right">
                                <div className="flex justify-end gap-2">
                                  <button 
                                    className="p-1.5 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors"
                                    onClick={() => alert(`Edit user: ${member.name}`)}
                                  >
                                    <Edit size={16} />
                                  </button>
                                  <button 
                                    className="p-1.5 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
                                    onClick={() => handleDeleteMember(member.id)}
                                  >
                                    <Trash2 size={16} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          /* REQUEST TABLE BODY */
                          requests.map((req) => (
                            <tr key={req.id} className="hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4">
                                <p className="font-bold text-sm text-neutral-900">{req.businessName}</p>
                                <p className="text-xs text-neutral-500">{req.name}</p>
                              </td>
                              <td className="px-6 py-4">
                                <span className="px-2 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">
                                  {req.category}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-sm text-neutral-600">
                                {req.location}
                              </td>
                              <td className="px-6 py-4">
                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                                  req.status === 'Pending' ? 'bg-orange-50 text-orange-700' :
                                  req.status === 'Verified' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                                }`}>
                                  <span className={`w-1.5 h-1.5 rounded-full ${
                                    req.status === 'Pending' ? 'bg-orange-500' :
                                    req.status === 'Verified' ? 'bg-green-500' : 'bg-red-500'
                                  }`}></span>
                                  {req.status === 'Verified' ? 'Terverifikasi' : req.status === 'Rejected' ? 'Ditolak' : 'Menunggu'}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-right">
                                <div className="flex justify-end gap-2 h-9 items-center">
                                  {req.status === 'Pending' ? (
                                    <>
                                      <button 
                                        onClick={() => handleStatusChange(req.id, 'Verified')}
                                        className="p-1.5 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg transition-colors border border-green-200 shadow-sm" 
                                        title="Setujui"
                                      >
                                        <Check size={18} />
                                      </button>
                                      <button 
                                        onClick={() => handleStatusChange(req.id, 'Rejected')}
                                        className="p-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors border border-red-200 shadow-sm" 
                                        title="Tolak"
                                      >
                                        <X size={18} />
                                      </button>
                                    </>
                                  ) : (
                                    <span className="text-xs text-neutral-400 italic">Selesai</span>
                                  )}
                                  <button className="p-1.5 hover:bg-gray-100 text-gray-400 rounded-lg transition-colors">
                                    <MoreHorizontal size={18} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Right Panel: Activity & Chart Mockup (Hidden on Settings) */}
            {!isSettingsTab && (
              <div className="space-y-6">
                {/* Program Distribution */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <h3 className="font-bold text-lg text-neutral-900 mb-6">Distribusi Program</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Inkubasi Bisnis', val: 75, color: 'bg-primary' },
                      { label: 'Pelatihan Digital', val: 60, color: 'bg-secondary' },
                      { label: 'Akses Permodalan', val: 45, color: 'bg-green-500' },
                      { label: 'Sertifikasi Halal', val: 30, color: 'bg-purple-500' }
                    ].map((item, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-neutral-600">{item.label}</span>
                          <span className="font-bold text-neutral-900">{item.val}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.val}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};