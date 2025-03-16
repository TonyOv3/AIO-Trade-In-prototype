import NewDashboardLayout from "./dashboard/NewDashboardLayout";
import NewDashboardHome from "./dashboard/NewDashboardHome";

function Home() {
  return (
    <NewDashboardLayout>
      <NewDashboardHome />
    </NewDashboardLayout>
  );
}

export default Home;
