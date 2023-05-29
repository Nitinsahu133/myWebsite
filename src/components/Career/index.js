import { Component } from "react";
import { Link } from 'react-router-dom'
import hiringImage from '../../assests/WeAreHiringGraphic.png'
import careerHrGraphic from '../../assests/careerHrGraphic.avif'
import './index.css'

const CareerItem = props => {
    const { careerDetails, isExpendedDescription, updateCareerDescriptionExpendId } = props
    const { careerId, careerDesignation, exeperience, qualification, careerLocation, jobDescription } = careerDetails
    const expendCollapseDescription = isExpendedDescription ? jobDescription : jobDescription.slice(0, 3)
    const onClickMoreLessButton = () => {
        updateCareerDescriptionExpendId(careerId)
    }
    let n = 0
    return (
        <li className="job-opening-item">
            <div className="job-opening-item-key-and-value">
                <p className="job-openings-key">Job Post</p>
                <p className="job-openings-key-and-value-colon">:</p>
                <p className="job-openings-key-value">{careerDesignation}</p>
            </div>
            <div className="job-opening-item-key-and-value">
                <p className="job-openings-key">Exeperience</p>
                <p className="job-openings-key-and-value-colon">:</p>
                <p className="job-openings-key-value">{exeperience}</p>
            </div>

            <div className="job-opening-item-key-and-value">
                <p className="job-openings-key">Qualification</p>
                <p className="job-openings-key-and-value-colon">:</p>
                <p className="job-openings-key-value">{qualification}</p>
            </div>
            <div className="job-opening-item-key-and-value">
                <p className="job-openings-key">Location</p>
                <p className="job-openings-key-and-value-colon">:</p>
                <p className="job-openings-key-value">{careerLocation}</p>
            </div>
            <p className="job-openings-key">Description:-</p>
            <ul className="job-description-ul">
                {
                    expendCollapseDescription.map(eachDescription => (
                        <li className="job-description-item" key={n += 1}>{eachDescription}</li>
                    )
                    )
                }
            </ul>
            {jobDescription.length > 3 && <div className="job-description-more-less-button-container">
                <button className="job-description-more-less-button" onClick={onClickMoreLessButton} type="button">{isExpendedDescription ? "...less" : "...more"}</button>
            </div>}
            <div className="job-apply-button-container">
                <Link to={`/job-apply/${careerId}`}>
                    <button className="job-apply-button" type="button">
                        Apply Now
                    </button>
                </Link>
            </div>
        </li>
    )
}

const careerList = [
    {
        careerId: 0,
        careerDesignation: "Site Accountant",
        careerLocation: "Simdega",
        exeperience: "5+ Years",
        qualification: "M.Com, B.Com, MBA, CA",
        jobDescription: [
            "Lorem ipsum is the filler text that typically demonstrates the font and style of a text in a document or visual demonstration.",
            "It serves as a place holder indicating where the text will be in the final iteration.",
            "Originally from Latin, Lorem ipsum has no intelligible meaning.",
            "Lorem ipsum is the filler text that typically demonstrates the font and style of a text in a document or visual demonstration.",
            "It serves as a place holder indicating where the text will be in the final iteration.",
            "Originally from Latin, Lorem ipsum has no intelligible meaning."
        ]
    },
    {
        careerId: 1,
        careerDesignation: "Project Manager",
        careerLocation: "Simdega",
        exeperience: "15+ Years",
        qualification: "M.Tech, B.Tech",
        jobDescription: [
            "Lorem ipsum is the filler text that typically demonstrates the font and style of a text in a document or visual demonstration.",
            "It serves as a place holder indicating where the text will be in the final iteration.",
            "Originally from Latin, Lorem ipsum has no intelligible meaning.",
        ]
    }
]


class Career extends Component {
    state = { careerListApi: careerList, jobDescriptionExpendeCareerId: null }

    updateCareerDescriptionExpendId = careerId => {
        this.setState(prevState => ({ jobDescriptionExpendeCareerId: prevState.jobDescriptionExpendeCareerId === careerId ? null : careerId }))
    }

    render() {
        const { careerListApi, jobDescriptionExpendeCareerId } = this.state
        return (
            <div className="career-main-container">
                <div className="career-element-container">
                    <img className="career-page-image" src={hiringImage} alt="career" />
                    <h1 className="job-openings-main-heading">Job Openings</h1>
                    <ul className="job-openings-ul">
                        {
                            careerListApi.map(eachJob => (
                                <CareerItem key={eachJob.careerId}
                                    careerDetails={eachJob}
                                    isExpendedDescription={jobDescriptionExpendeCareerId === eachJob.careerId}
                                    updateCareerDescriptionExpendId={this.updateCareerDescriptionExpendId}
                                />
                            ))
                        }
                    </ul>
                    <img className="career-page-image" src={careerHrGraphic} alt="career img 2" />
                </div>
            </div>
        )
    }
}
    
export default Career