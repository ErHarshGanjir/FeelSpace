# 📘 H Book — Payroll & Employee Management System

> **A secure, responsive HR, attendance, payroll, recruitment and employee management platform.**

H Book is a web-based **Payroll & Employee Management System** designed to centralize employee records, attendance, salary processing, recruitment, compliance and administrative operations in one modern interface.

Built with a focus on **security, automation, responsive design and operational efficiency**, H Book is designed to work smoothly across **desktop, tablet and mobile devices**.

---

## ✨ Features

### 🔐 Authentication & Security

* Role-based access control
* Separate **Admin** and **Manager** privileges
* Secure login system
* Activity and audit logging
* Login device/IP tracking
* Attendance editing time-locks
* Controlled access to sensitive employee and payroll information

---

### 👤 Employee Management

Maintain a centralized digital employee database containing:

* Employee ID
* Personal information
* Contact details
* Employment details
* Joining and leaving dates
* Bank account information
* UAN
* ESIC information
* Employment status

#### 📁 Employee Document Vault

Employee documents can be securely linked to their profiles.

Supported document types may include:

* ID documents
* Employee photographs
* Bank documents
* Appointment letters
* Employment documents
* Other HR records

Documents can be stored through **Google Drive** integration.

---

## 📊 Smart Attendance Management

H Book provides a visual attendance matrix designed for fast daily attendance entry.

### Attendance Status

| Status  | Description |
| ------- | ----------- |
| 🟢 `P`  | Present     |
| 🔴 `A`  | Absent      |
| 🟡 `HD` | Half-Day    |
| 🔵 `L`  | Leave       |
| ⚪ `WO`  | Weekly Off  |
| 🟣 `H`  | Holiday     |

### Attendance Features

* Daily attendance grid
* Monthly attendance matrix
* Employee-wise attendance
* Department-wise filtering
* Live completion progress
* Attendance statistics
* Time-locked editing
* Mobile-friendly attendance controls

### 📱 Mobile Attendance Keypad

The mobile interface includes a touch-friendly attendance keypad:

```text
┌─────┬─────┬─────┬─────┐
│  P  │  A  │ HD  │  L  │
└─────┴─────┴─────┴─────┘
```

This allows managers to update attendance quickly without navigating a large desktop-style table.

---

# 💰 Payroll & Salary Management

H Book automates major payroll operations and reduces repetitive calculations.

### Automated Payroll

Salary calculations can consider:

* Basic salary
* Attendance
* Absence deductions
* Half-days
* Leave
* Previous balances
* Salary adjustments
* Advances
* Other deductions
* Statutory contributions

### 💵 Advance Management

Record and manage employee salary advances.

Each advance can include:

* Employee
* Date
* Amount
* Payment reference
* Payment method
* Notes
* Approval status

Approved advances can automatically be included in final salary deductions.

---

## 🏦 Bulk Salary Payments

Process multiple employee salaries together.

The system can generate an Excel-compatible bank advice containing:

* Employee name
* Bank account
* IFSC
* Payment amount
* Payment reference

---

## 🧾 Salary Slips

Generate professional PDF salary slips containing:

* Company information
* Employee information
* Employee ID
* Salary period
* Attendance
* Earnings
* Deductions
* Advance
* Previous balance
* Net salary

---

## 📑 Employee Statements

Generate multi-month employee financial statements.

Example:

```text
April 2026
     ↓
May 2026
     ↓
June 2026
     ↓
July 2026
     ↓
August 2026
     ↓
September 2026
```

Statements can include:

* Monthly salary
* Attendance
* Advances
* Deductions
* Adjustments
* Payments
* Running balances

---

# 👥 Recruitment Management

H Book includes a recruitment pipeline for managing applicants from application to appointment.

### Recruitment Pipeline

```text
Pending
   ↓
Shortlisted
   ↓
Interview / Review
   ↓
Selected
   ↓
Appointment
```

Candidates can also be placed on:

```text
Hold
Rejected
```

### Applicant Tracking

Store:

* Applicant ID
* Name
* Contact information
* Email
* Position
* Application date
* Experience
* Expected salary
* Negotiated salary
* Interview information
* Notes
* Documents
* Current status

---

## 🔄 Raw Application Conversion

Raw application data can be converted into standardized applicant records.

```text
Raw Application
       ↓
Data Validation
       ↓
Field Mapping
       ↓
Applicant Record
       ↓
Recruitment Pipeline
```

---

## 📜 Appointment Letter Generator

Generate formatted PDF appointment letters using applicant and employment information.

Generated letters can contain:

* Employee name
* Designation
* Joining date
* Salary
* Employment terms
* Working conditions
* Company information
* Authorized signature

---

# 🛡️ Compliance Management

H Book can support configurable statutory payroll calculations.

## ESIC

Generate employee and employer contribution information based on configured rules.

## EPFO / PF

Manage and calculate applicable PF contribution information.

## Exportable Reports

Generate structured reports suitable for downstream statutory filing and upload workflows.

> **Note:** Statutory contribution rules, limits and filing requirements may change. H Book should keep these values configurable rather than permanently hard-coded.

---

# 💾 Backup & Data Management

Administrators can create backups of important system data.

### Local Backup

Supported export formats can include:

* Excel
* CSV
* JSON

### Cloud Backup

Important data and documents can be synchronized with a secured Google Drive location.

Backup records can maintain:

* Backup date
* Backup time
* User
* Backup type
* File location
* Backup status

---

# 📊 Dashboard

The H Book dashboard provides a quick operational overview.

### Employee Overview

```text
┌────────────────────┐
│ TOTAL EMPLOYEES    │
│        48          │
└────────────────────┘
```

### Attendance

```text
Present     34
Absent       3
Leave        4
Half-Day     1
```

### Payroll

```text
Pending Payroll
Advances
Processing Status
```

### Recruitment

```text
Pending
Shortlisted
Hold
Rejected
```

---

# 🧭 System Navigation

```text
H BOOK
│
├── Dashboard
│
├── Employees
│   ├── All Employees
│   ├── Add Employee
│   ├── Employee Documents
│   └── Ex-Employees
│
├── Attendance
│   ├── Daily Attendance
│   ├── Monthly Matrix
│   └── Attendance Reports
│
├── Payroll
│   ├── Salary Processing
│   ├── Advances
│   ├── Salary Slips
│   ├── Employee Statements
│   └── Bank Advice
│
├── Recruitment
│   ├── Applicants
│   ├── Pipeline
│   └── Appointment Letters
│
├── Compliance
│   ├── ESIC
│   ├── EPFO / PF
│   └── Export Reports
│
├── Reports
│
├── Backup
│
└── Settings
    ├── Users
    ├── Roles & Permissions
    ├── Payroll Rules
    ├── Attendance Rules
    └── System Logs
```

---

# 🏗️ Technology Stack

| Layer                    | Technology                            |
| ------------------------ | ------------------------------------- |
| Frontend                 | HTML, CSS, JavaScript                 |
| Backend                  | Google Apps Script                    |
| Database / Data Services | Firebase                              |
| Authentication           | Firebase / Application Authentication |
| Document Storage         | Google Drive                          |
| Reports                  | Excel / CSV                           |
| PDF Generation           | PDF Generator                         |
| Interface                | Responsive Web UI                     |
| Platforms                | Desktop • Tablet • Mobile             |

---

# 🧩 System Architecture

```text
                     ┌──────────────────┐
                     │      H BOOK      │
                     │   Web Interface  │
                     └────────┬─────────┘
                              │
                              ▼
                  ┌──────────────────────┐
                  │      Frontend        │
                  │ HTML • CSS • JS      │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │      Backend         │
                  │  Google Apps Script  │
                  └──────────┬───────────┘
                             │
                ┌────────────┼────────────┐
                ▼            ▼            ▼
          ┌──────────┐ ┌──────────┐ ┌───────────┐
          │ Firebase │ │  Drive   │ │  Reports  │
          │   Data   │ │ Documents│ │ Excel/PDF │
          └──────────┘ └──────────┘ └───────────┘
```

---

# 🔒 Security Architecture

Security is a core part of H Book.

Permission checks should be enforced **on the backend**, not only by hiding buttons or menus in the frontend.

The system is designed around:

```text
Authentication
      ↓
Role Verification
      ↓
Permission Validation
      ↓
Backend Action
      ↓
Activity Log
```

This helps prevent unauthorized actions through direct requests or manipulated frontend interfaces.

---

# 📱 Responsive Design

H Book is designed for:

* 🖥️ Desktop
* 💻 Laptop
* 📱 Mobile
* 📟 Tablet

The interface adapts to different screen sizes while keeping important workflows accessible.

---

# 🚀 Core Modules

```text
┌─────────────────────────────────────────┐
│                 H BOOK                  │
├─────────────────────────────────────────┤
│ 🔐 Authentication & Security            │
│ 👤 Employee Management                  │
│ 📊 Attendance Management                │
│ 💰 Payroll Processing                   │
│ 🏦 Salary & Bank Payments               │
│ 🧾 Salary Slips & Statements            │
│ 👥 Recruitment Management               │
│ 📜 Appointment Letters                  │
│ 🛡️ ESIC & EPFO Compliance              │
│ 💾 Backup & Data Management             │
│ 📋 Reports & Audit Logs                 │
└─────────────────────────────────────────┘
```

---

# 🎯 Project Goals

H Book is designed to:

* Reduce manual HR work
* Simplify attendance management
* Automate payroll calculations
* Improve employee record management
* Centralize recruitment operations
* Reduce payroll processing errors
* Provide better auditability
* Support mobile-first workflows
* Simplify statutory reporting
* Keep HR information organized in one system

---

# 🗺️ Future Roadmap

Potential future enhancements include:

* [ ] Advanced permission management
* [ ] Employee self-service portal
* [ ] Employee attendance dashboard
* [ ] Leave management
* [ ] Automated payslip delivery
* [ ] Email notifications
* [ ] WhatsApp notifications
* [ ] Advanced payroll reports
* [ ] Department management
* [ ] Shift management
* [ ] Holiday calendar
* [ ] Automated backup scheduling
* [ ] Advanced audit dashboard
* [ ] Payroll approval workflow
* [ ] Mobile PWA support

---

# 📌 Project Status

**Status:** 🚧 Active Development

H Book is being developed as a modular HR and payroll platform with a focus on security, responsive design and automation.

---

# 📄 License

This project is currently intended for private/internal use.

License information can be updated when the project is made publicly available.

---

## ⭐ H Book

**One workspace for employees, attendance, payroll, recruitment and compliance.**

> **Manage people. Simplify payroll. Organize everything.**
>
> <p align="center">
  <img src="https://i.ibb.co/qYXDbTTT/H-book-logo-11zon.png" alt="H Book" width="100">
</p>

<p align="center">
  <strong>H Book</strong><br>
  Manage people. Simplify payroll. Organize everything.
</p>

<p align="center">
  Developed by <strong>Er. Harsh Ganjir</strong>
  <br>
  <a href="https://erharsh.in">www.erharsh.in</a>
</p>
