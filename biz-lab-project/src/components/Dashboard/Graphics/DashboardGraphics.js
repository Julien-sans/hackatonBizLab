import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {Doughnut, Bar, Line} from 'react-chartjs-2';

const doughnutData = {
	labels: [
		'Chat',
		'Chat vocal',
		'Google Drive',
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
		],
		hoverBackgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
		]
	}]
};

const barData = {
	labels: ['Projet #1', 'Projet #2', 'Projet #3', 'Projet #4', 'Projet #5', 'Projet #6'],
	datasets: [
		{
			label: 'Projets les plus commentés',
			backgroundColor: 'rgb(255,99,132)',
			borderColor: 'rgb(255,99,132)',
			borderWidth: 1,
			hoverBackgroundColor: 'rgb(255,99,132)',
			hoverBorderColor: 'rgb(255,99,132)',
			data: [65, 59, 80, 81, 56, 55, 40]
		}
	]
};

const lineData = {
	labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
	datasets: [
		{
			label: 'Janvier',
			fill: true,
			lineTension: 0.1,
			backgroundColor: 'rgba(75,192,192,0.4)',
			borderColor: 'rgba(75,192,192,1)',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: 'rgba(75,192,192,1)',
			pointBackgroundColor: '#fff',
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: 'rgba(75,192,192,1)',
			pointHoverBorderColor: 'rgba(220,220,220,1)',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: [65, 59, 80, 81, 56, 55, 40, 12, 45, 30, 58, 62, 75, 75, 75, 48, 30, 35, 19, 22, 28, 45, 56, 54, 50, 60, 62, 57, 40, 36, 42, 47]
		}
	]
};

const Background = styled.div`
background-color: lightgrey;
padding: 20px;
height: 100%;
`;

class DashboardGraphics extends Component {
	render() {
		const { project } = this.props;
		let projectLength = project.length;
		let projectName = project.map(project => project.name);
		console.log(projectName)
		return (
			<Container fluid>
				<Row>
					<Col lg="2">
						<Background>
							<Container>
								<Row>
									<Col className="text-center">
										<h2  className="m-0" style={{fontSize: '7em'}}>{projectLength}</h2>
										<h4 className="m-0">projets</h4>
									</Col>
								</Row>
							</Container>
						</Background>
					</Col>
					<Col lg="4">
						<Background>
							<Doughnut data={doughnutData} />
						</Background>
					</Col>
					<Col lg="6">
						<Background>
							<Bar
								data={barData}
								width={100}
								height={50}
								options={{
									maintainAspectRatio: false
								}}
							/>
						</Background>
					</Col>
				</Row>
				<Row className="mt-3">
					<Col lg="12">
						<Background>
							<Line data={lineData} />
						</Background>
					</Col>
				</Row>
			</Container>

		);
	}
}

const mapStateToProps = (state) => {
	return {
		expanded: state.aside.expanded,
		project: state.forms.project
	}
};

export default connect(mapStateToProps)(DashboardGraphics);
