import WelcomeCard from "../components/dashboard/overview/WelcomeCard";
import OverviewCards from "../components/dashboard/overview/OverviewCards";

import useProfile from "../hooks/useProfile";
import useAnalytics from "../hooks/useAnalytics";
import useSync from "../hooks/useSync";
import DifficultyCards from "../components/dashboard/overview/DifficultyCards";
import ContestCard from "../components/dashboard/contest/ContestCard";
import LanguageChart from "../components/dashboard/charts/LanguageChart";
import TopicChart from "../components/dashboard/charts/TopicChart";
import BadgeGrid from "../components/dashboard/badges/BadgeGrid";
import SectionTitle from "../components/ui/SectionTitle";
import Loader from "../components/ui/Loader";

const Dashboard = () => {
  const { data: profileData, isLoading: profileLoading } = useProfile();

  const { data: analyticsData, isLoading: analyticsLoading } = useAnalytics();

  const syncMutation = useSync();

  const profile = profileData?.user;

  const overview = analyticsData?.overview;

  const languages = analyticsData?.languageDistribution;

  const topics = analyticsData?.topicDistribution;

  const badges = analyticsData?.badges;

  if (profileLoading || analyticsLoading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <WelcomeCard
        name={profile?.name}
        loading={syncMutation.isPending}
        onSync={() => syncMutation.mutate()}
      />

      <SectionTitle>Performance Overview</SectionTitle>

      <OverviewCards overview={overview} />

      <SectionTitle>Problem Solving</SectionTitle>

      <DifficultyCards overview={overview} />

      <SectionTitle>Analytics</SectionTitle>

      <div className="grid gap-8 xl:grid-cols-2">
        <ContestCard overview={overview} />
        <LanguageChart languages={languages} />
      </div>

      <SectionTitle>Topic Distribution</SectionTitle>

      <TopicChart topics={topics} />

      <SectionTitle>Achievements</SectionTitle>

      <BadgeGrid badges={badges} />
    </div>
  );
};

export default Dashboard;
