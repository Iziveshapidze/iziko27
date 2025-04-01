
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
    <div className="flex flex-col min-h-screen bg-gradient-to-tr from-[#FFF59D] to-[#81D4FA] georgian-pattern">
      <Navigation />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#FF5757] to-[#FFC107] py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in font-georgian">
                  ჭკვიანი სწავლების ინსტრუმენტები, <br />
                  <span className="rainbow-text">გაძლიერებული მასწავლებლები</span>
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto md:mx-0 animate-fade-in font-georgian" style={{ animationDelay: '100ms' }}>
                  ყველაფერი ერთში პლატფორმა, რომელიც განკუთვნილია მასწავლებლებისთვის ციფრული ინსტრუმენტებით, რომლებიც სწავლებას უფრო ჭკვიანს ხდის.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <Button size="lg" className="bg-[#4CAF50] text-white hover:bg-[#3d8b40] font-semibold px-8 font-georgian">
                    დაიწყეთ ახლავე
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-semibold px-8 font-georgian">
                    ნახეთ დემო
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="relative bg-white p-6 rounded-xl shadow-xl animate-colorful">
                  <div className="absolute -top-3 -right-3 bg-[#2196F3] text-white p-2 rounded-lg">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center mb-4 gap-3">
                    <div className="bg-[#FF5757]/10 p-2 rounded-lg">
                      <BookOpen className="w-6 h-6 text-[#FF5757]" />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-lg font-georgian">რესურსების ცენტრი</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-4/6"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center">
                      <div className="w-10 h-10 bg-[#FFC107]/20 rounded-lg flex items-center justify-center">
                        <FileCheck className="w-5 h-5 text-[#FFC107]" />
                      </div>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center">
                      <div className="w-10 h-10 bg-[#4CAF50]/20 rounded-lg flex items-center justify-center">
                        <Share2 className="w-5 h-5 text-[#4CAF50]" />
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
              <h2 className="text-3xl font-bold mb-4 font-georgian">ძირითადი ფუნქციები</h2>
              <p className="text-gray-600 max-w-2xl mx-auto font-georgian">
                ჩვენი პლატფორმა უზრუნველყოფს მძლავრ ინსტრუმენტებს, რომლებიც აუმჯობესებენ სწავლების პროცესს და მოსწავლეთა სწავლის შედეგებს.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                title="რესურსების ცენტრი" 
                description="ატვირთეთ, დაალაგეთ და გააზიარეთ სასწავლო მასალები თქვენს კოლეგებთან და სტუდენტებთან."
                icon={<BookOpen className="w-6 h-6 text-white" />}
                color="bg-[#FF5757]"
                delay={0}
              />
              <FeatureCard 
                title="AI-ს მიერ შემოწმებული დავალებები" 
                description="ავტომატურად შეაფასეთ და მიაწოდეთ უკუკავშირი სტუდენტების დავალებებზე."
                icon={<BrainCircuit className="w-6 h-6 text-white" />}
                color="bg-[#2196F3]"
                delay={100}
              />
              <FeatureCard 
                title="ტესტის გენერატორი" 
                description="შექმენით ტესტები და გამოცდები წამებში მორგებადი შაბლონებით."
                icon={<FileCheck className="w-6 h-6 text-white" />}
                color="bg-[#FFC107]"
                delay={200}
              />
              <FeatureCard 
                title="მასწავლებელთა თანამშრომლობა" 
                description="გააზიარეთ ტესტები, გაკვეთილის გეგმები და იდეები კოლეგებთან."
                icon={<Users className="w-6 h-6 text-white" />}
                color="bg-[#4CAF50]"
                delay={300}
              />
              <FeatureCard 
                title="სკოლის ანალიტიკა" 
                description="თვალყური ადევნეთ მოსწავლეთა პროგრესს და გამოავლინეთ გასაუმჯობესებელი სფეროები."
                icon={<BarChart3 className="w-6 h-6 text-white" />}
                color="bg-[#9C27B0]"
                delay={400}
              />
              <FeatureCard 
                title="დოკუმენტების მართვა" 
                description="მოაწესრიგეთ ყველა თქვენი სასწავლო მასალა ერთ ცენტრალიზებულ ადგილას."
                icon={<FolderCheck className="w-6 h-6 text-white" />}
                color="bg-[#FF9800]"
                delay={500}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#4CAF50] to-[#81D4FA] py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6 font-georgian">მზად ხართ გარდაქმნათ თქვენი სწავლება?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg font-georgian">
              შემოუერთდით ათასობით პედაგოგს, რომლებმაც უკვე გააუმჯობესეს თავიანთი სწავლების გამოცდილება ჩვენს პლატფორმასთან ერთად.
            </p>
            <Button size="lg" className="bg-[#FF5757] text-white hover:bg-[#f44336] font-semibold px-8 font-georgian">
              დაიწყეთ უფასოდ
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-br from-[#2196F3] to-[#1565C0] text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[#FFC107] text-white">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold font-georgian">განათლება</span>
              </div>
              <p className="text-gray-200 max-w-xs font-georgian">
                მასწავლებლების გაძლიერება ციფრული ინსტრუმენტებით ჭკვიანი სწავლებისთვის.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4 font-georgian">პროდუქტი</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition font-georgian">ფუნქციები</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition font-georgian">ფასები</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition font-georgian">გამოხმაურებები</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition font-georgian">ხშირად დასმული კითხვები</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 font-georgian">კომპანია</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition font-georgian">ჩვენ შესახებ</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition font-georgian">ბლოგი</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition font-georgian">კარიერა</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition font-georgian">კონტაქტი</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 font-georgian">სამართლებრივი</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition font-georgian">კონფიდენციალურობა</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition font-georgian">პირობები</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition font-georgian">უსაფრთხოება</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-8 mt-8 text-center md:text-left">
            <p className="text-gray-300 font-georgian">
              &copy; {new Date().getFullYear()} განათლება. ყველა უფლება დაცულია.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
