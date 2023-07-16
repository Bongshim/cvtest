import React from "react";

function useFetchData() {
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

  const [data, setData] = React.useState<ResumeData | null>(null);


  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./data/resume.json");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return { data };
}

export default useFetchData;
