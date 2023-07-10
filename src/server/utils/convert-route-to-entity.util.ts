const mapping: Record<string, string> = {
  bookings: 'booking',
  businesses: 'business',
  rooms: 'room',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
