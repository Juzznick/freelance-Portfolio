const Contact = () => {
    return (
        <div className="h-screen bg-white flex justify-center items-center flex-col" id="contact">
            <h1 className="text-primary text-[15rem] reveal">CONTACT ME</h1>
            <h5 className="text-primary flex justify-center text-2xl w-3/4 description-text">
                +91 7559964498
            </h5>
            <h5 className="text-primary flex justify-center text-2xl w-3/4 description-text">nidashirin@gmail.com</h5>

            <div className="flex w-50 justify-between mt-5">
                <a href="/Nida_Shirin_Resume.pdf">
                    <img width="50" height="50" src="/Logos/linkedin.png" alt="linkedin" />
                </a>
                <a href="/Nida_Shirin_Resume.pdf">
                    <img width="50" height="50" src="/Logos/file.png" alt="resume" />
                </a>
                <a href="/Nida_Shirin_Resume.pdf">
                    <img width="50" height="50" src="/Logos/github.png" alt="github" />
                </a>
            </div>



            <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}

export default Contact;