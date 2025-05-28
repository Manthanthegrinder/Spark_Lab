import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { Table} from 'antd';



const Locations = () => {
    const [locations , setLocations] = useState([]);
useEffect(() => {
    const fetchLocations = async () => {
      const { data, error } = await supabase
        .from('locations')
        .select('*');

      if (error) console.error('Error fetching users:', error);
      else setLocations(data);
    };

    fetchLocations();
  }, []);

  const columns = [
  {
    title: 'Location',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  ]
  return (
          <Table rowKey="id"  columns={columns} dataSource={locations} pagination={false}/>
  );
};

export default Locations;
