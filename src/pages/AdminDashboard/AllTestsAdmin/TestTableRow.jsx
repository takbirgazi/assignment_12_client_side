
import { NavLink } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const TestTableRow = () => {
    const axiossecure = useAxiosSecure();

    const { data: adminTests = [], refetch } = useQuery({
        queryKey: ['adminTests'],
        queryFn: async () => {
            const result = await axiossecure.get('/allTests');
            return result.data
        }
    })


    const deleteTests = (testId) => {
        axiossecure.delete(`/allTests/delete/${testId}`)
            .then(() => {
                refetch();
            })
    }
    return (
        <tbody>
            {
                adminTests.map(tests=><tr key={tests._id}> 
                    <td>
                        <img className="h-20 border" src={tests.testImage} />
                    </td>
                    <td>
                        <h2 className='font-bold'>{tests.testName}</h2>
                    </td>
                    <td>
                        {tests.testSlots}
                    </td>
                    <td>
                        {tests.testDate}
                    </td>
                    <th>
                        <NavLink to={`/admin/adminAllTests/update/${tests._id}`} className="btn btn-ghost btn-xs">Update</NavLink>
                        <div onClick={()=>deleteTests(tests._id)} className="btn btn-ghost btn-xs">Delete</div>
                    </th>
                </tr>)
            }
        </tbody>
    );
};

export default TestTableRow;