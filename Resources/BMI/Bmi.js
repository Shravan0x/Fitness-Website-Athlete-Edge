
    document.getElementById('bmiForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const height = parseFloat(document.getElementById('height').value) / 100;
      const weight = parseFloat(document.getElementById('weight').value);
      const bmi = (weight / (height * height)).toFixed(2);

      const bmiResult = document.getElementById('bmiResult');
      const bmiTips = document.getElementById('bmiTips');

      bmiResult.textContent = `Your BMI is ${bmi}`;

      if (bmi < 18.5) {
        bmiTips.textContent = "You are underweight. Consider a balanced diet with sufficient calories.";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiTips.textContent = "You have a normal weight. Keep up the good work with a balanced diet and exercise.";
      } else if (bmi >= 25 && bmi < 29.9) {
        bmiTips.textContent = "You are overweight. Incorporate regular exercise and monitor your diet.";
      } else {
        bmiTips.textContent = "You are obese. Seek advice from a nutritionist and prioritize physical activity.";
      }
    });
