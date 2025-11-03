const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Do nothing if already submitting
  if (isSubmitting) return;

  setIsSubmitting(true);
  setSubmitError('');

  // 1. Construct URLSearchParams object
  const params = new URLSearchParams();
  params.append(FORM_ENTRY_IDS.name, formData.name);
  params.append(FORM_ENTRY_IDS.email, formData.email);
  params.append(FORM_ENTRY_IDS.company, formData.company);
  params.append(FORM_ENTRY_IDS.message, formData.message);

  try {
    // 2. Create a temporary hidden iframe
    const iframe = document.createElement('iframe');
    iframe.name = 'google-form-target-' + Date.now(); 
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    // 3. Create a temporary form element to submit the data
    const tempForm = document.createElement('form');
    tempForm.action = GOOGLE_FORM_URL;
    tempForm.method = 'POST';
    tempForm.target = iframe.name; // CRUCIAL: Submits the form data into the hidden iframe
    tempForm.style.display = 'none';
    
    // Convert URLSearchParams into hidden input elements
    params.forEach((value, key) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      tempForm.appendChild(input);
    });
    
    // Function to handle the success and cleanup
    const handleLoad = () => {
      // The load event fires when the Google Form server responds (after successful submission)
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' }); // Clear form
      setIsSubmitting(false);

      // Clean up the temporary elements
      iframe.removeEventListener('load', handleLoad);
      document.body.removeChild(iframe);
      document.body.removeChild(tempForm);
      
      // Reset submission status after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    };

    // 4. Listen for the iframe's load event
    iframe.addEventListener('load', handleLoad);

    // 5. Append and Submit the temporary form
    document.body.appendChild(tempForm);
    tempForm.submit();

  } catch (error) {
    console.error('Submission Error:', error);
    setIsSubmitting(false);
    setSubmitError("There was an error sending your message. Please try again or email us directly.");
  }
};
