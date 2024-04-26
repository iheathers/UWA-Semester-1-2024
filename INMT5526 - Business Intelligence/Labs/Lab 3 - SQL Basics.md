### Notes: 

- mysqlsh for mac 
- or use uniapps
- password is old one you use: you know it


### Steps: 
- In terminal,  type `mysqlsh` to open MySQL shell
- `\connect 23771397@db.tris.id.au` to connect to the remote server created for you
- `\sql` to use SQL commands
- `CREATE DATABASE 23771397_db;` to create the database
- `USE 23771397_db;` to use the database



Creating tables and defining primary keys in MySQL can be accomplished in several ways, depending on your specific requirements and preferences. Here are some alternative methods to define a table and its primary key:

1. **Inline Primary Key Specification:**
   The method you've used in your example is an inline specification, where the primary key is defined directly within the column definition. Here's a slight variation:

   ```sql
   CREATE TABLE Transaction (
       id INT,
       date DATE,
       customerName VARCHAR(255),
       transactionItemId INT,
       PRIMARY KEY (id),
       FOREIGN KEY (transactionItemId) REFERENCES TransactionItem(id)
   );
   ```

2. **Composite Primary Key:**
   If you want a primary key that spans multiple columns (useful when the uniqueness is defined by a combination of columns rather than a single column), you can define a composite primary key:

   ```sql
   CREATE TABLE OrderDetail (
       orderId INT,
       productId INT,
       quantity INT,
       PRIMARY KEY (orderId, productId),
       FOREIGN KEY (orderId) REFERENCES Orders(id),
       FOREIGN KEY (productId) REFERENCES Products(id)
   );
   ```

3. **Using `ALTER TABLE` to Add a Primary Key:**
   Sometimes you might create a table without a primary key and decide to add it later using the `ALTER TABLE` command:

   ```sql
   CREATE TABLE Customer (
       customerId INT,
       name VARCHAR(100),
       email VARCHAR(100)
   );

   ALTER TABLE Customer
   ADD PRIMARY KEY (customerId);
   ```

4. **Defining Constraints Using Constraint Keyword:**
   You can also explicitly use the `CONSTRAINT` keyword to name your constraints. This is useful for easier identification of constraints when you need to modify or drop them later:

   ```sql
   CREATE TABLE Employee (
       employeeId INT,
       name VARCHAR(255),
       departmentId INT,
       CONSTRAINT pk_employee PRIMARY KEY (employeeId),
       CONSTRAINT fk_department FOREIGN KEY (departmentId) REFERENCES Department(departmentId)
   );
   ```

5. **Creating a Table with AUTO_INCREMENT:**
   When dealing with primary keys, especially for IDs, you often want MySQL to automatically increment the value. This is done using the `AUTO_INCREMENT` attribute:

   ```sql
   CREATE TABLE User (
       userId INT AUTO_INCREMENT,
       username VARCHAR(255),
       password VARCHAR(255),
       PRIMARY KEY (userId)
   );
   ```

Each of these methods has specific use cases depending on how you plan to manage your database schema and how you intend to use the primary keys.


Yes, you're correct. In MySQL, the two column definitions you've provided will indeed have the same outcome regarding the `id` field:

1. `id INT NOT NULL AUTO_INCREMENT PRIMARY KEY`
2. `id INT AUTO_INCREMENT PRIMARY KEY`

Both lines effectively declare the `id` column as an integer that auto-increments with each new record and acts as the primary key for the table. The primary key in MySQL inherently carries a `NOT NULL` constraint because a primary key must consist of unique, non-null values. This means that even if you do not explicitly specify `NOT NULL` in your column definition, MySQL automatically applies this constraint to any primary key.

Thus, when you define a column as a primary key with the `AUTO_INCREMENT` attribute in MySQL, it is unnecessary to explicitly state `NOT NULL` because it is implied and enforced by the primary key constraint. The outcomes of the two definitions you provided are identical: both ensure the `id` column cannot contain null values, will uniquely identify each row, and will automatically increment.