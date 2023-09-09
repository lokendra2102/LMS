const categories = {
    "cat_enhancement": {
        "id": "001",
        "name": "Enhancement",
        "sub" : true
    },
    "cat_concepts": {
        "id": "002",
        "name": "Concepts",
        "sub" : true
    },
    "cat_interview": {
        "id": "003",
        "name": "Interview",
        "Premium": true
    },
    "cat_validations": {
        "id": "004",
        "name": "Validations",
        "sub": true
    },
    "cat_ui": {
        "id": "005",
        "name": "UI",
        "sub": true
    },
    "sub_enhancement": {
        "cat_otp":
        {
            "id": "011",
            "name": "otp",
            "sub" : true
        },
        "cat_realtime_email":{
            "id": "012",
            "name": "realtime email"
        },
        "cat_qr":{
            "id": "013",
            "name": "QR-code Generation",
            "Premium": true
        },
        "cat_chatbot":{
            "id": "014",
            "name": "chatbot"
        },
        "cat_multiple_mail_sender":{
            "id": "015",
            "name": "multiple mail sender",
            "Premium": true
        },
        "cat_android_app_development":{
            "id": "016",
            "name": "Android app development"
        },
        "cat_web_mashup":{
            "id": "017",
            "name": "web mash-up"
        },
        "cat_file_transfer":{
            "id": "018",
            "name": "file listener",
            "Premium": true
        },
        "cat_email_listner":{
            "id": "019",
            "name": "email listener",
            "Premium": true
        },
        "cat_add_to_cart":{
            "id": "020",
            "name": "add to cart",
            "Premium": true
        },
        "cat_toast_message":{
            "id": "021",
            "name": "toast-Message",
            "Premium": true
        },
        "cat_send_whatsapp_msg":{
            "id": "022",
            "name": "send WhatsApp msg",
            "Premium": true
        },
        "cat_send_sms":{
            "id": "023",
            "name": "send sms"
        },
        "cat_dynamic_login":{
            "id": "024",
            "name": "Dynamic login",
            "Premium": true
        },
        "cat_multi_select":{
            "id": "025",
            "name": "Multi select"
        },
        "cat_restrict_permission":{
            "id": "026",
            "name": "Restrict permission to other operators",
            "Premium": true
        },
        "cat_track_status":{
            "id": "027",
            "name": "Track Status",
            "Premium": true
        },
        "cat_update_portal":{
            "id": "028",
            "name": "Update portal"
        },
        "cat_export_data":{
            "id": "029",
            "name": "Export data from Pega Application to Excel File",
            "Premium": true
        }
    },
    "sub_otp": {
        "cat_mobile_otp":{
            "id": "011.1",
            "name": "Mobile-OTP"
        },
        "cat_email_otp":{
            "id": "011.2",
            "name": "Email-OTP",
            "Premium": true
        }   
    },
    "sub_concepts": {
        "cat_application_def":{
            "id": "030.1",
            "name": "Application Definition"
        },
        "cat_data_model":{
            "id": "030.2",
            "name": "Data Model",
            "sub" : true
        },
        "cat_decision":{
            "id": "030.3",
            "name": "Decision",
            "Premium": true
        },
        "cat_integration":{
            "id": "030.4",
            "name": "Integration",
            "sub" : true
        },
        "cat_orgranization":{
            "id": "030.5",
            "name": "Organization",
            "Premium": true
        },
        "cat_process":{
            "id": "030.6",
            "name": "Process"
        },
        "cat_reports":{
            "id": "030.7",
            "name": "Reports",
            "sub" : true
        },
        "cat_security":{
            "id": "030.8",
            "name": "Security",
            "Premium": true
        },
        "cat_survey":{
            "id": "030.9",
            "name": "Survey"
        },
        "cat_sysadmin":{
            "id": "040",
            "name": "SysAdmin"
        },
        "cat_technical":{
            "id": "040.1",
            "name": "Technical",
            "sub" : true
        },
        "cat_userinterface":{
            "id": "040.2",
            "name": "User Interface",
            "Premium": true
        }
    },
    "sub_data_model": {
        "cat_retrive_data":{
            "id": "030.2.1",
            "name": "Retrieve data from Datatypes",
            "Premium": true
        },
        "cat_savables":{
            "id": "030.2.2",
            "name": "savables"
        }
    },
    "sub_integration": {
        "cat_IFSC_CODE":{
            "id": "030.4.1",
            "name": "IFSC code Impl",
            "Premium": true
        },
        "cat_service_connect_rest":{
            "id": "030.4.2",
            "name": "Service-Connect REST",
            "Premium": true
        },
        "cat_service_connect_soap":{
            "id": "030.4.3",
            "name": "Service-Connect SOAP",
            "Premium": true
        }
    },
    "sub_reports": {
        "cat_deligation":{
            "id": "030.7.1",
            "name": "Delegation",
            "Premium": true
        }
    },
    "sub_technical": {
        "cat_activity":{
            "id": "04.111",
            "name": "Activity",
            "Premium": true,
            "sub":true
        }
    },
    "sub_activity":{
        "cat_Store":{
            "id":"04.123",
            "name":"Using the Activity to Store the records"
        },
        "cat_Validation":{
            "id":"04.512",
            "name":"Activity Validation"
        },
        "cat_Update_Details":{
            "id":"04.513",
            "name":"Update Details"
        },
        "cat_Another_Activity":{
            "id":"04.514",
            "name":"Call the Activity by the Another Activity"
        },
        "cat_Copy_the_data ":{
            "id":"04.515",
            "name":"Copy the data from one data page to another data page"
        },
        "cat_Update_the_stock ":{
            "id":"04.516",
            "name":"Update the stock details in the same table by using the Activity"
        },


    },
    "sub_validations" : {
        "cat_random":{
            "id": "04.1",
            "name": "Random 10 Number Generation Code."
        },
        "cat_visible":{
            "id": "04.02",
            "name": "VISIBLE CONDITIONS: BY Access Groups",
            "Premium": true
        },
        "cat_dob":{
            "id": "04.03",
            "name": "DOB by Age"
        },
        "cat_userid":{
            "id": "04.04",
            "name": "User ID"
        },
        "cat_emailid_code":{
            "id": "04.05",
            "name": "Email ID Code",
            "Premium": true
        },
        "cat_phone_number":{
            "id": "04.06",
            "name": "Phone Number Validation",
            "Premium": true
        },
        "cat_name_validation":{
            "id": "04.07",
            "name": "Name Validation"
        },
        "cat_card_number":{
            "id": "04.08",
            "name": "Card Number Validation",
            "Premium": true
        },
        "cat_cvv":{
            "id": "04.09",
            "name": "CVV validation",
            "Premium": true
        },
        "cat_pincode":{
            "id": "04.10",
            "name": "Pin Code"
        },
        "cat_toget_future":{
            "id": "04.11",
            "name": "To get a future date from today",
            "Premium": true
        },
        "cat_to_get_current":{
            "id": "04.12",
            "name": "To get Current Date"
        },
        "cat_date_of_birth":{
            "id": "04.13",
            "name": "DATE OF BIRTH: (MUST BE IN PAST)"
        },
        "cat_mobile_number_thatstarts":{
            "id": "04.14",
            "name": "Mobile Number that starts with 6 or 7 or 8 or 9",
            "Premium": true
        },
        "cat_age_calucations":{
            "id": "04.15",
            "name": "Age Calculations",
            "Premium": true
        },
        "cat_notice_peroid":{
            "id": "04.16",
            "name": "Notice Period in Pega",
            "Premium": true
        },
        "cat_split_date":{
            "id": "04.17",
            "name": "Split date from current System date",
            "Premium": true
        },
        "cat_validating_age":{
            "id": "04.18",
            "name": "Validating the Age with Date of Birth",
            "Premium": true
        },
        "cat_registrating_number_code":{
            "id": "04.19",
            "name": "Registration number Code",
            "Premium": true
        }
    },
    "sub_ui" : {
        "cat_background_color":{
            "id": "05.01",
            "name": "Background Color"
        },
        "cat_login_screen":{
            "id": "05.02",
            "name": "Login Screen"
        },
        "cat_repaeting_dynamic_layout":{
            "id": "05.03",
            "name": "Repeating Dynamic Layout",
            "Premium": true
        },
        "cat_rating":{
            "id": "05.04",
            "name": "Rating",
            "Premium": true
        }
    }
};

const notes = {
    "1" : {
        "id" : "01",
        "question" : "An international online car parts business wants customers to find parts for any vehicle easily. You are asked to implement the following requirement: Customers muse select a make, model, and year to initiate a vehicle-specific search.How do you configure the data storage in the application to implement the requirement?",
        "options" : [ "Configure a data page to store the make, model, and year vehicle data.", "Configure a connection to an external system of record that contains the make, model, and year vehicle data", "Configure a static list of the make, model, and year vehicle data.", "Configure a local data storage of the make, model, and year vehicle data."],
        "answer" : ".Configure a connection to an external system of record that contains the make, model, and year vehicle data",
        "explanation" : "coming soon"
    },
    "2" : {
        "id" : "02",
        "question" : "You are implementing a data entry screen to include an asset ID field to track company equipment. All asset IDs are eight characters in length. The first three characters are letters followed by a five-digit number.Which validation approach restricts entries for the asset ID field to the required format?",
        "options" : [ "Validate rule", "Min/Max characters", "Text data type", "Edit Validate rule"],
        "answer" : "Edit Validate rule",
        "explanation" : "Coming Soon"
    },
    "3" : {
        "id" : "03",
        "question" : "In which three situations can you use a data transform? (Choose Three)",
        "options" : [ "To set the destination location as the arrival location", "To create a new property after case creation", "To set the default arrival date to five days in the future", "To copy the first and last name properties into a single property value","To perform an action that allows the user to update a reservation"],
        "answer" : "A,C&D",
        "explanation" : "coming Soon"
    }, 
    "4" : {
        "id" : "04",
        "question" : "Which two of the following use cases do you implement by using one or more calculated fields? (Choose Two)",
        "options" : [ "A sales representative wants to quote the cost of an insurance policy based on selected coverage options", "An accountant wants to list the largest order for the last month for each customer account.","A project manager wants to estimate the cost of painting a banquet hall based on labor and materials required", "A certification manager wants to determine the number of exams conducted at each testing facility in the current quarter.", ],
        "answer" : "A & C",
        "explanation" : "coming Soon"
    },
    "5" : {
        "id" : "05",
        "question" : "A requirement states: The date of birth submitted for first grade students must be at least five years before September 1 of the current year. Which three validation methods, when applied in combination, satisfy the requirement? (Choose Three)",
        "options" : [ "When rule", "Calendar control", "Date data type", "Validation rule","Edit validate rule"],
        "answer" : "B&C&D",
        "explanation" : "coming Soon"
    },
    "6" : {
        "id" : "06",
        "question" : "A data page holds product information. The data page's Reload if older Than field is set to 15 minutes.The data page is created at 06:12.At 06:20 the user requests product information. At 06:42 the user requests product information. When is the data page reloaded?",
        "options" : [ "06:35", "06:20", "06:27", "06:42",],
        "answer" : "06:42",
        "explanation" : "coming Soon"
    },
    "7" : {
        "id" : "07",
        "question" : " In a Human Resources (HR) application, a business architect has developed a new process for the Onboarding case type. You want to test the process and the fields to verify the UI elements collect expected results.When applied in combination, which two configurations allow you to record a set of interactions and save the test results to verify the process functionality? (Choose Two)",
        "options" : [ ".Add explicit assertions on the UI elements", "Create a unit test for the Onboarding case type", "Create a scenario test for the Onboarding case type", "Add validations on the UI elements"],
        "answer" : "A&C",
        "explanation" : "coming Soon"
    },
    "8" : {
        "id" : "08",
        "question" : "Which two conditions do you test with a unit test? (Choose Two)",
        "options" : [ "A data page populates without any errors", "A property value is set correctly by a data transform", "An application displays user views for 20 users within three seconds.", "An application is successfully migrated to a test system."],
        "answer" : "A & B",
        "explanation" : "coming Soon"
    },
    "9" : {
        "id" : "09",
        "question" : " Which two configuration steps do you perform, in combination, to record a unit test for automated testing? (Choose Two)",
        "options" : [ "Select a ruleset configured to store automated test cases ", "Add a test case to the Automated Testing landing page.", "Add an assertion to define an expected result", "Select a ruleset that is configured to store the results of the test."],
        "answer" : "A & C",
        "explanation" : "coming Soon"
    },
    "10" : {
        "id" : "10",
        "question" : "From the employee training portal, an employee opens a new Enrollment case, submits course selections, and receives an email confirmation. There is an error in the email confirmation. You must identify the cause of the error by recording a set of interactions on the portal and testing expected behavior on the data collection fields.What three steps, when applied in combination, achieve the required testing? (Choose Three)",
        "options" : [ "Add stage-entry validations on the Enrollment case fields", "Create a test case for the employee portal.", "Add assertions on the UI elements to verify correct data collection", "Run a new Enrollment case from the employee training portal","Add field validations on the course selection step"],
        "answer" : "B & C & D",
        "explanation" : "coming Soon"
    },
    "11" : {
        "id" : "11",
        "question" : "How do you route an assignment so that any available member of the department can perform the task?",
        "options" : [ "Route the assignment to a work list", "Route the assignment to the admin user", "Route the assignment separately to all members", "Route the assignment to a work queue."],
        "answer" : "Route the assignment to a work queue.",
        "explanation" : "coming Soon"
    },
    "12" : {
        "id" : "12",
        "question" : "A purchase request list report includes columns for case ID and regional cost center. A manager wants the report to show the total number of purchase requests for each of the regional cost centers.How do you configure the report definition?",
        "options" : [ "Summarize the regional cost centers by count", "Create a filter for each cost center and count the case IDs", "Summarize the case ID column by count", "Define a function for the cost center column to total the case IDs"],
        "answer" : "Summarize the case ID column by count",
        "explanation" : "coming Soon"
    },
    "13" : {
        "id" : "13",
        "question" : " A manager requests a report that contains the following columns: Create Date, Case ID, Create Operator, and Work Status. You must sort the cases so the case with the most recent create date appears at the top of the list and descends in order.How do you design the report definition to support this requirement?",
        "options" : [ "Add a filter condition where Create Date is greater than the current date", "Make the Create Date the first column in the report", "Select Highest to Lowest sort type for Create Date", "Select Lowest to Highest sort type for Create Date"],
        "answer" : "Select Highest to Lowest sort type for Create Date",
        "explanation" : "coming Soon"
    },
    "14" : {
        "id" : "14",
        "question" : "User A should have application permissions that are identical to User B's permissions. Unlike User B, User A lacks access to the My Cases page.How do you grant access to the My Cases page for User A?",
        "options" : [ "Update User A to the same role as User B", "Add the My Cases page to the User A profile", "Update the User A account to access the same portal as User B", "Add the My Cases page to the User A role"],
        "answer" : "Update User A to the same role as User B",
        "explanation" : "coming Soon"
    },
    "15" : {
        "id" : "15",
        "question" : "How do you enable field-level auditing for properties?",
        "options" : [ "Add an auditing optional action to the case workflow", "Enable the auditing feature on the property rule forms", "Add a field validation to the case workflow", "Enable field-level auditing for the case type"],
        "answer" : "Enable field-level auditing for the case type",
        "explanation" : "coming Soon"
    },
    "16" : {
        "id" : "16",
        "question" : "A government application provides field placeholder values to help users enter the correct data. The Design Lead has asked you to increase the font size on an field placeholder value components to help visually impaired users.Which configuration applies the font styling requirement on the field placeholder values in the application?",
        "options" : [ "Update the existing Default theme text entry", "Run a case type that uses the component and change the font on the view", "Add a new theme text entry to the application theme", "Upload a new application theme"],
        "answer" : "Add a new theme text entry to the application theme",
        "explanation" : "coming Soon"
    },
    "17" : {
        "id" : "17",
        "question" : "A car insurance quote requires a view for potential customers to enter information to process the request.What are the three primary decisions to make before you add fields to the view? (Choose Three)",
        "options" : [ ".Is field entry required?", "How do users enter values into the field?", "Do users need to see the field?", "Does the field require a data source?","Are processing actions applied to the field?"],
        "answer" : "A & B & C",
        "explanation" : "coming Soon"
    },
    "18" : {
        "id" : "18",
        "question" : "Users can select a check box to subscribe to a text messaging service. Selecting the check box displays a field for a user to enter a mobile phone number.How do you configure the application to display a field for entering a mobile phone number only when the check box is selected?",
        "options" : [ "Use a when condition in a data transform to determine whether to show the mobile phone number field.", "Use a when condition in the flow to branch the flow based on case data", "Use a circumstance on the check box property to create a rule variant that is effective when the check box is selected", "Use a when condition in the UI form to determine whether to show the mobile phone number field."],
        "answer" : "Use a when condition in the UI form to determine whether to show the mobile phone number field.",
        "explanation" : "coming Soon"
    },
    "19" : {
        "id" : "19",
        "question" : "Apartment tenants submit maitenance request that specify their name, address, request type and description of the request.the apartment management company often recieves multiple request from a single addressabout the same issue. the company wants to identify duplicate maitenance request that are submitted less than 30 days apart. which three configurations when applied in combination on the search duplicate cases stepachieve this goal?",
        "options" : [ "Configure the time period for the request date as a weighted condition", "Configure the apartment address as a weighted condition", "Configure the apartment address as a basic condition", "Configure the request type as the weighted condition","Configure the tenant name as the basic condition"],
        "answer" : "A & C & D",
        "explanation" : "coming Soon"
    },
    "20" : {
        "id" : "20",
        "question" : "A customer refund case type requires that an auditor recieves email notification if the refund is greater than twice the price of the item. which participant role do you select to configure this requirement?",
        "options" : [ "Customer", "Intereseted Individual", "Owner", "Work Queue"],
        "answer" : "Intereseted Individual",
        "explanation" : "coming Soon"
    },
    "21" : {
        "id" : "21",
        "question" : "To qualify the instant loan , an applicant name must earn a monthly income of at least GBP2000 and cannot exceed GBP2000 in total liability.How do you enforce these restricitions when requesting an instant loan?",
        "options" : [ " Use a validate rule to call two edit validate rules : one for income and one for liability", "use two edit validate rules : one for income and one for liability", " use a single Validate rule with two conditions : one for income and one for liability", "use UI Controls to validate the entries in the income and liability fields"],
        "answer" : "use a single Validate rule with two conditions : one for income and one for liability",
        "explanation" : "coming Soon"
    },
    "22" : {
        "id" : "22",
        "question" : ".An order fullfillment case type allows a customer to update user profile information during order placement stage.the user profile consist of three Account ID and password Customer contact information A list of open orders with the status of each order.How do you configure the case type to allow customers to update any of the user profile pages at any time during case processing?",
        "options" : [ " Add a set of optional actions to the case workflow", "Add an alternate stage to the case life cycle", "Add an optional process to the case workflow", " Add a button for each profile page to each assignmentAdd a set of optional actions to the case workflow"],
        "answer" : "Add a set of optional actions to the case workflow",
        "explanation" : "coming Soon"
    },
    "23" : {
        "id" : "23",
        "question" : ".A stake holder prefers to group a set of existing actions into multistep form .Which work item do you createin agile workbench to address this change request?",
        "options" : [ "Bug", "Feedback", "Status", " User Story"],
        "answer" : "Feedback",
        "explanation" : "coming Soon"
    },
    "24" : {
        "id" : "24",
        "question" : "What two user information comprise the data element?",
        "options" : [ "the name of the referencing user view", "the name of the data element", "the name of the clipboard page", " the value of the data element."],
        "answer" : "B & D",
        "explanation" : "coming Soon"
    },
    "25" : {
        "id" : "25",
        "question" : "When applying for a credit limit increase , customer with standard credit cards must provide information in an employement   information process . Request from customers with platnium credit cards automatically skip this process. What task do you perform to implement this requirement?",
        "options" : [ "In the employment information process, add the card type true/false field to the user view", "In the employment information process, add the custom condition to start the process by testing the card type", "In the employement information process, add an approve or reject step to test the card type", "In the employement information process, Validate card type for continued processing"],
        "answer" : "In the employment information process, add the custom condition to start the process by testing the card type",
        "explanation" : "coming Soon"
    },
    "26" : {
        "id" : "26",
        "question" : "Alife insurance company satellite office in various countries. Each satellite office has its own queue, Company policy require that life insurance underwriting is assignment to office based on the resident of the policy owner.Which routing approach supports this requirement?",
        "options" : [ "Route the assignment to the correct work queue using skill-based routing.", "Route the assignment to the correct work queue using an authority matrix", "Route the assignment to a specific underwrite based on business logic", "Route the assignment to the correct work queue bawd on business logic"],
        "answer" : "Route the assignment to the correct work queue bawd on business logic",
        "explanation" : "coming Soon"
    },
    "27" : {
        "id" : "27",
        "question" : "The business process for an automobile insurance claim consists of the following phases: Submission: The customer contacts a customer service representative (CSR) to file the claim.• Review: An adjuster reviews the claim, assesses the damages to each vehicle, and provides an estimate of the cost of repairs. • Repair: A third patty performs the repairs on each vehicle, communicating with the adjuster and customer as necessary. • Verification: After each vehicle repair, the adjuster closes the claim.  According to Pega best practices, which phase can you implement as a child case?",
        "options" : [ "Review", "Verification", "Repair", "Submission"],
        "answer" : "Repair",
        "explanation" : "coming Soon"
    },
    "28" : {
        "id" : "28",
        "question" : "Hospital Staff members enter appointment details including relevant patient information , diagnoses, lab orders and prescribed medication. this information is aggregated in the patient visit summary view. patient recieves a copy of this view through email. which two configuration applied in combination achieve this behaviour?",
        "options" : [ " Add a create PDF automation that references the patient visit summary review.", "Add a send email step and enable option to include attachments", "Add a send email step and compose the message to reference the relevant properties", "enable email notifications on the case type"],
        "answer" : "A & B",
        "explanation" : "coming Soon"
    },
    "29" : {
        "id" : "29",
        "question" : "You are developing a case type to process visa applications. As part of the process, applicants need to schedule an interview with the consulate.. A child case is created for the interview process and assessment. Following the interview, it typically takes 48 hours for consulate that to reach a decision. For the visa case to proceed to applicant notification, the interview case needs to be resolved.How do you configure a case to achieve the required behavior?",
        "options" : [ "Add a Create step creates the interview child case, Following the step, add a Wait step that pauses the parent case unit 48 hours have elapsed.", " Add a Create step creates the interview child case, Following the step, add a Wait step that pauses the parent case unit the interview case reaches a status of Resolved and after 48 hours have elapsed", "Add a Create step creates the interview child case, Following the step, add a Wait step that pauses the parent case unit the interview case status of Resolved", "Add a Create step creates the interview child case, There is no need to add a wait step"],
        "answer" : "Add a Create step creates the interview child case, Following the step, add a Wait step that pauses the parent case unit the interview case status of Resolved",
        "explanation" : "coming Soon"
    },
    "30" : {
        "id" : "30",
        "question" : ".which issue do you address by simulating the data source ?",
        "options" : [ " you need to test a save plan for a savable data page that updates cost of coverage options for insurance policies.", "In Production , the customer database needs to be taken off line overnight for scheduled maintenance", "The product database moves to a new data source accessible by a web service that is not yet configured", " During staging you need to access relaistic customer data without exposing personally identifying information to presenters"],
        "answer" : "The product database moves to a new data source accessible by a web service that is not yet configured",
        "explanation" : "coming Soon"
    },
    "31" : {
        "id" : "31",
        "question" : "",
        "options" : [ "", "", "", ""],
        "answer" : "",
        "explanation" : "coming Soon"
    },
    "32" : {
        "id" : "32",
        "question" : "",
        "options" : [ "", "", "", ""],
        "answer" : "",
        "explanation" : "coming Soon"
    },
}

const commonConcepts = [
    "Application Definition", "Data Model", "Decision", "Integration-Connectors", "Integration-Mapping",
	"Integration-Resources", "Integration-Services", "Organization", "Process", "Reports", "Security",
    "Survey", "SysAdmin", "Technical", "User Interface"
]
const csaSpecificConcepts = ["ifsc implementation", "Deligation", "Retrive Data From datatype", "savables"]
const cssaSpecificConcepts = ["Service connect-REST", "Service connect-SOAP"]

const csaConcepts = [...commonConcepts, ...csaSpecificConcepts]
const cssaConcepts = [...commonConcepts, ...cssaSpecificConcepts]

module.exports = {
    categories, notes, csaConcepts, cssaConcepts
}