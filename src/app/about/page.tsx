"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FaLaptopCode, FaDatabase, FaTools, FaStar } from "react-icons/fa"

export default function AboutPage() {
  const skills = [
    {
      title: "Frontend Development",
      description: "React.js, Next.js, Tailwind CSS, TypeScript, JavaScript, HTML, CSS",
      icon: FaLaptopCode,
      delay: "0ms",
    },
    {
      title: "Backend / Databases",
      description: "Node.js, Express.js, MongoDB, MySQL, REST APIs, GraphQL",
      icon: FaDatabase,
      delay: "100ms",
    },
    {
      title: "Tools & Others",
      description: "Git, Vercel, VSCode, Figma, Jira, Docker",
      icon: FaTools,
      delay: "200ms",
    },
    {
      title: "Interests",
      description: "UI/UX Design, Web Animation, Open Source Contribution, Learning New Tech",
      icon: FaStar,
      delay: "300ms",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 pt-20 ">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl w-full space-y-12">
        {/* Page Heading */}
        <div className="text-center space-y-4 animate-fade-in-up">
          
          <h1 className="text-5xl text-white md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text ">
            About Me
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-scale-in" />
        </div>

        {/* Introduction */}
        <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <Card className="border-2 border-primary/40 bg-transparent hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
            <CardContent className="p-8">
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-center">
                Hi! I'm a passionate <span className="text-accent font-semibold">Frontend Developer</span> with
                experience in building modern web applications using React, Next.js, and Tailwind CSS. I love creating{" "}
                <span className="text-accent font-semibold">interactive</span>,{" "}
                <span className="text-accent font-semibold">responsive</span>, and{" "}
                <span className="text-accent font-semibold">visually appealing</span> web experiences.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-center animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div key={index} className="animate-fade-in-up group" style={{ animationDelay: skill.delay }}>
                  <Card className="h-full border-2 border-accent/50 bg-transparent hover:border-accent hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-1 cursor-pointer relative overflow-hidden">
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <CardHeader className="relative">
                      <div className="flex items-center gap-3">
                        <div className="text-4xl text-gray-300 group-hover:text-accent group-hover:scale-110 transition-transform duration-300">
                          <Icon />
                        </div>
                        <CardTitle className="text-xl group-hover:text-accent transition-colors duration-300">
                          {skill.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="relative">
                      <p className="text-gray-300 leading-relaxed">{skill.description}</p>
                    </CardContent>

                    {/* Animated Border Effect */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <p className="text-gray-300 mb-4">Let's build something amazing together!</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Badge
              variant="outline"
              className="text-sm text-green-600 py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
            >
              View Projects
            </Badge>
            <Badge
              variant="outline"
              className="text-sm text-orange-400 py-2 px-4 hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
            >
              Contact Me
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
