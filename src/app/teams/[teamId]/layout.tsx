// This layout is used for the teams/[teamId] route

export default function TeamsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
