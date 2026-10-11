import { CreateTableHeader } from '../helpers/CreateTableHeader';
import { CreateTableRows } from '../helpers/CreateTableHeader';
const first = {
  id: 1,
  inverter: 'HUAWEI SUN2000-5KTL-L1',
  battery: 'HUAWEI LUNA2000-10KW-S1',
  modulesQty: '23',
  modulesModel: 'JINKO JKM-465M-HRH-DP',
  strings: 2,
  customerName: 'Pedro Toledo',
  customerAddress: 'Dublin',
  mprn: '12312312323',
  installerName: 'SKE Engineering',
};

const second = {
  id: 2,
  inverter: 'HUAWEI SUN2000-25KTL-MB0',
  battery: 'HUAWEI LUNA2000-10KW-S1',
  modulesQty: '45',
  modulesModel: 'JINKO JKM-465M-HRH-DP',
  strings: 2,
  customerName: 'Henrique de Mello',
  customerAddress: 'Cork',
  mprn: '32132132123',
  installerName: 'ESB',
};
const list = [first, second];
export const DashboardPage = () => {
  return (
    <div>
      <table>
        <thead>
          <CreateTableHeader list={list} />
        </thead>
        <tbody>
          {list.map((project) => (
            <CreateTableRows key={project.id} row={project} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
