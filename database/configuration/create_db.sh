echo 'Creating database & tables..'
cat create_db.sql | mysql -u root -ppassword1
echo 'DONE'

while [ 1 ]
do
    sleep 20
done


