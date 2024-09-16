import { AddServerButton } from '@/components/servers/add-server-form'
import { FormModal } from '@/components/servers/form-modal';
import {AiOutlineAppstoreAdd} from "react-icons/ai";

const Servers = () => {
  return (<div className='m-5'>
    <FormModal table='aws' type='create'/>
  </div>)
}

export default Servers
