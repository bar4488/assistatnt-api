match 
    (u:User {id:$id})-[:Reading]->(b:Book) 
where 
    b.hidden is null 
    or 
    b.hidden <> true 
return b