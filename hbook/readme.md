<p align="center">
  <img src="https://i.ibb.co/qYXDbTTT/H-book-logo-11zon.png" alt="H Book Logo" width="180">
</p>

<h1 align="center">H Book</h1>

<p align="center">
  <strong>Payroll & Employee Management System</strong>
</p>

<p align="center">
  A secure, responsive HR platform for employee management, attendance,
  payroll, recruitment and statutory compliance.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active%20Development-orange" alt="Status">
  <img src="https://img.shields.io/badge/Platform-Web%20Application-blue" alt="Platform">
  <img src="https://img.shields.io/badge/Responsive-Desktop%20%7C%20Mobile-success" alt="Responsive">
</p>

---

## ✨ Features

### 🔐 Authentication & Security

- Role-based access control
- Separate **Admin** and **Manager** privileges
- Secure login system
- Activity and audit logging
- Login device/IP tracking
- Attendance editing time-locks
- Controlled access to sensitive employee and payroll information

### 👤 Employee Management

- Centralized employee database
- Personal and employment information
- Banking information
- UAN and ESIC details
- Active and ex-employee management
- Employee document vault
- Google Drive document integration

### 📊 Smart Attendance

- Daily attendance matrix
- Monthly attendance view
- Present / Absent / Half-Day / Leave status
- Live attendance progress
- Mobile-friendly attendance keypad
- Time-locked attendance editing

### 💰 Payroll

- Automated salary calculation
- Attendance-based deductions
- Advance management
- Previous balance handling
- Bulk salary processing
- Bank advice generation
- PDF salary slips
- Multi-month employee statements

### 👥 Recruitment

- Applicant tracking
- Pending / Shortlisted / Hold / Rejected status
- Raw application conversion
- Candidate database
- Negotiated salary management
- Appointment letter generation

### 🛡️ Compliance

- ESIC contribution calculations
- EPFO / PF calculations
- Exportable compliance reports
- Configurable statutory rules

### 💾 Backup & Reports

- Excel / CSV backups
- Google Drive backup
- PDF reports
- Payroll reports
- Attendance reports
- Audit logs

---

## 🏗️ Technology Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Google Apps Script |
| Database | Firebase |
| Authentication | Firebase / Application Authentication |
| Document Storage | Google Drive |
| Reports | Excel / CSV |
| PDF | PDF Generation |
| Interface | Responsive Web UI |

---

## 🧩 System Architecture

```text
                         ┌─────────────────┐
                         │     H BOOK      │
                         │   Web Platform  │
                         └────────┬────────┘
                                  │
                         ┌────────▼────────┐
                         │    Frontend     │
                         │ HTML • CSS • JS │
                         └────────┬────────┘
                                  │
                         ┌────────▼────────┐
                         │     Backend     │
                         │ Google Apps     │
                         │     Script      │
                         └────────┬────────┘
                                  │
             ┌────────────────────┼────────────────────┐
             │                    │                    │
      ┌──────▼──────┐     ┌───────▼──────┐     ┌──────▼──────┐
      │   Firebase  │     │ Google Drive │     │   Reports   │
      │     Data    │     │   Documents  │     │ Excel / PDF │
      └─────────────┘     └──────────────┘     └─────────────┘
