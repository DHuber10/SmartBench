export function DashboardPreview() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect width="800" height="600" rx="8" fill="#1E293B" />
      
      {/* Header */}
      <rect y="0" width="800" height="60" fill="#0F172A" />
      <circle cx="740" cy="30" r="20" fill="#334155" />
      <rect x="20" y="20" width="120" height="20" rx="4" fill="#38BDF8" />
      
      {/* Main content - Sales Dashboard */}
      <rect x="20" y="80" width="760" height="80" rx="4" fill="#334155" />
      
      {/* KPI Cards */}
      <rect x="40" y="100" width="160" height="40" rx="4" fill="#0F172A" />
      <text x="50" y="120" fill="#94A3B8" fontSize="10">Total Revenue</text>
      <text x="50" y="135" fill="#F8FAFC" fontSize="16" fontWeight="bold">$24,589.70</text>
      
      <rect x="220" y="100" width="160" height="40" rx="4" fill="#0F172A" />
      <text x="230" y="120" fill="#94A3B8" fontSize="10">Orders</text>
      <text x="230" y="135" fill="#F8FAFC" fontSize="16" fontWeight="bold">1,243</text>
      
      <rect x="400" y="100" width="160" height="40" rx="4" fill="#0F172A" />
      <text x="410" y="120" fill="#94A3B8" fontSize="10">Avg. Order Value</text>
      <text x="410" y="135" fill="#F8FAFC" fontSize="16" fontWeight="bold">$19.78</text>
      
      <rect x="580" y="100" width="160" height="40" rx="4" fill="#0F172A" />
      <text x="590" y="120" fill="#94A3B8" fontSize="10">Conversion Rate</text>
      <text x="590" y="135" fill="#F8FAFC" fontSize="16" fontWeight="bold">24.3%</text>
      
      {/* Sales Over Time Chart */}
      <rect x="20" y="180" width="500" height="240" rx="4" fill="#334155" />
      <text x="40" y="210" fill="#F8FAFC" fontSize="14" fontWeight="bold">Sales Over Time</text>
      <text x="40" y="230" fill="#94A3B8" fontSize="10">Last 30 days</text>
      
      {/* Chart Grid */}
      <line x1="40" y1="380" x2="480" y2="380" stroke="#475569" strokeWidth="1" />
      <line x1="40" y1="340" x2="480" y2="340" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="40" y1="300" x2="480" y2="300" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="40" y1="260" x2="480" y2="260" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
      
      {/* X-Axis Labels */}
      <text x="40" y="395" fill="#94A3B8" fontSize="8">Apr 1</text>
      <text x="120" y="395" fill="#94A3B8" fontSize="8">Apr 8</text>
      <text x="200" y="395" fill="#94A3B8" fontSize="8">Apr 15</text>
      <text x="280" y="395" fill="#94A3B8" fontSize="8">Apr 22</text>
      <text x="360" y="395" fill="#94A3B8" fontSize="8">Apr 29</text>
      <text x="440" y="395" fill="#94A3B8" fontSize="8">May 6</text>
      
      {/* Y-Axis Labels */}
      <text x="20" y="385" fill="#94A3B8" fontSize="8">$0</text>
      <text x="20" y="345" fill="#94A3B8" fontSize="8">$500</text>
      <text x="20" y="305" fill="#94A3B8" fontSize="8">$1000</text>
      <text x="20" y="265" fill="#94A3B8" fontSize="8">$1500</text>
      
      {/* Sales Line Chart */}
      <path 
        d="M40 360 L80 340 L120 350 L160 320 L200 330 L240 300 L280 280 L320 290 L360 270 L400 250 L440 260 L480 240" 
        stroke="#38BDF8" 
        strokeWidth="2"
        fill="none"
      />
      
      {/* Area under the line */}
      <path 
        d="M40 360 L80 340 L120 350 L160 320 L200 330 L240 300 L280 280 L320 290 L360 270 L400 250 L440 260 L480 240 L480 380 L40 380 Z" 
        fill="url(#blueGradient)" 
        opacity="0.2"
      />
      
      {/* Data points */}
      <circle cx="40" cy="360" r="3" fill="#38BDF8" />
      <circle cx="80" cy="340" r="3" fill="#38BDF8" />
      <circle cx="120" cy="350" r="3" fill="#38BDF8" />
      <circle cx="160" cy="320" r="3" fill="#38BDF8" />
      <circle cx="200" cy="330" r="3" fill="#38BDF8" />
      <circle cx="240" cy="300" r="3" fill="#38BDF8" />
      <circle cx="280" cy="280" r="3" fill="#38BDF8" />
      <circle cx="320" cy="290" r="3" fill="#38BDF8" />
      <circle cx="360" cy="270" r="3" fill="#38BDF8" />
      <circle cx="400" cy="250" r="3" fill="#38BDF8" />
      <circle cx="440" cy="260" r="3" fill="#38BDF8" />
      <circle cx="480" cy="240" r="3" fill="#38BDF8" />
      
      {/* Top Products */}
      <rect x="540" y="180" width="240" height="240" rx="4" fill="#334155" />
      <text x="560" y="210" fill="#F8FAFC" fontSize="14" fontWeight="bold">Top Products</text>
      <text x="560" y="230" fill="#94A3B8" fontSize="10">By revenue</text>
      
      {/* Product Bars */}
      <rect x="560" y="250" width="180" height="20" rx="2" fill="#38BDF8" opacity="0.9" />
      <text x="570" y="264" fill="#0F172A" fontSize="10" fontWeight="bold">Product A</text>
      <text x="700" y="264" fill="#0F172A" fontSize="10" fontWeight="bold">$4,250</text>
      
      <rect x="560" y="280" width="150" height="20" rx="2" fill="#38BDF8" opacity="0.8" />
      <text x="570" y="294" fill="#0F172A" fontSize="10" fontWeight="bold">Product B</text>
      <text x="670" y="294" fill="#0F172A" fontSize="10" fontWeight="bold">$3,800</text>
      
      <rect x="560" y="310" width="130" height="20" rx="2" fill="#38BDF8" opacity="0.7" />
      <text x="570" y="324" fill="#0F172A" fontSize="10" fontWeight="bold">Product C</text>
      <text x="650" y="324" fill="#0F172A" fontSize="10" fontWeight="bold">$3,200</text>
      
      <rect x="560" y="340" width="100" height="20" rx="2" fill="#38BDF8" opacity="0.6" />
      <text x="570" y="354" fill="#0F172A" fontSize="10" fontWeight="bold">Product D</text>
      <text x="620" y="354" fill="#0F172A" fontSize="10" fontWeight="bold">$2,750</text>
      
      <rect x="560" y="370" width="80" height="20" rx="2" fill="#38BDF8" opacity="0.5" />
      <text x="570" y="384" fill="#0F172A" fontSize="10" fontWeight="bold">Product E</text>
      <text x="600" y="384" fill="#0F172A" fontSize="10" fontWeight="bold">$1,980</text>
      
      {/* Insights Panel */}
      <rect x="20" y="440" width="760" height="140" rx="4" fill="#334155" />
      <text x="40" y="470" fill="#F8FAFC" fontSize="14" fontWeight="bold">Weekly Insights</text>
      
      {/* Insight Items */}
      <circle cx="40" cy="500" r="6" fill="#10B981" />
      <text x="60" y="504" fill="#F8FAFC" fontSize="12">Sales increased by 24% compared to last week</text>
      
      <circle cx="40" cy="530" r="6" fill="#F59E0B" />
      <text x="60" y="534" fill="#F8FAFC" fontSize="12">Product B sales dropped by 12% - consider a promotion</text>
      
      <circle cx="40" cy="560" r="6" fill="#38BDF8" />
      <text x="60" y="564" fill="#F8FAFC" fontSize="12">Weekday sales peak at 2pm - consider additional staffing</text>
      
      {/* Action Button */}
      <rect x="640" y="530" width="120" height="30" rx="4" fill="#38BDF8" />
      <text x="665" y="550" fill="#F8FAFC" fontSize="12" fontWeight="bold">View Full Report</text>
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
} 