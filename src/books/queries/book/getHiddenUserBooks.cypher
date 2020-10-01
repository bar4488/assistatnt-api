match 
    (u:User {id:$id})-[:Reading]->(b:Book) 
where 
    b.hidden = true 
return b
