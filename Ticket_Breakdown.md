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

### Description

Create a migration to add the new column on the facilities table. The column will be called `agent_custom_id`. The new column will have the following properties:
 - name -> `agent_custom_id`
 - datatype -> string
 - Not Null -> true

 ### Acceptance Criteria

 - Confirm that the new field is added to the table


## Tasks 2

### Description

Write a function to generate a custom id for our newly created column `agent_custom_id` on the `facilities` table. This ID wil be used when generating reports for our agents

 ### Acceptance Criteria

 - The function should always return a non-repeated id (we need a unique ID)

## Tasks 3

### Description

Write a function that gets the shifts for agents, we shall use this to generate reports for them. An `agent_id` should be provided as an argument to the function and this should return shifts attached to that agent.

### Acceptance Criteria

- Create a function called `getShiftsByAgent` that will return the shifts for the agents
- The function should only return shifts for agent ID provided.

## Tasks 4

### Description

Save the newly created agent custom ID, when attaching an agent to the facility 

### Acceptance Criteria

- Attach the new custom id created for the agent in the facilities table
- The custom ID should always be unique for each agent