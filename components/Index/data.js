const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "Symbol", uid: "symbol", sortable: true },
  { name: "Price", uid: "price", sortable: true },
  { name: "Quantity", uid: "quantity" },
  { name: "Time", uid: "time", sortable: true },
  { name: "Open", uid: "open", sortable: true },
  { name: "Close", uid: "close" },
  { name: "ACTIONS", uid: "actions" },
];

const coin = {
  "e": "trade",                  // Event type
  "E": 1672515782136,            // Event time
  "s": "BNBBTC",                 // Symbol
  "t": 12345,                    // Trade ID
  "p": "0.001",                  // Price
  "q": "100",                    // Quantity
  "T": 1672515782136,            // Trade time
  "m": true,                     // Is the buyer the market maker?
  "M": true,                     // Ignore
  "c": "mUvoqJxFIILMdfAW5iGSOW", // Client order ID
  "S": "BUY",                    // Side
  "o": "LIMIT",                  // Order type
  "f": "GTC",                    // Time in force
  "q": "1.00000000",             // Order quantity
  "p": "0.10264410",             // Order price
  "P": "0.00000000",             // Stop price
  "F": "0.00000000",             // Iceberg quantity
  "g": -1,                       // OrderListId
  "C": "",                       // Original client order ID; This is the ID of the order being canceled
  "x": "NEW",                    // Current execution type
  "X": "NEW",                    // Current order status
  "r": "NONE",                   // Order reject reason; will be an error code.
  "i": 4293153,                  // Order ID
  "l": "0.00000000",             // Last executed quantity
  "z": "0.00000000",             // Cumulative filled quantity
  "L": "0.00000000",             // Last executed price
  "n": "0",                      // Commission amount
  "N": null,                     // Commission asset
  "T": 1499405658657,            // Transaction time
  "t": -1,                       // Trade ID
  "v": 3,                        // Prevented Match Id; This is only visible if the order expired due to STP
  "I": 8641984,                  // Ignore
  "w": true,                     // Is the order on the book?
  "m": false,                    // Is this trade the maker side?
  "M": false,                    // Ignore
  "O": 1499405658657,            // Order creation time
  "Z": "0.00000000",             // Cumulative quote asset transacted quantity
  "Y": "0.00000000",             // Last quote asset transacted quantity (i.e. lastPrice * lastQty)
  "Q": "0.00000000",             // Quote Order Quantity
  "W": 1499405658657,            // Working Time; This is only visible if the order has been placed on the book.
  "V": "NONE",                   // SelfTradePreventionMode
  "k": {
    "t": 1672515780000, // Kline start time
    "T": 1672515839999, // Kline close time
    "s": "BNBBTC",      // Symbol
    "i": "1m",          // Interval
    "f": 100,           // First trade ID
    "L": 200,           // Last trade ID
    "o": "0.0010",      // Open price
    "c": "0.0020",      // Close price
    "h": "0.0025",      // High price
    "l": "0.0015",      // Low price
    "v": "1000",        // Base asset volume
    "n": 100,           // Number of trades
    "x": false,         // Is this kline closed?
    "q": "1.0000",      // Quote asset volume
    "V": "500",         // Taker buy base asset volume
    "Q": "0.500",       // Taker buy quote asset volume
    "B": "123456"       // Ignore
  }
}

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

const users = [
  {
    id: 1,
    symbol: "Tony Reichert",
    price: "CEO",
    open: "Mantimement",
    close: "active",
    time: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    quantity: "tony.reichert@example.com",
  },
  {
    id: 2,
    symbol: "Zoey Lang",
    price: "Tech Lead",
    open: "Development",
    close: "paused",
    time: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    quantity: "zoey.lang@example.com",
  },
  {
    id: 3,
    symbol: "Jane Fisher",
    price: "Sr. Dev",
    open: "Development",
    close: "active",
    time: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    quantity: "jane.fisher@example.com",
  },
  {
    id: 4,
    symbol: "William Howard",
    price: "C.M.",
    open: "Marketing",
    close: "vacation",
    time: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    quantity: "william.howard@example.com",
  },
  {
    id: 5,
    symbol: "Kristen Copper",
    price: "S. Mantimer",
    open: "Sales",
    close: "active",
    time: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    quantity: "kristen.cooper@example.com",
  },
  {
    id: 6,
    symbol: "Brian Kim",
    price: "P. Mantimer",
    open: "Mantimement",
    time: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    quantity: "brian.kim@example.com",
    close: "active",
  },
  {
    id: 7,
    symbol: "Michael Hunt",
    price: "Designer",
    open: "Design",
    close: "paused",
    time: "27",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    quantity: "michael.hunt@example.com",
  },
  {
    id: 8,
    symbol: "Samantha Brooks",
    price: "HR Mantimer",
    open: "HR",
    close: "active",
    time: "31",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
    quantity: "samantha.brooks@example.com",
  },
  {
    id: 9,
    symbol: "Frank Harrison",
    price: "F. Mantimer",
    open: "Finance",
    close: "vacation",
    time: "33",
    avatar: "https://i.pravatar.cc/150?img=4",
    quantity: "frank.harrison@example.com",
  },
  {
    id: 10,
    symbol: "Emma Adams",
    price: "Ops Mantimer",
    open: "Operations",
    close: "active",
    time: "35",
    avatar: "https://i.pravatar.cc/150?img=5",
    quantity: "emma.adams@example.com",
  },
  {
    id: 11,
    symbol: "Brandon Stevens",
    price: "Jr. Dev",
    open: "Development",
    close: "active",
    time: "22",
    avatar: "https://i.pravatar.cc/150?img=8",
    quantity: "brandon.stevens@example.com",
  },
  {
    id: 12,
    symbol: "Megan Richards",
    price: "P. Mantimer",
    open: "Product",
    close: "paused",
    time: "28",
    avatar: "https://i.pravatar.cc/150?img=10",
    quantity: "megan.richards@example.com",
  },
  {
    id: 13,
    symbol: "Oliver Scott",
    price: "S. Mantimer",
    open: "Security",
    close: "active",
    time: "37",
    avatar: "https://i.pravatar.cc/150?img=12",
    quantity: "oliver.scott@example.com",
  },
  {
    id: 14,
    symbol: "Grace Allen",
    price: "M. Specialist",
    open: "Marketing",
    close: "active",
    time: "30",
    avatar: "https://i.pravatar.cc/150?img=16",
    quantity: "grace.allen@example.com",
  },
  {
    id: 15,
    symbol: "Noah Carter",
    price: "IT Specialist",
    open: "I. Technology",
    close: "paused",
    time: "31",
    avatar: "https://i.pravatar.cc/150?img=15",
    quantity: "noah.carter@example.com",
  },
  {
    id: 16,
    symbol: "Ava Perez",
    price: "Mantimer",
    open: "Sales",
    close: "active",
    time: "29",
    avatar: "https://i.pravatar.cc/150?img=20",
    quantity: "ava.perez@example.com",
  },
  {
    id: 17,
    symbol: "Liam Johnson",
    price: "Data Analyst",
    open: "Analysis",
    close: "active",
    time: "28",
    avatar: "https://i.pravatar.cc/150?img=33",
    quantity: "liam.johnson@example.com",
  },
  {
    id: 18,
    symbol: "Sophia Taylor",
    price: "QA Analyst",
    open: "Testing",
    close: "active",
    time: "27",
    avatar: "https://i.pravatar.cc/150?img=29",
    quantity: "sophia.taylor@example.com",
  },
  {
    id: 19,
    symbol: "Lucas Harris",
    price: "Administrator",
    open: "Information Technology",
    close: "paused",
    time: "32",
    avatar: "https://i.pravatar.cc/150?img=50",
    quantity: "lucas.harris@example.com",
  },
  {
    id: 20,
    symbol: "Mia Robinson",
    price: "Coordinator",
    open: "Operations",
    close: "active",
    time: "26",
    avatar: "https://i.pravatar.cc/150?img=45",
    quantity: "mia.robinson@example.com",
  },
];

export { columns, users, statusOptions };
