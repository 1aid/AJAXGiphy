const searchForm = document.getElementById('search-form');
const searchTermInput = document.getElementById('search-term');
const gifContainer = document.getElementById('gif-container');
const removeGifsButton = document.getElementById('remove-gifs');
let currentGifIndex = 0;

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const searchTerm = searchTermInput.value;
  try {
    const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    const gifs = response.data.data;
    if (gifs.length > 0) {
      const img = document.createElement('img');
      img.src = gifs[currentGifIndex].images.fixed_height.url;
      gifContainer.appendChild(img);
      currentGifIndex = (currentGifIndex + 1) % gifs.length; // Cycle through gifs
    }
  } catch (error) {
    console.error(error);
  }
});

removeGifsButton.addEventListener('click', () => {
  gifContainer.innerHTML = ''; // Clear gifs
});