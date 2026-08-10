export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt?: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  media: ProjectMedia[];
};

const sampleVideo = "https://www.w3schools.com/html/mov_bbb.mp4";

function mediaPlaceholder(text: string, bg = "0b1224") {
  return `https://placehold.co/1200x675/${bg}/ffffff?text=${encodeURIComponent(text)}`;
}

export const projects: Project[] = [
  {
    id: "school-management-system",
    title: "School Management System",
    category: "Software System",
    summary: "Web platform for school records, students, staff, and administration.",
    description:
      "A school management platform designed to handle student records, staff management, classes, attendance, results, and administrative workflows. The system can be adapted for small schools or larger institutions with role-based access.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Database"],
    media: [
      { type: "image", src: mediaPlaceholder("School Dashboard", "0f172a"), alt: "School management dashboard" },
      { type: "video", src: sampleVideo, poster: mediaPlaceholder("School System Demo", "111827") },
      { type: "image", src: mediaPlaceholder("Student Records", "1e293b"), alt: "Student records screen" }
    ]
  },
  {
    id: "library-management-system",
    title: "Library Management System",
    category: "Software System",
    summary: "Cataloging, borrowing, search, and library operations management.",
    description:
      "A library management system for cataloging books, tracking borrowed items, managing returns, searching records, and supporting library staff operations.",
    tags: ["Python", "Flask", "JavaScript", "CSS"],
    media: [
      { type: "image", src: mediaPlaceholder("Library Dashboard", "064e3b"), alt: "Library management dashboard" },
      { type: "video", src: sampleVideo, poster: mediaPlaceholder("Library Demo", "065f46") },
      { type: "image", src: mediaPlaceholder("Book Catalog", "047857"), alt: "Book catalog screen" }
    ]
  },
  {
    id: "car-parking-system",
    title: "Car Parking System",
    category: "Automation System",
    summary: "Automated parking control using sensors and intelligent logic.",
    description:
      "An automated car parking solution using sensors, indicators, and control logic to manage parking space availability and improve vehicle flow.",
    tags: ["Automation", "Sensors", "Control Logic", "Hardware Integration"],
    media: [
      { type: "image", src: mediaPlaceholder("Car Parking Layout", "7c2d12"), alt: "Car parking system layout" },
      { type: "video", src: sampleVideo, poster: mediaPlaceholder("Parking Demo", "9a3412") },
      { type: "image", src: mediaPlaceholder("Sensor Control", "c2410c"), alt: "Parking sensor control" }
    ]
  },
  {
    id: "traffic-lighting-system",
    title: "Traffic Lighting System",
    category: "Automation System",
    summary: "Traffic light control system for safer road coordination.",
    description:
      "A traffic lighting control system designed to coordinate signals, improve road safety, and support timing logic for traffic flow management.",
    tags: ["Traffic Control", "Timing Logic", "Automation", "Field Systems"],
    media: [
      { type: "image", src: mediaPlaceholder("Traffic Light Control", "1e3a8a"), alt: "Traffic lighting control" },
      { type: "video", src: sampleVideo, poster: mediaPlaceholder("Traffic Demo", "1d4ed8") },
      { type: "image", src: mediaPlaceholder("Signal Timing", "2563eb"), alt: "Signal timing diagram" }
    ]
  },
  {
    id: "auto-flushing-system",
    title: "Auto Flushing System",
    category: "Automation System",
    summary: "Automatic flushing system with sensor-based operation.",
    description:
      "An automatic flushing system built for efficiency and hygiene, using sensor-based triggering and controlled actuation.",
    tags: ["Sensor Automation", "Control System", "Embedded Logic"],
    media: [
      { type: "image", src: mediaPlaceholder("Auto Flushing Unit", "3b0764"), alt: "Auto flushing unit" },
      { type: "video", src: sampleVideo, poster: mediaPlaceholder("Flushing Demo", "581c87") },
      { type: "image", src: mediaPlaceholder("Sensor Module", "7e22ce"), alt: "Sensor module" }
    ]
  },
  {
    id: "tank-control-esd-system",
    title: "Automatic Tank Filling / ESD Control",
    category: "Industrial Automation",
    summary: "Tank monitoring, automatic filling, ESD, and safety control.",
    description:
      "An industrial tank monitoring and automatic filling system with safety interlocks, control logic, ESD support, and field device integration.",
    tags: ["Tank Control", "ESD", "Field Devices", "Oil & Gas"],
    media: [
      { type: "image", src: mediaPlaceholder("Tank Control Panel", "111827"), alt: "Tank control panel" },
      { type: "video", src: sampleVideo, poster: mediaPlaceholder("Tank System Demo", "1f2937") },
      { type: "image", src: mediaPlaceholder("Field Devices", "374151"), alt: "Field devices" }
    ]
  }
];