match (u:User {id:$userId}) 
create (p:Ping {name: $name, date: $date}), 
(u)-[:Has]->(p)
return p