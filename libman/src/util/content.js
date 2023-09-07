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
        "Premium": "true"
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
            "Premium": "true"
        },
        "cat_chatbot":{
            "id": "014",
            "name": "chatbot"
        },
        "cat_multiple_mail_sender":{
            "id": "015",
            "name": "multiple mail sender",
            "Premium": "true"
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
            "Premium": "true"
        },
        "cat_email_listner":{
            "id": "019",
            "name": "email listener",
            "Premium": "true"
        },
        "cat_add_to_cart":{
            "id": "020",
            "name": "add to cart",
            "Premium": "true"
        },
        "cat_toast_message":{
            "id": "021",
            "name": "toast-Message",
            "Premium": "true"
        },
        "cat_send_whatsapp_msg":{
            "id": "022",
            "name": "send WhatsApp msg",
            "Premium": "true"
        },
        "cat_send_sms":{
            "id": "023",
            "name": "send sms"
        },
        "cat_dynamic_login":{
            "id": "024",
            "name": "Dynamic login",
            "Premium": "true"
        },
        "cat_multi_select":{
            "id": "025",
            "name": "Multi select"
        },
        "cat_restrict_permission":{
            "id": "026",
            "name": "Restrict permission to other operators",
            "Premium": "true"
        },
        "cat_track_status":{
            "id": "027",
            "name": "Track Status",
            "Premium": "true"
        },
        "cat_update_portal":{
            "id": "028",
            "name": "Update portal"
        },
        "cat_export_data":{
            "id": "029",
            "name": "Export data from Pega Application to Excel File",
            "Premium": "true"
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
            "Premium": "true"
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
            "Premium": "true"
        },
        "cat_integration":{
            "id": "030.4",
            "name": "Integration",
            "sub" : true
        },
        "cat_orgranization":{
            "id": "030.5",
            "name": "Organization",
            "Premium": "true"
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
            "Premium": "true"
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
            "Premium": "true"
        }
    },
    "sub_data_model": {
        "cat_retrive_data":{
            "id": "030.2.1",
            "name": "Retrieve data from Datatypes",
            "Premium": "true"
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
            "Premium": "true"
        },
        "cat_service_connect_rest":{
            "id": "030.4.2",
            "name": "Service-Connect REST",
            "Premium": "true"
        },
        "cat_service_connect_soap":{
            "id": "030.4.3",
            "name": "Service-Connect SOAP",
            "Premium": "true"
        }
    },
    "sub_reports": {
        "cat_deligation":{
            "id": "030.7.1",
            "name": "Delegation",
            "Premium": "true"
        }
    },
    "sub_technical": {
        "cat_activity":{
            "id": "04.111",
            "name": "Activity",
            "Premium": "true",
            "sub":"true"
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
            "Premium": "true"
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
            "Premium": "true"
        },
        "cat_phone_number":{
            "id": "04.06",
            "name": "Phone Number Validation",
            "Premium": "true"
        },
        "cat_name_validation":{
            "id": "04.07",
            "name": "Name Validation"
        },
        "cat_card_number":{
            "id": "04.08",
            "name": "Card Number Validation",
            "Premium": "true"
        },
        "cat_cvv":{
            "id": "04.09",
            "name": "CVV validation",
            "Premium": "true"
        },
        "cat_pincode":{
            "id": "04.10",
            "name": "Pin Code"
        },
        "cat_toget_future":{
            "id": "04.11",
            "name": "To get a future date from today",
            "Premium": "true"
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
            "Premium": "true"
        },
        "cat_age_calucations":{
            "id": "04.15",
            "name": "Age Calculations",
            "Premium": "true"
        },
        "cat_notice_peroid":{
            "id": "04.16",
            "name": "Notice Period in Pega",
            "Premium": "true"
        },
        "cat_split_date":{
            "id": "04.17",
            "name": "Split date from current System date",
            "Premium": "true"
        },
        "cat_validating_age":{
            "id": "04.18",
            "name": "Validating the Age with Date of Birth",
            "Premium": "true"
        },
        "cat_registrating_number_code":{
            "id": "04.19",
            "name": "Registration number Code",
            "Premium": "true"
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
    "01" : {
        "id" : "01",
        "question" : "wedfgvhbjnkmsdf csadgjklzygfgvb aghjk",
        "options" : [ "loki", "ghj", "hujk", "ghjk"],
        "answer" : "loki",
        "explanation" : "efgvhbjnko gfhjkl rfgyhujk"
    },
    "02" : {
        "id" : "01",
        "question" : "wedfgvhbjnkmsdf csadgjklzygfgvb aghjk",
        "options" : [ "loki", "ghj", "hujk", "ghjk"],
        "answer" : "loki",
        "explanation" : "efgvhbjnko gfhjkl rfgyhujk"
    },
    "03" : {
        "id" : "01",
        "question" : "wedfgvhbjnkmsdf csadgjklzygfgvb aghjk",
        "options" : [ "loki", "ghj", "hujk", "ghjk"],
        "answer" : "loki",
        "explanation" : "efgvhbjnko gfhjkl rfgyhujk"
    }
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