import React from "react";
import Link from "next/link";
import { getPosts } from "../lib/posts";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import NavBar from "../components/NavBar";
import Card from "../components/Card";

const Home = ({ posts }) => {
  const projects = [
    {
      title: "github-user-statistics",
      description:
        "WIP React front-end to search for GitHub users using GitHub API, Apollo, GraphQL & React-Waypoint. Hosted on Google Firebase through GitHub Actions.",
      image: "github-user-statistics.png",
      url: "https://github-user-statistics.web.app/",
    },
    {
      title: "generation-final-project",
      description:
        "Final team project as a part of the Generation 'Get into Data Engineering' bootcamp, Serverless AWS Lambda Python3 ETL process. Visualisations with Grafana.",
      image: "generation-final-project.png",
      url: "",
    },
    {
      title: "mylib",
      description:
        "C99 Library containing various data structures and utilities, Vectors, Linked lists, Hash maps",
      image: "mylib.png",
      url: "https://github.com/mattmurr/mylib",
    },
  ];

  return (
    <div className="container p-4 mx-4 mx-auto md:w-3/5">
      <NavBar />
      <div className="container">
        <section className="flex flex-col my-8 lg:my-24">
          <div className="flex flex-row justify-center space-x-4">
            <h1 className="text-4xl lg:text-5xl">Heroic introduction</h1>
            <h1 className="text-4xl lg:text-5xl">👨‍💻</h1>
          </div>
          <div className="text-lg text-center text-gray-500 lg:text-xl">
            <p>
              Hi, I'm Matt, I recently graduated from a
              <strong> Data Engineering Bootcamp</strong>.{" "}
            </p>
            <p>
              Looking for somewhere to continue developing my knowledge to
              become an absolute technology polyglot.
            </p>
            <p>I also post about self-hosting OSS and Unix-like systems.</p>
          </div>
          <div className="flex flex-row justify-center p-2 text-4xl space-x-2">
            <Link href="https://github.com/mattmurr">
              <button>
                <FaGithub className="hover:text-gray-400 transform hover:scale-105" />
              </button>
            </Link>
            <Link href="https://www.linkedin.com/in/matthew-murray-a8096b1b6/">
              <button>
                <FaLinkedin className="hover:text-gray-400 transform hover:scale-105" />
              </button>
            </Link>
            <Link href="mailto:mattmurr.uk@gmail.com">
              <button className="px-3 py-2 text-lg font-semibold bg-gray-700 border border-gray-900 rounded hover:bg-gray-600 animate-bounce">
                Get in touch
              </button>
            </Link>
          </div>
        </section>
        <section>
          <div className="justify-center grid grid-col-3 gap-4">
            {projects.map((project, i) => (
              <Card key={i} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = getPosts();
  return {
    props: { posts },
  };
};

export default Home;
