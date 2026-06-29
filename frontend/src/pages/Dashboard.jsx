import WelcomeCard from "../components/dashboard/overview/WelcomeCard";
import OverviewCards from "../components/dashboard/overview/OverviewCards";

import useProfile from "../hooks/useProfile";
import useAnalytics from "../hooks/useAnalytics";
import useSync from "../hooks/useSync";
import DifficultyCards from "../components/dashboard/overview/DifficultyCards";
import ContestCard from "../components/dashboard/contest/ContestCard";
import LanguageChart from "../components/dashboard/charts/LanguageChart";

const Dashboard = () => {
  const { data: profileData } = useProfile();

  const { data: analyticsData } = useAnalytics();

  const syncMutation = useSync();

  const profile = profileData?.user;

  const overview = analyticsData?.overview;

  const languages = analyticsData?.languageDistribution;

  return (
    <div className="space-y-8">
      <WelcomeCard
        name={profile?.name}
        loading={syncMutation.isPending}
        onSync={() => syncMutation.mutate()}
      />

      <OverviewCards overview={overview} />
      <DifficultyCards overview={overview} />
      <div className="grid gap-8 xl:grid-cols-2">
        <ContestCard overview={overview} />

        <LanguageChart languages={languages} />
      </div>
    </div>
  );
};

export default Dashboard;
