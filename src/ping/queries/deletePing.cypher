match (u:User {id:$userId})-->(p:Ping{id:$pingId})
detach delete p