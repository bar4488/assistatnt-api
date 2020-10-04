match (:User{id:1})->(n:Ping) 
where n.date>=$rangeStart or n.date < $rangeEnd
return n