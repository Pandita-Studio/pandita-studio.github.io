import { useState, useMemo, useRef } from "react";

function Label(props) {
    return (
        <label className="tracking-widest" htmlFor="name">{props.children}</label>
    );
}

function Input({ type, name, ...rest }) {
    return (
        <input
            className="border-2 border-gray-300 outline-pink-500 hover:border-pink-500 hover:text-pink-500 focus:text-pink-500 transition-colors duration-300 rounded px-2 py-1 disabled:outline-0 disabled:hover:border-gray-300"
            type={type}
            name={name}
            {...rest}
        />
    )
}

function Select({ ...rest }) {
    return (
        <select
            className="w-full border-2 border-gray-300 outline-pink-500 hover:border-pink-500 hover:text-pink-500 focus:text-pink-500 transition-colors duration-300 rounded px-2 py-2 disabled:outline-0 disabled:hover:border-gray-300 disabled:hover:text-gray-400"
            {...rest}
        >
            <option value="custom assets">Custom asset request</option>
            <option value="internship student">Internship request (I'm a student)</option>
            <option value="internship entity">Internship request (I'm an internship professor)</option>
            <option value="other">Other</option>
        </select>
    );
}

function SubmitButton({ onClick }) {
    return (
        <button
            className="mt-4 tracking-widest text-white bg-black rounded py-2 px-4 opacity-80 shadow-pink-500 shadow-none transition-all duration-300 hover:cursor-pointer hover:shadow-lg hover:opacity-100 hover:text-pink-500 disabled:hover:text-white disabled:bg-gray-300 disabled:hover:shadow-none disabled:hover:opacity-80 disabled:hover:cursor-auto"
            type="submit"
            onClick={onClick}
        >
            <span id="submit-label">SEND</span>
        </button>
    );
}

function LoadingSpin() {
    return (
        <div role="status" className="flex items-center justify-center mt-4 tracking-widest text-white bg-black rounded py-2 px-4" id="loading-spinner">
            <svg
                aria-hidden="true"
                className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-pink-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"></path>
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"></path>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
    );
}

export default function ContactForm() {
    const formUrl = "https://script.google.com/macros/s/AKfycbxLj9U1-U4ZIt6r4vFlu37MjGuG9a0780bHFexrdYkrwIszNW3KV80hQmYhQl691PX4/exec";

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);

    const submitButton = useMemo(() => {
        if (loading) {
            return <LoadingSpin />;
        }

        return <SubmitButton onClick={handleFormSubmit} />;
    }, [loading])

    function handleFormSubmit(e) {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const subject = subjectRef.current.value;

        if (name === null || name === "") {
            alert("Please enter your name!");
            nameRef.current.focus();
            return;
        }

        if (email === null || email === "") {
            alert("Please enter your email!");
            emailRef.current.focus();
            return;
        }

        const formData = new FormData();
        formData.append("Name", name);
        formData.append("Email", email);
        formData.append("Subject", subject);

        setLoading(true);
        fetch(formUrl, {
            method: "POST",
            body: formData
        })
        .then((response) => {
            if (response.ok) {
                alert("We've received your contact request and will reach out to you soon!");
                nameRef.current.value = "";
                emailRef.current.value = "";
                subjectRef.current.value = "custom assets";
                setSubmitted(true);
            } else {
                alert("Oops — something went wrong. Try again in a moment.");
            }
        })
        .catch((error) => {
            console.error("Error submitting form:", error);
            alert("Oops — something went wrong. Try again in a moment.");
        })
        .finally(() => {
            setLoading(false);
        });
    }

    return (
        <div>
            <fieldset className="w-full flex flex-col gap-2 disabled:text-gray-400" disabled={loading || submitted}>
                <Label>Name:</Label>
                <Input type="text" maxLength="20" ref={nameRef} />
                <Label>Email:</Label>
                <Input type="email" maxLength="50" ref={emailRef} />
                <Label>Subject:</Label>
                <Select ref={subjectRef} />
                {submitButton}
            </fieldset>
        </div>
    );
}