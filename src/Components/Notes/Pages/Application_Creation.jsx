import React from 'react'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'


function Application_Creation() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <h3><b>Application Creation in Pega Platform:</b></h3>
            <p>What are the different application structure we have in pega?</p>
            
<p>1. Framework </p>
<p>2. implementation</p>

<p>Example :
Ravi is planning to do a business called as : Online shopping
this business is started in India.  Applications works for the Indian segments.
This application is built on the pega platform</p>

<p>OnlineShopping(IN)</p>
<p>PEGA Platform</p>
    <p>note : Each application is built above the pega platform only.
</p>
<p>After few years, the business gets expanded.
Ravi wants to develop new branches in UK and Australia.
Ravi contacts developer to create new applications for UK and Australia.</p>
<p>1. Developing applications for each country is it a best practice/ good idea?
	What about in future? if the app wanted to be created for 50 + countries?
		Should we create that much amount of application?</p>
        <p>2.How much time it would taken to create the application for UK and AUS countries?
	each time the developer creates the application, he develops the application from scratch.
	If one application takes 2 months to completed , each other applications will take 2 months to complete.
	What about the developer time and resource management ? </p>
    <p>These applications become independent applications and they cannot be reused.</p>
    <p>Decide the application structure:</p>
    <p>1. if my applications is going to be build from scratch and it is going to be extend in future
		choose application type as "Framework"</p>
        <p>2. if my application is going to be built from another application / are not extended in future
		choose application type as "Implementation"
</p>
<p>Each application differes in terms of customer segments/region/products/channels
This process of constructing the layers of applications one above the other to implement
the concept of reusability called as <b><i>SLC</i> - Situation Layer Cake.</b>
SLC is practically implemented in Pega using <b><i>ECS</i> ( Enterprise class Structure).</b>
</p>
<p>Each Project consist of an application.</p>
<p>What is an application ?</p>
	<p>It represent the current Project that we are working on.
	It consist of several microjourney , that defines different business transaction</p>
	<p>eg: Swiggy
		business transaction - Order Food, Instamart, Genie</p>
        <p>To develop or create a project , create the application
inside the application we can start creating or build the business transaction.</p>
<p>How to create application in Pega?</p>
<p>1. What is the application type that we are going to build ? Build from Scratch</p>
<p>2. What type of experience do you want for the application ? Theme Cosmos</p>
<p>3. Application name  :  Health care </p>
<p>Advanced configuration</p>
			<p>1. Application structure : Framework , Implementation</p>
			<p>2. Application ID and Version</p>
			<p>3. Base Language</p>
			<p>4. Orgname / Division  / unit name</p>
			<p>5. Class Structure</p>
        
        <p>After this we can click on create application.</p>
<p>who will work on this application ? Developers
	we added 2 operator - Sujin@infosys.com ,  Dhanasekar@infosys.com
	
</p>
<p>Application Structure :</p>

<p>HealthCare 	- Framework</p>
<p>PegaPlatform</p>
<p>Since the application structure is framework, we can create another application above this.
now we have created another application  HECUS -of implementation type.
now the application structure is </p>
<p>HECUS		- implementation type	 ( HECUS application can reuse the rules form the Healthcare base applications)</p>
<p>HealthCare 	- Framework</p>
<p>PegaPlatform</p>
    
    </Container>
    </>
  )
}

export default Application_Creation