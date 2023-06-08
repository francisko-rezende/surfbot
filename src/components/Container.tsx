type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`mx-auto max-w-[1154px] px-2 ${className}`}>{children}</div>
  );
};
