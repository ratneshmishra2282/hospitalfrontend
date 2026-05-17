# Hospital Management SaaS UI

A premium, clinical-grade medical management interface built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Key Features
- **Editorial Clinical Aesthetic**: A high-end, breathable design prioritized for cognitive ease.
- **Multi-Tenant Architecture**: Built-in support for facility switching and scoped data.
- **Comprehensive Medical Modules**:
  - Administrative Dashboard
  - Patient Registration & Search
  - Clinical Encounter Builder (SOAP Notes, Vitals)
  - IPD/OPD Management
  - Billing & Invoicing
  - Laboratory & Pharmacy Operations

## 🛠️ Technical Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn/UI
- **Icons**: Lucide React
- **Aesthetics**: "Clinical Sanctuary" Design System

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

### Mock Data Switch
By default, the UI uses mock data. To connect to a real backend:
1. Open `frontend/.env.local`.
2. Set `NEXT_PUBLIC_USE_MOCK_DATA=false`.
3. Set `NEXT_PUBLIC_API_URL` to your backend endpoint.
