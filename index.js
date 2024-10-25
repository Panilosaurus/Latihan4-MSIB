const button = document.getElementById("btn-edit")
const formulir = document.getElementById("form-edit")
let data = JSON.parse(localStorage.getItem('profileData')) || {};

const profileName = document.getElementById("profile-name");
const profileRole = document.getElementById("profile-role");
const profileAvailability = document.getElementById("profile-availability");
const profileAge = document.getElementById("profile-age");
const profileLoc = document.getElementById("profile-loc");
const profileExp = document.getElementById("profile-exp");
const profileEmail = document.getElementById("profile-email");

function loadProfileData() {
    if (data) {
        profileName.innerText = data.name || "Nama Anda";
        profileRole.innerText = data.role || "Front End Designer";
        profileAvailability.innerText = data.availability || "Full Time";
        profileAge.innerText = data.age || "17";
        profileLoc.innerText = data.location || "Jakarta, Indonesia";
        profileExp.innerText = data.experience || "2";
        profileEmail.innerText = data.email || "Developer@gmail.com";
    }
}

button.addEventListener('click', function showDiv() {
    formulir.style.display = 'block';

    const name = document.getElementById("name");
    const role = document.getElementById("role");
    const availability = document.getElementById("availability");
    const age = document.getElementById("age");
    const location = document.getElementById("location");
    const experience = document.getElementById("experience");
    const email = document.getElementById("email");

    // Mengisi input form dengan data dari localStorage atau profil yang sudah ada
    name.value = data.name || profileName.innerText;
    role.value = data.role || profileRole.innerText;
    availability.value = data.availability || profileAvailability.innerText;
    age.value = data.age || profileAge.innerText;
    location.value = data.location || profileLoc.innerText;
    experience.value = data.experience || profileExp.innerText;
    email.value = data.email || profileEmail.innerText;
});

const submit = document.getElementById("btn-submit");
submit.addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah halaman di-refresh

    // Ambil data dari input form
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const availability = document.getElementById("availability").value;
    const age = document.getElementById("age").value;
    const location = document.getElementById("location").value;
    const experience = document.getElementById("experience").value;
    const email = document.getElementById("email").value;

    // Simpan data ke dalam objek
    data = {
        name,
        role,
        availability,
        age,
        location,
        experience,
        email
    };

    // Simpan objek data ke localStorage
    localStorage.setItem('profileData', JSON.stringify(data));

    // Perbarui tampilan profil
    loadProfileData();

    // Sembunyikan form setelah submit
    formulir.style.display = 'none';
});

// Panggil fungsi untuk memuat data saat halaman dimuat
loadProfileData();