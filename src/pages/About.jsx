import { FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="ml-3">
      <div className="flex content-center">
        <h1 className="text-6xl mb-4 mr-8">Github Finder</h1>
        <a
          href="https://github.com/jmjusmin/react-githubFinder"
          className="text-3xl text-red-600 hover:text-red-300"
        >
          <FaGithub />
        </a>
      </div>
      <p className="mb-3">
        This is a project in my REACT learning journey where I gain knowledge of
        REACT hooks and tailwind CSS in practice.
      </p>
      <p className="mb-3">
        GitHub Finder is an application to search GitHub repositories that
        retrieve a list of GitHub API data and display it accordingly with user
        search.
      </p>
    </div>
  );
}

export default About;
