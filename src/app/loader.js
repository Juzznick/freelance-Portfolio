const Loader = () => {
    return(
        <div className="h-screen bg-white w-screen flex justify-center items-center">
            <video src="/cute-animation.webm" autoPlay loop muted />
        </div>
    );
}
export default Loader;