// import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

// export default function ContactIcons() {
//   return (
//     <div className="flex flex-col space-y-4 items-center text-gray-700">
// <h2>Follow us :</h2>
//       {/* WhatsApp */}
//       <a
//         href="https://wa.me/919095405312"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="flex items-center space-x-2 hover:text-green-600"
//       >
//         <FaWhatsapp size={24} />
//         <span>+91 90954 05312</span>
//       </a>

//       {/* Gmail */}
//       <a
//         href="mailto:velmurugan01396@gmail.com"
//         className="flex items-center space-x-2 hover:text-red-600"
//       >
//         <FaEnvelope size={24} />
//         <span>G-Mail Profile</span>
//       </a>

//       {/* LinkedIn */}
//       <a
//         href="https://www.linkedin.com/in/vel-murugan-694518260/"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="flex items-center space-x-2 hover:text-blue-700"
//       >
//         <FaLinkedin size={24} />
//         <span>LinkedIn Profile</span>
//       </a>

//       {/* GitHub */}
//       <a
//         href="https://github.com/Vel-murugan01396"  // replace with your actual GitHub profile link
//         target="_blank"
//         rel="noopener noreferrer"
//         className="flex items-center space-x-2 hover:text-gray-900"
//       >
//         <FaGithub size={24} />
//         <span>GitHub Profile</span>
//       </a>
//     </div>
//   )
// }


import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function ContactIcons() {
  return (
    <div className="flex flex-col space-y-4 items-center text-gray-700">
      <h2 className="font-semibold text-lg text-left">Follow us :</h2>

      <div className="flex flex-col space-y-3">
        {/* WhatsApp */}
        <a
          href="https://wa.me/919095405312"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-green-600"
        >
          <FaWhatsapp size={22} className="w-6" />
          <span className="ml-3">+91 90954 05312</span>
        </a>

        {/* Gmail */}
        <a
          href="mailto:velmurugan01396@gmail.com"
          className="flex items-center hover:text-red-600"
        >
          <FaEnvelope size={22} className="w-6" />
          <span className="ml-3">G-Mail Profile</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/vel-murugan-694518260/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-blue-700"
        >
          <FaLinkedin size={22} className="w-6" />
          <span className="ml-3">LinkedIn Profile</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Vel-murugan01396"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-gray-900"
        >
          <FaGithub size={22} className="w-6" />
          <span className="ml-3">GitHub Profile</span>
        </a>
      </div>
    </div>
  )
}
