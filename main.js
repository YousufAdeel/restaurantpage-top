(() => {
    "use strict";

    // Function to load the Home Page
    const loadHome = () => {
        const content = document.querySelector("#content");
        const page = document.createElement("div");
        page.classList.add("page-content");

        const img = document.createElement("img");
        img.src = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/52/e7/28/tocha-at-banyan-tree.jpg?w=600&h=-1&s=1";
        img.height = "300";
        page.appendChild(img);

        const title = document.createElement("h1");
        title.textContent = "Welcome to our restaurant!";
        page.appendChild(title);

        const desc = document.createElement("p");
        desc.textContent = "We serve the best food in town!";
        page.appendChild(desc);

        content.appendChild(page);
    };

    // Function to remove existing page content
    const clearContent = () => {
        const content = document.querySelector("#content");
        const page = document.querySelector(".page-content");
        if (page) content.removeChild(page);
    };

    // Add event listeners for the top navigation buttons
    document.addEventListener("DOMContentLoaded", () => {
        const homeBtn = document.querySelector("nav button:nth-child(1)");
        const menuBtn = document.querySelector("nav button:nth-child(2)");
        const contactBtn = document.querySelector("nav button:nth-child(3)");

        homeBtn.addEventListener("click", () => {
            clearContent();
            loadHome();
        });

        menuBtn.addEventListener("click", () => {
            clearContent();
            const content = document.querySelector("#content");
            const page = document.createElement("div");
            page.classList.add("page-content");

            const title = document.createElement("h1");
            title.textContent = "Our Menu";

            const list = document.createElement("ul");
            const item1 = document.createElement("li");
            item1.textContent = "Pasta - $20";
            const item2 = document.createElement("li");
            item2.textContent = "Pizza - $15";
            const item3 = document.createElement("li");
            item3.textContent = "Fries - $5";

            list.appendChild(item1);
            list.appendChild(item2);
            list.appendChild(item3);
            page.appendChild(title);
            page.appendChild(list);
            content.appendChild(page);
        });

        contactBtn.addEventListener("click", () => {
            clearContent();
            const content = document.querySelector("#content");
            const page = document.createElement("div");
            page.classList.add("page-content");

            const form = document.createElement("form");
            form.classList.add("contact-form");

            const input1 = document.createElement("input");
            input1.type = "text";
            input1.placeholder = "Enter heading";
            form.appendChild(input1);

            const input2 = document.createElement("input");
            input2.type = "text";
            input2.placeholder = "Enter address";
            form.appendChild(input2);

            const input3 = document.createElement("input");
            input3.type = "text";
            input3.placeholder = "Enter phone number";
            form.appendChild(input3);

            const submitBtn = document.createElement("input");
            submitBtn.type = "submit";
            submitBtn.value = "Submit";
            form.appendChild(submitBtn);

            page.appendChild(form);
            content.appendChild(page);
        });

        // Load Home Page by default
        loadHome();
    });
})();
