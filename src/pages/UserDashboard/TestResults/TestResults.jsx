import { Helmet } from "react-helmet-async";
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from "../../../hooks/useAuth";


const TestResults = () => {
    const axiossecure = useAxiosSecure();
    const { user } = useAuth();

  const { data: testResult = [] } = useQuery({
    queryKey: ['testResult'],
    queryFn: async () => {
      const result = await axiossecure.get(`/appointed/${user.email}`);
      return result.data
    }
  })

    return (
        <div className="w-11/12 mx-auto">
            <Helmet>
                <title>My Test Result - Health Care Diagnostics</title>
            </Helmet>
            <div className="my-5">
                <h2 className="font-bold text-2xl text-center">My Test Result</h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 my-10">
                {
                    testResult.filter(data => data.status == "Delivered").map(test => <div key={test._id} className="border rounded p-4">
                        <div>
                            <h2 className=" font-bold">Test Name:</h2>
                            <span>{test?.testName}</span>
                        </div>
                        <div>
                            <h2 className=" font-bold">Test Report:</h2>
                            <span>{test?.testReport}</span>
                        </div>
                    </div>)

               }
            </div>
        </div>
    );
};

export default TestResults;