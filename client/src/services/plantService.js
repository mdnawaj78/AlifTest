// api/plantService.js

export const identifyPlant = async (imageFile) => {
  const apiKey = "YOUR_GOOGLE_GEMINI_API_KEY";
  const formData = new FormData();
  formData.append('image', imageFile);

  const response = await fetch(`https://google-gemini-api.com/identify?key=${AIzaSyAeddYmz1IZfinJCFDC93xqd5gns_AXScY}`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to identify plant');
  }

  const result = await response.json();
  return result;
};
