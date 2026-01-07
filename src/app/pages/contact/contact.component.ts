import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  showThankYou = false;

  constructor(private router: Router) {}

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

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('Form submitted successfully:', data);
      this.router.navigate(['/thank-you']);
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error submitting form. Please try again.');
    });
  }

  closeThankYou() {
    this.showThankYou = false;
  }
}