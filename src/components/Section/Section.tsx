interface Props {
  className: string;
  children: any;
}

function Section({ className, children }: Props) {
  return <div className={`max-w-5xl mx-auto ${className}`}>{children}</div>;
}

export default Section;
