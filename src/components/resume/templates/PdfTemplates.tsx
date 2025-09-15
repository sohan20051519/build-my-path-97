import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { ResumeData } from '@/types/resume';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 10,
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  contact: {
    fontSize: 10,
    color: 'grey',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  entry: {
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 11,
  },
  date: {
    fontSize: 10,
    color: 'grey',
  },
  description: {
    fontSize: 10,
  },
});

const formatDate = (dateString: string, current: boolean = false) => {
    if (current) return "Present";
    if (!dateString) return "";
    const date = new Date(dateString + "-01");
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
};

export const ClassicPdf = ({ data }: { data: ResumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>{data.personalInfo.fullName || "Your Name"}</Text>
        <Text style={styles.contact}>
          {[
            data.personalInfo.location,
            data.personalInfo.phone,
            data.personalInfo.email,
            data.personalInfo.linkedin,
            data.personalInfo.website,
          ].filter(Boolean).join(' | ')}
        </Text>
      </View>

      {data.professionalSummary && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.description}>{data.professionalSummary}</Text>
        </View>
      )}

      {data.skills.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {data.skills.map(skill => (
            <Text key={skill.id} style={styles.description}>- {skill.name}</Text>
          ))}
        </View>
      )}

      {data.workExperience.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {data.workExperience.map(exp => (
            <View key={exp.id} style={styles.entry}>
              <Text style={styles.jobTitle}>{exp.jobTitle}</Text>
              <Text style={styles.company}>{exp.company}{exp.location && `, ${exp.location}`}</Text>
              <Text style={styles.date}>{formatDate(exp.startDate)} - {formatDate(exp.endDate, exp.current)}</Text>
              {exp.description && exp.description.split('\\n').map((line, i) => (
                <Text key={i} style={styles.description}>- {line}</Text>
              ))}
            </View>
          ))}
        </View>
      )}

      {data.education.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {data.education.map(edu => (
            <View key={edu.id} style={styles.entry}>
              <Text style={styles.jobTitle}>{edu.degree}</Text>
              <Text style={styles.company}>{edu.school}{edu.location && `, ${edu.location}`}</Text>
              <Text style={styles.date}>{formatDate(edu.graduationDate)}</Text>
            </View>
          ))}
        </View>
      )}
    </Page>
  </Document>
);

const minimalistStyles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: 30,
    },
    leftColumn: {
        width: '30%',
        paddingRight: 15,
        borderRightWidth: 2,
        borderRightColor: '#000000'
    },
    rightColumn: {
        width: '70%',
        paddingLeft: 15,
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    contactInfo: {
        fontSize: 10,
        marginBottom: 5,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        borderBottomWidth: 2,
        borderBottomColor: '#000000',
        paddingBottom: 5,
        marginBottom: 10,
    },
    entry: {
        marginBottom: 10,
    },
    jobTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    company: {
        fontSize: 12,
    },
    date: {
        fontSize: 10,
        color: 'grey',
    },
    description: {
        fontSize: 10,
        marginTop: 5,
    },
    skill: {
        fontSize: 10,
        marginBottom: 3,
    }
});

export const MinimalistExpertPdf = ({ data }: { data: ResumeData }) => (
    <Document>
        <Page size="A4" style={minimalistStyles.page}>
            <View style={minimalistStyles.leftColumn}>
                <Text style={minimalistStyles.name}>{data.personalInfo.fullName || "Your Name"}</Text>
                <Text style={minimalistStyles.contactInfo}>{data.personalInfo.email}</Text>
                <Text style={minimalistStyles.contactInfo}>{data.personalInfo.phone}</Text>
                <Text style={minimalistStyles.contactInfo}>{data.personalInfo.location}</Text>
                <Text style={minimalistStyles.contactInfo}>{data.personalInfo.linkedin}</Text>
                <Text style={minimalistStyles.contactInfo}>{data.personalInfo.website}</Text>
            </View>
            <View style={minimalistStyles.rightColumn}>
                {data.professionalSummary && (
                    <View style={minimalistStyles.section}>
                        <Text style={minimalistStyles.sectionTitle}>Summary</Text>
                        <Text style={minimalistStyles.description}>{data.professionalSummary}</Text>
                    </View>
                )}
                {data.workExperience.length > 0 && (
                    <View style={minimalistStyles.section}>
                        <Text style={minimalistStyles.sectionTitle}>Experience</Text>
                        {data.workExperience.map(exp => (
                            <View key={exp.id} style={minimalistStyles.entry}>
                                <Text style={minimalistStyles.jobTitle}>{exp.jobTitle}</Text>
                                <Text style={minimalistStyles.company}>{exp.company}, {exp.location}</Text>
                                <Text style={minimalistStyles.date}>{formatDate(exp.startDate)} - {formatDate(exp.endDate, exp.current)}</Text>
                                {exp.description && exp.description.split('\\n').map((line, i) => (
                                    <Text key={i} style={minimalistStyles.description}>• {line}</Text>
                                ))}
                            </View>
                        ))}
                    </View>
                )}
                {data.education.length > 0 && (
                    <View style={minimalistStyles.section}>
                        <Text style={minimalistStyles.sectionTitle}>Education</Text>
                        {data.education.map(edu => (
                            <View key={edu.id} style={minimalistStyles.entry}>
                                <Text style={minimalistStyles.jobTitle}>{edu.degree}</Text>
                                <Text style={minimalistStyles.company}>{edu.school}, {edu.location}</Text>
                                <Text style={minimalistStyles.date}>{formatDate(edu.graduationDate)}</Text>
                            </View>
                        ))}
                    </View>
                )}
                {data.skills.length > 0 && (
                    <View style={minimalistStyles.section}>
                        <Text style={minimalistStyles.sectionTitle}>Skills</Text>
                        {data.skills.map(skill => (
                            <Text key={skill.id} style={minimalistStyles.skill}>{skill.name}</Text>
                        ))}
                    </View>
                )}
            </View>
        </Page>
    </Document>
);

const timelessStyles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#333333',
  },
  contact: {
    fontSize: 10,
    color: '#666666',
    marginTop: 5,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444444',
    borderBottomWidth: 2,
    borderBottomColor: '#cccccc',
    paddingBottom: 5,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  entry: {
    marginBottom: 10,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  jobTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
  },
  company: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#555555',
    marginTop: 2,
  },
  date: {
    fontSize: 10,
    color: '#666666',
  },
  description: {
    fontSize: 10,
    color: '#444444',
    marginTop: 5,
  },
  skill: {
    backgroundColor: '#f0f0f0',
    color: '#333333',
    padding: 5,
    borderRadius: 5,
    fontSize: 10,
    marginRight: 5,
    marginBottom: 5,
  },
  skillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

export const TimelessProfessionalPdf = ({ data }: { data: ResumeData }) => (
  <Document>
    <Page size="A4" style={timelessStyles.page}>
      <View style={timelessStyles.header}>
        <Text style={timelessStyles.name}>{data.personalInfo.fullName || "Your Name"}</Text>
        <Text style={timelessStyles.contact}>
          {[
            data.personalInfo.location,
            data.personalInfo.phone,
            data.personalInfo.email,
            data.personalInfo.linkedin,
            data.personalInfo.website,
          ].filter(Boolean).join(' | ')}
        </Text>
      </View>

      {data.professionalSummary && (
        <View style={timelessStyles.section}>
          <Text style={timelessStyles.sectionTitle}>Professional Summary</Text>
          <Text style={timelessStyles.description}>{data.professionalSummary}</Text>
        </View>
      )}

      {data.workExperience.length > 0 && (
        <View style={timelessStyles.section}>
          <Text style={timelessStyles.sectionTitle}>Work Experience</Text>
          {data.workExperience.map(exp => (
            <View key={exp.id} style={timelessStyles.entry}>
              <View style={timelessStyles.flexRow}>
                <Text style={timelessStyles.jobTitle}>{exp.jobTitle}</Text>
                <Text style={timelessStyles.date}>{formatDate(exp.startDate)} - {formatDate(exp.endDate, exp.current)}</Text>
              </View>
              <Text style={timelessStyles.company}>{exp.company}{exp.location && `, ${exp.location}`}</Text>
              {exp.description && (
                <View style={{ marginTop: 5 }}>
                  {exp.description.split('\\n').map((line, i) => (
                    <Text key={i} style={timelessStyles.description}>• {line}</Text>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      )}

      {data.education.length > 0 && (
        <View style={timelessStyles.section}>
          <Text style={timelessStyles.sectionTitle}>Education</Text>
          {data.education.map(edu => (
            <View key={edu.id} style={timelessStyles.entry}>
               <View style={timelessStyles.flexRow}>
                <Text style={timelessStyles.jobTitle}>{edu.degree}</Text>
                <Text style={timelessStyles.date}>{formatDate(edu.graduationDate)}</Text>
              </View>
              <Text style={timelessStyles.company}>{edu.school}{edu.location && `, ${edu.location}`}</Text>
            </View>
          ))}
        </View>
      )}

      {data.skills.length > 0 && (
        <View style={timelessStyles.section}>
          <Text style={timelessStyles.sectionTitle}>Skills</Text>
          <View style={timelessStyles.skillContainer}>
            {data.skills.map(skill => (
              <Text key={skill.id} style={timelessStyles.skill}>{skill.name}</Text>
            ))}
          </View>
        </View>
      )}
    </Page>
  </Document>
);
