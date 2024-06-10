import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
const AppointmentTableRow = () => {
  const {user} = useAuth()
  const axiossecure = useAxiosSecure();

  const { data: appiontment = [], refetch } = useQuery({
    queryKey: ['appiontment'],
    queryFn: async () => {
      const result = await axiossecure.get(`/appointed/${user.email}`);
      return result.data
    }
  })

  console.log(appiontment);

  // const userBlockHndlr = (userId) => {
  //   axiossecure.patch(`/users/update/${userId}`)
  //     .then(() => {
  //       refetch();
  //     })
  // }

  return (
    <tbody>
      {
        appiontment.map(appn => <tr key={appn._id}>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={appiontment.image} alt="Avatar Tailwind CSS Component" className="border border-yellow-500" />
                </div>
              </div>
              <div>
                <div className="font-bold">{appn.testName}</div>
              </div>
            </div>
          </td>
          <td>{appiontment.desc}</td>
          <th>
            <div className="flex flex-col md:flex-row gap-2 items-center">
              <button className="btn btn-ghost btn-xs bg-red-500 text-white">Cancel</button>
            </div>
          </th>
        </tr>)
      }
    </tbody>
  );
};

export default AppointmentTableRow;