match (b:Book {
    id:$bookId
}) create (s:Session {
    id: $sessionId, 
    startDate: $startDate,
    durationSeconds: $durationSeconds,
    pagesRead: $pagesRead
}), (b)-[:Has]->(s)
return s