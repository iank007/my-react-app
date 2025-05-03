import { Link } from 'react-router-dom';
import useAppStore from '../store/';

const Users = () => {
  // stores
  const version = useAppStore((state) => state.version);
  const users = useAppStore((state) => state.users);
  console.log({version});

  // actions
  const deleteUser = (id) => {
    console.log('delete user:', id);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/user/${user.id}`}>
                  <button className='btn-detail'>Detail</button>
                </Link>
                <Link to={`/user/${user.id}/edit`}>
                  <button className='btn-edit'>Edit</button>
                </Link>
                <button className='btn-delete' onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;