# Presented endpoints:

## 1. Show all tasks
  - URL *'/'*
  - Method - **GET**
  - Description: Retrieves a list of tasks
  - Response format: JSON
  - Response data: 
  ``` 
  [{
    "description": srting,
    "dueDate": string,
    "creationDate": string,
    "completed": boolean,
    "completionDate": string,
    'id': number,
  }]
  ```
## 2. Add task
  - URL: *'/add-task'*
  - Method: **POST**
  - Description: Adds a new task based to the list
  - Request body: 
  ``` 
  [{
    "description": srting,
    "dueDate": string,
    "creationDate": string,
    "completed": boolean,
    "completionDate": string,
    'id': number,
  }]
  ```
  - Response format: JSON
  - Response data: 
  ``` 
  [{
    "description": srting,
    "dueDate": string,
    "creationDate": string,
    "completed": boolean,
    "completionDate": string,
    'id': number,
  }]
  ```
## 3. Update task
  - URL: *'/edit-task/{task_id}'*
  - Method: **POST**
  - Requested Payload: 
  ```
  {task_id: number}
  ```
  - Description: Updates an existing task based on id
  - Request body: 
  ``` 
  [{
    "description": srting,
    "dueDate": string,
    "creationDate": string,
    "completed": boolean,
    "completionDate": string,
    'id': number,
  }]
  ```
  - Response format: JSON
  - Response data: 
  ``` 
  [{
    "description": srting,
    "dueDate": string,
    "creationDate": string,
    "completed": boolean,
    "completionDate": string,
    'id': number,
  }]
  ```
## 4. Delete task
  - URL *'/'*
  - Method: **DELETE**
  - Description: Deletes an existing task based on id
  - Request body: {
    ```
    todoId: number
    ```
  }
  - Response format: JSON
  - Response data: 
  ``` 
  [{
    "description": srting,
    "dueDate": string,
    "creationDate": string,
    "completed": boolean,
    "completionDate": string,
    'id': number,
  }]
  ```