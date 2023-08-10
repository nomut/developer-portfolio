import dynamic from 'next/dynamic';
const Navigation = dynamic(() => import('../components/Navigation'));
const Greetings = dynamic(() => import('../containers/Greetings'));
const GithubProfileCard = dynamic(
  () => import('../components/GithubProfileCard')
);
import { showContactUs } from '../portfolio';
import SEO from '../components/SEO';
import Contact from '../components/ContactUs';

export default function Home({
}: {
  githubProfileData: any;
}) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      {/* <Skills /> */}
      {/* <Proficiency /> */}
      {/* <Education /> */}
      {/* <Experience /> */}
      {/* <Feedbacks /> */}
      {/* <Projects /> */}
      {showContactUs ? <Contact /> : null}
    </div>
  );
}

