type HowToArriveListItemProps = {
  transportationMode: string;
  directions: string;
};

export function HowToArriveListItem({
  transportationMode,
  directions,
}: HowToArriveListItemProps) {
  return (
    <li className="relative pl-4 font-bold text-surf-lightGray-300 before:absolute before:bottom-1/2 before:left-0 before:block before:w-2 before:translate-y-1/2 before:border-b-2 before:border-surf-blue-200 before:content-['']">
      <span className="text-surf-darkGray-300">{transportationMode}</span>{" "}
      {directions}
    </li>
  );
}
