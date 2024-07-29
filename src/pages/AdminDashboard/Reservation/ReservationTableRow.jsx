
import { NavLink } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { PropTypes } from 'prop-types';

const ReservationTableRow = ({ searchData }) => {
    console.log(searchData);
    const axiossecure = useAxiosSecure();
    const [appionmentData, setAppionmentData] = useState([]);

    const {refetch} = useQuery({
        queryKey: ['userappionment'],
        queryFn: async () => {
            const result = await axiossecure.get(`/appointed`)
             setAppionmentData(result?.data)
        }
    })

    // const searchHndler = () => {
    //     axiossecure.get(`/appointed/email?sort=${searchData}`)
    //         .then(res => setAppionmentData(res.data))
    // }


   const cancelHandler = (appnId) => {
    axiossecure.delete(`/appointed/delete/${appnId}`)
      .then(() => {
        refetch();
      })
  }

    
    return (
                <tbody>
            {
                appionmentData.map(tests=><tr key={tests._id}> 
                    <td>
                        <img className="h-20 border" src={tests.testImg} />
                    </td>
                    <td>
                        <h2 className='font-bold'>{tests.email}</h2>
                    </td>
                    <td>
                        {tests.testName}
                    </td>
                    <td>
                        {tests.userDate}
                    </td>
                    <td>
                        {tests.status}
                    </td>
                    <th>
                        <NavLink to={`/admin/testReport/update/${tests._id}`} className="btn btn-ghost btn-xs">Report</NavLink>
                        <div onClick={()=>cancelHandler(tests._id)} className="btn btn-ghost btn-xs">Cancel</div>
                    </th>
                </tr>)
            }
        </tbody>
    );
};

export default ReservationTableRow;

ReservationTableRow.propTypes = {
    searchData: PropTypes.string
}