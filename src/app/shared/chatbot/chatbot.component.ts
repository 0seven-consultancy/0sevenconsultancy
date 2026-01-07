import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent {
  isOpen = false;
  isSubmitted = false;

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

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
      console.log('Chatbot form submitted:', data);
      this.isSubmitted = true;
      form.reset();
      setTimeout(() => {
        this.isSubmitted = false;
        this.isOpen = false;
      }, 3000);
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error submitting form. Please try again.');
    });
  }
}