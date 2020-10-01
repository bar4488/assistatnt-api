match 
    (b:Book {id:$bookId})-[:Has]->(s:Session) 
return s