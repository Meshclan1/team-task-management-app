import React from "react";

const TeamId = async ({ params }: { params: Promise<{ teamId: string }> }) => {
  const { teamId } = await params;
  return <div>Team Id is {teamId}</div>;
};

export default TeamId;
