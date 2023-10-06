var categories = {
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
            "id": "011-1",
            "name": "Mobile-OTP"
        },
        "cat_otp":{
            "id": "011-2",
            "name": "Email-OTP",
            "Premium": true
        }   
    },
    "sub_concepts": {
        "cat_application_def":{
            "id": "030-1",
            "name": "Application Definition"
        },
        "cat_data_model":{
            "id": "030-2",
            "name": "Data Model",
            "sub" : true
        },
        "cat_decision":{
            "id": "030_3",
            "name": "Decision",
            "Premium": true
        },
        "cat_integration":{
            "id": "030-4",
            "name": "Integration",
            "sub" : true
        },
        "cat_orgranization":{
            "id": "030-5",
            "name": "Organization",
            "Premium": true
        },
        "cat_process":{
            "id": "030-6",
            "name": "Process"
        },
        "cat_reports":{
            "id": "030-7",
            "name": "Reports",
            "sub" : true
        },
        "cat_security":{
            "id": "030-8",
            "name": "Security",
            "Premium": true
        },
        "cat_survey":{
            "id": "030-9",
            "name": "Survey"
        },
        "cat_sysadmin":{
            "id": "040",
            "name": "SysAdmin"
        },
        "cat_technical":{
            "id": "040-1",
            "name": "Technical",
            "sub" : true
        },
        "cat_userinterface":{
            "id": "040-2",
            "name": "User Interface",
            "Premium": true
        }
    },
    "sub_data_model": {
        "cat_retrive_data":{
            "id": "030-2-1",
            "name": "Retrieve data from Datatypes",
            "Premium": true
        },
        "cat_savables":{
            "id": "030-2-2",
            "name": "savables"
        }
    },
    "sub_integration": {
        "cat_IFSC_CODE":{
            "id": "030-4-1",
            "name": "IFSC code Impl",
            "Premium": true
        },
        "cat_service_connect_rest":{
            "id": "030-4-2",
            "name": "Service-Connect REST",
            "Premium": true
        },
        "cat_service_connect_soap":{
            "id": "030-4-3",
            "name": "Service-Connect SOAP",
            "Premium": true
        }
    },
    "sub_reports": {
        "cat_deligation":{
            "id": "030-7-1",
            "name": "Delegation",
            "Premium": true
        }
    },
    "sub_technical": {
        "cat_activity":{
            "id": "04-111",
            "name": "Activity",
            "Premium": true,
            "sub":true
        }
    },
    "sub_activity":{
        "cat_Store":{
            "id":"04-123",
            "name":"Using the Activity to Store the records"
        },
        "cat_Validation":{
            "id":"04-512",
            "name":"Activity Validation"
        },
        "cat_Update_Details":{
            "id":"04-513",
            "name":"Update Details"
        },
        "cat_Another_Activity":{
            "id":"04-514",
            "name":"Call the Activity by the Another Activity"
        },
        "cat_Copy_the_data ":{
            "id":"04-515",
            "name":"Copy the data from one data page to another data page"
        },
        "cat_Update_the_stock ":{
            "id":"04-516",
            "name":"Update the stock details in the same table by using the Activity"
        },


    },
    "sub_validations" : {
        "cat_random":{
            "id": "04-1",
            "name": "Random 10 Number Generation Code-"
        },
        "cat_visible":{
            "id": "04-02",
            "name": "VISIBLE CONDITIONS: BY Access Groups",
            "Premium": true
        },
        "cat_dob":{
            "id": "04-03",
            "name": "DOB by Age"
        },
        "cat_userid":{
            "id": "04-04",
            "name": "User ID"
        },
        "cat_emailid_code":{
            "id": "04-05",
            "name": "Email ID Code",
            "Premium": true
        },
        "cat_phone_number":{
            "id": "04-06",
            "name": "Phone Number Validation",
            "Premium": true
        },
        "cat_name_validation":{
            "id": "04-07",
            "name": "Name Validation"
        },
        "cat_card_number":{
            "id": "04-08",
            "name": "Card Number Validation",
            "Premium": true
        },
        "cat_cvv":{
            "id": "04-09",
            "name": "CVV validation",
            "Premium": true
        },
        "cat_pincode":{
            "id": "04-10",
            "name": "Pin Code"
        },
        "cat_toget_future":{
            "id": "04-11",
            "name": "To get a future date from today",
            "Premium": true
        },
        "cat_to_get_current":{
            "id": "04-12",
            "name": "To get Current Date"
        },
        "cat_date_of_birth":{
            "id": "04-13",
            "name": "DATE OF BIRTH: (MUST BE IN PAST)"
        },
        "cat_mobile_number_thatstarts":{
            "id": "04-14",
            "name": "Mobile Number that starts with 6 or 7 or 8 or 9",
            "Premium": true
        },
        "cat_age_calucations":{
            "id": "04-15",
            "name": "Age Calculations",
            "Premium": true
        },
        "cat_notice_peroid":{
            "id": "04-16",
            "name": "Notice Period in Pega",
            "Premium": true
        },
        "cat_split_date":{
            "id": "04-17",
            "name": "Split date from current System date",
            "Premium": true
        },
        "cat_validating_age":{
            "id": "04-18",
            "name": "Validating the Age with Date of Birth",
            "Premium": true
        },
        "cat_registrating_number_code":{
            "id": "04-19",
            "name": "Registration number Code",
            "Premium": true
        }
    },
    "sub_ui" : {
        "cat_background_color":{
            "id": "05-01",
            "name": "Background Color"
        },
        "cat_login_screen":{
            "id": "05-02",
            "name": "Login Screen"
        },
        "cat_repaeting_dynamic_layout":{
            "id": "05-03",
            "name": "Repeating Dynamic Layout",
            "Premium": true
        },
        "cat_rating":{
            "id": "05-04",
            "name": "Rating",
            "Premium": true
        }
    }
};

const notes = {
    "1" : {
        "id" : "01",
        "question" : "An international online car parts business wants customers to find parts for any vehicle easily- You are asked to implement the following requirement: Customers muse select a make, model, and year to initiate a vehicle-specific search-How do you configure the data storage in the application to implement the requirement?",
        "options" : [ "Configure a data page to store the make, model, and year vehicle data-", "Configure a connection to an external system of record that contains the make, model, and year vehicle data", "Configure a static list of the make, model, and year vehicle data-", "Configure a local data storage of the make, model, and year vehicle data-"],
        "answer" : "-Configure a connection to an external system of record that contains the make, model, and year vehicle data",
        "explanation" : "coming soon"
    },
    "2" : {
        "id" : "02",
        "question" : "You are implementing a data entry screen to include an asset ID field to track company equipment- All asset IDs are eight characters in length- The first three characters are letters followed by a five-digit number-Which validation approach restricts entries for the asset ID field to the required format?",
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
        "options" : [ "A sales representative wants to quote the cost of an insurance policy based on selected coverage options", "An accountant wants to list the largest order for the last month for each customer account-","A project manager wants to estimate the cost of painting a banquet hall based on labor and materials required", "A certification manager wants to determine the number of exams conducted at each testing facility in the current quarter-", ],
        "answer" : "A & C",
        "explanation" : "coming Soon"
    },
    "5" : {
        "id" : "05",
        "question" : "A requirement states: The date of birth submitted for first grade students must be at least five years before September 1 of the current year- Which three validation methods, when applied in combination, satisfy the requirement? (Choose Three)",
        "options" : [ "When rule", "Calendar control", "Date data type", "Validation rule","Edit validate rule"],
        "answer" : "B&C&D",
        "explanation" : "coming Soon"
    },
    "6" : {
        "id" : "06",
        "question" : "A data page holds product information- The data page's Reload if older Than field is set to 15 minutes-The data page is created at 06:12-At 06:20 the user requests product information- At 06:42 the user requests product information- When is the data page reloaded?",
        "options" : [ "06:35", "06:20", "06:27", "06:42",],
        "answer" : "06:42",
        "explanation" : "coming Soon"
    },
    "7" : {
        "id" : "07",
        "question" : " In a Human Resources (HR) application, a business architect has developed a new process for the Onboarding case type- You want to test the process and the fields to verify the UI elements collect expected results-When applied in combination, which two configurations allow you to record a set of interactions and save the test results to verify the process functionality? (Choose Two)",
        "options" : [ "-Add explicit assertions on the UI elements", "Create a unit test for the Onboarding case type", "Create a scenario test for the Onboarding case type", "Add validations on the UI elements"],
        "answer" : "A&C",
        "explanation" : "coming Soon"
    },
    "8" : {
        "id" : "08",
        "question" : "Which two conditions do you test with a unit test? (Choose Two)",
        "options" : [ "A data page populates without any errors", "A property value is set correctly by a data transform", "An application displays user views for 20 users within three seconds-", "An application is successfully migrated to a test system-"],
        "answer" : "A & B",
        "explanation" : "coming Soon"
    },
    "9" : {
        "id" : "09",
        "question" : " Which two configuration steps do you perform, in combination, to record a unit test for automated testing? (Choose Two)",
        "options" : [ "Select a ruleset configured to store automated test cases ", "Add a test case to the Automated Testing landing page-", "Add an assertion to define an expected result", "Select a ruleset that is configured to store the results of the test-"],
        "answer" : "A & C",
        "explanation" : "coming Soon"
    },
    "10" : {
        "id" : "10",
        "question" : "From the employee training portal, an employee opens a new Enrollment case, submits course selections, and receives an email confirmation- There is an error in the email confirmation- You must identify the cause of the error by recording a set of interactions on the portal and testing expected behavior on the data collection fields-What three steps, when applied in combination, achieve the required testing? (Choose Three)",
        "options" : [ "Add stage-entry validations on the Enrollment case fields", "Create a test case for the employee portal-", "Add assertions on the UI elements to verify correct data collection", "Run a new Enrollment case from the employee training portal","Add field validations on the course selection step"],
        "answer" : "B & C & D",
        "explanation" : "coming Soon"
    },
    "11" : {
        "id" : "11",
        "question" : "How do you route an assignment so that any available member of the department can perform the task?",
        "options" : [ "Route the assignment to a work list", "Route the assignment to the admin user", "Route the assignment separately to all members", "Route the assignment to a work queue-"],
        "answer" : "Route the assignment to a work queue-",
        "explanation" : "coming Soon"
    },
    "12" : {
        "id" : "12",
        "question" : "A purchase request list report includes columns for case ID and regional cost center- A manager wants the report to show the total number of purchase requests for each of the regional cost centers-How do you configure the report definition?",
        "options" : [ "Summarize the regional cost centers by count", "Create a filter for each cost center and count the case IDs", "Summarize the case ID column by count", "Define a function for the cost center column to total the case IDs"],
        "answer" : "Summarize the case ID column by count",
        "explanation" : "coming Soon"
    },
    "13" : {
        "id" : "13",
        "question" : " A manager requests a report that contains the following columns: Create Date, Case ID, Create Operator, and Work Status- You must sort the cases so the case with the most recent create date appears at the top of the list and descends in order-How do you design the report definition to support this requirement?",
        "options" : [ "Add a filter condition where Create Date is greater than the current date", "Make the Create Date the first column in the report", "Select Highest to Lowest sort type for Create Date", "Select Lowest to Highest sort type for Create Date"],
        "answer" : "Select Highest to Lowest sort type for Create Date",
        "explanation" : "coming Soon"
    },
    "14" : {
        "id" : "14",
        "question" : "User A should have application permissions that are identical to User B's permissions- Unlike User B, User A lacks access to the My Cases page-How do you grant access to the My Cases page for User A?",
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
        "question" : "A government application provides field placeholder values to help users enter the correct data- The Design Lead has asked you to increase the font size on an field placeholder value components to help visually impaired users-Which configuration applies the font styling requirement on the field placeholder values in the application?",
        "options" : [ "Update the existing Default theme text entry", "Run a case type that uses the component and change the font on the view", "Add a new theme text entry to the application theme", "Upload a new application theme"],
        "answer" : "Add a new theme text entry to the application theme",
        "explanation" : "coming Soon"
    },
    "17" : {
        "id" : "17",
        "question" : "A car insurance quote requires a view for potential customers to enter information to process the request-What are the three primary decisions to make before you add fields to the view? (Choose Three)",
        "options" : [ "-Is field entry required?", "How do users enter values into the field?", "Do users need to see the field?", "Does the field require a data source?","Are processing actions applied to the field?"],
        "answer" : "A & B & C",
        "explanation" : "coming Soon"
    },
    "18" : {
        "id" : "18",
        "question" : "Users can select a check box to subscribe to a text messaging service- Selecting the check box displays a field for a user to enter a mobile phone number-How do you configure the application to display a field for entering a mobile phone number only when the check box is selected?",
        "options" : [ "Use a when condition in a data transform to determine whether to show the mobile phone number field-", "Use a when condition in the flow to branch the flow based on case data", "Use a circumstance on the check box property to create a rule variant that is effective when the check box is selected", "Use a when condition in the UI form to determine whether to show the mobile phone number field-"],
        "answer" : "Use a when condition in the UI form to determine whether to show the mobile phone number field-",
        "explanation" : "coming Soon"
    },
    "19" : {
        "id" : "19",
        "question" : "Apartment tenants submit maitenance request that specify their name, address, request type and description of the request-the apartment management company often recieves multiple request from a single addressabout the same issue- the company wants to identify duplicate maitenance request that are submitted less than 30 days apart- which three configurations when applied in combination on the search duplicate cases stepachieve this goal?",
        "options" : [ "Configure the time period for the request date as a weighted condition", "Configure the apartment address as a weighted condition", "Configure the apartment address as a basic condition", "Configure the request type as the weighted condition","Configure the tenant name as the basic condition"],
        "answer" : "A & C & D",
        "explanation" : "coming Soon"
    },
    "20" : {
        "id" : "20",
        "question" : "A customer refund case type requires that an auditor recieves email notification if the refund is greater than twice the price of the item- which participant role do you select to configure this requirement?",
        "options" : [ "Customer", "Intereseted Individual", "Owner", "Work Queue"],
        "answer" : "Intereseted Individual",
        "explanation" : "coming Soon"
    },
    "21" : {
        "id" : "21",
        "question" : "To qualify the instant loan , an applicant name must earn a monthly income of at least GBP2000 and cannot exceed GBP2000 in total liability-How do you enforce these restricitions when requesting an instant loan?",
        "options" : [ " Use a validate rule to call two edit validate rules : one for income and one for liability", "use two edit validate rules : one for income and one for liability", " use a single Validate rule with two conditions : one for income and one for liability", "use UI Controls to validate the entries in the income and liability fields"],
        "answer" : "use a single Validate rule with two conditions : one for income and one for liability",
        "explanation" : "coming Soon"
    },
    "22" : {
        "id" : "22",
        "question" : "-An order fullfillment case type allows a customer to update user profile information during order placement stage-the user profile consist of three Account ID and password Customer contact information A list of open orders with the status of each order-How do you configure the case type to allow customers to update any of the user profile pages at any time during case processing?",
        "options" : [ " Add a set of optional actions to the case workflow", "Add an alternate stage to the case life cycle", "Add an optional process to the case workflow", " Add a button for each profile page to each assignmentAdd a set of optional actions to the case workflow"],
        "answer" : "Add a set of optional actions to the case workflow",
        "explanation" : "coming Soon"
    },
    "23" : {
        "id" : "23",
        "question" : "-A stake holder prefers to group a set of existing actions into multistep form -Which work item do you createin agile workbench to address this change request?",
        "options" : [ "Bug", "Feedback", "Status", " User Story"],
        "answer" : "Feedback",
        "explanation" : "coming Soon"
    },
    "24" : {
        "id" : "24",
        "question" : "What two user information comprise the data element?",
        "options" : [ "the name of the referencing user view", "the name of the data element", "the name of the clipboard page", " the value of the data element-"],
        "answer" : "B & D",
        "explanation" : "coming Soon"
    },
    "25" : {
        "id" : "25",
        "question" : "When applying for a credit limit increase , customer with standard credit cards must provide information in an employement   information process - Request from customers with platnium credit cards automatically skip this process- What task do you perform to implement this requirement?",
        "options" : [ "In the employment information process, add the card type true/false field to the user view", "In the employment information process, add the custom condition to start the process by testing the card type", "In the employement information process, add an approve or reject step to test the card type", "In the employement information process, Validate card type for continued processing"],
        "answer" : "In the employment information process, add the custom condition to start the process by testing the card type",
        "explanation" : "coming Soon"
    },
    "26" : {
        "id" : "26",
        "question" : "Alife insurance company satellite office in various countries- Each satellite office has its own queue, Company policy require that life insurance underwriting is assignment to office based on the resident of the policy owner-Which routing approach supports this requirement?",
        "options" : [ "Route the assignment to the correct work queue using skill-based routing-", "Route the assignment to the correct work queue using an authority matrix", "Route the assignment to a specific underwrite based on business logic", "Route the assignment to the correct work queue bawd on business logic"],
        "answer" : "Route the assignment to the correct work queue bawd on business logic",
        "explanation" : "coming Soon"
    },
    "27" : {
        "id" : "27",
        "question" : "The business process for an automobile insurance claim consists of the following phases: Submission: The customer contacts a customer service representative (CSR) to file the claim-• Review: An adjuster reviews the claim, assesses the damages to each vehicle, and provides an estimate of the cost of repairs- • Repair: A third patty performs the repairs on each vehicle, communicating with the adjuster and customer as necessary- • Verification: After each vehicle repair, the adjuster closes the claim-  According to Pega best practices, which phase can you implement as a child case?",
        "options" : [ "Review", "Verification", "Repair", "Submission"],
        "answer" : "Repair",
        "explanation" : "coming Soon"
    },
    "28" : {
        "id" : "28",
        "question" : "Hospital Staff members enter appointment details including relevant patient information , diagnoses, lab orders and prescribed medication- this information is aggregated in the patient visit summary view- patient recieves a copy of this view through email- which two configuration applied in combination achieve this behaviour?",
        "options" : [ " Add a create PDF automation that references the patient visit summary review-", "Add a send email step and enable option to include attachments", "Add a send email step and compose the message to reference the relevant properties", "enable email notifications on the case type"],
        "answer" : "A & B",
        "explanation" : "coming Soon"
    },
    "29" : {
        "id" : "29",
        "question" : "You are developing a case type to process visa applications- As part of the process, applicants need to schedule an interview with the consulate-- A child case is created for the interview process and assessment- Following the interview, it typically takes 48 hours for consulate that to reach a decision- For the visa case to proceed to applicant notification, the interview case needs to be resolved-How do you configure a case to achieve the required behavior?",
        "options" : [ "Add a Create step creates the interview child case, Following the step, add a Wait step that pauses the parent case unit 48 hours have elapsed-", " Add a Create step creates the interview child case, Following the step, add a Wait step that pauses the parent case unit the interview case reaches a status of Resolved and after 48 hours have elapsed", "Add a Create step creates the interview child case, Following the step, add a Wait step that pauses the parent case unit the interview case status of Resolved", "Add a Create step creates the interview child case, There is no need to add a wait step"],
        "answer" : "Add a Create step creates the interview child case, Following the step, add a Wait step that pauses the parent case unit the interview case status of Resolved",
        "explanation" : "coming Soon"
    },
    "30" : {
        "id" : "30",
        "question" : "-which issue do you address by simulating the data source ?",
        "options" : [ " you need to test a save plan for a savable data page that updates cost of coverage options for insurance policies-", "In Production , the customer database needs to be taken off line overnight for scheduled maintenance", "The product database moves to a new data source accessible by a web service that is not yet configured", " During staging you need to access relaistic customer data without exposing personally identifying information to presenters"],
        "answer" : "The product database moves to a new data source accessible by a web service that is not yet configured",
        "explanation" : "coming Soon"
    },
    "31" : {
        "id" : "31",
        "question" : "Which two dependencies do you directly enforce with a wait step ?",
        "options" : [ " pausing a case until a predetermined time expires-", "pausing a case until a user submits a specified value", "pausing a case until another case reaches a specified status", "pausing a case until a new child case is created"],
        "answer" : "A & C",
        "explanation" : "coming Soon"
    },
    "32" : {
        "id" : "32",
        "question" : "Before development , your team creates a spreadsheet with work items to populate the backlog Al work items that describe business requirement are priortized as must have - you also create work items to address- How do you populate the backlog directly from spreadsheet?",
        "options" : [ "Create Bug", "Create Feedback", "Import Stories", "Create Stories"],
        "answer" : "Import Stories",
        "explanation" : "coming Soon"
    },
    "33" : {
        "id" : "33",
        "question" : "A home loan application requires approvals from the legal team manager and finance team manager- the legal team manager must approve before finance team manager- how do you configure this requirement?",
        "options" : [ "Create an approval process for each manager in parallel", "Apply business logic to route a single assignment in correct order", "Create an approval step with cascading approval", " Route an assignment to a work queue where both roles have access"],
        "answer" : " Create an approval step with cascading approval",
        "explanation" : "coming Soon"
    },
    "34" : {
        "id" : "34",
        "question" : "-In an insurance claim application ,you have the following requirement All claim must be resolved within one week-To meet this requirement you configure a service level-  where should the service level be configured?",
        "options" : [ "Process", "Stage", "casetype ", "Step"],
        "answer" : "casetype",
        "explanation" : "coming Soon"
    },
    "35" : {
        "id" : "35",
        "question" : "A requirement states : when a customer applies for a credit card ,a credit check must be completed in order for the credit to be approved-  Select the case type relationship that satisifes the requirement",
        "options" : [ "Make Credit check a child case of credit card request", "Make both loan request and credit check top cases", "Make credit check a spin off case of credit card request", "Make credit card request a child case of credit check"],
        "answer" : "Make Credit check a child case of credit card request",
        "explanation" : "coming Soon"
    },
    "36" : {
        "id" : "36",
        "question" : "An internet provider determines the best internet speed for a customer based on Customer's answers to a series of nested questions such as whether the customer is seeking service for a business or for a residence and what is expected internet usage- which feature do you use to configure the application to recommend an internet speed based on customer response",
        "options" : [ "Configure a view that displays Customer responses-", "Configure a decision tree", "Configure a decision table", "Configure a process with multiple decision shapes- "],
        "answer" : "Configure a decision tree",
        "explanation" : "coming Soon"
    },
    "37" : {
        "id" : "37",
        "question" : "Which scenario requires you to configure correspondence?",
        "options" : [ "A case worker recieves a mobile push notification to approve an insurance claim", "A case worker calls a customer for additional information about the case-", "A case worker recieves a new insurance claim in thier work queues", "A case worker recieves an email when the insurance claim is routed to the work list-"],
        "answer" : "A case worker recieves an email when the insurance claim is routed to the work list-",
        "explanation" : "coming Soon"
    },
    "38" : {
        "id" : "38",
        "question" : "You are developing a VISA case type to process entry visa applications-  As part of the process , applicants schedule an interview with the consultate-An interview child case is created for the interview process - Following the interview , the consultate reaches a decision within 48 hours or more- For the VISA case to proceed to applicant notification , the interview case needs to be resolved- After you create the interview child case  , how do you configure the case type to achieve required behaviour?",
        "options" : [ "Following the Create case step, add a wait step that pauses the parent case until the interview case reaches the Resolved Status-", "Following the Create case step, add a service level agreement that escalates the parent case after 48 hours-", "Following the Create case step, add a wait step that pauses the parent case until the applicant schedules the interview-", "Following the Create case step, add an interview step that is automatically resolved after 48 hours-"],
        "answer" : "Following the Create case step, add a wait step that pauses the parent case until the interview case reaches the Resolved Status-",
        "explanation" : "coming Soon"
    },
    "39" : {
        "id" : "39",
        "question" : "A publishing company works with vendors to Translate their content from english to different languages- the Project manager must send all the translation quotes to their manager for review and approval- if the quote is more than USD 5000, it must be approved by directoif the quote is more than USD 10000, it must be also approved by Vice president How do you configure the case life cycle to support this behaviour?",
        "options" : [ "Configure an approval step as a cascading approval with the reporting structure that uses custom approvals-", "Configure an approval step as a cascading approval with the reporting structure that uses all levels", "Configure a series of approval steps that are configured as single level approvals-", "Configure an approval step as cascading approval with an authority matrix"],
        "answer" : "Configure an approval step as a cascading approval with the reporting structure that uses custom approvals",
        "explanation" : "coming Soon"
    },
    "40" : {
        "id" : "40",
        "question" : "-How do you indicate progress of the case towards resolution?",
        "options" : [ "Design intent driven user interfaces-", "Configure a case note field to capture progress information ", "Update case status with appropriate steps-", "Apply service level to the assignment steps- "],
        "answer" : " Update case status with appropriate steps-",
        "explanation" : "coming Soon"
    },
    "41" : {
        "id" : "41",
        "question" : "In an application for a credit limit increase, Customers with Standard Credit cards must provide employment information in an employment verification process-Platinum credit card customers who request a credit limit increase automatically skip this process- How do you implement this requirement?",
        "options" : [ "Add an approve/reject step to test whether the credit card type is Standard or Platinum", "Add a boolean field to the view that customers enable if they have the platinum credit card-", "Add a custom condition to start the employment verification process if the card type is standard-", "Add a validation condition to the card type field to conditionally continue the process-"],
        "answer" : "Add a custom condition to start the employment verification process if the card type is standard-",
        "explanation" : "coming Soon"
    },
    "42" : {
        "id" : "42",
        "question" : "A requirement states that : A Customer can update an address at any point during case processing by performing the following steps- 1- Customer submits the new address2- The application verifies that address matches postal service requirements 3- The customer then confirms the corrected address- How do you configure this requirement?",
        "options" : [ "Add a case wide optional action to the work flow to perform the address change process", "Add a button to each assignment to present the customer with a form to submit new address", "Add a case wide optional action to the work flow to submit a new address", "Add an alternate stage to the case life cycle to change the address"],
        "answer" : "Add a case wide optional action to the work flow to perform the address change process-",
        "explanation" : "coming Soon"
    },
    "43" : {
        "id" : "43",
        "question" : "In which two situations it is appropriate to use decision table ? ( Choose two)",
        "options" : [ "A gym recommends a membership type based on the number and type of fitness classes the customer wants to attend every month-", "If the customer decide to add insurance , checked bags , or early boarding to their airline tickets , extra fees are added to their work total-", "A hair care company suggest a line of products to customers based on their hair type ,Scalp moisture , hair moisture and whether it is color treated- ", "Order total is calculated based on quantity and price of the item in the customer shopping cart-"],
        "answer" : "A & C",
        "explanation" : "coming Soon"
    },
    "44" : {
        "id" : "44",
        "question" : " In a claims application, Customers can file home insurance claims-  Each claim contains a list of items of loss-  Depending on the situation some claims are investigated for potential fraud in parallel to the actual claim process-which two case types do you create to support this scenario?",
        "options" : [ "Fraud investigation", "Items of loss", "Customer", "Claim"],
        "answer" : "A & D",
        "explanation" : "coming Soon"
    },
    "45" : {
        "id" : "45",
        "question" : "Which two statements are true about insights?",
        "options" : [ "You can transform data queries into sharable visualizatioN", "You can transform sharable visualizations into data queries ", "You can search for and select the fields that you want to add in an insight- ", "You can edit application data direclty in an insight"],
        "answer" : "A & C",
        "explanation" : "coming Soon"
    },
    "46" : {
        "id" : "46",
        "question" : "A business architect has developed a new process for a case type- To verify that UI elements collect expected results , you want to test the process and the fields- Which two configurations , when used together allow you to record set of interactions and save the results to verify the process functionality?",
        "options" : [ "Add explicit assertions on the UI elements", "Create a scenario test for the case type", "Add Explict assertions on the scenario testing landing page", "Create a unit test for the case type"],
        "answer" : "A & B",
        "explanation" : "coming Soon"
    },
    "47" : {
        "id" : "47",
        "question" : "A purchase request list report includes columns for case ID and regional cost center- A manager wants the report to show the total number of purchase requests for each of the regional cost centers-How do you configure the report definition?",
        "options" : [ "Summarize the regional cost centers by count", "Create a filter for each cost center and count the case IDs", "Summarize the case ID column by count", "Define a function for the cost center column to total the case IDs-"],
        "answer" : "C",
        "explanation" : "coming Soon"
    },
    "48" : {
        "id" : "48",
        "question" : " Which option follows best practices for naming a ruleset in pega platform ",
        "options" : [ "Credit Check: 03-01-02", "Expense: 01-02-05", "Pega-Prod : 01-04-01", "Grand-Corporation-Human-Resources-Department:01-01-03"],
        "answer" : "Expense: 01-02-05",
        "explanation" : "coming Soon"
    },
    "49" : {
        "id" : "49",
        "question" : "Which two configuration steps do you perform, in combination, to record a unit test for automated testing? (Choose Two)",
        "options" : [ "Select a ruleset configured to store automated test cases", "-Add a test case to the Automated Testing landing page-", "Add an assertion to define an expected result", "Select a ruleset that is configured to store the results of the test"],
        "answer" : "A & C",
        "explanation" : "coming Soon"
    },
    "50" : {
        "id" : "50",
        "question" : " Which piece of application Content do you localize using field values?",
        "options" : [ "User Instructions in a paragraph rule", "User editable text in a correspondence rule", " Labels and dropdowns values on a section rule ", "Logos or other images on harness rule"],
        "answer" : "Labels and dropdowns values on a section rulE",
        "explanation" : "coming Soon"
    },
    "51" : {
        "id" : "51",
        "question" : "An order form provides four options from which customers can select one option- According to the best practice, which of the following two UI Control types can be used to minimize clutter on order form?",
        "options" : [ "Radio button", "Radio button", "Dropdown", "Checkbox"],
        "answer" : "B & C",
        "explanation" : "coming Soon"
    },
    "52" : {
        "id" : "52",
        "question" : "A form listing nearby restaurants has four columns: * Restaurant name * Restaurant location * Thumbnail image of the seating area * Make reservation (check box) You want to ensure that users have the information they need to make a reservation regardless of screen size- When viewed on a small screen, you do not need to display images- What three configuration steps do you take to support this requirement? (Choose three-)",
        "options" : [ "Set the importance of the Restaurant name column to Primary", "Set the importance of the image column to Other", " Set the importance of the image column to Secondary", "Set the importance of the Restaurant location and Make reservation columns to Secondary"],
        "answer" : "A & B & D",
        "explanation" : "coming Soon"
    },
    "53" : {
        "id" : "53",
        "question" : "In a construction application , the user access group is configured with an Access of role to Object record , as shown in following image-Open Instances - Modify Instances - 4Delete Instances - 1Run Reports - 3Open Rules - 2Modify Rules - 2Delete rules - 0Execute Activities - 2Currently the application  is in Staging System- Which two operations can users perform in this application at this level?",
        "options" : [ "Open Instances", "Run reports", " Modify Instances", "Modify Rules"],
        "answer" : "A & C",
        "explanation" : "coming Soon"
    },
    "54" : {
        "id" : "54",
        "question" : "Given the picture of the books arranged - which layout is the best choice to arrange the books in this manner?",
        "options" : [ "Screen layout", "Column layout ", " Repeating Dynamic Layout", "Dynamic layout"],
        "answer" : "C",
        "explanation" : "coming Soon"
    },
    "55" : {
        "id" : "55",
        "question" : "Which two configuration , when used together allow you to track updates to fields in your application ? ( Choose two )",
        "options" : [ "Select the field that you want to track", "Enable field auditing on the case type landing page-", " Add the administrator role to the case type", "Enable field-level auditing on the view"],
        "answer" : "A & B",
        "explanation" : "coming Soon"
    },
    "56" : {
        "id" : "56",
        "question" : "University admission application cases automatically advance in the case life cycle if the applicant's standardized test scores are above a certain threshold- The threshold is determined each year based on the provided national average score- Which two configurations, when applied together, support this requirement? (Choose Two)",
        "options" : ["Configure a TestThreshold Configuration setting with the national average for the test score threshold","Configure a process with a decision shape that continues if the TestThreshold Configuration setting is less than the applicant's test score-", "Configure a process with a decision shape that continues if the TestThreshold Configuration setting is greater than the applicant's test score- ", " Configure a TestThreshold Configuration setting that calculates the national average for the test score threshold-",],
        "answer" : "B & D",
        "explanation" : "coming Soon"
    },
    "57" : {
        "id" : "57",
        "question" : " A retail store wants an application to process a new customer loyalty account the custome enters thier contact information , including name, Email, phone number and address- this data entry view is displayed in a data relationship- What type of data relationship do you create?",
        "options" : [ "A Query field", "A Data reference field", " A Case reference field", "An Embedded data field"],
        "answer" : "D",
        "explanation" : "coming Soon"
    },
    "58" : {
        "id" : "58",
        "question" : "All managers need to view the Employee vacation request report in thier manager portal dashboards- Only managers have access to the reports-which configuration do you perform to fullfill the requirements?",
        "options" : [ "Add a report widget to the manager portal dashboard and then click publish- ", "Add a report to the public category and then add out of the box Reports landing page to the manager portal-", "Add a report widget to the manager portal dashboard and then click publish to default", "Create a new landing page on the manager portal with a new report saved in public category"],
        "answer" : "B",
        "explanation" : "coming Soon"
    },
    "59" : {
        "id" : "59",
        "question" : " A requirement states that : Tax Identification number must contain 10 digits-How do you configure the field to support this requirement?",
        "options" : [ "Use an edit validate rule that validates the tax identification number pattern-", "Configure a validate rule to test the tax identification number pattern-", "Set the minium and maximum values to '10' in a text field","use a decimal property type and make the field required"],
        "answer" : "A ",
        "explanation" : "coming Soon"
    },
    "60" : {
        "id" : "60",
        "question" : " Which two statements are true about Styling control in App Studio?",
        "options" : [ "Developers can create a new style format to apply styling to an out of the box button control", "Developers can configure a Date Time Control to display as a text input field , dropdown list or calendar control", "Developers can configure a button control to hide when users click the control ", "Developers can configure a text input control to change the background when the user clicks the control"],
        "answer" : "A & D",
        "explanation" : "coming Soon"
    },
    "61" : {
        "id" : "61",
        "question" : " which two requirements ensures that valid data is used in the case?",
        "options" : [ "the data is locally sourced ", "the data fits the business logic", "the data is organized in the data type", "the data is the correct field type"],
        "answer" : "B & D",
        "explanation" : "coming Soon"
    },
    "62" : {
        "id" : "62",
        "question" : "Which issue do you address by simulating a data source?",
        "options" : [ "You need to capture performance metrics when a case processes a large amount of local data", "In Production, the customer database needs to be taken offline overnight for scheduled maintenance", "The product database moves to the new data source that is accesible by a web service but that is not yet configured", "You need to save the test plan for a savable data page that updates cost of coverage options for insurance policies"],
        "answer" : "C",
        "explanation" : "coming Soon"
    },
    "63" : {
        "id" : "63",
        "question" : " An internal application currently grants 75 employees access to one of four roles : Admin, Author , User and Manager A new analyst that joins the company requires all the Author roles access but only some of the reporting capabilities available to the manager role-How do you satisfy the security requirement?",
        "options" : [ "Add the analyst to the manager role", "Create a new analyst role with the required acccess", "Update the author role to include required analyst reports-", "add the analyst to both author and manager role"],
        "answer" : "B",
        "explanation" : "coming Soon"
    },
    "64" : {
        "id" : "64",
        "question" : " You are asked to create a custom status named Open-Review- This status is to be applied to assignments in one application- How do you satisfy the request?",
        "options" : [ "Circumstance the existing Open Field Value record on the application name and update the status value to Open-Review-", "b-	Create a Field Value record named Open-Review for -pyStatus Work and configure an Access When record to apply the status to the correct application- ", "Create a Field Value record named Open-Review for -pyStatusWork with the Apply To class set to the class group- ", "Add the Open-Review status to the Application record for the application"],
        "answer" : " C",
        "explanation" : "coming Soon"
    },
    "65" : {
        "id" : "65",
        "question" : "Which two statements about data records are True?",
        "options" : [ " Data record requires external storage", "Data record allows permissible values for data fields", "Data record need unique, user generated ID's", "Data record are displayed in a dropdown list by default-"],
        "answer" : "B & D",
        "explanation" : "coming Soon"
    },
    "66" : {
        "id" : "66",
        "question" : "In a Credit Card payment case type , you want to set the yearly fee to USD 75 How do you set the yearly fee field?",
        "options" : [ "In the data Initialization page , set the yearly fee to USD 75", "Configure the yearly fee as calculated field", "Configure the yearly fee field to reference the minimum amount due-", "Configure field validation on the yearly fee field-"],
        "answer" : "A",
        "explanation" : "coming Soon"
    },
    "67" : {
        "id" : "67",
        "question" : "A car insurance quote requires a view for potential customers to enter information to process the request-What are the three primary decisions to make before you add fields to the view? (Choose Three) ",
        "options" : [ "Is field entry required?", "Does the field require a data source?", "Are processing actions applied to the field?", "How do users enter values into the field?","Whether user has to view the field?"],
        "answer" : "A & D & E",
        "explanation" : "coming Soon"
    },
    "68" : {
        "id" : "68",
        "question" : "During testing , you notice that the send case status email step does not send an email- which work item do you create in Agile workbench to address this issue?",
        "options" : [ "Status", "Feedback", "Bug", "User Story"],
        "answer" : "C",
        "explanation" : "coming Soon"
    },
    "69" : {
        "id" : "69",
        "question" : " A manufacturing company has an inventory data page that uses page structure-you need to write a single page of data to the single database row in the configured System of record-which option fullfill the requirement?",
        "options" : [ "connnector", "Insight", "data type", "database save"],
        "answer" : "D",
        "explanation" : "coming Soon"
    },
    "70" : {
        "id" : "70",
        "question" : " On the case designer , which two components can users tag with a Minimum Lovable Product (MLP)  release for Project sizing purpose? choose two",
        "options" : [ "A user mobile app channel ", "An automation", "an appproval decision", "An external system of record"],
        "answer" : "A & D",
        "explanation" : "coming Soon"
    },
    "71" : {
        "id" : "71",
        "question" : "Which scenario require to make updates in Dev Studio?",
        "options" : [ "A customer representative can approve or reject a claim", "A new confirmation view displays a read only text property", "An email correspondence is added to the case type", "A task is reassigned when it reaches a Service level agreement goal"],
        "answer" : "D",
        "explanation" : "coming Soon"
    },
    "72" : {
        "id" : "72",
        "question" : " You are testing an airline reservation case type that does not yet have a UI configured-You need to verify that changing the PurchaseInsurance Field in the clipboard tool updates the TotalCost Field-In which category of the clipboard tool would you expect to find the PurchaseInsurance Field?",
        "options" : [ "User Pages", "System Pages", "Data Pages", "Linked property Pages"],
        "answer" : "A ",
        "explanation" : "coming Soon"
    },
    "73" : {
        "id" : "73",
        "question" : "A developer discovers that a calculated property value is returing an unexpected result- Which two features of the tracer tool allows you to diagnose the problem without significantly affecting application performance ( Choose Two)? ",
        "options" : [ "The Event Monitor", "The clipboard tool", "the Watch function", "Breakpoints"],
        "answer" : "C & D",
        "explanation" : "coming Soon"
    },
    "74" : {
        "id" : "74",
        "question" : "You are configuring routing for a customer warranty service request- All warranty service request are routed to the warranty resolution group except for warranty service request for a beta-release product that requires review by the vice president of the service-How do you configure assignment routing to review warranty service request?",
        "options" : [ "Route the assignment to the warranty resolution group who sends an email notification to the vice president of service for the beta-release product-", "Route the assignment to the skilled group for the beta release when the request is for the beta release-  Otherwise route the assingment to the warranty resolution group-", "Route the assignment to the vice president of the service who routes the assignment to warranty resolution group as needed-", "Route the assignment to the vice president of the service when the request is for the beta release-  Otherwise route the assignment to the warranty resolution group-"],
        "answer" : "D",
        "explanation" : "coming Soon"
    },
    "75" : {
        "id" : "75",
        "question" : "-On which type of rule can you configure edit validate rules?",
        "options" : [ "Properties", "Flow actions", "Activities", " Case types"],
        "answer" : "A ",
        "explanation" : "coming Soon"
    },
    "76" : {
        "id" : "76",
        "question" : "-When designing reports with multiple data sources, in which two ways is an association rule different from a class join? (Choose two-) ",
        "options" : [ " You can join multiple classes with class joins, while you cannot join multiple classes with associations-", " Anyone with the appropriate permissions can use associations when creating reports in the User portal", "Class joins are unique to each report- Associations are reusable in any report", "A class join is required to add a filter condition to your report- "],
        "answer" : "B & C",
        "explanation" : "coming Soon"
    },
    "77" : {
        "id" : "77",
        "question" : "An application contains the class group MyCo-HR-SelfService-Work- There are two classes derived from Work- class: MyCo-HR-SelfService-Work-TimeOff MyCo-HR-SelfService-Work-Expense If a report is created in the MyCo-HR-SelfService-Work class group, what instances will the report return?",
        "options" : [ "Instances of all Work- derived classes", " Instances of MyCo-HR-SelfService-Work-TimeOff and MyCo-HR-SelfService-Work-Expense, unless they are stored in different database tables", "Instances of MyCo-HR-SelfService-Work-TimeOff and MyCo-HR-SelfService-Work-Expense", "Only instances of MyCo-HR-SelfService-Work"],
        "answer" : " C",
        "explanation" : "coming Soon"
    },
    "78" : {
        "id" : "78",
        "question" : "A Fulfillment report needs to list the user ID of the employee who packages the items to ship in an Order case- The report provides information from the MyCo-Orders-Work-Ship and Data-Admin-Operator-ID classes-Which two options independently satisfy the report requirements? (Choose two-)",
        "options" : [ "Configure a class join on the Fulfillment report definition to join operator information to each case-", "Add the user ID to the Fulfillment report definition as a parameter", "Specify both classes on the Pages & Classes tab on the Fulfillment report definition", "Use an association rule to join operator information to each case to populate the Fulfillment report"],
        "answer" : "A & D",
        "explanation" : "coming Soon"
    },
    "79" : {
        "id" : "79",
        "question" : "Which three items are generated and displayed in the compliance score of an application? (Choose three-)",
        "options" : [ " Rules with warnings in the application", " Pega Platform core rules used in the application", "Rules with unjustified warnings in the application", "Unweighted compliance score","Percentage of compliant rules in the application"],
        "answer" : "A & C & E",
        "explanation" : "coming Soon"
    },
    "80" : {
        "id" : "80",
        "question" : "A user reports that an application takes five seconds to complete a step and present the next step in a process- Which tool allows you to gather and analyze performance data for the form submission?",
        "options" : [ "Tracer", "Database Trace", "Performance Analyzer (PAL)", "Performance Profiler"],
        "answer" : "C",
        "explanation" : "coming Soon"
    },
    "81" : {
        "id" : "81",
        "question" : "Which statement describes the appropriate use of the Purge/Archive wizard to address application performance?",
        "options" : [ "Delete any properties exposed in table columns from the BLOB", "Remove unused rules caches maintained on the system", "Delete stored SQL procedures that have been updated-", " Remove old cases from the respective database table"],
        "answer" : "D",
        "explanation" : "coming Soon"
    },
    "82" : {
        "id" : "82",
        "question" : "You want to create a new minor version of an application ruleset to add a new feature to your application- The new feature will be made available to users in a phased rollout- How do you update the application to add the new ruleset version?",
        "options" : [ "Lock and roll the existing ruleset, and create a new application version-", "Create a new application version and add the new ruleset version as a production ruleset", "Skim the existing ruleset and update the existing application version-", "Create a branch ruleset and a new application, and add the branch ruleset to the application-"],
        "answer" :  "C",
        "explanation" : "coming Soon"
    },
    "83" : {
        "id" : "83",
        "question" : "-Which two rule types can you mark as a relevant record? (Choose two-) ",
        "options" : [ "Property", "Section", " Skin", "Report"],
        "answer" : "A & B",
        "explanation" : "coming Soon"
    },
    "84" : {
        "id" : "84",
        "question" : "A developer has identified resource-intensive queue processors as the source of performance issues that application users are experiencing-Which two actions do you perform to resolve the performance issues? (Choose two-)",
        "options" : [ "Associate the queue processors with the appropriate node types-", " Configure the queue processors to run multiple times a day", "Configure the application nodes with node types-", " Select the Include in background processing option on the application rule-"],
        "answer" : "A & C",
        "explanation" : "coming Soon"
    },
    "85" : {
        "id" : "85",
        "question" : "MyCo insurance company completes the development phase of its application and decides to start the testing phase of the application in a testing environment- To migrate the application, the development team created an instance of the Rule-Admin-Product class that includes the application instances to migrate- Which two components does the Rule-Admin-Product instance include by default when you generate an archive file? (Choose two-)",
        "options" : [ "Checked-in rules", "- MyCo- class instances", "Data- class instances", "Checked-out rules"],
        "answer" : "A & B",
        "explanation" : "coming Soon"
    },
    "86" : {
        "id" : "86",
        "question" : "What is the difference between using the Call and Branch methods in an activity step to invoke other activities?",
        "options" : [ "Call provides more robust debugging capability than Branch, while Branch provides better run-time performance-", " Branch creates a new thread to allow asynchronous processing, while Call runs in the thread from it was invoked", "Call returns to the originating activity, while Branch skips the remainder of the originating activity-", " Branch overrides the security restrictions of the called activity allowing you to easily test code; it will not run in production-"],
        "answer" : "C",
        "explanation" : "coming Soon"
    },
    "87" : {
        "id" : "87",
        "question" : "A medium-size toymaker wants to fulfill orders received during the peak season in December and process the orders in batches multiple times a day- Flow do you implement this use case?",
        "options" : [ " Create a queue processor that can process orders received by the company-", "Create one scheduled job and set its run schedule to multiple times a day", " Create scheduled jobs, one for each run, that can process accumulated orders-", " Create batches of orders and send each batch for processing when it gets full"],
        "answer" : "B",
        "explanation" : "coming Soon"
    },
    "88" : {
        "id" : "88",
        "question" : "You are integrating two Pega Web Mashups into a client's mortgage loan financing page-What do you configure to successfully embed both mashups?",
        "options" : [ " Run the mashups on the same thread-", "Identify unique names for each mashup", "Load both mashups simultaneously-", " Define identical URLs for each mashup"],
        "answer" : "B",
        "explanation" : "coming Soon"
    },
    "89" : {
        "id" : "89",
        "question" : "You are working on an update to an application which only affects some rules for a certain case type- For migration to a production system, the customer wants the updated rules released as a new patch version of the application ruleset-Flow do you create the new ruleset version?",
        "options" : [ "Skim the relevant rulesets to copy the highest versions of the existing rules to the new version-", "Merge the existing rules in the relevant rulesets to the new version", "Lock the current ruleset and then roll (increment) the ruleset version", " Create a branched ruleset and then copy the affected rules into the new branched ruleset"],
        "answer" : "C",
        "explanation" : "coming Soon"
    },
    "90" : {
        "id" : "90",
        "question" : "-In which scenario is a Declare OnChange rule appropriate?",
        "options" : [ "When a manager approves a case, the case is routed back to the appropriate caseworker", "When a developer changes a view, the change is checked into a development branch-", " When a user updates their address, the active case is suspended until the address can be confirmed", " During a nightly backup process, only updated fields are backed up"],
        "answer" : "C",
        "explanation" : "coming Soon"
    },
    "91" : {
        "id" : "91",
        "question" : "Teams X and Y work on different enhancements in the same ruleset- The release date for each enhancement is uncertain-Which two options, when performed together, allow each team to keep its work separate? (Choose two-)",
        "options" : [ "Create a new ruleset version for one of the teams", "Create access groups for each of the teams", " Create a branch ruleset for each team-", "Apply privileges to the rules each team configures-"],
        "answer" : "B & C",
        "explanation" : "coming Soon"
    },
    "92" : {
        "id" : "92",
        "question" : "Which statement about managing encrypted data in Pega Platform is true?",
        "options" : [ " Each organization uses a custom key to encrypt its data-", "Property-level encryption is a time-efficient method to encrypt data-", "Encryption policies apply to Work- and Data- classes only-", " Filter conditions cannot reference encrypted properties in reports-"],
        "answer" : "A ",
        "explanation" : "coming Soon"
    },
    "93" : {
        "id" : "93",
        "question" : "A requirement states that users assigned the Manager role can edit objects related to only studio or Brand workAt which position in the class hierarchy do you configure an Access of Role to Object (ARO) record to satisfy this requirement?",
        "options" : [ "UPlusMusic-Production-Work-Studio-", "UPlusMusic-Production-Work-",  "UPlusMusic-Production-Work-Studio-Editing", "UPlusMusic-Production-Work-Brand-Marketing"],
        "answer" : "B",
        "explanation" : "coming Soon"
    },
    "94" : {
        "id" : "94",
        "question" : "A requirement states that users assigned the Manager role can edit objects related to only recording work but not editing work-At which position in the class hierarchy do you configure an Access of Role to Object (ARO) record to satisfy this requirement?",
        "options" : [ "UPlusMusic-Production-Work-Studio-", "UPlusMusic-Production-Work-", "UPlusMusic-Production-Work-Studio-Editing", "UPlusMusic-Production-Work-Brand-Marketing"],
        "answer" : " C",
        "explanation" : "coming Soon"
    },
    "95" : {
        "id" : "95",
        "question" : "Consider the following requirement: Car dealers cannot modify orders in the Fulfillment stage-Which security solution do you use to satisfy the requirement?",
        "options" : [ "Access of Role to Object", "Access Deny", "Access When", "Access Group"],
        "answer" : "C",
        "explanation" : "coming Soon"
    },
    "96" : {
        "id" : "96",
        "question" : "Which three types of information can represent an attribute in attribute-based access control (ABAC)? (Choose three-)",
        "options" : [ " Property", "List of strings", " Numerical value", "Single string"," Boolean"],
        "answer" : "b & C & D",
        "explanation" : "coming Soon"
    },
    "97" : {
        "id" : "97",
        "question" : "A chemical supplier processes thousands of online orders each day- The supplier provides a material safety data sheet (MSDS) for each of the 100+ cleaning products in stock- When buyers select an item to order, the application displays the MSDS- The MSDS rarely changes- Which of the following options ensures the MSDS is up to date when an order is created?",
        "options" : [ "Configure a keyed data page that allows multiple pages for each key-", "Create a data page that contains the MSDS for each cleaning product", "Create a parameterized data page that loads a new MSDS for each product", "Create a keyed data page with the MSDS for each cleaning product"],
        "answer" : "A",
        "explanation" : "coming Soon"
    },
    "98" : {
        "id" : "98",
        "question" : " If a customer reports an issue with their online order, an Investigation case is created- All assignments for Investigation cases are higher priority than assignment with other options- Which configuration supports the requirements to have a greater default urgency on Investigation case assignments?",
        "options" : [ "Create a SLA rule and ensure that the assignment is ready immediately-", "Create a SLA rule and increase the initial urgency-", "Configure an optional action to enable manual changes to case urgency-", "Increase the initial urgency on the case type settings"],
        "answer" : "D",
        "explanation" : "coming Soon"
    },
    "99" : {
        "id" : "99",
        "question" : "-Which two requirement are supported by Attribute-based access control(ABAC)?",
        "options" : [ "Agent assignment the “Top Secret” clearance-level can delete reports-", "Personal identifying information in the Work-Baking class is restricted", "Managers can reschedule but not delete appointments", "Bakers with a rating of 4 or better can add recipes to the database-"],
        "answer" : "A & B",
        "explanation" : "coming Soon"
    },
    
    "100" : {
        "id" : "100",
        "question" : "Which two configuration are required when adding a Split for Each shape to your cases life cycle?",
        "options" : [ "Enter the Page List or Page Group property that is the basis of the split-", "Define when the parent process resumes processing-", "Enable users to get back to the subprocess after the case moves forward", "Enter a rule that stores the audit note that you want to include in the subprocess-"],
        "answer" : "A & B",
        "explanation" : "coming Soon"
    },
    "101" : {
        "id" : "101",
        "question" : "A requirement states that the Manager role cannot open a purchase request during the Audit stage-How do you configure the case stage to satisfy this requirement?",
        "options" : [ "Apply a Privilege record-", "Apply an Access When record-", "Apply an Access Deny record-", "Apply a When record"],
        "answer" : "B",
        "explanation" : "coming Soon"
    },
    "102" : {
        "id" : "102",
        "question" : "A global application with infrastructure nodes located throughout the world requires certain operations to start executing at midnight GMT-Select two possible designs for this use case- (Choose Two)",
        "options" : [ "Use the Queue-For-Processing method in an activity and design a standard queue processor-", "Use the Queue-For-Processing method in an activity and design a dedicated queue processor-", "Use the Run in background step in the case life cycle and design a standard queue processor-", "Use the Run in background step in the case life cycle and design a dedicated queue processor "],
        "answer" : "A & D",
        "explanation" : "coming Soon"
    },
    "103" : {
        "id" : "103",
        "question" : "Which three options do you consider when deciding to use post-processing actions on a flow action? (Choose Three)",
        "options" : [ "The sequence in which the system runs different actions",
        "The potential reuse of the flow action",
        "The effect if the flow action is reloaded",
        "The security setting for the flow action",
        "The timing of the commit for the flow action"],
        "answer" : "A & B & C",
        "explanation" : "coming Soon"
    },
    "104" : {
        "id" : "104",
        "question" : "Multiple teams need to update the same application version during it development cycle-Which two actions do you perform so that the teams do not affect each other’s work? ",
        "options" : [ "Create a separate production ruleset for each team"," Create a new ruleset version for the base application"," Create a new application for each team built on the base application","Create branches in each team’s application"],
        "answer" : "C & D",
        "explanation" : "coming Soon"
    },
    "105" : {
        "id" : "105",
        "question" : "You configure a child case to override the locking strategy of the parent case- The parent case has a time-out value of one hr-Which time-out value option is recommended for the child case?",
        "options" : [ "The Access time-out value on the child case cannot be changed","Set the Access time-out value equal to the parent case time-out value","Set the Access time-out value less than the parent case time-out value","Set the Access time-out value greater than the parent case time-out value"],
        "answer" : " C",
        "explanation" : "coming Soon"
    },
    "106" : {
        "id" : "106",
        "question" : "The Static Assembler is used to address rules assembly issues due to which cause?",
        "options" : [ "The application record lists several branch rulesets","The server is managing a large number of rules caches","Access groups contain multiple production rulesets"," A new application is migrated to the production system"],
        "answer" : "D",
        "explanation" : "coming Soon"
    },
    "107" : {
        "id" : "107",
        "question" : "-which statement regarding managing encrypted data in Pega Platform is true?",
        "options" : [ " Each organization uses a custom key to encrypt its data","Property level encryption is a time efficient method to encrypt data","Class-level encryption will encrypt individual properties","To decrypt data, apply the same key used during encryption"],
        "answer" : "A ",
        "explanation" : "coming Soon"
    },
    "108" : {
        "id" : "108",
        "question" : "Which statement about the relationship between organisational elements is true?",
        "options" : [ "A unit can belong to multiple organisations","A work queue can belong to multiple organisation","A work group can have multiple managers","A work queue belongs to a single operator"],
        "answer" : " C",
        "explanation" : "coming Soon"
    },
    "109" : {
        "id" : "109",
        "question" : "Which two data elements can be used as an attribute for an access control policy? (Choose Two)",
        "options" : [ "Appointment date","Encrypted bank account number","Number of dependents"," Password string"],
        "answer" : "C & D",
        "explanation" : "coming Soon"
    },
    "110" : {
        "id" : "110",
        "question" : "A budgeting application uses a job scheduler to automatically email customers once a week with a breakdown of their weekly expenses- Due to the international usage of the application, stakeholders require peak performance at all hours-  Which solution addresses this performance concern?",
        "options" : [ "Dedicate and classify a node for the job scheduler"," Ensure customers use a common access group","Configure the job scheduler to run at off-hours"," Limit the number of operators who access the application-"],
        "answer" : "C",
        "explanation" : "coming Soon"
    },
    "111" : {
        "id" : "111",
        "question" : "You have a requirement to associate users in different units to the same work queue-How do you implement this requirement?",
        "options" : [ "Associate the users to common work group- Then associate a work queue to the work group","Associate the users to a common work queue- Then associate the work queue to the appropriate units","Associate the users to common units- Then associate a work queue to the common unit" ,"Associate the users to a common work group- Then associate the work group to the appropriate units"],
        "answer" : "A ",
        "explanation" : "coming Soon"
    },
    "112" : {
        "id" : "112",
        "question" : "-A requirement states that the Manager role cannot open a purchase request during the Audit stage-How do you configure the case stage to satisfy this requirement?",
        "options" : [ "-Apply a Access When record", "Apply an Access Deny record","Apply a When record","Apply a Privilege record"],
        "answer" : "A",
        "explanation" : "coming Soon"
    },
    "113" : {
        "id" : "113",
        "question" : "Which requirement is supported by attribute-based access control (ABAC)? - 2 options",
        "options" : [ "Bakers with a rating of 4 or better can add recipes to the database","Personal identifying information in the Work-Baking-class is restricted ","Customers have view access to all attachments on a case","Managers can reschedule but not delete appointments","Agents who are assigned the Top Secret clearance level can delete reports"],
        "answer" : "B & E",
        "explanation" : "coming Soon"
    },
    "114" : {
        "id" : "114",
        "question" : "Which two best practices for creating a mobile app on Pega Platform guarantee a consistent user experience? (Choose Two)",
        "options" : [ "Use multiple unlocked rulesets when developing a mobile app","Decide early in the development process if the mobile app supports offline mode","Apply both responsive and adaptive user interface designs to optimize the display of the app","Incorporate Android emulators during the development and production phases"],
        "answer" : "A & C",
        "explanation" : "coming Soon"
    },
    "115" : {
        "id" : "115",
        "question" : "A city resident can report potholes to the Department of Transportation by logging into a mobile Pega Platform application that utilizes the Pega API-Which two Pega API interactions do you use to facilitate this? (Choose Two)",
        "options" : [ "Submit the report using POST/ cases","Access the related case type to report using GET / case types","Update the report using GET/cases","Log into the application using PUT/authenticate"],
        "answer" : "A & B",
        "explanation" : "coming Soon"
    },
    "116" : {
        "id" : "116",
        "question" : "In which of the following situations would you configure Application Settings?",
        "options" : [ "The thresholds for a SLA are set to hours instead of days on a testing environment","The credentials for a REST service differ between development and production environments","A SOAP connector returns simulated data in the development environment","Two SOAP connectors execute in parallel to improve performance-"],
        "answer" : "B",
        "explanation" : "coming Soon"
    },
    "117" : {
        "id" : "117",
        "question" : "Which statement is true about connectors?",
        "options" : [ "-Connectors can be referenced from data transforms","Connectors establish a link to a service on another system","Connectors use a listener that runs in the background","Connectors require REST service to function"],
        "answer" : "B",
        "explanation" : "coming Soon"
    },
    "118" : {
        "id" : "118",
        "question" : "A data page is used to retrieve data from an external system- If an error occurs, you want to display a message to the user and send an email to the system administrator- How do you implement this requirement?",
        "options" : [ "Configure an error handing process that displays the error message and sends an email","Configure an activity’s input source as the error message and the output as an email","Reuse the out-of-the-box connection problem error handling flow on the service tab for the connector","Create an error handler data transform that adds an error message to the data page and send an email "],
        "answer" : "D",
        "explanation" : "coming Soon"
    },
    "119" : {
        "id" : "119",
        "question" : "Which two configurations are required when adding a Split for Each shape to your case life cycle? (Choose Two)",
        "options" : [ "-Define when the parent process resumes processing","Enable users to get back to the subprocess after the case moves forward","Enter the Page List or Page Group property that is the basis of the split","Enter a rule that stores the audit note that you want to include in the subprocess"],
        "answer" : "A & C",
        "explanation" : "coming Soon"
    },
    "120" : {
        "id" : "120",
        "question" : "-A fitness organization wants to ensure that data is entered correctly into an online form when users apply for, or update, their membership information-Which scenario requires an edit validate rule?",
        "options" : [ "The first and last name are required on the form, but a middle name or initial is optional","Existing members must enter their membership number in the correct format, M-######-0#","New members can get a 20% discount, if they enter the coupon code SAVE","New members must be at least 18 years of age at that time they sign up for membership","The account or card number must be entered in the correct format for the payment type "],
        "answer" : "B & E",
        "explanation" : "coming Soon"
    },
    "121" : {
        "id" : "121",
        "question" : "Which two configurations do you implement when using a Pega Web Mashup? (Choose Two)",
        "options" : [ "-Configure a node-level data page to hold security access information about the external system","Configure the application permissions by specifying a list of trusted domains in the application rule","Add an access group for the application rules that need to be access from the external system","Leverage the standard authentication service IAC authentication and update the authentication activities"],
        "answer" : "B & D",
        "explanation" : "coming Soon"
    },
    "122" : {
        "id" : "122",
        "question" : "Select the three Pega best practices for developing activities- (Choose Three)",
        "options" : [ "Only use activities to support queue processing and interfaces","Activities should have fewer than 25 steps","To prevent performance problems, limit activities to three calls","Only use custom Java steps when absolutely necessary","Only use activities when other rule types cannot meet requirements"],
        "answer" : "B & D & E",
        "explanation" : "coming Soon"
    },
    "123" : {
        "id" : "123",
        "question" : "A Developer has identified resource-intensive queue processors as the source of performance issues that application users are experiencing-Which two actions do you perform to resolve the performance issues? 	",
        "options" : [ "Configure the application nodes with node type","Associate the queue processors with the appropriate node types","Select the include in background processing option on the application rule","Configure the queue processors to run multiple times a day"],
        "answer" : "A & B",
        "explanation" : "coming Soon"
    },
    "124" : {
        "id" : "124",
        "question" : "-MyCo insurance company completed the development phase of its application and decided to start the testing phase of the application in a testing environment- To migrate the application, the development team created an instance of the Rule-Admin-Product class that includes the application instances to migrate-Which two components does the Rule-Admin-Product instance include by default when you generate an archive file? ",
        "options" : ["-Checked-in rules","Pega Platform rules","MyCo- class instances","Checked-out rules"],
        "answer" : "A & C",
        "explanation" : "coming Soon"
    },
    "125" : {
        "id" : "125",
        "question" : "In which two scenarios is it a Pega best practice to use Pega Web Mashup over a Pega API integration? ",
        "options" : [ "Users are expected to create cases, open assignments, and manage data privacy","Developers have access to only App Studio when configuring the integration","The application is built on Pega Platform version 8-2 using UI Kit","Minimal resources are assigned to update Pega Platform for each new release"],
        "answer" : "B & D",
        "explanation" : "coming Soon"
    },
}
const saConcepts = [
    "Activity",
    "Auditing",
    "Branch development",
    "Case approvals",
    "Case management and case life cycle",
    "Circumstancing",
    "Class and class hierarchy",
    "Configuring layouts",
    "Correspondence and work party",
    "Creating pega application",
    "Data pages",
    "Data transform",
    "Debugging",
    "Decision shapes",
    "Delegation",
    "Design thinking",
    "Duplicate case",
    "Gathering requirements",
    "Integration basics",
    "Invite users",
    "Multistep form",
    "Optional actions",
    "Pega Express Introduction",
    "Process Design",
    "Property rules",
    "Relevant records",
    "Reports",
    "Routing",
    "Rule creation",
    "Rulesets",
    "Security and security policies",
    "Skipping stage or process",
    "SLA",
    "Testing",
    "UI",
    "Validations"
];
const ssaConcepts = [
    "Advanced Reports",
    "Application migration",
    "Application rulesets",
    "Application versioning",
    "Background Processing",
    "Branch development",
    "Collections",
    "Concurrent access and case locking",
    "Constraints",
    "Circumstancing",
    "Data access patterns",
    "Edit Validate Rule",
    "Expression builder",
    "Extending SLA",
    "Flow action processing",
    "GetNextWork",
    "Integrations",
    "Integration Settings and Errors",
    "Multiple child cases",
    "Organization Records",
    "Parametrizing rules",
    "Parallel Processing",
    "Rule availability",
    "Rule resolution algorithm",
    "Security",
    "Web Mashup"
];


//const csaSpecificConcepts = ["ifsc implementation", "Retrive Data From datatype", "savables"]
const cssaSpecificConcepts = ["Service connect-REST", "Service connect-SOAP"]

const csaConcepts = [...saConcepts]
const cssaConcepts = [...ssaConcepts, ...cssaSpecificConcepts]

const categoryMapping = {
    "1" : "cat_enhancement",
    "011" : "sub_otp",
    "011_2" : "cat_otp",
    
}

const devDetails = {
    "rajeev" : {
        "name" : "Sami Venkata Sai Rajeev",
        "tag" : "Certified senior system architect",
        "desc" : "Sami venkata Sai Rajeev is an(Certified senior system architect ) and an graduate from chennai institute of technology -He worked on all the advanced concepts to provide the information in this website,and  worked on many pega usecases  to configure real time implementations- Rajeev has been part of winners in pega community hackathon 2022-"
    },
    "aslam" : {
        "name" : "Dadela Shaik Aslam",
        "tag" : "Certified senior system architect",
        "desc" : "Dadela Shaik Aslam is an (Certified senior system architect ) and a graduate from Chennai institute of technology-He involved in collecting  and analyzing  all the materials regarding entire concepts  of CSA and CSSA and  also prepared a mocktests and quiz’s  to the people  to gain more knowledge and up skill themselves-"
    },
    "loki" : {
        "name" : "Lokendra S",
        "tag" : "Full Stack Web & Cross-Platform App Developer - Cloud Practitioner",
        "desc" : "Lokendra S- -> Web Developer",
        "footerTag" : "Will add later"
    }
}

const suppDetails = {
    "navya" : {
        "name" : "Sarvepalli Navya",
        "tag" : "Certified senior system architect",
        "desc" : "Sarvepalli Navya  is an CSSA and a graduate from Chennai  institute of Technology- She has been part of winners in pega community hackathon 2022-"
    },
    "sireesha" : {
        "name" : "Chappidi Shireesha",
        "tag" : "Certified senior system architect",
        "desc" : "Chappidi Shireesha is an CSSA and a graduate from Chennai  institute of Technology- She has been part of winners in pega community hackathon 2022-"
    },
    "dhana" : {
        "name" : "Eragamreddy Dhanasekhar Reddy",
        "tag" : "Certified senior system architect",
        "desc" : "Eragamreddy Dhanasekhar Reddy is an CSSA and a graduate from Chennai  institute of Technology- He has been part of winners in pega community hackathon 2022-"
    },
}

module.exports = {
    categories, notes, 
    csaConcepts, cssaConcepts, 
    categoryMapping, devDetails, suppDetails
}