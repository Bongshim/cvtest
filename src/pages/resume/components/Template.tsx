import Mock from "../../../mock/resume.json";

interface ResumeData {
  introduction: {
    job_title: string;
    firstname: string;
    lastname: string;
    email: string;
    phone_number: string;
    profile_image: string;
    country: string;
    city: string;
    address: string;
    date_of_birth: string;
    postal_code: string;
  };
  summary: string;
  experience: {
    id: number;
    job_title: string;
    employer: string;
    location: string;
    start_date: string;
    end_date: string;
    description: string;
    present: boolean;
  }[];
  education: {
    school: string;
    degree: string;
    location: string;
    description: string;
    start_date: string;
    end_date: string;
  }[];
  links: {
    label: string;
    link: string;
  }[];
  skills: {
    skill: string;
    level: string;
  }[];
  languages: {
    language: string;
    level: string;
  }[];
  certifications: {
    certification_name: string;
    description: string;
    date: string;
  }[];
}

const Template = () => {
  const {
    introduction,
    summary,
    experience,
    education,
    links,
    skills,
    languages,
    certifications,
  } = Mock as ResumeData;

  return (
    <div className="p-4 bg-green-100">
      {/* Introduction Section */}
      <div className="bg-gray-900 text-white">
        <h2>
          {introduction.firstname} {introduction.lastname}
        </h2>
        <p>{introduction.job_title}</p>
        {/* Display other introduction details */}
      </div>

      {/* Summary Section */}
      <div>
        <h3>Summary</h3>
        <p>{summary}</p>
      </div>

      {/* Experience Section */}
      <div>
        <h3>Experience</h3>
        {experience.map((exp, index) => (
          <div key={index}>
            <h4>{exp.job_title}</h4>
            <p>
              {exp.employer} - {exp.location}
            </p>
            <p>
              {exp.start_date} - {exp.present ? "Present" : exp.end_date}
            </p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div>
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <h4>{edu.school}</h4>
            <p>{edu.degree}</p>
            <p>{edu.location}</p>
            <p>
              {edu.start_date} - {edu.end_date}
            </p>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>

      {/* Links Section */}
      <div>
        <h3>Links</h3>
        {links.map((link) => (
          <div key={link.label}>
            <a href={link.link}>{link.label}</a>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div>
        <h3>Skills</h3>
        {skills.map((skill, index) => (
          <div key={index}>
            <p>
              {skill.skill} - {skill.level}
            </p>
          </div>
        ))}
      </div>

      {/* Languages Section */}
      <div>
        <h3>Languages</h3>
        {languages.map((language) => (
          <div key={language.language}>
            <p>
              {language.language} - {language.level}
            </p>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div>
        <h3>Certifications</h3>
        {certifications.map((cert, index) => (
          <div key={index}>
            <h4>{cert.certification_name}</h4>
            <p>{cert.description}</p>
            <p>{cert.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template;
