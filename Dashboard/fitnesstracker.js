document.addEventListener("DOMContentLoaded", () => {
    // Navigation
    const navButtons = document.querySelectorAll(".nav-btn")
    const sections = document.querySelectorAll(".dashboard-section")
  
    navButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-target")
        sections.forEach((section) => {
          section.style.display = section.id === target ? "block" : "none"
        })
        navButtons.forEach((btn) => btn.classList.remove("active"))
        button.classList.add("active")
      })
    })
  
    // Profile
    const profileForm = document.getElementById("profile-form")
    const bmiDisplay = document.getElementById("bmi-display")
  
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const name = document.getElementById("name").value
      const age = Number.parseInt(document.getElementById("age").value)
      const weight = Number.parseFloat(document.getElementById("weight").value)
      const height = Number.parseInt(document.getElementById("height").value)
      const goal = document.getElementById("goal").value
  
      const bmi = calculateBMI(weight, height)
      const profile = { name, age, weight, height, goal, bmi }
      localStorage.setItem("userProfile", JSON.stringify(profile))
  
      displayBMI(bmi)
      showNotification("Profile updated successfully!")
    })
  
    function calculateBMI(weight, height) {
      return (weight / (height / 100) ** 2).toFixed(1)
    }
  
    function displayBMI(bmi) {
      bmiDisplay.textContent = `Your BMI: ${bmi}`
      bmiDisplay.style.fontWeight = "bold"
    }
  
    // Activity Tracker
    const activityForm = document.getElementById("activity-form")
    const activityLog = document.getElementById("activity-log")
  
    activityForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const steps = Number.parseInt(document.getElementById("steps").value)
      const caloriesBurned = Number.parseInt(document.getElementById("calories-burned").value)
      const date = new Date().toLocaleDateString()
  
      const activity = { date, steps, caloriesBurned }
      const activities = JSON.parse(localStorage.getItem("activities")) || []
      activities.push(activity)
      localStorage.setItem("activities", JSON.stringify(activities))
  
      displayActivityLog(activities)
      showNotification("Activity logged successfully!")
      updateProgressChart()
    })
  
    function displayActivityLog(activities) {
      activityLog.innerHTML = activities
        .slice(-5)
        .reverse()
        .map((activity) => `<p>${activity.date}: ${activity.steps} steps, ${activity.caloriesBurned} calories burned</p>`)
        .join("")
    }
  
    // Workout Log
    const workoutForm = document.getElementById("workout-form")
    const workoutLog = document.getElementById("workout-log")
  
    workoutForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const type = document.getElementById("workout-type").value
      const duration = Number.parseInt(document.getElementById("duration").value)
      const date = new Date().toLocaleDateString()
  
      const workout = { date, type, duration }
      const workouts = JSON.parse(localStorage.getItem("workouts")) || []
      workouts.push(workout)
      localStorage.setItem("workouts", JSON.stringify(workouts))
  
      displayWorkoutLog(workouts)
      showNotification("Workout logged successfully!")
    })
  
    function displayWorkoutLog(workouts) {
      workoutLog.innerHTML = workouts
        .slice(-5)
        .reverse()
        .map((workout) => `<p>${workout.date}: ${workout.type} for ${workout.duration} minutes</p>`)
        .join("")
    }
  
    // Progress Tracking
    const ctx = document.getElementById("progress-chart").getContext("2d")
    let progressChart
  
    function updateProgressChart() {
      const activities = JSON.parse(localStorage.getItem("activities")) || []
      const labels = activities.slice(-7).map((activity) => activity.date)
      const stepsData = activities.slice(-7).map((activity) => activity.steps)
  
      if (progressChart) {
        progressChart.destroy()
      }
  
      // Import Chart.js library.  This needs to be included in your HTML file as a `<script>` tag.
      // For example: <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      progressChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Steps",
              data: stepsData,
              borderColor: "rgb(249, 37, 36)",
              backgroundColor: "rgba(249, 37, 36, 0.1)",
              tension: 0.1,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Steps",
              },
            },
            x: {
              title: {
                display: true,
                text: "Date",
              },
            },
          },
        },
      })
    }
  
    // Goals
    const goalForm = document.getElementById("goal-form")
    const goalDisplay = document.getElementById("goal-display")
  
    goalForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const type = document.getElementById("goal-type").value
      const value = Number.parseInt(document.getElementById("goal-value").value)
  
      const goal = { type, value }
      localStorage.setItem("currentGoal", JSON.stringify(goal))
  
      displayGoal(goal)
      showNotification("Goal set successfully!")
    })
  
    function displayGoal(goal) {
      goalDisplay.textContent = `Current Goal: ${goal.value} ${goal.type}`
      goalDisplay.style.fontWeight = "bold"
    }
  
    // Health Tips
    const tips = [
      "Drink at least 8 glasses of water daily!",
      "Aim for 30 minutes of exercise 5 days a week.",
      "Include a variety of fruits and vegetables in your diet.",
      "Get 7-9 hours of sleep each night for optimal health.",
      "Take short breaks and stretch regularly if you sit for long periods.",
      "Practice mindfulness or meditation to reduce stress.",
      "Try to incorporate strength training exercises at least twice a week.",
      "Limit processed foods and choose whole foods instead.",
      "Stay consistent with your fitness routine, even if it's just a short daily walk.",
      "Stay hydrated before, during, and after workouts.",
      "Listen to your body and give yourself rest days when needed.",
    ]
  
    function displayRandomTip() {
      const tipContent = document.getElementById("tip-content")
      const randomTip = tips[Math.floor(Math.random() * tips.length)]
      tipContent.textContent = randomTip
    }
  
    // Notification
    function showNotification(message) {
      const notification = document.createElement("div")
      notification.textContent = message
      notification.style.position = "fixed"
      notification.style.top = "20px"
      notification.style.right = "20px"
      notification.style.backgroundColor = "var(--primary-color)"
      notification.style.color = "var(--white)"
      notification.style.padding = "10px 20px"
      notification.style.borderRadius = "4px"
      notification.style.zIndex = "1000"
      document.body.appendChild(notification)
  
      setTimeout(() => {
        notification.style.opacity = "0"
        notification.style.transition = "opacity 0.5s ease"
        setTimeout(() => {
          document.body.removeChild(notification)
        }, 500)
      }, 3000)
    }
  
    // Initialize dashboard
    sections.forEach((section) => (section.style.display = "none"))
    document.getElementById("profile").style.display = "block"
    navButtons[0].classList.add("active")
  
    const storedProfile = JSON.parse(localStorage.getItem("userProfile"))
    if (storedProfile) {
      document.getElementById("name").value = storedProfile.name
      document.getElementById("age").value = storedProfile.age
      document.getElementById("weight").value = storedProfile.weight
      document.getElementById("height").value = storedProfile.height
      document.getElementById("goal").value = storedProfile.goal
      displayBMI(storedProfile.bmi)
    }
  
    const activities = JSON.parse(localStorage.getItem("activities")) || []
    displayActivityLog(activities)
  
    const workouts = JSON.parse(localStorage.getItem("workouts")) || []
    displayWorkoutLog(workouts)
  
    updateProgressChart()
  
    const currentGoal = JSON.parse(localStorage.getItem("currentGoal"))
    if (currentGoal) {
      displayGoal(currentGoal)
    }
  
    displayRandomTip()
  
    // Update progress chart and tip daily
    setInterval(updateProgressChart, 86400000) // 24 hours
    setInterval(displayRandomTip, 86400000) // 24 hours
  })
  
  