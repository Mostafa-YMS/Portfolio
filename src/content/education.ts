import type { Certification, Education } from "./types";

export const education: Education[] = [
  {
    id: "edu-iti",
    institution: "Information Technology Institute (ITI)",
    degree: "Python Full-Stack Track — Intensive Code Camp",
    endYear: 2021,
    verified: true,
  },
  {
    id: "edu-assiut",
    institution: "Assiut University",
    degree: "Bachelor of Veterinary Medicine",
    endYear: 2019,
    verified: true,
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-cs50x",
    name: "CS50x — Introduction to Computer Science",
    issuer: "Harvard",
    issuedDate: "2021-05",
    verified: true,
  },
  {
    id: "cert-fwd-web-professional",
    name: "FWD Web Professional Track",
    issuer: "FWD",
    issuedDate: "2022-04",
    verified: true,
  },
  {
    id: "cert-react-native-beginner",
    name: "React Native: Beginner Practical Guide",
    issuer: "Udemy",
    issuedDate: "2022-02",
    verified: true,
  },
];
