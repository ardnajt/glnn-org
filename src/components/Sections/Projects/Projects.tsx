import SectionWrapper from "../SectionWrapper";
import SectionHeader from '../SectionHeader';
import ProjectCard from "./components/ProjectCard";
import ProjectCardHeader from "./components/ProjectCardHeader";
import ProjectCardArticle from "./components/ProjectCardArticle";

export default function Projects() {
	return (
		<SectionWrapper id="projects" className="pt-[6rem] mb-[6rem]">
			{/* Header */}
			<SectionHeader>Projects</SectionHeader>
			<div className="grid grid-cols-1 lg:grid-cols-2">
				<ProjectCard>
					<ProjectCardHeader url="https://github.com/ardnajt/glnn-org" image="images/glnn.png"> glnn.dev </ProjectCardHeader>
					<ProjectCardArticle author="React - Tailwind - Framer Motion - Typescript">
						You're here right now! This website showcases my skills as a programmer and the projects that I've worked on.
					</ProjectCardArticle>
				</ProjectCard>
				<ProjectCard>
					<ProjectCardHeader url="https://github.com/Kanahora/dishora" image="images/dishora.png"> Dishora </ProjectCardHeader>
					<ProjectCardArticle author="discord.js - Typescript">
						Dishora is a discord.js framework which significantly accelerates the process of creating custom Discord Bots for my Fiverr clients.
					</ProjectCardArticle>
				</ProjectCard>
				<ProjectCard>
					<ProjectCardHeader url="https://github.com/ardnajt/entrelah-client" image="images/entrelah.png"> Entrelah </ProjectCardHeader>
					<ProjectCardArticle author="React - NestJS - PostgreSQL">
						A freelance marketplace platform where users can showcase their services, connect with clients, and manage gig postings. Includes features such as gig listing, creating orders, and incorporating Stripe for secure payment processing.
					</ProjectCardArticle>
				</ProjectCard>
				<ProjectCard>
					<ProjectCardHeader url="https://github.com/ardnajt/duobode-frontend" image="images/duobode.png"> Duobode </ProjectCardHeader>
					<ProjectCardArticle author="Svelte - Fastify - SQLite">
						A property rental platform where tenants can easily find and connect with landlords, while landlords can efficiently manage their properties, listings, and tenants through a centralized system. More features were incorporated such as secure email/phone OTP authentication, CAPTCHA protection and Google authentication.
					</ProjectCardArticle>
				</ProjectCard>
				<ProjectCard>
					<ProjectCardHeader image="images/akiko.jpeg"> Akiko AI </ProjectCardHeader>
					<ProjectCardArticle author="WebXR/Svelte - Fastify - OpenAI/Ollama API Integration">
						An AI-powered communication training platform designed to help teachers practise and improve how they communicate with students. It provides feedback, suggested responses, and explanations to help teachers improve their communication skills.
					</ProjectCardArticle>
				</ProjectCard>
				{/* <ProjectCard>
					<ProjectCardHeader url="https://github.com/callmeglenn/ITApp-Project" image="images/bob.png"> Bob </ProjectCardHeader>
					<ProjectCardArticle author="Scratch">
						A nifty 3D platformer I've created using Scratch, a language meant for 2D. Game engine and level design written by me. Download 3DEngineProject_13.sb3 and run it on the Scratch website to play.
					</ProjectCardArticle>
				</ProjectCard>
				<ProjectCard>
					<ProjectCardHeader url="https://github.com/callmeglenn/Pawfee-Beans" image="images/pawfee.png"> Pawfee Beans </ProjectCardHeader>
					<ProjectCardArticle author="HTML5 - CSS3">
						A cozy online corner I've crafted all on my own for a busting cat café. This site lets you peek at our adorable feline friends and even shop for cat goodies.
					</ProjectCardArticle>
				</ProjectCard> */}
			</div>
		</SectionWrapper>
	)
}