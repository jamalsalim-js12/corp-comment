type HashtagItemProps = {
  company: string;
  onSelectCompany: (company: string) => void;
};

const HashtagItem = ({ onSelectCompany, company }: HashtagItemProps) => {
  return (
    <li key={company}>
      <button onClick={() => onSelectCompany(company)}>#{company}</button>
    </li>
  );
};

export default HashtagItem;
