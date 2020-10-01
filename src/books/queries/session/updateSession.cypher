MATCH (s:Session { id: $sessionId})
SET s += $session
RETURN s