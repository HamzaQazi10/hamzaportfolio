import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tictac from "../../Assets/Projects/TIC-TAC-TOE.png";
import CVS from "../../Assets/Projects/CVS.png";
import Version from "../../Assets/Projects/FoodApp.jpg";
import Blog from "../../Assets/Projects/Blog.jpg";
import Expenses from "../../Assets/Projects/Airbnb.jpg";
import Property from "../../Assets/Projects/Property.png";
import Covid from "../../Assets/Projects/Covid.jpeg";
import Task from "../../Assets/Projects/Numerical.png";

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					Some of my <strong className="purple">Projects </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on.
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={CVS}
							title="Surveillance System for Detection and Tracking of Interested Objects (such as Human)."
							description="The basic idea is to capture the live feed from surveillance cameras 
							and detect humans and other objects of interest. By analyzing their 
							movements, we generated a heatmap specifically highlighting the
							human activity. From heatmap we came to know the most visited 
							areas of the malls. In this project, for the backend, we utilized 
							Django, while React served as our frontend framework. As for the 
							database, we opted for Postgres. To achieve the multi-processing, 
							Multiprocessing library is used. We had used CV2 library for Image 
							Processing"
							techstack="React | Django  | Postgrec | Framer | Charts.js"
							/* git="https://github.com/Hamza Arshad Qazi/Document-CVS-Centralized-Verion-Control-System-Full-stack-APP"
						 *//>
					</Col>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Version}
							title="Jaarit Food Web App"
							description="This is a React Animated Food App. In this app I have  used Parallax Library to achieve motion of objects on Mouse Movement."
							techstack="React | Firebase | Parallax"
							git="https://github.com/HamzaQazi10/JaritFoodReact"
						/>
					</Col>


					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Expenses}
							title="React Airbnb Clone"
							description="A simple Airbnb clone in React. In this project, I tried to use as many React JS Hooks. Also I have get some of the data from external API. As per requirement i have done Firebase Authentication and Authorization"
							techstack="React | Firebase | Swiper"
							git="https://github.com/HamzaQazi10/React-AirbnbClone-Firebase/"
						/>
					</Col>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Blog}
							title="React Native Hotel Booking"
							description="This is a React Native project in which I have cloned the Airbnb app. It’s a hotel booking app with almost same functionalities that was provided in airbnb. The unique thing in this project is that the addition of biding feature. Firebase is used as a database in this project"
							techstack="ReactNative | Firebase "
							git="https://github.com/HamzaQazi10/REACT-AirbnbClone"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Property}
							title="Property Sale Purchase Web APP"
							description="This is a full stack web development project having backend in the Laravel. In this project, user can post ad of property for both rent and sale. Session management was also done in this project. In the frontend, I have used HTML, CSS, Bootstrap and Javascript with jquery. I also deployed that project on free webhosting platform."
							techstack="HTML | CSS | Laravel | MySQL"
							git="https://github.com/HamzaQazi10/PropertyWebsiteLaravelFull"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Task}
							title="Problem Solving"
							description="I have created some optimise Algorithm for Approximation in Numerical Computing for different Scenario's"
							techstack="Python | Hybrid Approximations"
							git="https://github.com/HamzaQazi10/NumericalComputingForApproximationPython"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Covid}
							title="CovidApp"
							description="A simple App which Tracks take cases of covid 19 Globally an for individual 
							countries it uses third party Api."
							techstack="React Native"
							git="https://github.com/HamzaQazi10/ReactandReactnativeProjects/tree/main/covid-analysis-API"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={tictac}
							title="Tic Tac Toe"
							description="A simple game where two players can play TIC TAC TOE 
							and get the winner or draw."
							techstack="React Native"
							git="https://github.com/HamzaQazi10/ReactandReactnativeProjects/tree/main/tic-tac-toe-game"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
