# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here


## Tasks 1
### PLEASE PLACE YOUR PR(s)  HERE

### Description

Create a `add_agent_custom_id` migration on the `facilities` table. The new column will have the following properties:
 - name -> agent_custom_id
 - datatype -> string
 - length -> 255 max
 - Not Null -> true

 ### Acceptance Criteria

 - Confirm that the new field is added to the table


## Tasks 2
### PLEASE PLACE YOUR PR(s)  HERE

### Description

Write a function to generate a custom id for our `facilities` table. This ID wil be used when generating reports for our agents

 ### Acceptance Criteria

 - Write unit tests for function
 - The function should always return a non-repeated id (we need a unique ID)

## Tasks 3
### PLEASE PLACE YOUR PR(s)  HERE

### Description

Write a function that gets the shifts for the agents as we shall use this to generate for them reports. This function can be named `getShiftsByAgent`. The function will be supplied with the agent ID, and shifts attached to that agent should be returned.

### Acceptance Criteria

- Create a function called `getShiftsByAgent` that will return the shifts for the agents
- Write unit tests for function
- The function should only return shifts for agent ID provided.

## Tasks 4
### PLEASE PLACE YOUR PR(s)  HERE

### Description

Save the new created agent custom ID, when attaching an agent to the facility 

### Acceptance Criteria

- Attach the new custom id created for the agent in the facilities table
- The custom ID should always be unique for each agent