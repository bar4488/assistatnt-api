match (u:User {
    id:$userId
})-[:Reading]->(b:Book {id:$bookId})
set b.hidden = true // we dont want to delete for now, only hide :)
return b