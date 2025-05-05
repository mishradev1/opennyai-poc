export const casesData = [
  {
    id: "DLHC-2023-5612",
    title: "Singh vs. Delhi Housing Authority",
    type: "Property Dispute",
    status: "active",
    clientName: "Rajesh Singh",
    clientContact: "+91 98765 43210",
    clientEmail: "rajesh.singh@email.com",
    dateFiled: "2023-08-15",
    courtName: "Delhi High Court",
    assignedParalegal: "Priya Sharma",
    description: "Dispute regarding property inheritance and title deed verification. Client claims rightful ownership of ancestral property in South Delhi.",
    documents: [
      { id: "doc1", name: "Title Deed.pdf", type: "application/pdf", date: "2023-08-15" },
      { id: "doc2", name: "Property Survey Report.pdf", type: "application/pdf", date: "2023-09-02" },
      { id: "doc3", name: "Previous Court Orders.pdf", type: "application/pdf", date: "2023-09-15" }
    ],
    timeline: [
      { date: "2023-08-15", event: "Case Filed", details: "Initial documentation submitted to Delhi High Court" },
      { date: "2023-09-10", event: "First Hearing", details: "Court requested additional property documents" },
      { date: "2023-10-05", event: "Document Submission", details: "Submitted ancestral property documents and family tree" },
      { date: "2023-11-15", event: "Interim Order", details: "Court provided temporary relief preventing any sale of disputed property" }
    ],
    actionItems: [
      { id: "action1", task: "Prepare counter-affidavit", dueDate: "2023-12-10", status: "pending" },
      { id: "action2", task: "Collect additional witnesses", dueDate: "2023-12-15", status: "completed" }
    ],
    notes: [
      { id: "note1", content: "Client has ancestral documents dating back to 1952", date: "2023-08-20", author: "Priya Sharma" },
      { id: "note2", content: "Opposing party claims purchase from client's uncle in 1998", date: "2023-09-12", author: "Advocate Mehta" }
    ]
  },
  {
    id: "SCHC-2023-8712",
    title: "Verma vs. SuperTech Electronics",
    type: "Consumer Grievance",
    status: "pending",
    clientName: "Sunita Verma",
    clientContact: "+91 87654 32109",
    clientEmail: "sunita.verma@email.com",
    dateFiled: "2023-09-20",
    courtName: "State Consumer Disputes Redressal Commission",
    assignedParalegal: "Amit Kumar",
    description: "Complaint regarding defective refrigerator purchased from SuperTech Electronics. Multiple repair attempts failed.",
    documents: [
      { id: "doc1", name: "Purchase Invoice.pdf", type: "application/pdf", date: "2023-09-20" },
      { id: "doc2", name: "Service Reports.pdf", type: "application/pdf", date: "2023-09-25" }
    ],
    timeline: [
      { date: "2023-09-20", event: "Complaint Filed", details: "Filed consumer complaint with product details" },
      { date: "2023-10-12", event: "Notice Issued", details: "Commission issued notice to SuperTech Electronics" },
      { date: "2023-11-05", event: "Response Received", details: "Retailer submitted their explanation for product issues" }
    ],
    actionItems: [
      { id: "action1", task: "Prepare rejoinder", dueDate: "2023-12-05", status: "pending" },
      { id: "action2", task: "Arrange product inspection", dueDate: "2023-12-12", status: "pending" }
    ],
    notes: [
      { id: "note1", content: "Client has video evidence of malfunction", date: "2023-09-22", author: "Amit Kumar" },
      { id: "note2", content: "SuperTech offering partial refund of 40%", date: "2023-11-10", author: "Advocate Gupta" }
    ]
  },
  {
    id: "FCBR-2023-1254",
    title: "Kumar vs. Kumar",
    type: "Family Law",
    status: "resolved",
    clientName: "Meena Kumar",
    clientContact: "+91 76543 21098",
    clientEmail: "meena.kumar@email.com",
    dateFiled: "2023-07-05",
    courtName: "Family Court, Bengaluru",
    assignedParalegal: "Deepak Patel",
    description: "Divorce proceedings and child custody dispute. Client seeking primary custody of two minor children.",
    documents: [
      { id: "doc1", name: "Marriage Certificate.pdf", type: "application/pdf", date: "2023-07-05" },
      { id: "doc2", name: "Child Welfare Report.pdf", type: "application/pdf", date: "2023-07-20" },
      { id: "doc3", name: "Income Statement.pdf", type: "application/pdf", date: "2023-08-10" }
    ],
    timeline: [
      { date: "2023-07-05", event: "Petition Filed", details: "Filed divorce petition with custody request" },
      { date: "2023-08-15", event: "Counseling Session", details: "Mandatory counseling attempted but unsuccessful" },
      { date: "2023-09-25", event: "Court Hearing", details: "Initial hearing with both parties present" },
      { date: "2023-11-10", event: "Settlement", details: "Parties reached mutual agreement on terms" },
      { date: "2023-11-30", event: "Final Decree", details: "Court approved settlement with joint custody arrangement" }
    ],
    actionItems: [
      { id: "action1", task: "File maintenance application", dueDate: "2023-12-15", status: "completed" },
      { id: "action2", task: "Prepare custody schedule document", dueDate: "2023-12-20", status: "completed" }
    ],
    notes: [
      { id: "note1", content: "Client prioritizes children's education continuity", date: "2023-07-10", author: "Deepak Patel" },
      { id: "note2", content: "Opposing party amenable to joint custody with conditions", date: "2023-09-30", author: "Advocate Joshi" }
    ]
  },
  {
    id: "BLRC-2023-3476",
    title: "Sharma Textiles vs. Bank of Rajasthan",
    type: "Commercial Dispute",
    status: "active",
    clientName: "Vikram Sharma",
    clientContact: "+91 65432 10987",
    clientEmail: "vikram.sharma@sharmatextiles.com",
    dateFiled: "2023-10-10",
    courtName: "Bengaluru Commercial Court",
    assignedParalegal: "Nisha Reddy",
    description: "Dispute regarding loan restructuring and alleged unfair interest charges by the bank. Client claims breach of loan agreement terms.",
    documents: [
      { id: "doc1", name: "Loan Agreement.pdf", type: "application/pdf", date: "2023-10-10" },
      { id: "doc2", name: "Interest Payment History.pdf", type: "application/pdf", date: "2023-10-15" },
      { id: "doc3", name: "Business Financial Statements.pdf", type: "application/pdf", date: "2023-10-22" }
    ],
    timeline: [
      { date: "2023-10-10", event: "Case Filed", details: "Filed commercial dispute claiming unfair banking practices" },
      { date: "2023-10-30", event: "Notice Served", details: "Bank received formal court notice" },
      { date: "2023-11-25", event: "Bank Response", details: "Bank submitted defense denying allegations" }
    ],
    actionItems: [
      { id: "action1", task: "Analysis of bank statements", dueDate: "2023-12-20", status: "pending" },
      { id: "action2", task: "Consult financial expert witness", dueDate: "2023-12-30", status: "pending" }
    ],
    notes: [
      { id: "note1", content: "Client has documented all communications with bank officials", date: "2023-10-12", author: "Nisha Reddy" },
      { id: "note2", content: "Look into similar cases against this bank branch", date: "2023-11-05", author: "Senior Advocate Malhotra" }
    ]
  },
  {
    id: "MPHC-2023-9078",
    title: "Mehta vs. Indore Municipal Corporation",
    type: "Public Interest Litigation",
    status: "pending",
    clientName: "Arjun Mehta",
    clientContact: "+91 54321 09876",
    clientEmail: "arjun.mehta@email.com",
    dateFiled: "2023-09-05",
    courtName: "Madhya Pradesh High Court",
    assignedParalegal: "Sanjay Verma",
    description: "PIL regarding inadequate waste management facilities in residential areas. Petitioner represents local resident welfare association.",
    documents: [
      { id: "doc1", name: "Environmental Report.pdf", type: "application/pdf", date: "2023-09-05" },
      { id: "doc2", name: "Resident Signatures.pdf", type: "application/pdf", date: "2023-09-10" },
      { id: "doc3", name: "Area Photographs.pdf", type: "application/pdf", date: "2023-09-15" }
    ],
    timeline: [
      { date: "2023-09-05", event: "PIL Filed", details: "Filed petition with environmental impact evidence" },
      { date: "2023-10-02", event: "Court Notice", details: "Court issued notice to Municipal Corporation" },
      { date: "2023-11-15", event: "Government Response", details: "Corporation submitted timeline for new waste management system" }
    ],
    actionItems: [
      { id: "action1", task: "Follow up on implementation timeline", dueDate: "2024-01-10", status: "pending" },
      { id: "action2", task: "Collect updated resident testimonials", dueDate: "2024-01-15", status: "pending" }
    ],
    notes: [
      { id: "note1", content: "Similar PIL was successful in neighboring district last year", date: "2023-09-07", author: "Sanjay Verma" },
      { id: "note2", content: "Municipal commissioner requested out-of-court meeting", date: "2023-11-20", author: "Advocate Khanna" }
    ]
  },
  {
    id: "DLDC-2023-6254",
    title: "GoFast Logistics vs. Pawar Enterprises",
    type: "Contract Dispute",
    status: "active",
    clientName: "Ravi Agarwal",
    clientContact: "+91 43210 98765",
    clientEmail: "ravi@gofastlogistics.in",
    dateFiled: "2023-08-22",
    courtName: "Delhi District Court",
    assignedParalegal: "Mira Kapoor",
    description: "Breach of contract case regarding non-payment for logistics services provided. Client seeking payment recovery and damages.",
    documents: [
      { id: "doc1", name: "Service Agreement.pdf", type: "application/pdf", date: "2023-08-22" },
      { id: "doc2", name: "Delivery Receipts.pdf", type: "application/pdf", date: "2023-08-25" },
      { id: "doc3", name: "Invoice Copies.pdf", type: "application/pdf", date: "2023-08-30" }
    ],
    timeline: [
      { date: "2023-08-22", event: "Case Filed", details: "Filed breach of contract petition with evidence" },
      { date: "2023-09-15", event: "Notice Served", details: "Defendant received court summons" },
      { date: "2023-10-10", event: "Defendant Response", details: "Defendant claimed services were substandard" },
      { date: "2023-11-05", event: "Mediation Attempt", details: "Court-mandated mediation was unsuccessful" }
    ],
    actionItems: [
      { id: "action1", task: "Compile service quality evidence", dueDate: "2023-12-20", status: "pending" },
      { id: "action2", task: "Interview delivery personnel as witnesses", dueDate: "2023-12-25", status: "pending" }
    ],
    notes: [
      { id: "note1", content: "Client has complete GPS tracking records of all deliveries", date: "2023-08-24", author: "Mira Kapoor" },
      { id: "note2", content: "Opposing party has history of similar payment disputes", date: "2023-09-20", author: "Advocate Singh" }
    ]
  },
  {
    id: "KRHC-2023-2187",
    title: "Nair vs. Kerala State Electricity Board",
    type: "Administrative Dispute",
    status: "resolved",
    clientName: "Thomas Nair",
    clientContact: "+91 32109 87654",
    clientEmail: "thomas.nair@email.com",
    dateFiled: "2023-06-12",
    courtName: "Kerala High Court",
    assignedParalegal: "Anita Menon",
    description: "Petition against excessive electricity billing and wrongful disconnection. Client seeking connection restoration and compensation.",
    documents: [
      { id: "doc1", name: "Previous Bills.pdf", type: "application/pdf", date: "2023-06-12" },
      { id: "doc2", name: "Meter Reading Photos.pdf", type: "application/pdf", date: "2023-06-15" },
      { id: "doc3", name: "Complaint Correspondence.pdf", type: "application/pdf", date: "2023-06-20" }
    ],
    timeline: [
      { date: "2023-06-12", event: "Petition Filed", details: "Filed against KSEB with billing evidence" },
      { date: "2023-07-05", event: "Interim Order", details: "Court ordered temporary reconnection pending case resolution" },
      { date: "2023-08-15", event: "KSEB Investigation", details: "Board submitted report acknowledging meter malfunction" },
      { date: "2023-10-20", event: "Final Order", details: "Court ruled in client's favor with compensation awarded" }
    ],
    actionItems: [
      { id: "action1", task: "Follow up on compensation payment", dueDate: "2023-12-05", status: "completed" },
      { id: "action2", task: "Request corrected bill issuance", dueDate: "2023-12-10", status: "completed" }
    ],
    notes: [
      { id: "note1", content: "Technical expert confirmed meter reading inconsistencies", date: "2023-07-20", author: "Anita Menon" },
      { id: "note2", content: "KSEB agreed to review billing procedures for entire neighborhood", date: "2023-10-25", author: "Advocate Joseph" }
    ]
  }
];

export const caseStatistics = {
  total: 7,
  active: 3,
  pending: 2,
  resolved: 2,
  caseTypes: {
    "Property Dispute": 1,
    "Consumer Grievance": 1,
    "Family Law": 1,
    "Commercial Dispute": 1,
    "Public Interest Litigation": 1,
    "Contract Dispute": 1,
    "Administrative Dispute": 1
  },
  monthlyResolution: [
    { month: "Jan", count: 0 },
    { month: "Feb", count: 0 },
    { month: "Mar", count: 0 },
    { month: "Apr", count: 0 },
    { month: "May", count: 0 },
    { month: "Jun", count: 0 },
    { month: "Jul", count: 0 },
    { month: "Aug", count: 0 },
    { month: "Sep", count: 0 },
    { month: "Oct", count: 1 },
    { month: "Nov", count: 1 },
    { month: "Dec", count: 0 }
  ],
  resolutionTimeAvg: 120, // Average days to resolution
};
