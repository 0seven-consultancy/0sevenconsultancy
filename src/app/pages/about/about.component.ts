import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  reasons = [
    {
      title: 'Expert Team',
      description: 'Our experienced professionals with 10+ years in software development understand business needs and deliver tailored solutions that drive real results.',
      icon: '👨💼'
    },
    {
      title: 'Proven Solutions',
      description: 'Time-tested management systems that have helped over 500 businesses across various industries streamline operations and increase efficiency.',
      icon: '✅'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support with average response time of 15 minutes to ensure your business never stops running smoothly.',
      icon: '🛠️'
    },
    {
      title: 'Scalable Technology',
      description: 'Our cloud-based solutions grow with your business, from startup to enterprise level, ensuring long-term value and ROI.',
      icon: '📈'
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security with end-to-end encryption, regular security audits, and compliance with industry standards.',
      icon: '🔒'
    },
    {
      title: 'Cost Effective',
      description: 'Competitive pricing with flexible payment plans and no hidden costs. Our solutions typically pay for themselves within 6 months.',
      icon: '💰'
    }
  ];

  teamMembers = [
    {
      name: 'John Anderson',
      position: 'CEO & Founder',
      experience: '15+ years in enterprise software',
      description: 'Visionary leader with extensive experience in business management solutions'
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      experience: '12+ years in software architecture',
      description: 'Technology expert specializing in scalable cloud-based systems'
    },
    {
      name: 'Michael Chen',
      position: 'Head of Customer Success',
      experience: '10+ years in client relations',
      description: 'Dedicated to ensuring client satisfaction and business growth'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Lead Developer',
      experience: '8+ years in full-stack development',
      description: 'Expert in modern web technologies and system integration'
    }
  ];

  achievements = [
    { number: '500+', label: 'Satisfied Clients' },
    { number: '50+', label: 'Successful Projects' },
    { number: '99.9%', label: 'System Uptime' },
    { number: '24/7', label: 'Support Available' },
    { number: '15min', label: 'Avg Response Time' },
    { number: '6mo', label: 'Typical ROI Period' }
  ];

  values = [
    {
      title: 'Innovation',
      description: 'We continuously innovate to stay ahead of technology trends and provide cutting-edge solutions.',
      icon: '🚀'
    },
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our interactions.',
      icon: '🌟'
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from product development to customer service.',
      icon: '🏆'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to understand their needs and deliver optimal solutions.',
      icon: '🤝'
    }
  ];
}