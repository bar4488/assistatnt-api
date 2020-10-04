match (b:Book {id: $bookId}) 
optional match (b)-[:Has]->(d) 
return b{.*, currentPage:sum(d.pagesRead)}