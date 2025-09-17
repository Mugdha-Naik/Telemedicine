import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


function VideoConsultation() {
    return (
      <div className="space-y-6 pb-20 sm:pb-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <NavLink to="/" className="shrink-0 w-9 h-9 rounded-full border border-zinc-200 grid place-items-center hover:bg-zinc-50">←</NavLink>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Book Your Consultation</h1>
          </div>
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: form */}
          <div className="lg:col-span-2 rounded-2xl bg-white border border-zinc-200 shadow-sm">
            <div className="px-5 py-4 border-b border-zinc-200 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-green-100 text-green-600 grid place-items-center">📅</div>
              <div className="font-semibold">Book Your Consultation</div>
            </div>
            <form className="p-5 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Patient Name *</label>
                  <input type="text" placeholder="Enter your full name" className="w-full px-3 py-2 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number *</label>
                  <input type="tel" placeholder="Enter your phone number" className="w-full px-3 py-2 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Preferred Date *</label>
                  <div className="relative">
                    <input type="date" className="w-full px-3 py-2 pr-10 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400">📅</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Preferred Time *</label>
                  <select className="w-full px-3 py-2 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select time</option>
                    <option>09:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>02:00 PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Consultation Type</label>
                <select className="w-full px-3 py-2 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Video Call</option>
                  <option>Audio Call</option>
                  <option>Chat</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Describe Your Symptoms *</label>
                <textarea rows="5" placeholder="Please describe your symptoms and any relevant medical history..." className="w-full px-3 py-2 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <button type="button" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition">
                <span>📞</span>
                <span>Book Consultation</span>
              </button>
            </form>
          </div>
  
          {/* Right: info cards */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-200 shadow-sm p-5 bg-gradient-to-b from-green-50 to-white">
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 grid place-items-center text-xl mb-3">⏰</div>
              <div className="font-semibold mb-2">Available Hours</div>
              <div className="text-sm">
                <div className="flex justify-between py-1 border-b border-zinc-100"><span>Monday - Friday:</span><span className="font-medium">9:00 AM - 6:00 PM</span></div>
                <div className="flex justify-between py-1 border-b border-zinc-100"><span>Saturday:</span><span className="font-medium">9:00 AM - 2:00 PM</span></div>
                <div className="flex justify-between py-1"><span>Sunday:</span><span className="text-red-600 font-medium">Closed</span></div>
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 shadow-sm p-5">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 grid place-items-center text-xl mb-3">👤</div>
              <div className="font-semibold mb-2">What to Expect</div>
              <ul className="text-sm list-disc pl-5 space-y-1 text-zinc-700">
                <li>Secure video consultation</li>
                <li>Certified medical professionals</li>
                <li>Digital prescription (if needed)</li>
                <li>Follow-up care recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }


export default VideoConsultation