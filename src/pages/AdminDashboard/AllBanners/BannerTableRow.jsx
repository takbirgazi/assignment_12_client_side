
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const BannerTableRow = () => {
  const axiossecure = useAxiosSecure();

  const { data: banner = [], refetch } = useQuery({
    queryKey: ['banner'],
    queryFn: async () => {
      const result = await axiossecure.get('/addBanner');
      return result.data
    }
  })

  const dltUserHndlr = bannerId => {
    axiossecure.delete(`/addBanner/delete/${bannerId}`)
      .then(() => {
        console.log("Data is deleted")
        refetch();
      })
  }

  const makeAdminHndler = (bannerId) => {
    axiossecure.patch(`/addBanner/update/${bannerId}`)
      .then((res) => {
        console.log(res);
        refetch();
      })
  }
  return (
    <tbody>
      {
        banner.map(banner => <tr key={banner._id}>
          <td>
            <img className="h-20 border" src={banner.bannerImage} />
          </td>
          <td>
            <h2 className='font-bold'>{banner.tittle}</h2>
          </td>
          <td>
            {banner.isActive ? "Active" : "In Active"}
          </td>
          <th>
            <button onClick={() => dltUserHndlr(banner._id)} className="btn btn-ghost btn-xs">Delete</button>
            {
              banner.isActive || <button onClick={() => makeAdminHndler(banner._id)} className="btn btn-ghost btn-xs">Active</button>
            }
          </th>
        </tr>)
      }
    </tbody>
  );
};

export default BannerTableRow;
