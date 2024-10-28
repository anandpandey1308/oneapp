import { useState } from 'react';
import { Upload, Phone, Mail, Smartphone, Laptop } from 'lucide-react';

const CreateCoursePage = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null,
        phone: '',
        email: ''
    });
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, image: file });
            setImagePreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Form Section */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">Create New Course</h1>
                    </div>
                    <div className="space-y-6">
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
                                />
                                <label htmlFor="image" className="cursor-pointer">
                                    <div className="flex flex-col items-center gap-2">
                                        <Upload className="h-8 w-8 text-gray-400" />
                                        <span className="text-sm text-gray-500">Click to upload image</span>
                                    </div>
                                </label>
                            </div>
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
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Preview Section */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Preview</h2>
                        {/* View Switch Section */}
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setIsMobile(true)}
                                className={`p-2 rounded-full ${
                                    isMobile ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                                }`}
                                aria-label="Mobile view"
                            >
                                <Smartphone className="h-6 w-6" />
                            </button>
                            <button
                                onClick={() => setIsMobile(false)}
                                className={`p-2 rounded-full ${
                                    !isMobile ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                                }`}
                                aria-label="Desktop view"
                            >
                                <Laptop className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                    <div className={`mx-auto ${isMobile ? 'max-w-sm' : 'max-w-full'}`}>
                        <div className="rounded-lg overflow-hidden bg-white shadow-md">
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                    {formData.title || 'Course Title'}
                                </h2>
                                {imagePreview ? (
                                    <img
                                        src={imagePreview}
                                        alt="Course preview"
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                    />
                                ) : (
                                    <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                                        <span className="text-gray-400">No image uploaded</span>
                                    </div>
                                )}
                                <p className="text-gray-600 mb-4">
                                    {formData.description || 'Course description will appear here'}
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center text-gray-600">
                                        <Phone className="h-4 w-4 mr-2" />
                                        <span>{formData.phone || 'Phone number'}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Mail className="h-4 w-4 mr-2" />
                                        <span>{formData.email || 'Email address'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateCoursePage;
