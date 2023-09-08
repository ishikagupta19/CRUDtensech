# CRUDtensech

PANTRY API
The Pantry API is a basic Node.js application that provides CRUD (Create, Read, Update, Delete) operations for managing a pantry key-value store.

Getting Started
1. Install Node.js in your system
2. Install required packages e.g. Express and bodu-parser.
3. Create a file app.js:
   In this file, I have written all the basic code to make CRUD operations successfull.
   1.1. To POST, I have used /add-item as an endpoint to add pantryId, basketKey.
   1.2. To GET, I have used /get-item as an endpoint to get pantryId, basketKey.
   1.3. To GET Baskets Lists, I have used /list-baskets as an endpoint to get list of pantryId, basketKey.
   1.4. To PUT, I have used /update-item as an endpoint to update pantryId, basketKey.
   1.5. To DELETE, I have used /delete-item as an endpoint to delete the item with respective of their pantryId, basketKey.

   Ref:
   Create (POST) an item in the pantry:

Endpoint: `/add-item`

Request Payload: `{ "pantryId": "your_pantry_id", "basketKey": "your_basket_key", "value": "your_value" }`

Read (GET) an item from the pantry:

Endpoint: `/get-item?pantryId=your_pantry_id&basketKey=your_basket_key`

List Baskets (GET) in the pantry:

Endpoint: `/list-baskets?pantryId=your_pantry_id&filterName=your_filter_name`

Update (PUT) an item in the pantry:

Endpoint: `/update-item`

Request Payload: `{ "pantryId": "your_pantry_id", "basketKey": "your_basket_key", "value": "new_value" }`

Delete (DELETE) an item from the pantry:

Endpoint: `/delete-item?pantryId=your_pantry_id&basketKey=your_basket_key`


   PANTRY CLOUD:
   I have created a pantry cloud and registered with my emailID and after registering I got my PantryID which I can use as JSON file to get basketKey.


POSTMAN:
   ![WhatsApp Image 2023-09-08 at 12 53 30 PM](https://github.com/ishikagupta19/CRUDtensech/assets/83855992/835341e5-c245-48de-a6d3-2912e57bfe86)

![WhatsApp Image 2023-09-08 at 12 57 16 PM](https://github.com/ishikagupta19/CRUDtensech/assets/83855992/b743ba0f-5d0d-4e49-a26f-57d89771f992)

![WhatsApp Image 2023-09-08 at 12 57 41 PM](https://github.com/ishikagupta19/CRUDtensech/assets/83855992/35b34f16-8adf-486a-9b51-68cfeaba0781)


DOCKERIZATION:
After creating DOCKER account, I can directly fetch the api, but due to insufficient knowledge of docker, I was unable to proceed further.
