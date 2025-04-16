import React from "react";
import TaskCard from "@/features/tasks/components/TaskCard";

type Props = {
  params: {
    teamId: string;
  };
};

const TeamIdPage = async ({ params }: Props) => {
  const { teamId } = await params;
  return (
    <div className="flex flex-col gap-4 m-4 h-screen justify-center space-x-2 items-center">
      <TaskCard teamId={teamId} />
      <TaskCard teamId={teamId} />
      <TaskCard teamId={teamId} />
    </div>
  );
};

export default TeamIdPage;
