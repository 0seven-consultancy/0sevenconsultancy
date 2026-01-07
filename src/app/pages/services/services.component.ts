import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      title: 'POS System',
      icon: '🛒',
      description: 'Complete point-of-sale solution designed for retail businesses of all sizes. Our advanced POS system streamlines your sales process, manages inventory in real-time, and provides comprehensive analytics to help you make informed business decisions.',
      features: [
        {
          title: 'Sales Management',
          description: 'Track sales transactions, manage multiple payment methods, generate receipts, and handle returns with ease. Real-time sales tracking with detailed analytics.',
          benefits: ['Multi-payment support', 'Real-time tracking', 'Automated receipts', 'Return management']
        },
        {
          title: 'Inventory Management',
          description: 'Real-time inventory tracking, automated stock alerts, barcode scanning, and intelligent reordering system to prevent stockouts.',
          benefits: ['Barcode scanning', 'Stock alerts', 'Automated reordering', 'Multi-location support']
        },
        {
          title: 'Billing and Reports',
          description: 'Comprehensive reporting with sales analytics, financial insights, tax calculations, and customizable business intelligence dashboards.',
          benefits: ['Custom reports', 'Tax calculations', 'Financial analytics', 'Export capabilities']
        }
      ],
      pricing: 'Starting from $99/month',
      industries: ['Retail Stores', 'Restaurants', 'Cafes', 'Supermarkets']
    },
    {
      title: 'Attendance Management System',
      icon: '👥',
      description: 'Streamlined employee attendance and workforce management solution that integrates with biometric devices, mobile apps, and existing HR systems. Perfect for businesses of any size looking to automate their attendance tracking.',
      features: [
        {
          title: 'Employee Attendance Tracking',
          description: 'Accurate time tracking with multiple check-in methods including biometric, RFID cards, mobile apps, and web-based clock-in systems.',
          benefits: ['Biometric integration', 'Mobile check-in', 'GPS tracking', 'Offline capability']
        },
        {
          title: 'Leave Management',
          description: 'Automated leave request system with approval workflows, leave balance tracking, and integration with payroll systems.',
          benefits: ['Approval workflows', 'Leave balance tracking', 'Calendar integration', 'Email notifications']
        },
        {
          title: 'Monthly Reports',
          description: 'Detailed attendance reports, overtime calculations, productivity analytics, and compliance reporting for HR and management.',
          benefits: ['Overtime calculations', 'Compliance reports', 'Custom analytics', 'Export to Excel/PDF']
        }
      ],
      pricing: 'Starting from $5/employee/month',
      industries: ['Corporate Offices', 'Manufacturing', 'Healthcare', 'Education']
    },
    {
      title: 'Hospital Management System',
      icon: '🏥',
      description: 'Comprehensive healthcare management system designed for modern medical facilities. Streamline patient care, manage appointments, handle billing, and maintain secure medical records with our HIPAA-compliant solution.',
      features: [
        {
          title: 'Patient Records',
          description: 'Secure digital patient records with complete medical history, treatment plans, prescription management, and integration with diagnostic equipment.',
          benefits: ['HIPAA compliant', 'Medical history', 'Prescription tracking', 'Lab integration']
        },
        {
          title: 'Appointment Scheduling',
          description: 'Efficient appointment booking system with calendar management, automated reminders, waitlist management, and multi-provider scheduling.',
          benefits: ['Online booking', 'Automated reminders', 'Waitlist management', 'Multi-provider support']
        },
        {
          title: 'Billing Management',
          description: 'Integrated billing system with insurance claim processing, payment tracking, automated invoicing, and financial reporting.',
          benefits: ['Insurance claims', 'Payment tracking', 'Automated invoicing', 'Financial reports']
        }
      ],
      pricing: 'Custom pricing based on facility size',
      industries: ['Hospitals', 'Clinics', 'Dental Practices', 'Specialty Centers']
    }
  ];

  additionalServices = [
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed specifically for your business needs',
      icon: '💻'
    },
    {
      title: 'System Integration',
      description: 'Seamlessly integrate our solutions with your existing business systems',
      icon: '🔗'
    },
    {
      title: 'Training & Support',
      description: '24/7 technical support and comprehensive training for your team',
      icon: '🎓'
    },
    {
      title: 'Data Migration',
      description: 'Safe and secure migration of your existing data to our systems',
      icon: '📦'
    }
  ];
}