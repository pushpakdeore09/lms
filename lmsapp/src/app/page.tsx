"use client";
import { Button } from "@/components/ui/button";
import Footer from "@/custom-components/footer";
import Header from "@/custom-components/header";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Header />

      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-700 dark:from-gray-900 dark:to-gray-700 text-white py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">
              Unlock Your Potential with Expert-Led Online Courses
            </h1>
            <p className="text-lg mb-6">
              Learn new skills and achieve your career goals with our wide range
              of online courses.
            </p>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="py-12 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 dark:text-white">
              Featured Courses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Web Development",
                  image: "/images/web-dev.jpg",
                },
                { name: "UI/UX Design", image: "/images/ui-ux.jpg" },
                { name: "Data Science", image: "/images/ds.jpg" },
              ].map((course, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 flex flex-col"
                >
                  <Image
                    src={course.image}
                    alt={`${course.name} Image`}
                    width={500}
                    height={300}
                    className="rounded-md mb-4"
                  />
                  <div className="flex flex-col justify-between flex-grow">
                    <h3 className="text-lg font-semibold dark:text-white">
                      {course.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                      Learn the fundamentals and advanced techniques of{" "}
                      {course.name}.
                    </p>
                    <Button className="bg-blue-500 text-white w-full">
                      Start Learning
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Teach on myLMS Section */}
        <section className="py-12 bg-white dark:bg-gray-700">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8 dark:text-white">
              Teach on MyLMS
            </h2>
            <p className="text-lg mb-6 dark:text-gray-300">
              Share your knowledge and become a course creator on myLMS. Reach
              thousands of students worldwide!
            </p>
            <div className="flex justify-center gap-4">
              <Button className="text-white hover:bg-blue-800" onClick={() => router.push('/teach')}>
                Become a Teacher
              </Button>
              <Button variant="outline" className="border-black">
                Learn More
              </Button>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-500 text-white dark:from-gray-700 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to take your skills to the next level?
            </h2>
            <p className="text-lg mb-6">
              Join thousands of learners who are transforming their careers with
              our expert-led courses.
            </p>
            <Button
              variant="outline"
              className="bg-white text-black font-bold px-8 py-3"
              onClick={() => router.push("/login")}
            >
              Get Started
            </Button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-8 dark:text-white">
              What Our Learners Say
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {["John Doe", "Jane Smith", "Mark Lee"].map((name, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg max-w-xs mx-auto"
                >
                  <p className="text-gray-500 dark:text-gray-300 mb-4">
                    "This platform helped me land my dream job in tech. The
                    courses are easy to follow, and the instructors are
                    top-notch."
                  </p>
                  <h3 className="text-lg font-semibold dark:text-white">
                    {name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Software Engineer
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <Footer/>
      </div>
    </>
  );
}
