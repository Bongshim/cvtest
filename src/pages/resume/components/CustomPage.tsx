import { Document, Page, Text, View } from "@react-pdf/renderer";
import Mock from "../../../mock/resume.json";
import { Style } from "@react-pdf/types";

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

const CustomPage = () => {
  const resumeData = Mock as ResumeData;

  return (
    <Document>
      <Page  style={styles.page}>
        <View style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.textFont}>
              {resumeData.introduction.firstname}{" "}
              {resumeData.introduction.lastname}
            </Text>
            <Text style={styles.textFont}>Job Title: {resumeData.introduction.job_title}</Text>
            <Text style={styles.textFont}>Email: {resumeData.introduction.email}</Text>
            <Text style={styles.textFont}>Phone: {resumeData.introduction.phone_number}</Text>
          </View>

          <View style={styles.section}>
            <Text>Summary: {resumeData.summary}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {resumeData.experience.map((exp) => (
              <View key={exp.id} style={styles.subSection}>
                <Text>{exp.job_title}</Text>
                <Text>Employer: {exp.employer}</Text>
                <Text>Location: {exp.location}</Text>
                <Text>Start Date: {exp.start_date}</Text>
                <Text>End Date: {exp.end_date}</Text>
                <Text>Description: {exp.description}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {resumeData.education.map((edu, index) => (
              <View key={index} style={styles.subSection}>
                <Text>{edu.school}</Text>
                <Text>Degree: {edu.degree}</Text>
                <Text>Location: {edu.location}</Text>
                <Text>Start Date: {edu.start_date}</Text>
                <Text>End Date: {edu.end_date}</Text>
                <Text>Description: {edu.description}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Links</Text>
            {resumeData.links.map((link, index) => (
              <View key={index} style={styles.subSection}>
                <Text>{link.label}</Text>
                <Text>Link: {link.link}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            {resumeData.skills.map((skill, index) => (
              <View key={index} style={styles.subSection}>
                <Text>Skill: {skill.skill}</Text>
                <Text>Level: {skill.level}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Languages</Text>
            {resumeData.languages.map((language, index) => (
              <View key={index} style={styles.subSection}>
                <Text>Language: {language.language}</Text>
                <Text>Level: {language.level}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            {resumeData.certifications.map((certification, index) => (
              <View key={index} style={styles.subSection}>
                <Text>
                  Certification Name: {certification.certification_name}
                </Text>
                <Text>Description: {certification.description}</Text>
                <Text>Date: {certification.date}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

const styles = {
  page: {
    backgroundColor: "#fefae0", // Pastel background color
    padding: "20px",
    borderRadius: "10px",
  } as Style,
  container: {
    // flex: 1,
  } as Style,
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  } as Style,
  subSection: {
    marginLeft: 10,
  },
  textFont: {
    fontSize: 16,
  }
};

export default CustomPage;
