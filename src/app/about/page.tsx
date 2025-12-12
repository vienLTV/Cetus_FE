"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Target, Lightbulb, Award, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Innovation",
      description:
        "We continuously seek new ways to improve user experience and solve real problems.",
      icon: Lightbulb,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Transparency",
      description: "We believe in being honest and transparent with our customers.",
      icon: Target,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Customer-centric",
      description: "Our goal is to build solutions that solve your real problems.",
      icon: Users,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Excellence",
      description: "We strive to deliver the highest quality in everything we do.",
      icon: Award,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const team = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      bio: "10+ years of experience in technology and human resources management.",
    },
    {
      name: "Sarah Smith",
      role: "CTO",
      bio: "Expert in backend and cloud infrastructure with 8+ years of experience.",
    },
    {
      name: "Mike Johnson",
      role: "Head of Product",
      bio: "Passionate about product design and user experience.",
    },
    {
      name: "Emily Chen",
      role: "Head of Sales",
      bio: "Building strong customer relationships and driving business growth.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="font-semibold text-2xl text-gray-900">Cetus</span>
            </Link>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link href="/features" className="text-sm font-semibold leading-6 text-gray-900">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-semibold leading-6 text-gray-900">
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-semibold leading-6 text-blue-600">
              About
            </Link>
            <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
              Contact
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900">
              Log in
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative isolate pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Cetus
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Founded in 2023 with a simple vision: to make human resource management easy,
              efficient, and accessible for every business.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg transform -skew-y-3"></div>
            <div className="relative bg-white p-8 rounded-lg border border-blue-200">
              <h2 className="text-3xl font-bold text-gray-900">Mission</h2>
              <p className="mt-4 text-lg text-gray-600">
                To provide modern, easy-to-use, and efficient human resource management solutions
                that help businesses manage their workforce smarter.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-purple-50 rounded-lg transform skew-y-3"></div>
            <div className="relative bg-white p-8 rounded-lg border border-purple-200">
              <h2 className="text-3xl font-bold text-gray-900">Vision</h2>
              <p className="mt-4 text-lg text-gray-600">
                To become the most trusted human resource management platform in Southeast Asia,
                helping millions of people work more efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition duration-300"
                >
                  <div
                    className={`inline-flex rounded-lg bg-gradient-to-r ${value.color} p-3 text-white`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{value.title}</h3>
                  <p className="mt-2 text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Built by talented individuals from leading companies.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 font-semibold mt-1">{member.role}</p>
              <p className="text-gray-600 mt-2 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { number: "500+", label: "Customers" },
              { number: "100K+", label: "Users" },
              { number: "99.9%", label: "Uptime" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white">{stat.number}</div>
                <div className="mt-2 text-lg text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Join Our Community
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Be part of the human resources management revolution.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/register">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                Contact us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
