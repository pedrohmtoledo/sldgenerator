import { useNavigate } from 'react-router-dom';

export const CreateTableHeader = () => {
  return (
    <tr>
      <th>ID</th>
      <th>PV Module Model</th>
      <th>PV Module Quantity</th>
      <th>Strings</th>
      <th>Inverter Model</th>
      <th>Battery</th>
      <th>Customer Name</th>
      <th>Customer Address</th>
      <th>MPRN</th>
      <th>Installer Name</th>
    </tr>
  );
};

export const CreateTableRows = ({ row }) => {
  const navigate = useNavigate();
  const values = Object.values(row);
  return (
    <tr onClick={() => navigate(`/project/${row.id}`)}>
      {values.map((value, i) => (
        <td key={i}>{value}</td>
      ))}
    </tr>
  );
};
