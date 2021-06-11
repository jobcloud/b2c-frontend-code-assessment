# Task 3: Coding Exercise
For JobCloud, probably the most valuable interaction on our platforms is users applying for a job. For that reason, we would like you to implement a small application submit form.

## Task Instructions
1. A (shell) app is provided in the project directory. `cd` into the directory on your command line and run `yarn` to install the dependencies.
2. Create a form featuring the following fields:
      - email: text field
      - message: text area (optional)
      - motivation: select field (optional, values: `high` or `low`)
3. Hook the form to the REST endpoint (described [below](#REST-endpoint))
4. Validate for required fields in the frontend and show successful submission (or failure in case of a 409, see [below](#409-duplicate)).
5. As an added bonus, make it look pretty.

You can use any resource you like to complete this task, but be prepared to defend your choices.

Should you not be familiar with TypeScript, you can rename your files to `.js` or simply add `// @ts-nocheck` on top of each file.

## REST endpoint
You can submit the form to an existing endpoint `api/applications` via the normal `fetch` API (or whatever alternative you prefere). Note that this is a fake endpoint and will only persist your data until you refresh the browser. Here is the API documentation:
### GET
#### 200: successful
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
### POST
Example Parameters:
````
{
  body: {
    "email": "test@test.test",
    "id": "1",
    "message": "I would like to apply for this position",
    "motivation": "high"
  }
}
````
#### 201: successful
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
#### 409: duplicate
When an application with the same email is submitted multiple time.
Example Response:
````
{
  errors: ["Duplicate"]
}
````
#### 422: Unprocessable Entity
When there are missing required params or too many params
Example Response:
````
{
  errors: ["Missing params", "Too many params"]
}
````
