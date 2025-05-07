import Image from "next/image";
const Contact = () => {
    return (
        <div className="h-screen bg-white flex justify-center items-center flex-col" id="contact">
            <h1 className="text-primary text-[15rem]">LET&#39;S CHAT <span className="text-secondary">!</span></h1>
            <h5 className="text-secondary flex justify-center text-2xl w-3/4 description-text">
                +91 7559964498
            </h5>
            <h5 className="text-secondary flex justify-center text-2xl w-3/4 description-text">nidashirin@gmail.com</h5>

            <div className="flex w-50 justify-between mt-5">
                <a href="https://www.linkedin.com/in/nida-shirin/" target="_blank">
                    <Image src='/Logos/linkedin.png' alt="linkedin" width="60" height="60"  />
                </a>
                <a href="/Nida_Shirin_Resume.pdf"  target="_blank">
                    <Image width="60" height="60" src="/Logos/file.png" alt="resume" />
                </a>
                <a href="/Nida_Shirin_Resume.pdf"  target="_blank">
                    <Image width="60" height="60" src="/Logos/github.png" alt="github" />
                </a>
            </div>



            <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}

export default Contact;