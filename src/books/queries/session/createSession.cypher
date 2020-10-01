match (b:Book {
    id:$bookId
}) create (s:Session {
    id: apoc.create.uuid(), 
    startDate: $startDate,
    durationSeconds: $durationSeconds,
    pagesRead: $pagesRead
}), (b)-[:Has]->(s)
return s