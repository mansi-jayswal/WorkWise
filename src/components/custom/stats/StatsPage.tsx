import { GrAchievement } from 'react-icons/gr';

interface IStatsItem {
  statsNumber: number;
  statsTitle: string;
}

const StatsItems: IStatsItem[] = [
  {
    statsNumber: 232,
    statsTitle: 'Clients',
  },
  {
    statsNumber: 521,
    statsTitle: 'Projects',
  },
  {
    statsNumber: 1453,
    statsTitle: 'Hours Of Support',
  },
  {
    statsNumber: 32,
    statsTitle: 'Workers',
  },
];

const StatsPage = () => {
  return (
    <div className="mt-8 rounded-xl px-4 py-8 md:px-8 lg:px-16">
      <div className="mb-16 flex flex-col gap-8 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          <div className="flex items-center justify-center gap-4">
            <span> Our Achievements</span>
            <span>
              <GrAchievement className="font-bold text-yellow-600" />
            </span>
          </div>
        </h2>
        <p className="text-lg text-gray-600 md:text-xl">
          We are proud to share some key statistics that highlight our growth
          and impact in the industry. Our dedicated team and valuable clients
          have contributed to these achievements.
        </p>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {StatsItems.map((statsItem: IStatsItem) => (
            <GenerateStatsItem
              key={statsItem.statsTitle}
              statsItem={statsItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const GenerateStatsItem = ({ statsItem }: { statsItem: IStatsItem }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-xl border px-16 py-8 font-bold shadow-lg">
      <div className="text-5xl tracking-wider">
        <p>{statsItem.statsNumber}+</p>
      </div>
      <div className="">{statsItem.statsTitle}</div>
    </div>
  );
};

export default StatsPage;
