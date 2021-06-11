# Task 4: Coding Exercise
For JobCloud, probably the most valuable interaction on our platforms is users applying for a job. For that reason, we would like you to implement a small application submit form featuring the following fields:
- email: text field
- message: text area (optional)
- motivation: select field (optional, values: `high` or `low`)

A (shell) app is provided in the task folder. `cd` into the directory on your command line and run `yarn` to install the dependencies.

Validate for required fields in the frontend and show successful submission (or failure in case of a 409, see API documentation below).

As an added bonus, make it look pretty.

You can use any resource you like to complete this task, but be prepared to defend your choices.

### REST endpoint
You can submit the form to an existing REST endpoint `api/applications` via the normal `fetch` API (or whatever alternative you prefere). Note that this is a fake endpoint and will only persist your data until you refresh the browser. Here is the API documentation:
#### GET
##### 200: successful
Example Response:
````
{
  applications: [
    {
      "email": "test@test.test",
      "id": "1",
      "message": "I would like to apply for this position",
      "motivation": "high"
    }
  ]
}
````
#### POST
##### 201: successful
Example Response:
````
{
  application: {
    "email": "test@test.test",
    "id": "1",
    "message": "I would like to apply for this position",
    "motivation": "high"
  }
}
````
##### 409: duplicate
When an application with the same email is submitted multiple time.
Example Response:
````
{
  errors: ["Duplicate"]
}
````
##### 422: Unprocessable Entity
When there are missing required params or too many params
Example Response:
````
{
  errors: ["Missing params", "Too many params"]
}
````
