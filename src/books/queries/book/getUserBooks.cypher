match 
    (u:User {id:$id})-[:Reading]->(b:Book) 
where 
    b.hidden is null 
    or 
    b.hidden <> true 
optional match (b)-[:Has]->(d) 
return b{.*, currentPage:sum(d.pagesRead)}