// restaurant.js

const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
    

    // Create and append image element
    const image = document.createElement('img');
    image.src = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/52/e7/28/tocha-at-banyan-tree.jpg?w=600&h=-1&s=1';
    image.height = '300';
    pageContent.appendChild(image);

    // Create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our restaurant!';
    pageContent.appendChild(headline);

    // Create and append copy element
    const copy = document.createElement('p');
    copy.textContent = 'We serve the best food in town!';
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
}
export default createRestaurantHomePage;
