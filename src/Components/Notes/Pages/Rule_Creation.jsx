import React from 'react'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'

function Rule_Creation() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <h3><b>Rule</b></h3>
            <p>In Pega, the fundamental block is called as Rules.
Every action in pega creates a rule, rule generates the application code ( JAVA) 
	Pega Platform is built on java.
When we create application , an application rule got created.
Each rule is created based on each rule type
	Rule type is a template creating a rule.
All the rule types are placed under rule category.</p>
<p>Rule category : Application definition, organization, Security , decision , reports, Integration(4), Survey, user interface, technical, sysadmin, 
process,Data model
each of the rule category contains rule type ( 200+ rule types available in pega)</p>
<p>Organization -&gt; operator Id	-&gt; Sarah@cts.com
    <br />
Organization-&gt; work Group	-&gt; default@cts
<br />
Organization -&gt; work queue	-&gt; default@cts, finance WQ, InterviewWQ
<br />
Decision -&gt; when  - Condition1, condition2 </p>
<p>Rule Category -&gt; rule types -&gt; All the rules
	each rule is an instance of the rule type.
	Rule defines the application behaviour of the pega plaform
    <br />Application Definition -&gt; Application -&gt; CSEAPP
Process -&gt; Case type -&gt;  Demo Request
</p>
<p>when we build a case type, case type rule and class got created
where we can find the class - app explorer 
<br />
	Case type class
	4 rule categories:
		Data model
		process
		reports
		sysadmin
        <br />
        When we add a field what rule gets created ? property rule and section rule
        <br />
	Data model -  Property -   Name, Department
    <br />
	User Interface -  section - Collect request details.
</p>
<p>When we open a rule : Rule form appears
    <br />
	1. Rule type - what is the template of the rule ?
    <br />
	2. Rule Name<br />
	3. Rule Status - indicates whether the rule is available or not? <br />
	4. CL - Class - defines the scope of the rule ( reusability of the rule )<br />
	5. ID - Identifier- uniquely identify the rule<br />
	6. RS - Ruleset - container for storing all the rules<br />
	7. Version number<br />
	8. Rule configuration</p>
    <h3>Rule Creation</h3>
    <p>How we can create a rule?<br />
1. when we need to create the rule -&gt; open the existing rule -&gt; Save as the rule <br />
2. from the header menu -&gt; Click on create or dots -&gt; choose rule category -&gt; rule type<br />
3. from the app explorer -&gt; click on arrow -&gt; create -&gt;  choose rule category -&gt; rule type <br />
4. right click on the class directly -&gt; Create-&gt;  choose rule category -&gt; rule type
</p>
<p>While creating a rule , what are the components required?<br />
	1. Rule type<br />
	2. Label		- name of the rule for developer understanding<br />
	3. Identifier 	- uniquely to identify the rule. ( pega uses the idenitifier name to execute the rule)<br />
	4. Context	 - class layer<br />
		By default each application is built on pega platform<br />
		
		Cseapp	&nbsp;&nbsp;Application name <br />
		Cosmos- rules	 ( because we have chosen the experience as theme - cosmos)<br />
		Pega platform<br />
	5. Apply To : Class - defines the scope of the rule<br />
	6. Ruleset - container for storing all the rules in the application<br />
	7. Version number<br />
	8. Development branch ( will appear only if the branch development is ON)

</p>

        </Container>
    </>
  )
}

export default Rule_Creation