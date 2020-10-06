match (u:User {
    id:$userId
}) create (b:Book {
    id: $bookId, 
    name: $name, 
    writer: $writer, 
    pageCount: $pageCount
}), (u)-[:Reading]->(b)
return b