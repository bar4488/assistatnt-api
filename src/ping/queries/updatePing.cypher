match (u:User {id:$userId})-->(p:Ping{id:$ping.id})
SET p += $ping
return p