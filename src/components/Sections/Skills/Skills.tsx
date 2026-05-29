import SectionHeader from "../SectionHeader";
import SectionWrapper from "../SectionWrapper";

import { motion } from 'framer-motion';
import SkillsArticle from "./components/SkillsArticle";

export default function Skills() {

	return (
		<SectionWrapper id="skills" className="pt-[8rem]">
			{/* Header */}
			<SectionHeader>Skills</SectionHeader>
			<motion.div
				initial={{ opacity: 0, x: 300 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ ease: "easeOut", duration: 1 }}
				className="grid grid-rows-3 grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 text-center"
			>
				<SkillsArticle title="Front End" logos={["css", "html5", "javascript", "react", "svelte", "tailwindcss", "typescript", "vite", "kotlin"]} />
				<SkillsArticle title="Back End" logos={["mongodb", "mysql", "nestjs", "next.js", "nodedotjs", "postgresql", "sequelize", "sqlite", "php"]} />
				<SkillsArticle title="Tools" logos={["figma", "git", "npm", "postman", "github"]} />
			</motion.div>
		</SectionWrapper>
	)
}