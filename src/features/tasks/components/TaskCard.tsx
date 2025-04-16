import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type TaskCardProps = {
  teamId: string;
};

const TaskCard = ({ teamId }: TaskCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{teamId}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          impedit, doloremque delectus enim et laborum in cupiditate aliquid
          fugiat voluptatibus alias! Minus quod ad eligendi saepe asperiores,
          voluptas cupiditate recusandae.
        </p>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
