export interface creds {
  username?: string;
  password?: string;
}

export interface user {
  activity: string;
  activityId: number;
  activityImage?: string;
  description: string;
  displayPriority: number;
  priority: number;
}

export interface createuser {
  activity: string;
  fileName?: object;
  description: string;
  priority: number;
}
