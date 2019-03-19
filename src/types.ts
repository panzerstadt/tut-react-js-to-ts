export interface Launch {
  flight_number: number;
  launch_year: string;
  mission_name: string;
  details: string | null;
  launch_success: boolean | null;
  launch_failure_details?: {
    reason: string;
    time: number;
    altitude: number | null;
  };
  launch_site: {
    site_id: string;
    site_name: string;
    site_name_long: string;
  };
  links: {
    mission_patch_small: string | null;
    mission_patch: string | null;
  };
}

export type Tab = 'All' | 'Past' | 'Upcoming'; // use to narrow down strings
export interface MyState {
  selectedFlightNumber?: number | null;
}
