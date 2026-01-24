// 'use client'

// import { useState } from 'react'

// import ContactIcons from './ContactIcons'

// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     company: '',
//   })

//   const [loading, setLoading] = useState(false)
//   const [message, setMessage] = useState('')

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     // Validation
//     if (!formData.name || !formData.email || !formData.mobile) {
//       setMessage('Please fill all required fields.')
//       return
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (!emailRegex.test(formData.email)) {
//       setMessage('Please enter a valid email.')
//       return
//     }

//     if (formData.mobile.length < 10) {
//       setMessage('Please enter a valid mobile number.')
//       return
//     }

//     setLoading(true)
//     setMessage('')

//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       })

//       const data = await res.json()

//       if (data.success) {
//         setMessage('Message sent successfully ✅')
//         setFormData({
//           name: '',
//           email: '',
//           mobile: '',
//           company: '',
//         })
//       } else {
//         setMessage('Failed to send message ❌')
//       }
//     } catch (error) {
//       setMessage('Something went wrong ❌')
//     }

//     setLoading(false)
//   }

//   return (
//     <section
//       id="contact"
//       className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50"
//     >
//       <h2 className="text-2xl font-bold mb-6 text-center">
//             Contact Me
//           </h2>
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

       
//         <div className="flex justify-center">
//          <ContactIcons/>
//         </div>

//         {/* Form */}
//         <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
          

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name *"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address *"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
//             />

//             <input
//               type="tel"
//               name="mobile"
//               placeholder="Mobile Number *"
//               value={formData.mobile}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
//             />

//             <input
//               type="text"
//               name="company"
//               placeholder="Company Name"
//               value={formData.company}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//             >
//               {loading ? 'Sending...' : 'Submit'}
//             </button>

//             {message && (
//               <p className="text-center text-sm mt-2">
//                 {message}
//               </p>
//             )}
//           </form>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { useState } from 'react'
import ContactIcons from './ContactIcons'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    if (!formData.name || !formData.email || !formData.mobile) {
      setMessage('Please fill all required fields.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setMessage('Please enter a valid email.')
      return
    }

    if (formData.mobile.length < 10) {
      setMessage('Please enter a valid mobile number.')
      return
    }

    setLoading(true)
    setMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        setMessage('Message sent successfully ✅')
        setFormData({
          name: '',
          email: '',
          mobile: '',
          company: '',
        })
      } else {
        setMessage('Failed to send message ❌')
      }
    } catch (error) {
      setMessage('Something went wrong ❌')
    }

    setLoading(false)
  }

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50">
      <h2 className="text-2xl font-bold mb-8 text-center">Contact Me</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Form */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md order-1 md:order-2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number *"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
            {message && <p className="text-center text-sm mt-2">{message}</p>}
          </form>
        </div>

        {/* Contact Icons */}
        <div className="flex justify-center items-center order-2 md:order-1">
          <ContactIcons />
        </div>
      </div>
    </section>
  )
}
