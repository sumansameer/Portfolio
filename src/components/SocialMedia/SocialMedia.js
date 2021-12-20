import { useSelector } from "react-redux";
import { StyleWrapper } from "./SocialMedia.styled";
import {
  SiGithub,
  SiLinkedin,
  SiGmail,
} from "react-icons/si";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import resume from "../../assets/resume/SumanSameer-ReactJS.pdf";
import { HiCloudDownload } from "react-icons/hi";


const SocialMedia = () => {
  const linkedin = useSelector((state) => state.linkedin);
  const github = useSelector((state) => state.github);
  const emailId = useSelector((state) => state.emailId);
  const [openCopy, setOpenCopy] = useState();
  
    const [isNavOpen, setIsNavOpen] = useState(false);
    
    

  const handleClick = () => {
    setOpenCopy(true);
    navigator.clipboard.writeText(emailId);
    setTimeout(() => {
      setOpenCopy(false);
    }, 2000);
  };

  const action = (
    <>
      <IconButton size="small" aria-label="close" color="inherit"></IconButton>
    </>
  );

  return (
    <StyleWrapper
      id="connect"
      className="d-flex flex-column align-items-center w-100"
    >
      <h1>Say Hello</h1>
      <div className="d-flex justify-content-evenly align-items-center">
        <div className="social-wrapper">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <SiGithub className="social-icon" />
          </a>
        </div>
        <div className="social-wrapper">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <SiLinkedin className="social-icon" />
          </a>
        </div>
        <div className="social-wrapper">
          <SiGmail className="social-icon" onClick={handleClick} />
          <Snackbar
            open={openCopy}
            autoHideDuration={2000}
            message="Email ID Copied"
            action={action}
          />
        </div>
      </div>
      <div>
      <a
                href={resume}
                download="SumanSameer-ReactJS.pdf"
                className="nav-link"
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                }}
              >
                Resume
                <HiCloudDownload className="download-icon" />
              </a>
      </div>
    </StyleWrapper>
  );
};

export default SocialMedia;
