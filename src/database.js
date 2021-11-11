
import { Pool } from 'pg'

export const pool = new Pool(
{
host:'ec2-3-225-30-189.compute-1.amazonaws.com',
user:'ipyjtwopwzlakz',
password:'c8b0e55228727b225c24a1bcd8d0c913a655759dddfc94842275084435dfba6c',
database:'dbaaocvcaeoqjj',
port:5432,
ssl: { rejectUnauthorized: false}

}
);