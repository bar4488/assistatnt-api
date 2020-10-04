match (u:User {
    id:$userId
}) create (b:Book {
    id: apoc.create.uuid(), 
    name: $name, 
    writer: $writer, 
    pageCount: $pageCount
}), (u)-[:Reading]->(b)
return b