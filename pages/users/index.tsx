// import Link from "next/link";
import {useRouter} from 'next/router';
import Layout from '../../components/Layout';
import styles from '../../styles/Users.module.css';

interface UserProps {
  dataUsers: Array<any>;
}

export default function Users(props: UserProps) {
  const {dataUsers} = props;
  const router = useRouter();

  return (
    <Layout pageTitle={`Users List Page`}>
      <div className={styles.div}>
        {dataUsers.map((user) => (
          // return (
          <div
            className={styles.card}
            key={user.id}
            onClick={() => router.push(`/users/${user.id}`)}>
            {/* <Link href={`users/${user.id}`}> */}
            <p>{user.name}</p>
            <p>{user.email}</p>
            {/* </Link> */}
          </div>
          // );
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
