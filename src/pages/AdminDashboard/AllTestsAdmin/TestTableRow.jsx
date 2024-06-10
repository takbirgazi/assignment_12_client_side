
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
                        <button className="btn btn-ghost btn-xs">Update</button>
                        <div onClick={()=>deleteTests(tests._id)} className="btn btn-ghost btn-xs">Delete</div>
                        <button className="btn btn-ghost btn-xs">Reservations</button>
                    </th>
                </tr>)
            }
        </tbody>
    );
};

export default TestTableRow;