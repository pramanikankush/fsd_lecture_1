async function fetchData() {
    try {
        let response = await fetch("https://api.github.com/users?per_page=10");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
        
        let top = document.getElementById("top");
        top.innerHTML = ""; 
        
        data.forEach((element) => {
            let h1 = document.createElement("h1");
            h1.textContent = element.login;
            
            let a = document.createElement("a");
            a.setAttribute("href", element.html_url);
            a.setAttribute("target", "_blank"); // Opens in a new tab
            a.textContent = element.html_url;
            
            top.appendChild(h1);
            top.appendChild(a);
        });
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
};
