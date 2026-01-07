import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  };

  services = [
    'POS System',
    'Attendance Management System',
    'Hospital Management System',
    'Custom Software Development',
    'System Integration',
    'General Inquiry'
  ];

  faqs = [
    {
      question: 'How long does implementation take?',
      answer: 'Implementation typically takes 2-4 weeks depending on the complexity of your requirements and system size.'
    },
    {
      question: 'Do you provide training for our staff?',
      answer: 'Yes, we provide comprehensive training for your team as part of our implementation process, including ongoing support.'
    },
    {
      question: 'Is my data secure with your systems?',
      answer: 'Absolutely. We use enterprise-grade security with end-to-end encryption and comply with all industry standards.'
    },
    {
      question: 'Can I customize the system for my business?',
      answer: 'Yes, all our solutions are highly customizable to meet your specific business requirements and workflows.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer 24/7 technical support with an average response time of 15 minutes for all our clients.'
    }
  ];

  onSubmit() {
    if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
      alert('Thank you for your message! We will get back to you within 24 hours.');
      this.contactForm = { name: '', email: '', phone: '', company: '', service: '', message: '' };
    } else {
      alert('Please fill in all required fields (Name, Email, and Message).');
    }
  }
}