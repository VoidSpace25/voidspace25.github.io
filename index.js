        function toggleTheme() {
            const body = document.body;
            const button = document.getElementById("themeToggle");
            if (body.classList.contains("lightmode")) {
                body.classList.replace("lightmode", "darkmode");
                localStorage.setItem("theme", "darkmode");
                button.textContent = "Light";
            } else {
                body.classList.replace("darkmode", "lightmode");
                localStorage.setItem("theme", "lightmode");
                button.textContent = "Dark";
            }
        }

        (function loadTheme() {
            const savedTheme = localStorage.getItem("theme") || "light-mode";
            document.body.classList.add(savedTheme);
           
        })();
        
       
