import { BookingInterface } from 'interfaces/booking';
import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface RoomInterface {
  id?: string;
  name: string;
  status: string;
  business_id?: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  business?: BusinessInterface;
  _count?: {
    booking?: number;
  };
}

export interface RoomGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  business_id?: string;
}
