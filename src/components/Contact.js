const Contact = () => {
    return (
        <div className="contact-container p-4 md:p-8 lg:p-12">
            <h1 className="font-bold text-3xl p-4 mb-8 text-center">Contact Us</h1>
            <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2">Name</label>
                    <input type="text" className="w-full border border-gray-300 p-4 rounded-lg bg-pink-50" placeholder="Your name..." />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2">Email</label>
                    <input type="email" className="w-full border border-gray-300 p-4 rounded-lg bg-pink-50" placeholder="Your email..." />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2">Phone</label>
                    <input type="tel" className="w-full border border-gray-300 p-4 rounded-lg bg-pink-50" placeholder="Your phone number..." />
                </div>
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2">Message</label>
                    <textarea className="w-full border border-gray-300 p-4 rounded-lg bg-pink-50" rows="5" placeholder="Your message..."></textarea>
                </div>
                <button type="submit" className="w-full border border-black p-4 rounded-lg bg-gray-300 hover:bg-gray-400">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
