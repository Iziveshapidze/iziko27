
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, ChartBar, FileCheck, Users, 
  BrainCircuit, Share2, FolderCheck, BarChart3, 
  CheckCircle2, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import FeatureCard from '@/components/FeatureCard';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-edu-blue/90 to-edu-purple py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
                  Smart Teaching Tools, <br />
                  <span className="text-edu-yellow">Empowered Teachers</span>
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
                  An all-in-one platform designed to empower teachers with digital tools that make teaching smarter, not harder.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <Button size="lg" className="bg-white text-edu-blue hover:bg-gray-100 font-semibold px-8">
                    Get Started
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-semibold px-8">
                    Watch Demo
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="relative bg-white p-6 rounded-xl shadow-xl animate-float">
                  <div className="absolute -top-3 -right-3 bg-edu-green text-white p-2 rounded-lg">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center mb-4 gap-3">
                    <div className="bg-edu-blue/10 p-2 rounded-lg">
                      <BookOpen className="w-6 h-6 text-edu-blue" />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-lg">Resource Hub</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-4/6"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center">
                      <div className="w-10 h-10 bg-edu-orange/20 rounded-lg flex items-center justify-center">
                        <FileCheck className="w-5 h-5 text-edu-orange" />
                      </div>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center">
                      <div className="w-10 h-10 bg-edu-teal/20 rounded-lg flex items-center justify-center">
                        <Share2 className="w-5 h-5 text-edu-teal" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                EduFlow provides powerful tools that streamline teaching tasks and enhance student learning outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                title="Resource Hub" 
                description="Upload, organize, and share teaching materials with your colleagues and students."
                icon={<BookOpen className="w-6 h-6 text-white" />}
                color="bg-edu-blue"
                delay={0}
              />
              <FeatureCard 
                title="AI-Checked Assignments" 
                description="Automatically grade and provide feedback on student assignments."
                icon={<BrainCircuit className="w-6 h-6 text-white" />}
                color="bg-edu-purple"
                delay={100}
              />
              <FeatureCard 
                title="Test Generator" 
                description="Create quizzes and exams in seconds with customizable templates."
                icon={<FileCheck className="w-6 h-6 text-white" />}
                color="bg-edu-orange"
                delay={200}
              />
              <FeatureCard 
                title="Teacher Collaboration" 
                description="Share tests, lesson plans, and ideas with colleagues."
                icon={<Users className="w-6 h-6 text-white" />}
                color="bg-edu-green"
                delay={300}
              />
              <FeatureCard 
                title="School Insights" 
                description="Track student progress and identify areas for improvement."
                icon={<BarChart3 className="w-6 h-6 text-white" />}
                color="bg-edu-teal"
                delay={400}
              />
              <FeatureCard 
                title="Document Management" 
                description="Organize all your teaching materials in one centralized location."
                icon={<FolderCheck className="w-6 h-6 text-white" />}
                color="bg-edu-pink"
                delay={500}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-edu-blue/90 to-edu-teal/90 py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Teaching?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
              Join thousands of educators who have already enhanced their teaching experience with EduFlow.
            </p>
            <Button size="lg" className="bg-white text-edu-blue hover:bg-gray-100 font-semibold px-8">
              Get Started for Free
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-md bg-edu-blue text-white">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold">EduFlow</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Empowering teachers with digital tools for smarter teaching.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Testimonials</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Terms</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Security</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center md:text-left">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} EduFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
