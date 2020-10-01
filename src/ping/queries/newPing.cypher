match (u:User {email:$1}) 
create (p:Ping {name: $2, date: $3}), 
(u)-[:Has]->(p)