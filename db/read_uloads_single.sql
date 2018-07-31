select * from uloads
join users on uloads.userid = users.userid
where users.userid = $1 and uloads.loadid = $2