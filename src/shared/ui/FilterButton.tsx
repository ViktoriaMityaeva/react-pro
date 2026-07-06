type Props = {
    title: string;
    onClick: () => void;
};
  
export function FilterButton({ title, onClick }: Props) {
    return (
      <button onClick={onClick}>{title}</button>
    );
}
