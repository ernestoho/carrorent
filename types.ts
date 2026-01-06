
export type UserRole = 'renter' | 'owner' | 'admin';

export interface User {
  id: string;
  name: string;
  avatar: string;
  role: UserRole;
  isSuperhost?: boolean;
  memberSince: string;
  location: string;
  rating: number;
  trips: number;
  responseRate: string;
}

export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  type: string;
  price: number;
  rating: number;
  tripsCount: number;
  ownerId: string;
  images: string[];
  location: string;
  specs: {
    engine: string;
    transmission: string;
    seats: number;
    acceleration?: string;
  };
  description: string;
  isVerified: boolean;
  status: 'active' | 'pending' | 'flagged';
}

export interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  date: string;
  rating: number;
  content: string;
}

export interface BookingRequest {
  id: string;
  carId: string;
  carName: string;
  renterName: string;
  renterAvatar: string;
  dates: string;
  totalPrice: number;
  status: 'pending' | 'accepted' | 'declined';
}
