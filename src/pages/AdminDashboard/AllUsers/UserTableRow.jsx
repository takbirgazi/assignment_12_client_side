
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { jsPDF } from "jspdf";

const UserTableRow = () => {
    const axiossecure = useAxiosSecure();
    const doc = new jsPDF();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await axiossecure.get('/users');
            return result.data
        }
    })


    const userBlockHndlr = (userId) => {
        axiossecure.patch(`/users/update/${userId}`)
            .then(() => {
                refetch();
            })
    }
    const downloadHandler = (usr) => {
        doc.text(`Name: ${usr.name}`, 10, 10);
        doc.text(`Email: ${usr.email}`, 10, 20);
        doc.text(`District: ${usr.district}`, 10, 30);
        doc.text(`Blood Group: ${usr.blood}`, 10, 40);
        doc.save("download.pdf");

    }
    return (
        <tbody>
            {
                users.map(usr => <tr key={usr._id}>
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={usr.profile} alt={usr.name} />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{usr.name}</div>
                                <div className="text-sm opacity-50">{usr.district}</div>
                            </div>
                        </div>
                    </td>
                    <td>{usr.email}</td>
                    <td>{usr.blood}</td>
                    <td>{usr.status}</td>
                    <th>
                        <button onClick={() => userBlockHndlr(usr._id)} className={`btn btn-ghost btn-xs ${(usr.status === "Active") || "hidden"}`}>{(usr.status === "Active") && "Block"}</button>
                        <button onClick={() => downloadHandler(usr)} className="btn btn-ghost btn-xs">Download</button>
                    </th>
                </tr>)
            }
        </tbody>
    );
};

export default UserTableRow;