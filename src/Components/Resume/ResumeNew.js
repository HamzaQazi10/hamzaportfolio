import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Card, CardMedia } from "@mui/material";
function ResumeNew() {
	const [width, setWidth] = useState(1200);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);
//https://drive.google.com/file/d/1mLnPju79wXa-gjpKNzFXB-pnrIJhy8y4/view?usp=sharing
//https://drive.google.com/uc?export=download&id=1mLnPju79wXa-gjpKNzFXB-pnrIJhy8y4
//https://drive.google.com/file/d/1mLnPju79wXa-gjpKNzFXB-pnrIJhy8y4/preview
	return (
		<div>
			<Container fluid className="resume-section">
				<Particle />
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button
						variant="primary"
						href={
							"https://drive.google.com/file/d/1hN6JsIiJg4D2Q0icYyhBMA-EXFae3Cmx/view?usp=sharing"
						}
						target="_blank"
					>
						<AiOutlineDownload />
						&nbsp;Download CV
					</Button>
				</Row>

				<Row className="resume">
					<Card sx={{ maxWidth: 824 }}>
						<CardMedia
							className="cardmedia"
							component="iframe"
							Height="1056px"
							src="https://asset.cloudinary.com/dcst0kfwc/49b60265c13b7e3947a59c6b0e5e7da4"

						/>
					</Card>
				</Row>

				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button
						variant="primary"
						href={
							"https://drive.google.com/file/d/1hN6JsIiJg4D2Q0icYyhBMA-EXFae3Cmx/view?usp=sharing"
						}
						target="_blank"
					>
						<AiOutlineDownload />
						&nbsp;Download CV
					</Button>
				</Row>
			</Container>
		</div>
	);
}

export default ResumeNew;
