import { useState, useEffect, useMemo, useCallback } from "react";
import styles from '../../styles/Pages.module.css';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Spinner,
  getKeyValue,
} from "@nextui-org/react";

import { VerticalDotsIcon } from "../Common/Icons/VerticalDotsIcon"
import { ChevronDownIcon } from "../Common/Icons/ChevronDownIcon"
import { SearchIcon } from "../Common/Icons/SearchIcon"
import { PlusIcon } from "../Common/Icons/PlusIcon"
import { capitalize } from "../../utils/string"
import { columns, users, statusOptions } from "./data"
import { useAsyncList } from "@react-stately/data"

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["symbol", "price", "quantity", "time"];

const SOCKET_TOPIC = {
  NOTIFY: "notify",
  AUTH: "auth",
  CONNECT: "connect",
  DISCONNECT: "disconnect",
  RECONNECT: "reconnect",
}

export default function Index({ navigateToPage }) {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    const socket = new WebSocket('wss://stream.binance.com/stream');
    socket.onopen = (e) => {
      console.log('Binance socket connected')
      socket.send(JSON.stringify({
        method: "SUBSCRIBE",
        params: ["!miniTicker@arr@3000ms"],
        id: 1
      }))
    }

    socket.onmessage = (event) => {
      const res = JSON.parse(event?.data);
      if (res && res?.data) {
        const coins = res.data.filter(coin => {
          return coin && (coin?.s.includes('BTC') || coin?.s.includes('BNB'))
        }).map(coin => {
          return {
            symbol: coin?.s,
            oc: `${coin?.o} - ${coin?.c}`,
            hl: `${coin?.h} - ${coin?.l}`,
            quantity: coin?.q,
            time: coin?.T,
          }
        })
        console.log(coins);
        setCoins(coins)
      }
    };

    socket.onerror = (error) => {
      console.error('WebSocket Error:', error);
    };

    return () => {
      socket.close();
    };
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  const tableColumns = [
    {
      key: "symbol",
      label: "NAME",
    },
    {
      key: "oc",
      label: "PRICE (Open - Close)",
    },
    {
      key: "hl",
      label: "PRICE (High - Low)",
    },
  ];

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Flatten World</h1>

        <Table aria-label="Example table with dynamic content">
          <TableHeader columns={tableColumns}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={coins}>
            {(item) => (
              <TableRow key={item?.symbol}>
                {(columnKey) => <TableCell style={{ color: 'red' }}>{getKeyValue(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </main>
    </div>
  );
}
