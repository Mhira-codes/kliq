export type OrderStatus = "pending" | "ongoing" | "today";

export const orders = [
  {
    id: "ORD-001",
    sender: "John Doe",
    receiver: "John Yaw",
    pickuploc: "Madina",
    dropoffloc: "Legon",
    status: "pending" as OrderStatus,
    items: ["Laptop", "Mouse"],
    ordertype: "Pick up",
  },
  {
    id: "ORD-002",
    sender: " Doe",
    receiver: "NB Yaw",
    pickuploc: "ghx zongo",
    dropoffloc: "Legon",
    status: "ongoing" as OrderStatus,
    items: ["Monitor"],
    ordertype: "Delivery",
  },
  {
    id: "ORD-003",
    sender: " Doe Yellow",
    receiver: "White Yaw",
    pickuploc: "llx78 Labone",
    dropoffloc: "Aburi",
    status: "today" as OrderStatus,
    items: ["Keyboard"],
    ordertype: "Delivery",
  },
];

export const cards = [
  {
    label: "Pending Orders",
    count: orders.filter((o) => o.status === "pending").length,
    status: "pending",
  },
  {
    label: "Ongoing Orders",
    count: orders.filter((o) => o.status === "ongoing").length,
    status: "ongoing",
  },
  {
    label: "Today Order",
    count: orders.filter((o) => o.status === "today").length,
    status: "today",
  },
  {
    label: "Total Orders",
    count: orders.length,
    status: "all",
  },
];
