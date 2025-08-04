import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import {callback} from "fdir/dist/api/async";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "../../lib/puter";
import {useEffect} from "react";
import {useNavigate} from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "BH-Resume" },
    { name: "description", content: "Great way to land your dream job" },
  ];
}

export default function Home() {
  const {auth} = usePuterStore();
  const navigate = useNavigate();

  useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/')
  }, [auth.isAuthenticated]);

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar  />
  <section className="main-section">
    <div className="page-heading py-16">
      <h1>Track Your Application & Resume Ratings</h1>
      <h2 >Review your submissions and check AI-powered feedback.</h2>
    </div>

    {resumes.length > 0 && (
    <div >
      {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
      ))}
    </div>
        )}
    </section>
  </main>
};
