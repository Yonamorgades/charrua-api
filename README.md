**Show products**
----
  Returns json data about all products.

* **URL**

  /product/

* **Method:**
* 
  `GET`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : Object id, name : "ProductName" , category : "category" , price : "price" , ingredients: ["Ingredient1","Ingredient2"...],description:"description" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "No products found" }`



