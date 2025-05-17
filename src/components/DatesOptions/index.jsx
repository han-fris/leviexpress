export const DateOptions = ({ dates }) => {
  return dates.map(({ dateBasic, dateCs }) => (
    <option key={dateBasic} value={dateBasic}>
      {dateCs}
    </option>
  ));
};
