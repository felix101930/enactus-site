// creating the layout for how the email template will look like

interface EmailTemplateProps { // based on the form's inputs
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function EmailTemplate({ name, email, subject, message }: EmailTemplateProps) {
  return (
    <div>
      <h1>Contact Form Submission</h1>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Subject:</strong> {subject}</p>
      <p><strong>Message:</strong></p>
      <p>{message}</p>
    </div>
  );
}