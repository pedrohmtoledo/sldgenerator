export const CreateTableHeader = ({ list }) => {
  const keys = Object.keys(list[0]);

  return (
    <tr>
      {keys.map((key) => (
        <th key={key}>{key}</th>
      ))}
    </tr>
  );
};

export const CreateTableRows = ({ row }) => {
  const values = Object.values(row);
  return (
    <tr>
      {values.map((value, i) => (
        <td key={i}>{value}</td>
      ))}
    </tr>
  );
};
