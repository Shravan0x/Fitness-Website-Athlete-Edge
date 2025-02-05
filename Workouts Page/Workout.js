document.addEventListener("DOMContentLoaded", () => {
   
    const exercises = [
      {
        name: "Squats ",
        image: "https://tse2.mm.bing.net/th?id=OIP.MVr2WPuiPoshnnnzDAqNRAHaD7&pid=Api&P=0&h=220",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: "Deadlifts",
        image: "https://tse4.mm.bing.net/th?id=OIP.YRawD2-Ta4xFCH-XjfVf8wHaE7&pid=Api&P=0&h=220",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: "Bench Press",
        image: "https://stuffoholics.com/wp-content/uploads/2019/03/Dumbbell-Bench-Press-3.jpg",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: "Shoulder Press",
        image: "https://tse1.mm.bing.net/th?id=OIP.9Lww6IsswI_z-KQMe4dyhAHaE8&pid=Api&P=0&h=220",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: "Pull-ups",
        image: "https://tse1.mm.bing.net/th?id=OIP.B6gb8jlCaFxWRNik_QnGegHaEK&pid=Api&P=0&h=220",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: "Lunges",
        image:
          "http://media2.popsugar-assets.com/files/2015/08/25/683/n/1922398/9d0f2828022f72ea_5243721bca9f634a_lungeh2YfAF.xxxlarge_2x/i/Lunge.jpg",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: "Push-ups",
        image: "https://tse4.mm.bing.net/th?id=OIP.Jqy4vSMEG4_foq884y2cxgHaD4&pid=Api&P=0&h=220",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: "Plank ",
        image: "https://tse4.mm.bing.net/th?id=OIP.kr66UaLJZJiEacArEfwVKAHaE7&pid=Api&P=0&h=220",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: "Jump Squats",
        image:
          "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/12/02031718/begini-cara-squat-jump-bisa-melatih-otot-tubuh-halodoc.jpg.webp",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: "Burpees",
        image: "https://tse1.mm.bing.net/th?id=OIP.6UaOV1e8IJZgUTGwIoW7tQHaEK&pid=Api&P=0&h=220",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: " Wall Sit",
        image: "https://tse4.mm.bing.net/th?id=OIP.d69TtkDt3C0E6BHrXi6guwHaEt&pid=Api&P=0&h=220",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: "Triceps Dips ",
        image: "https://tse3.mm.bing.net/th?id=OIP.nwTGhePDdZcHIJ13AA7plAHaFj&pid=Api&P=0&h=220",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: "Jump Rope",
        image: "https://tse4.mm.bing.net/th?id=OIP.ALgtc7r2kfAF-9-Fpw5OfgHaE8&pid=Api&P=0&h=220",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: "High Knees",
        image: "https://tse1.mm.bing.net/th?id=OIP.FHyuRIzM7708C0lWnURVmQHaD4&pid=Api&P=0&h=220",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: "Sprint Intervals",
        image: "https://experiencelife.lifetime.life/wp-content/uploads/2023/05/ja23-uyg-sit-1367872098.jpg",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: "Box Jumps",
        image: "https://i.pinimg.com/originals/5e/14/2f/5e142fce85b3fd4b34963fe7cc3e3251.jpg",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: "Battle Ropes",
        image:
          "https://www.healthxtips.com/wp-content/uploads/2021/06/battle-rope-exercises-for-beginners_2-1280x796.jpg",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: "Mountain Climbers ",
        image: "https://tse1.mm.bing.net/th?id=OIP.lsPDmoYUXzkv6NcyoO9JcgHaEK&pid=Api&P=0&h=220",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: "Adho Mukha Svanasana",
        image: "https://tse3.mm.bing.net/th?id=OIP.CaJvq8yA9I1tObriU16E_wHaEo&pid=Api&P=0&h=220",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: "Balasana",
        image: "https://tse1.mm.bing.net/th?id=OIP.PT7sZAR0QKdWZuDM8ru7UAHaE8&pid=Api&P=0&h=220",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: "Bhujangasana",
        image:
          "https://i0.wp.com/www.theyogihut.org/wp-content/uploads/2021/09/Bhujangasana-scaled.jpg?fit=2560%2C1707&ssl=1",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: "Virabhadrasana II",
        image: "https://tse4.mm.bing.net/th?id=OIP.6J4FYDVdc3000TVf2aOAeQHaGU&pid=Api&P=0&h=220",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: "Vrikshasana",
        image: "https://tse2.mm.bing.net/th?id=OIP.VsYF7UpPhKihB-XnCUtKRQHaIV&pid=Api&P=0&h=220",
        href: "<!-- Path to Workouts Page -->",
      },
      {
        name: "Paschimottanasana",
        image: "https://www.gaia.com/wp-content/uploads/paschimottanasana-seated-forward-bend-1024x576.jpg",
        href: "<!-- Path to Workouts Page -->",
      },
    ]
  
    
    const filterToggles = document.querySelectorAll(".filter-toggle")
    filterToggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const content = toggle.nextElementSibling
        toggle.classList.toggle("active")
        content.classList.toggle("active")
      })
    })
  
    const itemsPerPage = 8
    let currentPage = 1
  
    function displayExercises(page) {
      const exerciseGrid = document.getElementById("exerciseGrid")
      const start = (page - 1) * itemsPerPage
      const end = start + itemsPerPage
      const paginatedExercises = exercises.slice(start, end)
  
      exerciseGrid.innerHTML = ""
  
      paginatedExercises.forEach((exercise) => {
        const card = document.createElement("a")
        card.className = "exercise-card"
        card.href = exercise.href
        card.innerHTML = `
                  <img src="${exercise.image}" alt="${exercise.name}">
                  <h3>${exercise.name}</h3>
              `
        exerciseGrid.appendChild(card)
      })
    }
  
    function updatePagination() {
      const pagination = document.getElementById("pagination")
      const buttons = pagination.getElementsByTagName("button")
  
      for (const button of buttons) {
        button.classList.remove("active")
      }
  
      if (!buttons[currentPage - 1].classList.contains("next")) {
        buttons[currentPage - 1].classList.add("active")
      }
    }
  
    function setupPagination() {
      const pagination = document.getElementById("pagination")
      const pageCount = Math.ceil(exercises.length / itemsPerPage)
  
      pagination.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
          if (e.target.classList.contains("next")) {
            currentPage = currentPage < pageCount ? currentPage + 1 : currentPage
          } else {
            currentPage = Number.parseInt(e.target.textContent)
          }
  
          displayExercises(currentPage)
          updatePagination()
        }
      })
    }
  

    displayExercises(currentPage)
    setupPagination()
  

    const sidebar = document.querySelector(".sidebar")
    const toggleSidebar = document.createElement("button")
    toggleSidebar.classList.add("toggle-sidebar")
    toggleSidebar.innerHTML = '<i class="fas fa-bars"></i>'
    document.body.appendChild(toggleSidebar)
  
    toggleSidebar.addEventListener("click", () => {
      sidebar.classList.toggle("active")
    })
  
    document.addEventListener("click", (e) => {
      if (!sidebar.contains(e.target) && !toggleSidebar.contains(e.target)) {
        sidebar.classList.remove("active")
      }
    })
  

    const getPersonalizedWorkoutBtn = document.getElementById("getPersonalizedWorkout")
    const modal = document.getElementById("workoutModal")
    const closeModal = document.getElementsByClassName("close")[0]
    const personalizedWorkoutDiv = document.getElementById("personalizedWorkout")
  
    getPersonalizedWorkoutBtn.addEventListener("click", generatePersonalizedWorkout)
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none"
    })
  
    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        modal.style.display = "none"
      }
    })
  
    function generatePersonalizedWorkout() {
      const selections = {
        workoutType: getCheckedValues("workout-type"),
        fitnessLevel: getCheckedValues("fitness-level"),
        duration: getCheckedValues("duration"),
        equipment: getCheckedValues("equipment"),
        targetArea: getCheckedValues("target-area"),
      }
  
      let workout = "Based on your selections, here's a personalized workout for you:\n\n"
  
      if (selections.workoutType.includes("strength")) {
        workout += "Strength Training:\n"
        workout += "- 3 sets of 10 Squats\n"
        workout += "- 3 sets of 10 Push-ups\n"
        workout += "- 3 sets of 10 Lunges\n"
      }
  
      if (selections.workoutType.includes("cardio")) {
        workout += "\nCardio:\n"
        workout += "- 20 minutes of Jump Rope\n"
        workout += "- 10 minutes of High Knees\n"
      }
  
      if (selections.workoutType.includes("flexibility")) {
        workout += "\nFlexibility:\n"
        workout += "- 10 minutes of Yoga (including Downward Dog and Child's Pose)\n"
        workout += "- 5 minutes of Static Stretching\n"
      }
  
      if (selections.fitnessLevel.includes("beginner")) {
        workout += "\nNote: Start with lower repetitions and gradually increase as you build strength and endurance.\n"
      }
  
      if (selections.fitnessLevel.includes("advanced")) {
        workout += "\nNote: Consider adding more advanced variations or increasing the intensity of these exercises.\n"
      }
  
      if (selections.duration.includes("short")) {
        workout += "\nThis workout is designed to be completed in about 15-20 minutes.\n"
      } else if (selections.duration.includes("long")) {
        workout += "\nExtend each exercise duration or add more sets to make this a longer workout session.\n"
      }
  
      if (selections.equipment.includes("dumbbells")) {
        workout += "\nIncorporate dumbbells into your strength exercises for added resistance.\n"
      }
  
      if (selections.targetArea.includes("upper-body")) {
        workout += "\nFocus on the push-ups and add some dumbbell rows for a comprehensive upper body workout.\n"
      } else if (selections.targetArea.includes("lower-body")) {
        workout += "\nPay extra attention to the squats and lunges, and consider adding some calf raises.\n"
      }
  
      personalizedWorkoutDiv.innerHTML = workout.replace(/\n/g, "<br>")
      modal.style.display = "block"
    }
  
    function getCheckedValues(name) {
      return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map((el) => el.value)
    }
  })
  
  
