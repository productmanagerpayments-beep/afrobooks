export default function ScenariosPage() {
  const scenarios = [
    "Карта on-us",
    "3DS frictionless",
    "3DS challenge",
    "Wallet/MoMo",
    "Soft decline→повтор",
    "Hard decline",
    "Partial capture",
  ];
  return (
    <div className="p-4">
      <h1 className="text-xl mb-2">Сценарии</h1>
      <ul className="list-disc ml-5">
        {scenarios.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
