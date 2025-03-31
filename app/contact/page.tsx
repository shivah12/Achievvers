"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    grade: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "contacts"), formData);
      alert("Message sent successfully!");
      setFormData({ name: "", phone: "", email: "", grade: "", message: "" });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg border">
        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Your name" 
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input 
                type="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="Your phone number" 
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Your email address" 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Student's Grade</label>
            <select 
              name="grade" 
              value={formData.grade} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required
            >
              <option value="">Select Grade</option>
              {Array.from({ length: 7 }, (_, i) => i + 6).map((grade) => (
                <option key={grade} value={grade}>Grade {grade}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Your message" 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]" 
              required 
            ></textarea>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
}
