import React from "react";
import styles from './Loginteacher.module.css';
import SocialLoginButton from './SocialLoginButton';
import imageloginteacher from './Plan de travail 1 1.png'
const socialLoginButtons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d63e7923a38063e969e9070c06bbfc5b5e453eeacb1f26cbf2553a26c56a104?apiKey=875c657f39b24f02b57f3f224a6dff5b&&apiKey=875c657f39b24f02b57f3f224a6dff5b", alt: "Facebook login" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ed7181d41faa2d3acdc172df44ced1ee099536383b7168b2812bda7e17f5f13?apiKey=875c657f39b24f02b57f3f224a6dff5b&&apiKey=875c657f39b24f02b57f3f224a6dff5b", alt: "Google login" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/28fdc2d5d4fa3fc66135a74ec4a33028751a1a535c2bef8229c12283f527b97f?apiKey=875c657f39b24f02b57f3f224a6dff5b&&apiKey=875c657f39b24f02b57f3f224a6dff5b", alt: "Apple login" }
];

function Loginteacher() {
    return (
        <main className={styles.loginContainer}>
            <section className={styles.loginContent}>
                <div className={styles.loginCard}>
                    <div className={styles.logoContainer}>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/73867cab63437c48df0f71fa6d7bd8050ff2a302aef007bf132fed439d456c74?apiKey=875c657f39b24f02b57f3f224a6dff5b&&apiKey=875c657f39b24f02b57f3f224a6dff5b" className={styles.logo} alt="Company logo" />
                        <form className={styles.formContainer}>
                            <p className={styles.welcomeText}>Welcome back !!!</p>
                            <h1 className={styles.loginTitle}>Log In</h1>
                            <label htmlFor="email" className={styles.inputLabel}>Email</label>
                            <input id="email" type="email" className={styles.inputField} placeholder="login@gmail.com" />
                            <div className={styles.passwordContainer}>
                                <label htmlFor="password" className={styles.passwordLabel}>Password</label>
                                <a href="#" className={styles.forgotPassword}>Forgot Password ?</a>
                            </div>
                            <div className={styles.passwordField}>
                                <input id="password" type="password" placeholder="**************" />
                            </div>
                            <button type="submit" className={styles.loginButton}>
                                <span>LOGIN</span>
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/341a431dc0c3386fbe612a883c480c68b40820449b2d2d831a927c6e1b3772de?apiKey=875c657f39b24f02b57f3f224a6dff5b&&apiKey=875c657f39b24f02b57f3f224a6dff5b" className={styles.loginIcon} alt="" />
                            </button>
                            <p className={styles.alternativeLogin}>or continue with</p>
                            <div className={styles.socialLoginContainer}>
                                {socialLoginButtons.map((button, index) => (
                                    <SocialLoginButton key={index} src={button.src} alt={button.alt} />
                                ))}
                            </div>
                            <div className={styles.signupPrompt}>
                                <p className={styles.signupText}>Don't have an account yet?</p>
                                <a href="#" className={styles.signupLink}>Sign up for free</a>
                            </div>
                        </form>
                    </div>
                    <div className={styles.imageContainer}>
                        <img loading="lazy" src={imageloginteacher} className={styles.heroImage} alt="Login hero image" />

                    </div>
                </div>
            </section>
        </main>
    );
}

export default Loginteacher;