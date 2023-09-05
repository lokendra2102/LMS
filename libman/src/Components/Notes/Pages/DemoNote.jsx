import React from 'react'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'

function DemoNote({user, path}) {
  return (
    <>
        <Notes user={user} path={path} />
        <Container fluid className='px-5 mt-4'>
            <p className='fs-5 text-uppercase text-decoration-underline' style={{fontWeight : '500'}}>Activity:</p>

            <p className='mb-1'>1. Declare expression = use for calculations</p>
            <p className='mb-1'>2. Data pages - used to cache data on demand and store them into the clipboard.</p>
            <p className='mb-1'>3. Data transform  - used to manipulate data ( copy data, transfer data, set values/ propagate data)</p>
     
       why activities:
used to automate the processing.
to do the task in the background effectively

eg: Send a birthday email to all customers on their birthday
update all stock status, if the stock is 0 , send email to the production manager
store multiple records into the database
deleting a record from the database.
writing information to the log files 

How to create activity?
	Technical -> Activity
	right click on the case type class -> create -> Activity
	name : Storemultiplerecords activity
in the activity steps tab:
	1. Step number - indicate the step to be performed
	2. Label	- name for the step
	3. Loop	- used to iterate the conditions.
	4. when	- used to check the conditions
	5. method	-  action to be performed in the step
	6. Step page - the page on the which the data is processed.
	7. Description - comments about the step.
	8. Jump	- to move form one step to another step
	9. delete	- to delete the step.


as a developer, when any business requirement is given to you
first check by using any of the above three rules, can we solve it ?
	if not , then go for the alternative.

What are the requirements where we cannot do by using the above three rules?
1. save multiple records into the database - logic
2. delete records from the database - logic
3. Write the information to the log files -  automated
4. send birthday email to all the customers  - automated 
5. update the productionn manager when the stock is 0 - automated.
all the above requirements based on two factors : logic / automation.
Automating processing is the important features of the pega
to achieve this we use activities.

Activities are series of steps used to achieve the particular task in pega
it automates processing.

Demo :
	create a datatype : Student
	3 fields : StudentID, Name, Department
	configured the source and studentid as the key
	create the case type : Student Request
		Step :  collect student details
		added a field-> StudentInfo , Embedded data
			single record
			data object name : Student
Task :
1. Add a single record into the database
2. update the records
3. Delete the records
4. store multiple records into the database.

1. Add a single record into the database
	to create activity: rightclick on the case type clas -> Create -> Technical -> Activity 
	name: Store Single record activity
in the activity , under steps tab:
	we can find the below information
	1. Step number - indicates the series of steps to be completed
	2. Label - name for the label for the identification
	3. Loop - for iterating the set of records
	4. When - check conditions and evaluate true or false results
	5. method - action to be performed on the step
	6. Step page - the page on which the data is processed.
	7. Description - comments about the step.
	8. Jump - move from one step to another step
	9. Delete - delete the respective step.

before we start any activity logic :
	1. from where we get the data? clipboard
	under clipboard which page contains the data ?pyWorkPage
	pyWorkPage belongs to the case type class ( Work class)
	B1-Batch1-Work-NewStudentRequest
	2. to where we store the data ? database
	in our example, the data type is Student and it belongs to class 
	B1-Batch1-Data-Student
first these two information has to specified in the activity.
in the activity under, page and classes tab
	page name		Class name
	pyWorkPage	B1-Batch1-Work-NewStudentRequest
	TempDB		B1-Batch1-Data-Student
once it is done ,we can start the logic
requirement : Store the single record
	1. get the data
	2. save the data
	3. Commit all the changes to the database.
	
	Method				Steppage
	1.Property-Set			TempDB
	
	NAme(Target)			Value ( Source)	
	.StudentID			pyWorkPage.StudentInfo.StudentID
	similarly enter all the fields
		
	2. Obj-Save			TempDB
	write now 	- this has to be enabled
	3. Commit.
call the activity - on the flow action.

2. update the records
	a. from where does the data comes from?
	b. to where we have to update the data?

	logic:
	1. check if the record is available?		Obj-Open
	2. if record is available, get the update value.	property-set
	3. Save the data				obj-save
	4. commit all changes				commit 

in page and classes :
	Page			classname
	pyWorkPage		B1-Batch1-Work-NewStudentRequest
	studentDB			B1-Batch1-Data-Student

	Method				Step page
	1. Obj-open			StudentDB
	open class : B1-Batch1-Data-Student	( open the data class where the data is avl)
	lock - enabled
	Release on commit - enabled.
	property name		Value
	.StudentID		pyWorkPage.EnterStudentID ( check if ID is existing)

	2. Property-Set			StudentDB
	propertyname		Value
	.Department		pyWorkPage.Department

	3. Obj-Save			StudentDB
	write now - enabled
	4. Commit

3. Delete the records
	a. from where do we get the data?
	b. to where the data has to be deleted?

	logic :
	1. check if the record is available?		Obj-open
	2. if record is available, then delete the record	obj-delete

in page and classes :
	Page			classname
	pyWorkPage		B1-Batch1-Work-NewStudentRequest
	studentDB			B1-Batch1-Data-Student

	Method			Step page
	1. Obj-open		StudentDB
	openclass: B1- Batch1-Data-STudent
	Lock : enabled

	property name		Value
	.StudentID		pyWorkPage.EnterIDtoDelete

	2. Obj-Delete		StudentDB
	Remove - enabled
	immediate - enabled.

Store multiple records into the database:
	
	Loop : 			method		stepname
	for each embedded page	obj-save		.StudentDetails.
	B1-Batch1-Data-Student

        </Container>
    </>
  )
}

export default DemoNote