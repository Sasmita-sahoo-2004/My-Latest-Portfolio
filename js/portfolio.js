$(document).ready(() => {
    let config = document.querySelector(".mymixcont");
    let mixer = mixitup(config, {
        selectors: {
            target: ".mix",
        },
        animation: {
            easing: "ease-in-out",
            applyPerspective: true,
            duration: 750,
            reverseOut: true,
            effects: "fade rotateY(90deg) stagger(100ms)",
            staggerSequence: function (i) {
                return 2 * i - 5 * (i / 3 - (1 / 3) * (i % 3));
            },
            nudge: false,
        },
        controls: {
            live: false,
        },
    });

    $(".closeButton").click(() => {
        document.querySelector(".closeButton .icon").classList.toggle("active");
        $(".description").slideToggle(500);
    });

    $(".exitButton").click(() => {
        tip.classList.remove("view");
    });

    function portfolioView(object) {
        let namePlate = document.querySelector(
            ".tip .allContent .description .pro_intro .nameplate h1"
        );
        namePlate.textContent = object.namePlate;

        let category = document.querySelector(
            ".tip .allContent .description .pro_intro .nameplate span span"
        );
        category.textContent = object.category;

        let pro_brief = document.querySelector(
            ".tip .allContent .description .pro_intro .other_text p"
        );
        pro_brief.textContent = object.project_brief;

        let project_date = document.querySelector(
            ".tip .allContent .description .pro_info .Date span"
        );
        project_date.textContent = object.project_date;

        let project_client = document.querySelector(
            ".tip .allContent .description .pro_info .client span"
        );
        project_client.textContent = object.project_client;

        let project_link = document.querySelector(
            ".tip .allContent .description .pro_info .link a"
        );
        
        // Set the clickable link text
        project_link.textContent = "Live Demo"; 
        
        // Ensure the link opens correctly by adding 'https://' if missing
        project_link.href = object.project_link.startsWith("http") 
            ? object.project_link 
            : `https://${object.project_link}`;  
        
        // Open the link in a new tab
        project_link.target = "_blank"; 
        

        let swiper_wrapper = document.querySelector(
            ".tip .swiper-container-2 .swiper-wrapper"
        );

        let image = swiper_wrapper.querySelectorAll(".swiper-slide img");

        for (let i = 0; i < object.image.length; i++) {
            image[i].src = object.image[i];
        }
    }

    // Swiper js
    var swiper = new Swiper(".swiper-container-2", {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        // effect: "flip",
        // cubeEffect: {
        //     shadow: true,
        //     slideShadows: true,
        //     shadowOffset: 20,
        //     shadowScale: 0.94,
        // },
        // effect: "coverflow",
        // coverflowEffect: {
        //     rotate: 30,
        //     stretch: 0,
        //     depth: 100,
        //     modifier: 1,
        //     slideShadows: true,
        // },

        effect: "cube",
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
    });

    let about_nav_btn_2 = document.querySelectorAll(".about_nav a");

    function collapse2() {
        about_nav_btn_2.forEach((link) => {
            link.classList.remove("active");
        });
    }

    function slider1(selector) {
        selector.addEventListener("click", () => {
            collapse2();
            selector.classList.add("active");
        });
    }

    slider1(about_nav_btn_2[0]);
    slider1(about_nav_btn_2[1]);
    slider1(about_nav_btn_2[2]);
    slider1(about_nav_btn_2[3]);
    slider1(about_nav_btn_2[4]);
    slider1(about_nav_btn_2[5]);

    let cards = document.querySelectorAll(".mix");
    let tip = document.querySelector(".tip");

    let projectData = {
        "Portfolio": {
            namePlate: "Portfolio Website",
            category: "Web Development",
            project_brief: "My portfolio website is a responsive, interactive, and visually appealing platform designed to showcase my projects, skills, and achievements in a structured and engaging manner.",
            project_date: "2023",
            project_client: "Modern UI/UX | Dynamic Project Showcase | Responsive Design | Interactive Animations ",
            tools: "HTML, CSS, JavaScript, Swiper.js, Netify",
            project_link: "https://verdant-zuccutto-8afdb1.netlify.app/",
            image: ["resources/project/portfolio/1.png", "resources/project/portfolio/2.png", "resources/project/portfolio/3.png", "resources/project/portfolio/4.png"]
        },
        "Robovac": {
            namePlate: "Bluetooth Controlled Rovovac",
            category: "IoT & Robotics",
            project_brief: "This project aims to create a smart cleaning solution using Arduino Uno, HC-05 Bluetooth Modules, and various electronic components. With Bluetooth connectivity, users can control the RoboVac via a smartphone .",
            project_date: "2024",
            project_client: "Wireless Bluetooth Control | Obstacle Detection & Avoidance | Automatic Cleaning Modes | Mobile App Integration ",
            tools: "ESP32, Python, OpenCV",
            project_link: "https://github.com/Sasmita-sahoo-2004/Bluetooth_controlled_robovac",
            image: ["resources/project/robovac/1.jpg", "resources/project/robovac/2.jpg", "resources/project/robovac/3.jpg", "resources/project/robovac/4.png"]
        },
        "Uk Rail Analytics": {
            namePlate: "UK Rail Analytics Dashboard",
            category: "Power BI Dashboard",
            project_brief: "The UK Rail Analytics project is an interactive Power BI dashboard designed to provide insights into the performance, delays, and efficiency of the UK railway system. It helps in identifying trends, optimizing schedules, and improving decision-making using data visualization.",
            project_date: "2024",
            project_client: "Real-time Data Visualization |  Predictive Insights | User-Friendly Interface",
            tools: "Power BI, SQL, Python",
            project_link: "https://drive.google.com/file/d/18CKm-rv6MSXmCh9vylnt_pA2GE0d97sh/view?usp=sharing",
            image: ["resources/project/rail/1.png", "resources/project/rail/2.png", "resources/project/rail/3.png", "resources/project/rail/4.png"]
        },
        "Online Tutorial": {
            namePlate: "Sks study Tonic - Online Tutorial",
            category: "Web Development",
            project_brief: "The Online Tutorial project is a responsive web application designed to provide an interactive learning experience for students. It features structured courses making education more accessible and engaging.",
            project_date: "2022",
            project_client: "User Authentication & Dashboard | Course Management System | Live Video Sessions",
            tools: "React.js, Node.js, Firebase",
            project_link: "https://github.com/Sasmita-sahoo-2004/sks-study-tonic-online-tutorial",
            image: ["resources/project/tutorial/1.png", "resources/project/tutorial/2.png", "resources/project/tutorial/3.png", "resources/project/tutorial/4.png"]
        },
        "Recipe": {
            namePlate: "Cooking Recipe App",
            category: "Mobile App Development",
            project_brief: "A mobile app that allows users to browse, share, and save recipes with step-by-step instructions and ingredient lists.",
            project_date: "2025",
            project_client: "User Authentication | Recipe Search & Filters | Step-by-Step Cooking Guide",
            tools: "Flutter, Firebase, Dart",
            project_link: "https://github.com/Sasmita-sahoo-2004/Cooking-Recipes-App",
            image: ["resources/project/recipe/1.png", "resources/project/recipe/2.png", "resources/project/recipe/3.png", "resources/project/recipe/4.png"]
        },
        "Sales Dashboard": {
            namePlate: "Global superstore Sales Dashboard",
            category: "Data Analytics - PowerBi Dashboard",
            project_brief: "An interactive Power BI dashboard for analyzing sales performance, revenue trends, and key business metrics.",
            project_date: "2023",
            project_client: "Real-time Sales Analytics | Revenue & Profit Tracking | Customer Demographics Analysis",
            tools: "Power BI, SQL, Excel",
            project_link: "https://github.com/Sasmita-sahoo-2004/Global-Superstore-sales-Dashboard",
            image: ["resources/project/sale/1.png", "resources/project/sale/2.png", "resources/project/sale/3.png", "resources/project//4.png"]
        },
        "Birthday animation": {
            namePlate: "Birth day wish animation site",
            category: "Web Development",
            project_brief: "An interactive website that generates animated birthday wishes with custom messages, images, and effects.",
            project_date: "2023",
            project_client: "Customizable Animations | Personalized Messages | Easy Sharing",
            tools: "Power BI, SQL, Excel",
            project_link: "https://monumental-lokum-cc90b7.netlify.app/",
            image: ["resources/project/birth/1.png", "resources/project/birth/2.png", "resources/project/birth/3.png", "resources/project/birth/4.png"]
        },
        "HR Analysis": {
            namePlate: "HR data Analytics",
            category: "Data Analytics - PowerBI",
            project_brief: "A Power BI dashboard analyzing HR data to track employee performance, attrition rate, salary trends, and workforce demographics.",
            project_date: "2024",
            project_client: "Employee Performance Tracking | Attrition & Salary Insights ",
            tools: "Python, Pandas, Matplotlib",
            project_link: "https://app.powerbi.com/view?r=eyJrIjoiYWM3MDE4NGYtYTliYS00ODQyLWIwMjQtOGQ0ODdlYTcwMWMxIiwidCI6IjQ2NTRiNmYxLTBlNDctNDU3OS1hOGExLjyZmU5ZDk0M2M3YiIsImMiOjl9",
            image: ["resources/project/hr/1.png", "resources/project/hr/2.png", "resources/project/hr/3.png", "resources/project/hr/4.png"]
        },
        "Maun Mitra": {
            namePlate: "Maun Mitra – Assistive Tool for People with Hearing Impairment ",
            category: "Computer Vision",
            project_brief: " An AI-powered assistive tool that converts speech to text and recognizes sign language for real-time communication.",
            project_date: "2024",
            project_client: "Speech-to-Text Conversion | Sign Language Recognition | Multi-Language Support",
            tools: "Python, Pandas, Matplotlib",
            project_link: "https://github.com/Sasmita-sahoo-2004/MaunMitra-App",
            image: ["resources/project/man/1.jpg", "resources/project/man/2.jpg", "resources/project/man/3.jpg", "resources/project/man/4.jpg"]
        },
        "Spotify Trend Analysis": {
            namePlate: "Spotify Trend Analysis",
            category: "Power BI",
            project_brief: " A data-driven analysis of Spotify music trends, identifying patterns in genres, popularity, and user preferences.",
            project_date: "2024",
            project_client: "Music Genre Analysis | Popularity & Streaming Trends | Artist Performance Insights",
            tools: "Python, Pandas, Matplotlib",
            project_link: "https://github.com/Sasmita-sahoo-2004/Spotify-Trend-Analysis-Dashboard",
            image: ["resources/project/spot/1.png", "resources/project/spot/2.png", "resources/project/spot/3.png", "resources/project/spot/4.png"]
        },
        "Sonar Rock vs Mine Classification": {
            namePlate: "Underewater Sonar Rock Vs  Mine classification using ML Methods",
            category: "Machine Learning",
            project_brief: " Built an ML model to classify sonar signals as either underwater rocks or mines using feature extraction and classification algorithms.",
            project_date: "2023",
            project_client: "Sonar Signal Processing | Feature Extraction | ML Classification",
            tools: "Python, Pandas, Matplotlib",
            project_link: "https://github.com/Sasmita-sahoo-2004/Under-water-rock-vs-Mine-classification",
            image: ["resources/project/sonar/1.png", "resources/project/sonar/2.png", "resources/project/sonar/3.png", "resources/project/sonar/4.png"]
        },
        "Smart Greenhouse": {
            namePlate: "Remote Measurement and Control measurement of Greenhouse using GSM ",
            category: "IOT & Sensors Integration",
            project_brief: " Developed a smart greenhouse system with remote monitoring and automated irrigation based on environmental conditions.",
            project_date: "2023",
            project_client: "Remote Monitoring | Automated Irrigation | Real-time Climate Data",
            tools: "Python, Pandas, Matplotlib",
            project_link: "https://github.com/Sasmita-sahoo-2004/Remote-measurement-of-Greenhouse-using-GSM-cellular-IOT",
            image: ["resources/project/green/1.png", "resources/project/green/2.png", "resources/project/green/3.png", "resources/project/green/4.png"]
        },
        "Weather Station": {
            namePlate: "Weather Station",
            category: "IOT Sensor Integration",
            project_brief: "An IoT-based weather station that collects and analyzes temperature, humidity, and air pressure data in real-time.",
            project_date: "2022",
            project_client: "Real-time Climate Monitoring | Data Logging | Weather Forecasting",
            tools: "Python, Pandas, Matplotlib",
            project_link: "https://app.powerbi.com/view?r=eyJrIjoiYWM3MDE4NGYtYTliYS00ODQyLWIwMjQtOGQ0ODdlYTcwMWMxIiwidCI6IjQ2NTRiNmYxLTBlNDctNDU3OS1hOGExLTAyZmU5ZDk0M2M3YiIsImMiOjl9",
            image: ["resources/project/weather/1.jpg", "resources/project/weather/2.png", "resources/project/weather/3.png", "resources/project/weather/4.png"]
        },
        "EvapoTranspiration Modeling": {
            namePlate: "Evapotranspiration Modeling using Explainable AI",
            category: "Deep Learning & Explainable AI",
            project_brief: "Developed an AI model to estimate evapotranspiration levels using environmental factors.",
            project_date: "2024",
            project_client: "Water Resource Management | Climate Impact Analysis | AI-driven Predictions",
            tools: "Python, TensorFlow, OpenCV",
            project_link: "https://github.com/Sasmita-sahoo-2004/Evapotranspiration-modelling-using-XAI",
            image: ["resources/project/eva/1.png", "resources/project/eva/2.png", "resources/project/eva/3.png", "resources/project/eva/4.png"]
        },
        "Sign Language Translator": {
            namePlate: "Sign Language Translator using CNN, Yolov6",
            category: "Deep Learning",
            project_brief: "An AI-powered sign language recognition system using CNN and YOLOv6 to translate sign gestures into text and speech",
            project_date: "2024",
            project_client: "Gesture Recognition | Real-time Translation | Speech Output",
            tools: "Python, TensorFlow, OpenCV",
            project_link: "https://github.com/Sasmita-sahoo-2004/Hand-Sign-Language-Translation-Modeling",
            image: ["resources/project/sign/1.png", "resources/project/sign/2.png", "resources/project/sign/3.png", "resources/project/sign/4.png"]
        },
        
        "Job Salary Analysis": {
            namePlate: "Data Analyst Job Salary Analysis",
            category: "Data Analytics - PowerBI",
            project_brief: "Analyzed global job market trends for data analysts, providing salary predictions based on experience, location, and skill sets.",
            project_date: "2025",
            project_client: "Salary Predictions | Employment Trends | Skill Demand Analysis",
            tools: "Python, NLTK, Scikit-learn",
            project_link: " ",
            image: ["resources/project/job/1.png", "resources/project/job/2.png", "resources/project/job/3.png", "resources/project/job/4.png"]
        },
        "Sentiment Analysis": {
            namePlate: "Vader Sentiment Analysis",
            category: "Natural Language Processing",
            project_brief: "Analyzed customer sentiment using NLP models.",
            project_date: "2024",
            project_client: "Research Work",
            tools: "Python, NLTK, Scikit-learn",
            project_link: "https://github.com/Sasmita-sahoo-2004/Vader-sentiment-analysis",
            image: ["resources/project/vader/1.png", "resources/project/vader/2.png", "resources/project/vader/3.png", "resources/project/vader/4.png"]
        },
        "Chest X-ray Classification": {
            namePlate: "Chest X-ray Classification",
            category: "Computer Vision & Image Processing",
            project_brief: "A deep learning model that classifies chest X-ray images to detect diseases like pneumonia, tuberculosis, and lung abnormalities, aiding in early diagnosis.",
            project_date: "2025",
            project_client: "Automated X-Ray Analysis | Disease Classification (Pneumonia, TB, etc.) | High-Accuracy CNN Model | Heatmap Visualization for Explainability  ",
            tools: "Python, NLTK, Scikit-learn",
            project_link: "https://github.com/Sasmita-sahoo-2004/Chest-xray-classification-using-efficient-net-b0-vgg-16",
            image: ["resources/project/xray/1.png", "resources/project/xray/2.png", "resources/project/xray/3.png", "resources/project/xray/4.png"]
        },
        "Interior Home": {
            namePlate: "Interior Home design using blender",
            category: "3D Blender and Unity",
            project_brief: "A 3D interior design project that utilizes Blender for realistic home modeling, rendering, and visualization to create aesthetically pleasing living spaces.",
            project_date: "2022",
            project_client: "High-Quality 3D Rendering | Realistic Texturing & Lighting | Architectural Modeling | Virtual Interior Design | Customizable Room Layouts",
            tools: "Python, OpenCV, Dlib",
            project_link: "https://drive.google.com/file/d/1Kk2Pooc30Hc796NccmQ6NEAXWoiPYCC0/view?usp=drivesdk",
            image: ["resources/project/room/1.png", "resources/project/room/2.png", "resources/project/room/3.png", "resources/project/room/4.png"]
        },
        "Retail Price Prediction": {
            namePlate: "Dynamic Retail Price Prediction",
            category: "Machine Learning",
            project_brief: "Implemented a machine learning model to predict optimal retail pricing using sales trends, competitor analysis, and customer purchasing behavior.",
            project_date: "2023",
            project_client: "Retail Price Forecasting | Sales Trend Analysis | Demand Prediction",
            tools: "Python, OpenCV, Dlib",
            project_link: "https://drive.google.com/file/d/1fZIT5W1uh2dqUgycWeziFCR_w9HRVe8R/view?usp=sharing",
            image: ["resources/project/retail/1.png", "resources/project/retail/2.png", "resources/project/retail/3.png", "resources/project/retail/4.png"]
        }
        ,
        "Satellite and Spectral Analysis": {
            namePlate: "Land cover analysis of Satellite image of Dhenkanal",
            category: "Geospectral Analysis",
            project_brief: " A satellite image processing project that classifies land cover types using remote sensing and spectral analysis, aiding environmental monitoring and urban planning.",
            project_date: "2023",
            project_client: "Spectral Image Processing | Land Cover Classification | Change Detection Analysis | Remote Sensing | Geospatial Data Visualization",
            tools: "Python, OpenCV, Dlib",
            project_link: "https://github.com/Sasmita-sahoo-2004/Satellite-land-analysis-of-Dhenkanal-using-ERDAS-Imagine",
            image: ["resources/project/sat/1.png", "resources/project/sat/2.png", "resources/project/sat/3.png", "resources/project/sat/4.png"]
        },
        "Ecommerce": {
            namePlate: "Ecommerce app",
            category: "Mobile App Development",
            project_brief: "A feature-rich e-commerce web application that provides users with a smooth online shopping experience, including secure authentication, product filtering, and a seamless checkout process.",
            project_date: "2023",
            project_client: "User Authentication | Product Search & Filtering | Cart & Checkout System | Order Management | Secure Payment Integration",
            tools: "Python, OpenCV, Dlib",
            project_link: "https://github.com/Sasmita-sahoo-2004/facial-recognition",
            image: ["resources/project/ecom/1.png", "resources/project/ecom/2.png", "resources/project/ecom/3.png", "resources/project/ecom/4.png"]
        },
        "Open Modelica": {
            namePlate: "Open Modelica",
            category: "Simulation of Engineering system",
            project_brief: "A simulation project using OpenModelica to model, analyze, and optimize complex engineering systems, including thermal, mechanical, and electrical components.",
            project_date: "2022",
            project_client: "Mathematical System Modeling | Dynamic Simulation | Multi-Domain Analysis",
            tools: "Python, OpenCV, Dlib",
            project_link: "https://github.com/Sasmita-sahoo-2004/Open-Modelica-project",
            image: ["resources/project/open/1.png", "resources/project/open/2.png", "resources/project/open/3.png", "resources/project/open/4.png"]
        },
        "Facial Recognition": {
            namePlate: "Facial Recognition System",
            category: "Computer Vision and Deep Learning",
            project_brief: " A real-time facial recognition system designed for identity verification, security access, and emotion detection using deep learning and computer vision.",
            project_date: "2024",
            project_client: "Features: Real-time Face Detection | Identity Verification | Emotion Analysis | Dataset Training & Optimization | High Accuracy Recognition",
            tools: "Python, OpenCV, Dlib",
            project_link: "https://cw53z2-3000.csb.app/",
            image: ["resources/project/facial/1.png", "resources/project/facial/2.png", "resources/project/facial/3.png", "resources/project/facial/4.png"]
        }
    };

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            tip.classList.add("view");

            let projectName = card.querySelector(".title").textContent.trim();
            if (projectData[projectName]) {
                portfolioView(projectData[projectName]);
            }
        });
    });
});