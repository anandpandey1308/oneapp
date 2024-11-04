import { useState } from 'react';
import { Upload, Phone, Mail } from 'lucide-react';

const CreateCoursePage = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null,
        phone: '',
        email: ''
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, image: file });
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Reset error

        // Basic validation
        if (!formData.title || !formData.description || !formData.phone || !formData.email || !formData.image) {
            setError('Please fill all fields and upload an image.');
            return;
        }

        // Simulate form submission
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert('Course created successfully!');
            // Reset form
            setFormData({
                title: '',
                description: '',
                image: null,
                phone: '',
                email: ''
            });
            setImagePreview(null);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Create New Course</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title Input */}
                    <div className="space-y-2">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Course Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            placeholder="Enter course title"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="space-y-2">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            Course Image
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                                required
                            />
                            <label htmlFor="image" className="cursor-pointer">
                                <div className="flex flex-col items-center gap-2">
                                    <Upload className="h-8 w-8 text-gray-400" />
                                    <span className="text-sm text-gray-500">Click to upload image</span>
                                </div>
                            </label>
                        </div>
                        {imagePreview && <img src={imagePreview} alt="Preview" className="mt-4 rounded-md" />}
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Course Description
                        </label>
                        <textarea
                            id="description"
                            placeholder="Enter course description"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
                            required
                        />
                    </div>

                    {/* Contact Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="Enter phone number"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter email address"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-4">
                        <button 
                            type="submit" 
                            className={`w-full bg-blue-500 text-white rounded-md py-2 font-semibold ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={loading}
                        >
                            {loading ? 'Creating...' : 'Create Course'}
                        </button>
                    </div>

                    {/* Clear Button */}
                    <div className="mt-4">
                        <button 
                            type="button" 
                            onClick={() => {
                                setFormData({
                                    title: '',
                                    description: '',
                                    image: null,
                                    phone: '',
                                    email: ''
                                });
                                setImagePreview(null);
                                setError('');
                            }}
                            className="w-full bg-gray-300 text-gray-800 rounded-md py-2 font-semibold"
                        >
                            Clear Form
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateCoursePage;
