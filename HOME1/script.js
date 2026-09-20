// ======================================================
// GET HTML ELEMENTS
// ======================================================

// Get Sign Up form
const signupForm =
    document.getElementById("signupForm");

// Get Sign In form
const loginForm =
    document.getElementById("loginForm");


// ======================================================
// SHOW SIGN UP
// ======================================================

function showSignup() {

    // Hide Sign In
    document
        .getElementById("loginBox")
        .classList.add("hidden");


    // Show Sign Up
    document
        .getElementById("signupBox")
        .classList.remove("hidden");

}


// ======================================================
// SHOW SIGN IN
// ======================================================

function showLogin() {

    // Hide Sign Up
    document
        .getElementById("signupBox")
        .classList.add("hidden");


    // Show Sign In
    document
        .getElementById("loginBox")
        .classList.remove("hidden");

}


// ======================================================
// SIGN UP
// ======================================================

signupForm.addEventListener(
    "submit",

    async function(event) {

        // Stop page from refreshing
        event.preventDefault();


        // ==================================================
        // GET FORM VALUES
        // ==================================================

        const username =
            document
                .getElementById("signupUsername")
                .value
                .trim();


        const email =
            document
                .getElementById("signupEmail")
                .value
                .trim();


        const password =
            document
                .getElementById("signupPassword")
                .value;


        const confirmPassword =
            document
                .getElementById("confirmPassword")
                .value;


        // ==================================================
        // CHECK PASSWORD
        // ==================================================

        if (password !== confirmPassword) {

            alert(
                "Passwords do not match!"
            );

            return;

        }


        // ==================================================
        // SEND DATA TO SERVER
        // ==================================================

        try {

            const response =
                await fetch(
                    "http://localhost:3000/api/signup",
                    {

                        method: "POST",

                        headers: {

                            "Content-Type":
                                "application/json"

                        },

                        body: JSON.stringify({

                            username: username,

                            email: email,

                            password: password

                        })

                    }
                );


            // Get server response
            const data =
                await response.json();


            // ==================================================
            // CHECK RESPONSE
            // ==================================================

            if (response.ok) {

                alert(
                    data.message
                );


                // Clear form
                signupForm.reset();


                // Go back to Sign In
                showLogin();

            }

            else {

                // Show error from server
                alert(
                    data.message
                );

            }

        }

        catch (error) {

            console.error(
                "SIGN UP ERROR:",
                error
            );

            alert(
                "Cannot connect to the server."
            );

        }

    }
);


// ======================================================
// SIGN IN
// ======================================================

loginForm.addEventListener(
    "submit",

    async function(event) {

        // Stop page refresh
        event.preventDefault();


        // Get email
        const email =
            document
                .getElementById("loginEmail")
                .value
                .trim();


        // Get password
        const password =
            document
                .getElementById("loginPassword")
                .value;


        // ==================================================
        // SEND LOGIN REQUEST
        // ==================================================

        try {

            const response =
                await fetch(
                    "http://localhost:3000/api/login",
                    {

                        method: "POST",

                        headers: {

                            "Content-Type":
                                "application/json"

                        },

                        body: JSON.stringify({

                            email: email,

                            password: password

                        })

                    }
                );


            // Get response
            const data =
                await response.json();


            // ==================================================
            // CHECK LOGIN
            // ==================================================

            if (response.ok) {

                alert(
                    "Login successful! Welcome "
                    + data.user.username
                );


                // Display user information
                console.log(
                    data.user
                );

            }

            else {

                alert(
                    data.message
                );

            }

        }

        catch (error) {

            console.error(
                "LOGIN ERROR:",
                error
            );

            alert(
                "Cannot connect to the server."
            );

        }

    }
);
