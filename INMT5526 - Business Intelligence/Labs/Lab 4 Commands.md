➜  Labs git:(main) ✗ mysqlsh
MySQL Shell 8.3.0

Copyright (c) 2016, 2023, Oracle and/or its affiliates.
Oracle is a registered trademark of Oracle Corporation and/or its affiliates.
Other names may be trademarks of their respective owners.

Type '\help' or '\?' for help; '\quit' to exit.
 MySQL  JS > \sql
Switching to SQL mode... Commands end with ;
 MySQL  SQL > \js
Switching to JavaScript mode...
 MySQL  JS > \connect 23771397@db.tris.id.au;
Creating a session to '23771397@db.tris.id.au;'
Please provide the password for '23771397@db.tris.id.au;': 
Cancelled
 MySQL  JS > \connect 23771397@db.tris.id.au
Creating a session to '23771397@db.tris.id.au'
Fetching schema names for auto-completion... Press ^C to stop.
Your MySQL connection id is 6865
Server version: 8.0.35 Source distribution
No default schema selected; type \use <schema> to set one.
 MySQL  db.tris.id.au:3306 ssl  JS > \sql
Switching to SQL mode... Commands end with ;
 MySQL  db.tris.id.au:3306 ssl  SQL > USE 23771397_db;
Default schema set to `23771397_db`.
Fetching global names, object names from `23771397_db` for auto-completion... Press ^C to stop.
Error during auto-completion cache update: Access denied; you need (at least one of) the PROCESS privilege(s) for this operation
 MySQL  db.tris.id.au:3306 ssl  23771397_db  SQL > SHOW TABLES;
 MySQL  db.tris.id.au:3306 ssl  23771397_db  SQL > \. LabQuestion4.sql
 MySQL  db.tris.id.au:3306 ssl  23771397_db  SQL > DESCRIBE TransactionItem;
 MySQL  db.tris.id.au:3306 ssl  23771397_db  SQL > ALTER TABLE TransactionItem DROP COLUMN total_Price;
Query OK, 0 rows affected (0.0921 sec)

Records: 0  Duplicates: 0  Warnings: 0
 MySQL  db.tris.id.au:3306 ssl  23771397_db  SQL > DESCRIBE TransactionItem;
 MySQL  db.tris.id.au:3306 ssl  23771397_db  SQL > ALTER TABLE TransactionItem ADD COLUMN total_price FLOAT  AS (quantity * unit_price);
Query OK, 0 rows affected (0.0763 sec)

Records: 0  Duplicates: 0  Warnings: 0
 MySQL  db.tris.id.au:3306 ssl  23771397_db  SQL > DESCRIBE TransactionItem;
 MySQL  db.tris.id.au:3306 ssl  23771397_db  SQL > ALTER TABLE TransactionItem ADD COLUMN taxAmount FLOAT AS (total_price / 11);
Query OK, 0 rows affected (0.0898 sec)

Records: 0  Duplicates: 0  Warnings: 0
 MySQL  db.tris.id.au:3306 ssl  23771397_db  SQL > DESCRIBE TransactionItem;
 MySQL  db.tris.id.au:3306 ssl  23771397_db  SQL > ALTER TABLE TransactionItem MODIFY COLUMN unitPrice FLOAT CHECK (unitPrice > 0);
ERROR: 1054 (42S22): Unknown column 'unitPrice' in 'TransactionItem'
 MySQL  db.tris.id.au:3306 ssl  23771397_db  SQL > DESCRIBE TransactionItem;
 MySQL  db.tris.id.au:3306 ssl  23771397_db  SQL > ALTER TABLE TransactionItem MODIFY COLUMN unitPrice FLOAT CHECK (unit_price > 0);
ERROR: 3813 (HY000): Column check constraint 'TransactionItem_chk_1' references other column.
 MySQL  db.tris.id.au:3306 ssl  23771397_db  SQL > ALTER TABLE TransactionItem MODIFY COLUMN unit_price FLOAT CHECK (unit_price > 0);
Query OK, 4 rows affected (0.1193 sec)

Records: 4  Duplicates: 0  Warnings: 0
 MySQL  db.tris.id.au:3306 ssl  23771397_db  SQL > DESCRIBE TransactionItem;
 MySQL  db.tris.id.au:3306 ssl  23771397_db  SQL > SHOW TABLES;
 MySQL  db.tris.id.au:3306 ssl  23771397_db  SQL > DESCRIBE TransactionItem;
 MySQL  db.tris.id.au:3306 ssl  23771397_db  SQL > ALTER TABLE TransactionItem MODIFY COLUMN quantity INT CHECK (quantity > 0);
Query OK, 4 rows affected (0.1161 sec)

Records: 4  Duplicates: 0  Warnings: 0
 MySQL  db.tris.id.au:3306 ssl  23771397_db  SQL > DESCRIBE TransactionItem;
 MySQL  db.tris.id.au:3306 ssl  23771397_db  SQL > 

CREATE TABLE Transaction (id INT PRIMARY KEY, date DATE, customerName VARCHAR(255), transactionItemId INT, FOREIGN KEY (transactionItemId) REFERENCES TransactionItem(id));
                                               

INSERT INTO Transaction (id, date, customerName, transactionItemId) VALUES (1, '2022-01-01', 'Example Corporation', 4),(2, '2022-04-01', 'Nikola Limited', 2), (3, '2023-04-01', 'Pear Computers', 1), (4, '2023-07-31', 'Western Mining', 3);