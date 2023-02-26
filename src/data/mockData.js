import { tokens } from "../themes";

export const mockDataProject = [
  {
    id: 1,
    name: "KDA 1",
    amount: 6000,
    enable: "true",
  },
  {
    id: 2,
    name: "KDA 2",
    amount: 8000,
    enable: "false",
  },
];
export const mockDataWithdraw = [
  {
    id: 1,
    name: "KDA 1",
    amount: 90,
  },
  {
    id: 2,
    name: "KDA 2",
    amount: 80,
  },
];
export const mockDataFunds = [
  {
    id: 1,
    account: "KDA Account",
    currency: "KDA",
    equivalent: "0 USD",
    balance: "0.00000000 KDA",
    rule: "N/A",
    PayoutETA: "N/A",
  },
];
export const mockDataProfiles = [
  {
    id: 1,
    name: "---",
    username: "danish.009",
    webAccess: true,
    apiAccess: false,
    accessPermissions: "Master Account",
    state: "Active",
  },
];
export const mockDataPermission = [
  {
    name: "Manage Access Profile",
    MasterAccount: true,
    Full: false,
    ReadOnly: false,
    LimitedReadOnly: false,
  },
  {
    name: "Modify Settings",
    MasterAccount: true,
    Full: true,
    ReadOnly: false,
    LimitedReadOnly: false,
  },
  {
    name: "Manage Workers",
    MasterAccount: true,
    Full: true,
    ReadOnly: false,
    LimitedReadOnly: false,
  },
  {
    name: "See Settings",
    MasterAccount: true,
    Full: true,
    ReadOnly: true,
    LimitedReadOnly: false,
  },
  {
    name: "See Pyouts and Wallets",
    MasterAccount: true,
    Full: true,
    ReadOnly: true,
    LimitedReadOnly: false,
  },
  {
    name: "See Active Log",
    MasterAccount: true,
    Full: true,
    ReadOnly: true,
    LimitedReadOnly: false,
  },
  {
    name: "See Sensitive Data",
    MasterAccount: true,
    Full: true,
    ReadOnly: true,
    LimitedReadOnly: false,
  },
  {
    name: "See Reward History",
    MasterAccount: true,
    Full: true,
    ReadOnly: true,
    LimitedReadOnly: true,
  },
  {
    name: "See Performance Data",
    MasterAccount: true,
    Full: true,
    ReadOnly: true,
    LimitedReadOnly: true,
  },
];
export const mockDataWallets = [
  {
    id: 1,
    name: "KDA Account",
    type: "KDA",
    details: "N/A",
    enable: "true",
  },
];
export const mockDataKda = [
  {
    id: 1,
    amount: "50 $",
    type: "Project-1",
    detail: "N/A",
    date: "28-02-2023",
  },
];
export const mockDataDevices = [
  // {
  //   id: 1,
  //   deviceLabel: "50 $",
  //   connected: "",
  //   lastUsed: "",
  //   unlink: "",
  // },
];
export const mockDataPayoutsHistory = [
  {
    id: 1,
    Date: "28-01-2023",
    amount: "11 KDA",
    financial_Account: "KDA",
    details: "N/A",
    state: "active",
    fee: "0.01",
    wallet: "xxxxxxxxxx",
  },
];
export const mockDataActivityHistory = [
  {
    id: 1,
    Date: "28-01-2023",
    IpAddress: "192:169:1:100",
    Activity: "New payout account created",
    details: "N/A",
  },
  {
    id: 2,
    Date: "28-01-2023",
    IpAddress: "39.42.111.444",
    Activity: "Login",
    details: "N/A",
  },
];
export const mockBarData = [
  {
    time: "01:00",
    "Daily Rewards": 50,
    "7-Days Reward": 10,
  },
  {
    time: "02:00",
    "Daily Rewards": 30,
    "7-Days Reward": 60,
  },
  {
    time: "03:00",
    "Daily Rewards": 70,
    "7-Days Reward": 20,
  },
  {
    time: "04:00",
    "Daily Rewards": 90,
    "7-Days Reward": 10,
  },
  {
    time: "05:00",
    "Daily Rewards": 50,
    "7-Days Reward": 10,
  },
  {
    time: "06:00",
    "Daily Rewards": 50,
    "7-Days Reward": 10,
  },
  {
    time: "07:00",
    "Daily Rewards": 100,
    "7-Days Reward": 20,
  },
  {
    time: "08:00",
    "Daily Rewards": 20,
    "7-Days Reward": 30,
  },
  {
    time: "09:00",
    "Daily Rewards": 10,
    "7-Days Reward": 100,
  },
  {
    time: "10:00",
    "Daily Rewards": 80,
    "7-Days Reward": 10,
  },
  {
    time: "11:00",
    "Daily Rewards": 45,
    "7-Days Reward": 20,
  },
  {
    time: "12:00",
    "Daily Rewards": 50,
    "7-Days Reward": 100,
  },
];
export const mockLineData = [
  [
    {
      id: "Active Users",
      data: [
        {
          x: "12:00",
          y: 40,
        },
        {
          x: "1:00",
          y: 50,
        },
        {
          x: "2:00",
          y: 60,
        },
        {
          x: "3:00",
          y: 65,
        },
        {
          x: "4:00",
          y: 60,
        },
        {
          x: "5:00",
          y: 70,
        },
        {
          x: "6:00",
          y: 40,
        },
        {
          x: "7:00",
          y: 60,
        },
        {
          x: "8:00",
          y: 90,
        },
        {
          x: "9:00",
          y: 75,
        },
        {
          x: "10:00",
          y: 65,
        },
        {
          x: "11:00",
          y: 90,
        },
      ],
    },
    {
      id: "KDA Rate",
      data: [
        {
          x: "12:00",
          y: 101,
        },
        {
          x: "1:00",
          y: 102,
        },
        {
          x: "2:00",
          y: 105,
        },
        {
          x: "3:00",
          y: 130,
        },
        {
          x: "4:00",
          y: 110,
        },
        {
          x: "5:00",
          y: 140,
        },
        {
          x: "6:00",
          y: 100,
        },
        {
          x: "7:00",
          y: 90,
        },
        {
          x: "8:00",
          y: 120,
        },
        {
          x: "9:00",
          y: 80,
        },
        {
          x: "10:00",
          y: 100,
        },
        {
          x: "11:00",
          y: 140,
        },
      ],
    },
  ],
  [
    {
      id: "Active Users",
      data: [
        {
          x: "12:00",
          y: 40,
        },
        {
          x: "1:00",
          y: 50,
        },
        {
          x: "2:00",
          y: 60,
        },
        {
          x: "3:00",
          y: 65,
        },
        {
          x: "4:00",
          y: 60,
        },
        {
          x: "5:00",
          y: 70,
        },
        {
          x: "6:00",
          y: 40,
        },
        {
          x: "7:00",
          y: 60,
        },
        {
          x: "8:00",
          y: 90,
        },
        {
          x: "9:00",
          y: 75,
        },
        {
          x: "10:00",
          y: 65,
        },
        {
          x: "11:00",
          y: 90,
        },
      ],
    },
    {
      id: "KDA Rate",
      data: [
        {
          x: "12:00",
          y: 131,
        },
        {
          x: "1:00",
          y: 102,
        },
        {
          x: "2:00",
          y: 105,
        },
        {
          x: "3:00",
          y: 130,
        },
        {
          x: "4:00",
          y: 110,
        },
        {
          x: "5:00",
          y: 140,
        },
        {
          x: "6:00",
          y: 10,
        },
        {
          x: "7:00",
          y: 190,
        },
        {
          x: "8:00",
          y: 120,
        },
        {
          x: "9:00",
          y: 80,
        },
        {
          x: "10:00",
          y: 130,
        },
        {
          x: "11:00",
          y: 147,
        },
      ],
    },
  ],
];
