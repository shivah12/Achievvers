import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, GraduationCap, CheckCircle, Calendar, Star, ArrowRight, Phone, Mail, MapPin } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Achievvers</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#programs" className="text-sm font-medium hover:text-primary">
              Programs
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Why Choose Us
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#faculty" className="text-sm font-medium hover:text-primary">
              Our Faculty
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Uploads
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Login
            </Button>
            <Button size="sm">Enroll Now</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Grades 6-12 Excellence
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Unlock Your Academic Potential
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Personalized coaching and expert guidance to help students excel in academics and competitive exams.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                <a href = "https://achievvers-know-your-potential.vercel.app/" target ="_blank" rel = "noopener noreferrer">
                  <Button size="lg">Know your Potential!</Button>
                </a>
                  <Button variant="outline" size="lg">
                    Explore Programs
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="inline-block h-8 w-8 rounded-full bg-muted ring-2 ring-background overflow-hidden"
                      >
                        <Image
                          src={`/placeholder.svg?height=32&width=32&text=${i}`}
                          alt="Student"
                          width={32}
                          height={32}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">500+</span> students currently enrolled
                  </div>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=800&text=Students+Learning"
                  alt="Students in classroom"
                  width={800}
                  height={500}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-16 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">95%</h3>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">15+</h3>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">50+</h3>
                <p className="text-sm text-muted-foreground">Expert Teachers</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">5000+</h3>
                <p className="text-sm text-muted-foreground">Students Taught</p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Programs</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Comprehensive Learning Programs
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tailored programs designed to meet the specific needs of students across different grade levels.
                </p>
              </div>
            </div>

            <Tabs defaultValue="middle" className="mt-12">
              <div className="flex justify-center">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="middle">Grades 6-8</TabsTrigger>
                  <TabsTrigger value="high">Grades 9-10</TabsTrigger>
                  <TabsTrigger value="senior">Grades 11-12</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="middle" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Mathematics",
                    "Science",
                    "English",
                    "Social Studies",
                    "Foundation Building",
                    "Critical Thinking",
                  ].map((subject) => (
                    <Card key={subject} className="overflow-hidden">
                      <CardContent className="p-6">
                        <BookOpen className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold mb-2">{subject}</h3>
                        <p className="text-muted-foreground mb-4">
                          Building strong fundamentals and developing core skills for academic excellence.
                        </p>
                        <Button variant="outline" className="w-full">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="high" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Advanced Mathematics",
                    "Physics & Chemistry",
                    "Biology",
                    "Language Arts",
                    "Exam Preparation",
                    "Computer Science",
                  ].map((subject) => (
                    <Card key={subject} className="overflow-hidden">
                      <CardContent className="p-6">
                        <BookOpen className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold mb-2">{subject}</h3>
                        <p className="text-muted-foreground mb-4">
                          Comprehensive preparation for board exams and building advanced subject knowledge.
                        </p>
                        <Button variant="outline" className="w-full">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="senior" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Mathematics & Statistics",
                    "Physics",
                    "Chemistry",
                    "Biology",
                    "Competitive Exam Prep",
                    "Career Counseling",
                  ].map((subject) => (
                    <Card key={subject} className="overflow-hidden">
                      <CardContent className="p-6">
                        <BookOpen className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold mb-2">{subject}</h3>
                        <p className="text-muted-foreground mb-4">
                          Specialized coaching for college entrance exams and advanced academic excellence.
                        </p>
                        <Button variant="outline" className="w-full">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Approach to Excellence
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  What sets our coaching center apart and helps our students achieve remarkable results.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Teaching+Method"
                alt="Teaching method"
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Personalized Learning</h3>
                      <p className="text-muted-foreground">
                        Customized learning plans tailored to each student's strengths, weaknesses, and learning style.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Expert Faculty</h3>
                      <p className="text-muted-foreground">
                        Highly qualified teachers with years of experience in their respective subjects.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Regular Assessments</h3>
                      <p className="text-muted-foreground">
                        Continuous evaluation and feedback to track progress and improve performance.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Learning+Environment"
                alt="Learning environment"
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Small Batch Sizes</h3>
                      <p className="text-muted-foreground">
                        Limited students per batch ensuring individual attention and better learning outcomes.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Modern Facilities</h3>
                      <p className="text-muted-foreground">
                        State-of-the-art classrooms with digital learning tools and comfortable study environment.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Parent Involvement</h3>
                      <p className="text-muted-foreground">
                        Regular parent-teacher meetings and progress reports to keep parents informed.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Students Say</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Success stories from our students and their parents.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Priya Sharma",
                  grade: "Grade 10",
                  image: "1",
                  quote:
                    "The personalized attention and structured approach helped me improve my math scores from C to A+. The teachers are incredibly supportive!",
                },
                {
                  name: "Rahul Patel",
                  grade: "Grade 12",
                  image: "2",
                  quote:
                    "I got into my dream engineering college thanks to the excellent preparation I received here. The practice tests and doubt-clearing sessions were invaluable.",
                },
                {
                  name: "Ananya Singh",
                  grade: "Grade 8",
                  image: "3",
                  quote:
                    "I used to struggle with science concepts, but the visual teaching methods and experiments made learning fun and easy to understand.",
                },
                {
                  name: "Vikram Mehta",
                  grade: "Grade 11",
                  image: "4",
                  quote:
                    "The competitive exam preparation program is outstanding. The strategies and techniques taught helped me score in the top 1% nationally.",
                },
                {
                  name: "Neha Gupta",
                  grade: "Parent",
                  image: "5",
                  quote:
                    "As a parent, I appreciate the regular updates and the dedication of teachers. My daughter's confidence has improved tremendously.",
                },
                {
                  name: "Arjun Reddy",
                  grade: "Grade 9",
                  image: "6",
                  quote:
                    "The study materials and notes provided are comprehensive and easy to follow. My grades have consistently improved since joining.",
                },
              ].map((testimonial, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full bg-muted overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=48&width=48&text=${testimonial.image}`}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.grade}</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section id="faculty" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Faculty</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Meet Our Expert Teachers
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Highly qualified educators dedicated to student success.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Dr. Rajesh Kumar",
                  subject: "Mathematics",
                  image: "T1",
                  experience: "15+ years",
                },
                {
                  name: "Ms. Sunita Verma",
                  subject: "Science",
                  image: "T2",
                  experience: "12+ years",
                },
                {
                  name: "Mr. Anil Sharma",
                  subject: "English",
                  image: "T3",
                  experience: "10+ years",
                },
                {
                  name: "Dr. Meena Patel",
                  subject: "Physics",
                  image: "T4",
                  experience: "18+ years",
                },
              ].map((teacher, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="aspect-square w-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=${teacher.image}`}
                      alt={teacher.name}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold">{teacher.name}</h3>
                    <p className="text-sm text-muted-foreground">{teacher.subject}</p>
                    <div className="flex items-center gap-2 mt-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{teacher.experience}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="outline">
                View All Faculty <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Excel Academically?
                </h2>
                <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join Achievvers Coaching Center and unlock your full potential.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-6">
                <a href = "https://achievvers-know-your-potential.vercel.app/" target ="_blank" rel = "noopener noreferrer">
                <Button size="lg" variant="secondary">
                  Know your Potential!
                </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Get in Touch</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Information</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Have questions? Reach out to us and we'll be happy to help.
                </p>

                <div className="grid gap-6 py-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p className="text-muted-foreground">123 Education Street, Academic Heights, City - 100001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-muted-foreground">info@academicexcellence.edu</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold">Operating Hours</h3>
                  <ul className="grid gap-2 text-muted-foreground">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-xl font-bold mb-4">Send us a Message</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email address"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="grade"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Student's Grade
                      </label>
                      <select
                        id="grade"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select Grade</option>
                        <option value="6">Grade 6</option>
                        <option value="7">Grade 7</option>
                        <option value="8">Grade 8</option>
                        <option value="9">Grade 9</option>
                        <option value="10">Grade 10</option>
                        <option value="11">Grade 11</option>
                        <option value="12">Grade 12</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Achievvers</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Achievvers Coaching Center. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

