import React, { FC, ReactNode } from "react";
import { Card, Text, Divider } from "react-native-paper";

interface TaskCardProps {
  children: ReactNode;
}

interface HeaderProps {
  title: string;
  subtitle?: string;
}

interface SectionProps {
  children: ReactNode;
}

interface ActionsProps {
  children: ReactNode;
}

const TaskCard: FC<TaskCardProps> = ({ children }) => {
  return (
    <Card mode="elevated" style={{ marginVertical: 10 }}>
      {children}
    </Card>
  );
};

const TaskHeader: FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <>
      <Card.Title title={title} subtitle={subtitle} />
      <Divider />
    </>
  );
};

const TaskSection: FC<SectionProps> = ({ children }) => {
  return <Card.Content>{children}</Card.Content>;
};

const TaskActions: FC<ActionsProps> = ({ children }) => {
  return <Card.Actions>{children}</Card.Actions>;
};

// Attach the sub-components
TaskCard.Header = TaskHeader;
TaskCard.Section = TaskSection;
TaskCard.Actions = TaskActions;

// Export main component
export default TaskCard;

// ------------------------
// Extend FC type so TS knows subcomponents exist
// ------------------------
declare module "react" {
  interface FunctionComponent<P = {}> {
    Header?: FC<HeaderProps>;
    Section?: FC<SectionProps>;
    Actions?: FC<ActionsProps>;
  }
}