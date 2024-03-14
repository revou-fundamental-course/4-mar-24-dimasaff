function calculate () {
   // deklarasi bmi id
   var weight = parseFloat(document.getElementById('Weight').value)
   var height = parseFloat(document.getElementById('Height').value)
   var age = parseInt(document.getElementById('Age').value)
   
   //array penyakit
   var disease = ["Diabetes", "Hipertensi", "Sakit Jantung", "Osteoarthritis"];
   
   // penghitungan bmi
   var bmi = weight / (height/100)**2;
   bmi = bmi.toFixed(2);
   document.getElementById('result').innerHTML = bmi;

   //reset button
   function clearResult(){
      document.getElementById("reset-button").value = ''
    }

   // keterangan bmi
   if (bmi > 0 && bmi <= 18.5){
      document.getElementById('category').innerHTML = 'Kekurangan berat badan';
   } else if (bmi > 18.5 && bmi < 24.9){
      document.getElementById('category').innerHTML = 'Normal (Badan Ideal)';
   } else if (bmi > 25.0 && bmi < 29.9){
      document.getElementById('category').innerHTML = 'Kelebihan Berat Badan';
   } else if (bmi > 30.0){
      document.getElementById('category').innerHTML = 'Kegemukan/Obesitas';
   } else {
      document.getElementById('category').innerHTML = 'Masukkan angka yang sesuai';
   }

   //pemberitahuan bmi
   if (bmi > 0 && bmi <= 18.5){
      document.getElementById('announce').innerHTML = 'Anda Kekurangan Berat Badan';
   } else if (bmi > 18.5 && bmi < 24.9){
      document.getElementById('announce').innerHTML = 'Anda Memiliki Badan Ideal';
   } else if (bmi > 25.0 && bmi < 29.9){
      document.getElementById('announce').innerHTML = 'Anda Kelebihan Berat Badan';
   } else if (bmi > 30.0){
      document.getElementById('announce').innerHTML = 'Anda Mengalami Kegemukan/Obesitas';
   } else {
      document.getElementById('announce').innerHTML = 'Masukkan angka yang sesuai';
   }

   //tampil usia
   if (bmi > 0 && bmi <= 18.5){
      document.getElementById('age-show').innerHTML = 'Usia Anda ' + age + ' Tahun';
   } else if (bmi > 18.5 && bmi < 24.9){
      document.getElementById('age-show').innerHTML = 'Usia Anda ' + age + ' Tahun';
   } else if (bmi > 25.0 && bmi < 29.9){
      document.getElementById('age-show').innerHTML = 'Usia Anda ' + age + ' Tahun';
   } else if (bmi > 30.0){
      document.getElementById('age-show').innerHTML = 'Usia Anda ' + age + ' Tahun';
   } else {
      document.getElementById('age-show').innerHTML = 'Usia Anda ' + age + ' Tahun';
   }

   // keterangan hasil bmi
   if (bmi > 0 && bmi <= 18.5){
      document.getElementById('result-all').innerHTML = 'BMI Anda ' + bmi;
   } else if (bmi > 18.5 && bmi < 24.9){
      document.getElementById('result-all').innerHTML = 'BMI Anda ' + bmi;
   } else if (bmi > 25.0 && bmi < 29.9){
      document.getElementById('result-all').innerHTML = 'BMI Anda ' + bmi;
   } else if (bmi > 30.0){
      document.getElementById('result-all').innerHTML = 'BMI Anda ' + bmi;
   } else {
      document.getElementById('result-all').innerHTML = 'BMI Anda ' + bmi;
   }

   // keterangan penanganan hasil bmi
   if (bmi > 0 && bmi <= 18.5){
      document.getElementById('solution').innerHTML = 'Anda berada dalam kategori kekurangan berat badan, disarankan lakukan konsultasi dengan dokter ataupun ahli gizi yang terpercaya.';
      solution.style.color = "#FFD23F";
   } else if (bmi > 18.5 && bmi < 24.9){
      document.getElementById('solution').innerHTML = 'Anda berada dalam kategori berat badan ideal, tetap lanjutkan pola makan dan hidup sehat.';
      solution.style.color = "#D2DE32";
   } else if (bmi > 25.0 && bmi < 29.9){
      document.getElementById('solution').innerHTML = 'Anda berada dalam kategori berat badan berlebih, disarankan untuk mengatur kalori makanan yang dikonsumsi dan berolahraga.';
      solution.style.color = "#FFA447";
   } else if (bmi > 30.0){
      document.getElementById('solution').innerHTML = 'Anda berada dalam kategori obesitas, diharapkan segera menghubungi dokter maupun ahli gizi, serta terapkan pola hidup sehat.';
      solution.style.color = "#FF204E";
   } else {
      document.getElementById('solution').innerHTML = 'Masukkan angka yang sesuai';
   }
}