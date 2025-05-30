// pages/admin.tsx

import AccessStats from "../src/components/tracker/AccessStatistics";

export default function Admin() {
  return (
    <div>
      <h1>Painel Admin</h1>
      <AccessStats />
    </div>
  );
}