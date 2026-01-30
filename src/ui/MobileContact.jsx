import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import supabase from "../services/supabase";

function MobileContact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMgs, setErrorMgs] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    setErrorMgs(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    const { error } = await supabase.from("messages").insert([
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      alert("There was an error sending your message");
    } else {
      alert("Message sent successfully");
      setFormData({ name: "", email: "", message: "" });
      setErrorMgs({});
    }
  };

  return (
    <div className="p-4 dark:bg-neutral-800">
      <h3 className="text-center font-bold text-2xl text-slate-900 dark:text-neutral-100">
        Let's work together
      </h3>
      <p className="text-slate-800 text-center mb-2 font-semibold dark:text-neutral-300">
        Have a project in mind or just want to say hi?
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full rounded-lg border p-3 focus:outline-0 dark:bg-neutral-700 dark:text-neutral-100 dark:border-neutral-600  focus:ring-2 focus:ring-blue-500 dark:placeholder:text-neutral-300 dark:focus:ring-blue-400"
          />
          {errorMgs.name && (
            <p className="text-red-500 text-sm mt-1">{errorMgs.name}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full rounded-lg border p-3 focus:outline-0 dark:bg-neutral-700 dark:text-neutral-100 dark:border-neutral-600 focus:ring-2 focus:ring-blue-500 dark:placeholder:text-neutral-300 dark:focus:ring-blue-400 "
          />
          {errorMgs.email && (
            <p className="text-red-500 text-sm mt-1">{errorMgs.email}</p>
          )}
        </div>

        <div>
          <textarea
            placeholder="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full rounded-lg border p-3 focus:outline-0 dark:bg-neutral-700 dark:text-neutral-100 dark:border-neutral-600 focus:ring-2 focus:ring-blue-500 dark:placeholder:text-neutral-300 dark:focus:ring-blue-400"
          ></textarea>
          {errorMgs.message && (
            <p className="text-red-500 text-sm mt-1">{errorMgs.message}</p>
          )}
        </div>

        <button className="w-full rounded-lg bg-slate-900 py-3 text-white cursor-pointer hover:bg-slate-800 transition duration-700 dark:bg-blue-700 dark:hover:bg-blue-600">
          {loading ? "Please wait..." : "Send Message"}
        </button>
      </form>

      <div className="w-full flex gap-4 mx-auto items-center justify-center mt-3 md:hidden text-slate-900 dark:text-neutral-300">
        <a
          href="https://www.github.com/samz845"
          className="hover:text-slate-600 dark:hover:text-neutral-100 transition duration-700"
          target="_blank"
        >
          <FaGithub size={25} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/devsamz"
          className="hover:text-slate-600 dark:hover:text-neutral-100 transition duration-700"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          target="_blank"
          href="https://www.x.com/samzylexzy"
          className="hover:text-slate-600 dark:hover:text-neutral-100 transition duration-700"
        >
          <FaTwitter size={25} />
        </a>

        <a
          target="_blank"
          href="mailto:fatomilolasamuel@gmail.com"
          className="hover:text-slate-600 dark:hover:text-neutral-100 transition duration-700"
        >
          <MdEmail size={25} />
        </a>
      </div>
    </div>
  );
}

export default MobileContact;
