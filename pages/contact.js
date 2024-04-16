import { Phone, House, Email as EmailIcon } from "@mui/icons-material";
import { useEffect } from "react";
import styles from "../styles/Contact.module.css";

require('dotenv').config();

export default function Contact() {

    var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

    function sendEmail(
            message=document.getElementById("message").value,
            email=document.getElementById("email").value,
            name=document.getElementById("name").value
        ) {
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "r.bryenton2003@gmail.com",
            Password : process.env.EMAIL_PASS,
            To : 'ashaldeburgh@gmail.com',
            From : 'r.bryenton2003@gmail.com',
            Subject : "New website message from: " + name + " (" + email + ")",
            Body : message
        }).then(
            message => alert(message)
        )
    }

    var currentDay = new Date().getDay();
    currentDay = currentDay.toString();
    console.log(currentDay);

    return(
        <div className="py-2 px-2 tablet:px-8 flex flex-col tablet:flex-row">

            {/* LEFT SIDE */}
            <div className="w-full tablet:w-1/2 flex justify-center items-center">
            <div className="w-11/12 md:w-96 md:max-w-full mx-auto">
                <div className="p-6 border border-gray-300 sm:rounded-md shadow-md">
                    <form method="POST">
                    <label className="block mb-6">
                        <span className="text-gray-700">Your name</span>
                        <input
                        type="text"
                        id='name'
                        name="name"
                        className="
                            block
                            w-full
                            mt-1
                            border-gray-300
                            rounded-md
                            shadow-sm
                            focus:border-indigo-300
                            focus:ring
                            focus:ring-indigo-200
                            focus:ring-opacity-50
                        "
                        placeholder="Name Lastname"
                        />
                    </label>
                    <label className="block mb-6">
                        <span className="text-gray-700">Email address</span>
                        <input
                        name="email"
                        id='email'
                        type="email"
                        className="
                            block
                            w-full
                            mt-1
                            border-gray-300
                            rounded-md
                            shadow-sm
                            focus:border-indigo-300
                            focus:ring
                            focus:ring-indigo-200
                            focus:ring-opacity-50
                        "
                        placeholder="example@example.com"
                        required
                        />
                    </label>
                    <label className="block mb-6">
                        <span className="text-gray-700">Message</span>
                        <textarea
                        name="message"
                        id='message'
                        className="
                            block
                            w-full
                            mt-1
                            border-gray-300
                            rounded-md
                            shadow-sm
                            focus:border-indigo-300
                            focus:ring
                            focus:ring-indigo-200
                            focus:ring-opacity-50
                        "
                        rows="3"
                        placeholder="Tell us what you're thinking about..."
                        ></textarea>
                    </label>
                    <div className="mb-6">
                        <span className={styles.highlight}>
                            <button
                                type="submit"
                                onClick={() => {
                                    //take message text area 
                                    const message = document.getElementById("message").value
                                    //get users email
                                    const email = document.getElementById("email").value
                                    //get users name
                                    const name = document.getElementById("name").value
                                    //send email
                                    sendEmail(message, email, name);
                                }}
                            >
                                <div className='px-16 text-lg tablet:text-xl text-white mb-3'>
                                    Send
                                </div>
                            </button>
                        </span>
                        <span className={styles.highlight}>
                            <button
                                type="reset"
                            >
                                <div className='px-16 text-lg tablet:text-xl text-white'>
                                    Reset
                                </div>
                            </button>
                        </span>
                        <span className={styles.highlight}>
                            <label htmlFor="openhours-modal" className='px-8 text-lg tablet:text-xl text-white'>
                                See open hours
                            </label>
                        </span>
                    </div>
                    </form>
                </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full mt-8 tablet:mt-0 tablet:w-1/2 flex flex-col justify-center items-center">
                <div className="w-5/6 flex flex-col desktop:flex-row justify-center items-center mb-8">
                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <House />
                        <a className="hover:text-red-300 mb-2" href="https://www.google.com/maps/dir//Ash+Smoked+Fishes+Crag+Path+Aldeburgh+IP15+5BT+Royaume-Uni/@52.1550295,1.603406,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x47da285bc7c07461:0x9cf6c78b563ef503">
                            <p>
                                Hut 8 Crag Path
                            </p>
                            <p>
                                IP15 5BP, Aldeburgh
                            </p>
                        </a>
                    </div>
                    <div className="w-1/2 flex flex-col justify-center items-center mb-2">
                        <EmailIcon className="mb-3" />
                        <a href="mailto:ashaldeburgh@gmail.com" className="hover:text-red-300">
                            ashaldeburgh@gmail.com
                        </a>
                    </div>
                    <div className="w-1/2 flex flex-col justify-center items-center mb-2">
                        <Phone className="mb-3" />
                        <p>01728448700</p>
                    </div>
                </div>
                <iframe
                    title="map"
                    className="rounded-lg border border-gray-200 shadow-md h-96 w-5/6 desktop:w-5/6 tablet:w-1/2"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166209.66181051813!2d1.1007538459488793!3d49.3895008187527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47da285bc7c07461%3A0x9cf6c78b563ef503!2sAsh%20Smoked%20Fishes!5e0!3m2!1sen!2sfr!4v1657896459069!5m2!1sen!2sfr"
                    allowFullScreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                />
            </div>
            {/*  */}
            <input type="checkbox" id="openhours-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <section className="openinghours">
                        <div className="openinghourscontent section">
                            <div className="header">
                                <h2 className="font-bold text-2xl text-center w-full pb-8">Opening hours</h2>

                            </div>
                            <table className="w-full text-center">
                                <tr className={currentDay === '1'?"text-green-500":""}>
                                    <td>Monday</td>
                                    <td>08:00</td>
                                    <td>-</td>
                                    <td>17:30</td>
                                </tr>
                                <tr  className={currentDay === '2'?"text-green-500":""}>
                                    <td>Tuesday</td>
                                    <td>08:00</td>
                                    <td>-</td>
                                    <td>17:30</td>
                                </tr>
                                <tr  className={currentDay === '3'?"text-green-500":""}>
                                    <td>Wednesday</td>
                                    <td>08:00</td>
                                    <td>-</td>
                                    <td>17:30</td>
                                </tr>
                                <tr  className={currentDay === '4'?"text-green-500":""}>
                                    <td>Thursday</td>
                                    <td>08:00</td>
                                    <td>-</td>
                                    <td>17:30</td>
                                </tr>
                                <tr  className={currentDay === '5'?"text-green-500":""}>
                                    <td>Friday</td>
                                    <td>08:00</td>
                                    <td>-</td>
                                    <td>17:30</td>
                                </tr>
                                <tr  className={currentDay === '6'?"text-green-500":""}>
                                    <td>Saturday</td>
                                    <td>08:00</td>
                                    <td>-</td>
                                    <td>17:30</td>
                                </tr>
                                <tr  className={currentDay === '7'?"text-green-500":""}>
                                    <td>Sunday</td>
                                    <td>08:00</td>
                                    <td>-</td>
                                    <td>17:30</td>
                                </tr>
                            </table>
                        </div>
                    </section>
                    <div className="modal-action">
                    <label htmlFor="openhours-modal" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </div>
    )
}