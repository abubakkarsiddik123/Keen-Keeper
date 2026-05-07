

const Stats = () => {
  const data = [
    { value: 10, title: "Total Friends" },
    { value: 3, title: "On Track" },
    { value: 6, title: "Need Attention" },
    { value: 12, title: "Interactions This Month" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      {data.map((item, i) => (
        <div key={i} className="stats shadow w-full sm:w-[250px]">
          <div className="stat text-center py-8">
            <div className="stat-value text-[#244D3F] text-3xl font-semibold">{item.value}</div>
            <div className="stat-title text-[#64748B] text-lg">{item.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;