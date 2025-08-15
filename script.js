const marketShare =[
    {language: "javascript", share:20},
    {language:"Python", share:18},
    {language:"java",share:15},
    {language:"C#",share:12},
     { language: "C++", share: 10 },
    { language: "TypeScript", share: 8 },
    { language: "Others", share: 17 }
];
// Salary Data
const salaries = [
    { language: "JavaScript", salary: 95000 },
    { language: "Python", salary: 110000 },
    { language: "Java", salary: 102000 },
    { language: "C#", salary: 98000 },
    { language: "C++", salary: 105000 },
    { language: "TypeScript", salary: 97000 }
];

// Popularity Trends
const popularityTrends = {
    years: ["2020", "2021", "2022", "2023", "2024", "2025"],
    JavaScript: [72, 75, 77, 78, 79, 80],
    Python: [68, 71, 73, 75, 78, 81],
    Java: [60, 59, 58, 57, 55, 54]
};

new Chart(document.getElementById('marketShareChart'), {
    type: 'doughnut',
    data: {
        labels: marketShare.map(d => d.language),
        datasets: [{
            data: marketShare.map(d => d.share),
            backgroundColor: ["#f39c12", "#27ae60", "#2980b9", "#8e44ad", "#e74c3c", "#16a085", "#7f8c8d"]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => `${context.label}: ${context.parsed}%`
                }
            }
        }
    }
});
// Salary Chart
new Chart(document.getElementById('salaryChart'), {
    type: 'bar',
    data: {
        labels: salaries.map(d => d.language),
        datasets: [{
            label: "Average Salary",
            data: salaries.map(d => d.salary),
            backgroundColor: "#4CAF50"
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => `$${context.parsed.toLocaleString()}`
                }
            }
        },
        scales: {
            y: { beginAtZero: false }
        }
    }
});
// Popularity Trends Chart
new Chart(document.getElementById('popularityChart'), {
    type: 'line',
    data: {
        labels: popularityTrends.years,
        datasets: [
            {
                label: "JavaScript",
                data: popularityTrends.JavaScript,
                borderColor: "#f39c12",
                fill: false
            },
            {
                label: "Python",
                data: popularityTrends.Python,
                borderColor: "#27ae60",
                fill: false
            },
            {
                label: "Java",
                data: popularityTrends.Java,
                borderColor: "#2980b9",
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => `${context.parsed.y}%`
                }
            }
        },
        scales: {
            y: { beginAtZero: true, max: 100 }
        }
    }
});
// Dark/Light Mode Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});