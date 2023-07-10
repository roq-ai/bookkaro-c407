import { RoomInterface } from 'interfaces/room';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  start_date: any;
  end_date: any;
  room_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  room?: RoomInterface;
  user?: UserInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  room_id?: string;
  user_id?: string;
}
