MATCH (b:Book { id: $bookId})
SET b += $book
RETURN b