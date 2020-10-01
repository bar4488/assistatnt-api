match (u:User {
    id:$userId
}) create (b:Book {
    id: apoc.create.uuid(), 
    name: $name, 
    writer: $writer, 
    imagePath: $imagePath, 
    pageCount: $pageCount
}), (u)-[:Reading]->(b)
return b