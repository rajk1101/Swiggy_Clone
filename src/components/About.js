import UserClass from "./UserClass.js";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props)
        console.log("Parent Constructor")
    }
    componentDidMount() {
        console.log("Parent ComponentDidMount")
    }
    componentWillUnmount() {
        console.log("component will unmount")
    }
    render() {
        return (
            <>
                {console.log("parent return statement")}
                <div className="about-container p-4 md:p-8 lg:p-12">
                    <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                        <p className="text-lg">Our mission is to provide the best services and products to our customers. We strive to achieve excellence in every aspect of our business and ensure customer satisfaction.</p>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
                        <p className="text-lg">We have a diverse team of professionals who are experts in their respective fields. Our team's dedication and hard work are the backbone of our success.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {/* <UserClass name={"Satinder (Class)"} location={"Pune"} /> */}
                            {/* <UserClass name={"Rajkamal (Function)"} location={"Ludhiana"} /> */}
                            {/* Add more team members here */}
                        </div>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
                        <p className="text-lg">Feel free to reach out to us for any queries or support. You can contact us via email or phone.</p>
                        <ul className="list-disc list-inside pl-4">
                            <li>Email: contact@ourcompany.com</li>
                            <li>Phone: +123-456-7890</li>
                            <li>Address: 1234, Our Street, Our City, Our Country</li>
                        </ul>
                    </section>
                </div>
            </>
        )
    }
}

export default About;
