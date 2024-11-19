import PlaceholderImageGenerator from 'enhanced-placeholder-image-generator';

// Create an instance of PlaceholderImageGenerator
const generator = new PlaceholderImageGenerator();

// Set properties based on your required dimensions and text
generator.setDimensions(300, 300)   // Set the dimensions to 300x300
         .setBackgroundColor('#f4f4f4')  // Background color
         .setTextColor('#555')          // Text color
         .setFont('20px Arial')        // Font size and family
         .setText('Image Available Soon') // Set the placeholder text
         .setBorderColor('#000000')    // Border color
         .setBorderWidth(3)            // Border width
         .setTextPosition(150, 150)    // Position the text in the center
         .setImageQuality(0.95);       // Set the image quality (optional)

// Save the image
generator.saveImageAsync('jpeg', 'output-image.jpeg')
    .then((message) => {
        console.log(message);
    })
    .catch((err) => {
        console.error('Error saving image:', err.message);
    });
