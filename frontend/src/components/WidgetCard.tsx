import { ReactNode } from 'react';

type WidgetCardProps = {
  title: string;
  description?: string;
  children?: ReactNode;
  action?: ReactNode;
};

const WidgetCard = ({ title, description, children, action }: WidgetCardProps) => {
  return (
    <section className="widget-card">
      <header>
        <h2>{title}</h2>
        {description ? <p className="widget-description">{description}</p> : null}
      </header>
      <div className="widget-body">{children}</div>
      {action ? <footer className="widget-footer">{action}</footer> : null}
    </section>
  );
};

export default WidgetCard;
