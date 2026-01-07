import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  services = [
    {
      title: 'POS System',
      description: 'Complete point-of-sale solution for retail businesses with advanced features',
      icon: '🛒',
      features: ['Sales Management', 'Inventory Control', 'Real-time Reports', 'Multi-store Support']
    },
    {
      title: 'Attendance Management',
      description: 'Streamlined employee attendance and leave management with biometric integration',
      icon: '👥',
      features: ['Time Tracking', 'Leave Management', 'Monthly Reports', 'Payroll Integration']
    },
    {
      title: 'Hospital Management',
      description: 'Comprehensive healthcare management system for modern medical facilities',
      icon: '🏥',
      features: ['Patient Records', 'Appointment Scheduling', 'Billing System', 'Insurance Claims']
    }
  ];

  stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '50+', label: 'Projects Completed' },
    { number: '24/7', label: 'Support Available' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  testimonials = [
    {
      name: 'John Smith',
      company: 'ABC Retail Store',
      message: 'The POS system has revolutionized our business operations. Sales tracking and inventory management have never been easier.',
      rating: 5
    },
    {
      name: 'Dr. Sarah Johnson',
      company: 'City Medical Center',
      message: 'Their hospital management system streamlined our patient care process and improved our efficiency significantly.',
      rating: 5
    },
    {
      name: 'Mike Wilson',
      company: 'Tech Solutions Inc',
      message: 'The attendance management system helped us reduce payroll errors and improved employee satisfaction.',
      rating: 5
    }
  ];
}