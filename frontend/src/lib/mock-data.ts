export const MOCK_FACILITY = {
  id: 'fac_01',
  name: "St. Mary's General",
  type: 'Hospital',
  logo: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=100&h=100',
};

export const MOCK_USER = {
  id: 'usr_01',
  name: 'Dr. Sarah Jenkins',
  role: 'Chief Administrator',
  avatar: 'https://images.unsplash.com/photo-1559839734-2b71f153678e?auto=format&fit=crop&q=80&w=100&h=100',
};

export const MOCK_DASHBOARD_STATS = [
  { label: 'Total Admissions', value: '1,284', trend: '+12%', icon: 'ward', color: 'primary' },
  { label: 'Bed Occupancy', value: '78%', trend: null, icon: 'bed', color: 'primary-container' },
  { label: 'Daily Revenue', value: '$42.5k', trend: 'Target Met', icon: 'payments', color: 'secondary' },
  { label: 'Low Stock Alerts', value: '08', trend: null, icon: 'inventory_2', color: 'tertiary' },
];

export const MOCK_RECENT_ACTIVITY = [
  {
    id: 'act_01',
    user: 'Elena Rodriguez',
    action: 'New Admission • Cardiology',
    time: '14 mins ago',
    type: 'success',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
  },
  {
    id: 'act_02',
    user: 'Jameson Cooper',
    action: 'Registration Complete',
    time: '42 mins ago',
    type: 'info',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100',
  },
  {
    id: 'act_03',
    user: 'Sarah Mitchell',
    action: 'Admitted to Room 402B',
    time: '1 hour ago',
    type: 'success',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100',
  },
];
