import { useNavigate } from 'react-router-dom';

export const ProjectTableHeader = () => {
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

export const ProjectTableRow = ({ row }) => {
  const navigate = useNavigate();

  return (
    <tr onClick={() => navigate(`/project/${row.id}`)}>
      <td>{row.id}</td>
      <td>{row.modulesModel}</td>
      <td>{row.modulesQty}</td>
      <td>2</td>
      <td>{row.inverter}</td>
      <td>{row.battery}</td>
      <td>{row.customerName}</td>
      <td>{row.customerAddress}</td>
      <td>{row.mprn}</td>
      <td>{row.installerName}</td>
    </tr>
  );
};
