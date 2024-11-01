var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page rerload
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contentedidtable=\"true\">".concat(name, "</span</p>\n    <p><b>Email:</b><span contentedidtable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contentedidtable=\"true\">").concat(phone, "</span></p>\n    \n    <h3>Education</h3>\n    <p contentedidtable=\"true\">").concat(education, "</P>\n\n    <h3>Experience</h3>\n    <p contentedidtable=\"true\">").concat(experience, "</P>\n\n    <h3>Skills</h3>\n    <p contentedidtable=\"true\">").concat(skills, "</P>\n    ");
    //display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
