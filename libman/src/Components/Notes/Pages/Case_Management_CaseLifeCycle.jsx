import React from 'react'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'


function Case_Management_CaseLifeCycle() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <h3><u>Case Management and Case Life Cycle</u></h3>
            <p>Pega Transistion from BPM to case management</p>
            <p>Why case management ?</p>
            <p>Used to represent the entire business process/ business transactions in a single flow.
	In case management we can use the visual model approach called case life cycle design to 
	capture all the business requirements into a single design.</p>
  <p>what is a business ? business is called as an activity engaged in commericial/industry /professional
	to gain a profit.
</p>
<p>Objective of the business : To create more customers/ generate revenue/ create partners etc.</p>
<p>Each business transaction should have complete flow of the process to be completed by different types of users.</p>
<p>How to create a case life cycle design?
first decide what case type to be built : 
write the complete flow </p>
<p>case life cycle design starts with constructing the stages.</p>
<p><b>Stage(milestones)</b> : represent the transfer of authority from one user to another / represent the significant change in the status of the case.</p>
<p><b>Process</b> : Stage contains process . 
		process is a series of steps in order to complete a particular task.</p>
<p><b>Steps</b> : Process contains step.
		each step is a user action or an automated action to perform a task.
</p>
<p>what is the outcome of the business transaction / outcome of the case type?
CASE </p>
<p>Case is an instance of a case type.</p>
<p>Case type : ORDER FOOD</p>
  ORDER#12389, ORDER#34343, ORDER#445454, ORDER#13909 -  duplicate or unique?
  <br />
  each id is a unique number.
  <br />
  each case contains a case id that is unique to identify.
  <br />
  <br />
  <p>Terms that we covered in Case management :
    <br />
  1. Case type - Visual representation of the business transaction or
	abstract model of the business transaction or
	template for creating multiple cases.
  <br />
  2. Case life cycle design - Flow of the business transaction
  <br />
  3. How to construct the case life cycle design? Stages,Process,Steps
  <br />
  4. Routing - assigning the work to the right user.
  <br />
5. Case status- indicates the progress of the case towards the case resolution
<br />
6.  Primary stages/ Happy path - the cycle that leads to the successful outcome.
<br />
7. Alternate stage - if there are any exceptions / errors in the primary stage that can be handled by alternate stage.
<br />
8. SLA - used to ensure the work is completed on time
<br />
9. CASE - outcome of the business transaction. it is a instance of the case type.
<br />
	 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;each case contains the case id and case status.
  <br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case id is unique to each case.
  
</p>
<p>When we create applications : Pega creates 2 access group ( authors , users)
</p>
<p>appname:authors, appname:users</p>
<p>Each operator is associated with the access group.
	access group determine the permission of the application and the portal to be accessed by the operator.
  <br />
if it is author access group, operators can access the development portals ( app studio and Dev studio)
<br />
if it is user access group, operators can access the user portal .
</p>
<p>Operator -&gt; Access Group -&gt; Application and Portal</p>
<p>The application is created successfully.
  <br />
What next ?
<br />
Creating the case type.
<br />
What application contains ? it contains various business transactions.
<br />
Application name : Travel app
<br />
Application Structure : Implementation
<br />
Org name : Yatra
<br />
Business Transactions : 
	Book Ticket , Book Hotel , Cancel Request </p>
  <p>Case type : Book Ticket
  <br />
Flow of this business transaction :
<br />
Customer can enter their basic contact details, Select source and destination, mode of transport, add the passenger details, Confirm the details.
Travel manager can approve the travel request based on the availability, then the customer has to complete the payment..  once the travel manager approves the request, then customer has to get a approval mail.
Travel desk member will review the passenger details and generate the ticket.
then the travel details along with the ticket will be sent to the customer.
</p>
<p>Stages: NewTravel Request	Manager Approval	Payment	Generate Ticket 	Confirmation
</p>
<p>Case Management - is a process of creating an end - end applications.
<br />
Case life cycle design - visually model driven approach used to capture all the business requirements and 
		represent in the end - end transaction
    <br />
Case type -  abstract model of the business transaction
	template for creating the business transaction
  <br />
Case  - outcome of the casetype/business transactions.
	instance of the case type.
	defines the meaningful business outcome
	also referred to as work item.</p>
  <p>Stages :
  <br />
	represent the milestones of the case life cycle design
	it also represent the significant change in the case status , also it represent the transfer of a case
	from one authority to another authority.( from one user to another user)
	Stages contains process.</p>
  <p>Different types of stages
    <br />
	1. Primary stage
  <br />
		the sequence of the stages that lead to the sucessful completion of the business transaction.
		this sequence of path that lead to the successful business outcome is called as primary path or Happy path.
		in case if there is an error any exceptions in the primary path, then it is handled by the Alternate stage.
    <br />
    <br />
	2. Alternate stage
  <br />
		used to handle the exceptions or the erros that occurs in the primary stage.
		note : when we add the approval or reject step, pega automatically add an alternate stage.
		we can also add our alternate stage depending on the requriements.
    <br />
    <br />
	3. Resolution stage
  <br />
		the stage that indicates the end of the life cycle is called resolution stage.
		Primary stage must contain alteast one resolution stage to indicate the end of the case life cycle design.
		Even alternate stage can be also marked as resolution if the case need not to be proceed further.</p>
    <p>Each stage by default in pega follows a sequence . after completing one stage, the control has to goto the next stage .called as Stage Transistion.
      <br />
	3 options:
  <br />
		1.. Automatically move to next stage - then automatically one stage will follow another stage
    <br />
		2. Wait for the user action  - wait for the manual interaction to start the stage
    <br />
		3. Resolve the case - indicates the resolution stage.</p>
    <p>Process:
    <br />
	series of steps for completing a particular work.
  <br />
	when you add first step to a stage, process gets created. by default process has the same name as the stage name.
  <br />
	by default each stage contains one process.
  <br />
	in case if we want to add more than one process , select the three dots on the stage name ( Add -&gt; new process )
	Process contains Steps.</p>
  <p>Step:
  <br />
	it is a user action or automated action to peform a particular assignment.
  <br />
	user actions steps examples are : Collect Information step, Approval Reject, multistep form
  <br />
	Automation steps : Send Email , Send notification , Create case etc.
</p>
<p>In case if want to move from one stage to another - Stage Transistion
<br />
	 move from one primary stage to another primary stage
   <br />
	move from one alternate stage to another alternate stage
  <br />
	move from one primary to alternate  (or) move from alternate to Primary
  <br />
use Change Stage option - used to move from one stage to another stage.</p>
<p>Case : 
<br />
   Each case contains a Case ID and Case Status
   <br />
	case ID - is a unique identifier to identify each case.
  <br />
	this is automatically generated whenever we run the case type.
  <br />
	Each case contains case status - that determine the progress of the case towards resolution.
  <br />
Each case also contains the case instructions
<br />
case instructions determine or help the users to understand what they need to implement in the respective step.
<br />
we can give instructions only for the assignment step.
</p>
<p>Case status is available for the stage and the assignment.
Case status will automatically change once the step begins.
There are so many pega OOTB case status are available  example : New, Open, Resolved-Completed, Resolved-Rejected, Pending-Approval etc.
Incase if we want to add our own case status we can add it.
</p>
<p>Best Practices of the case life cycle design:
<br />
1. Case type name has to be meaningful and relevant
<br />
2. Case type name - noun + noun phrase combination
<br />
	eg: Book Ticket, Order Food, Cancel Request
  <br />
3. Stage name - noun + noun phrase combination
<br />
4. Process / step - verb+ noun phrase combination
<br />
	eg: Collecting student details, Processing information
  <br />
5. when we define a case type/ proces/ stage name - best practice is to use not more than 2 words.
<br />
6. when we add a stage / process/ step , always use 7+-2 combination. ( 5,7,9)
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if it is more 9 steps , break that into a separate process
  <br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if it is more than 9 process, break that into a separate stage
  <br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if it is more than 9 stages, break that into a separate case type</p>
  <br />

        </Container>
    </>
  )
}

export default Case_Management_CaseLifeCycle