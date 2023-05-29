import { Component } from 'react'
import projectImage from '../../assests/projectPageImage.jpg'
import './index.css'

const projectList = [
    { projectId: 0, project: "What Does Lorem Ipsum Mean?", client: "It serves as a place holder indicating where the text will be in the final iteration.", projectCost: "135.00 Cr", projectStatus: "ONGOING" },
    { projectId: 1, project: "Techopedia Explains Lorem Ipsum", client: "Originally from Latin, Lorem ipsum has no intelligible meaning.", projectCost: "100.00 Cr", projectStatus: "ONGOING" },
    { projectId: 2, project: "Lorem ipsum dolor sit amet", client: "It has been used by printers as placeholder text since the 16th century.", projectCost: "500.00 Cr", projectStatus: "COMPLETE" },
    { projectId: 3, project: "When Will AI Replace Writers?", client: "humor or even profanities.", projectCost: "350.00 Cr", projectStatus: "COMPLETE" },
]

class Projects extends Component {
    state = { projectApiList: [] }

    componentDidMount = () => {
        this.setState({ projectApiList: projectList })
    }


    render() {
        const { projectApiList } = this.state
        const ongoingPoject = projectApiList.filter(eachProject => (eachProject.projectStatus === "ONGOING"))
        const completePoject = projectApiList.filter(eachProject => (eachProject.projectStatus === "COMPLETE"))
        return (
            <div className='projects-main-container'>
                <div className='projects-element-container'>
                    <img className="project-page-image" src={projectImage} alt="Project" />
                    <div>
                        <h1 className='project-status-heading'>Ongoing Projects</h1>
                        <ul className='projects-ul'>
                            {
                                ongoingPoject.map(eachProject => (
                                    <li className='project-item' key={eachProject.projectId}>

                                        <p className='project-details-pargraph'><span className='project-value-keys'>Project Name: </span>{eachProject.project}</p>
                                        <p className='project-details-pargraph'><span className='project-value-keys'>Client: </span>{eachProject.client}</p>
                                        <p className='project-details-pargraph'><span className='project-value-keys'>Project Cost: </span>{eachProject.projectCost}</p>

                                    </li>
                                ))
                            }
                        </ul>
                        <h1 className='project-status-heading'>Complete Projects</h1>
                        <ul className='projects-ul'>
                            {
                                completePoject.map(eachProject => (
                                    <li className='project-item' key={eachProject.projectId}>
                                        <p className='project-details-pargraph'><span className='project-value-keys'>Project Name: </span>{eachProject.project}</p>
                                        <p className='project-details-pargraph'><span className='project-value-keys'>Client: </span>{eachProject.client}</p>
                                        <p className='project-details-pargraph'><span className='project-value-keys'>Project Cost: </span>{eachProject.projectCost}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects