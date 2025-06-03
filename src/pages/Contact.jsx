import React, { useEffect } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xkgbnyny");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message envoyé avec succès !");
    } else if (Array.isArray(state.errors) && state.errors.length > 0) {
      toast.error("Erreur lors de l'envoi du message.");
    }
  }, [state]);

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 sm:px-12 font-mono"
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Contact
        </h2>
        <p className="text-gray-400 mb-12">
          Une idée, une opportunité ou juste envie de discuter ? Envoyez-moi un
          message !
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              Nom
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 transition"
          >
            Envoyer
          </button>
        </form>

        {/* Informations de contact */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center space-x-4">
            <Mail size={20} className="text-blue-400" />
            <span>ainarakotoarimanana3@example.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <Phone size={20} className="text-blue-400" />
            <span>+261 34 78 309 34</span>
          </div>
          <div className="flex items-center space-x-4">
            <Linkedin size={20} className="text-blue-400" />
            <a
              href="https://linkedin.com/in/aina-rakotoarimanana"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/aina-rakotoarimanana
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Github size={20} className="text-blue-400" />
            <a
              href="https://github.com/Aina-RDM"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/Aina-Fitahina
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
