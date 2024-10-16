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
import { capitalize } from "../../common/ultils/string"
import { columns, users, statusOptions } from "./data"
import { useAsyncList } from "@react-stately/data"
import binanceConfig from '../../common/config/binance'
import { newOrder } from "../../services/binanceService";
import { symbol } from "framer-motion/client";

const SOCKET_TOPIC = {
  NOTIFY: "notify",
  AUTH: "auth",
  CONNECT: "connect",
  DISCONNECT: "disconnect",
  RECONNECT: "reconnect",
}

export default function Index({ navigateToPage }) {
  const [coins, setCoins] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  function handleOrder(values) {
    newOrder(values)
      .then((res) => {
        console.log("🚀 ~ .then ~ res:", res)
      })
      .catch((err) => {
        console.log("🚀 ~ handleOrder ~ err:", err)
      })
  }

  useEffect(() => {
    const socket = new WebSocket(binanceConfig?.socketURL);
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
        const coins = res.data.reduce((acc, coin) => {
          if (coin
            && (
              (coin?.s.includes('BNB') && coin?.s.includes('USDT'))
              || (coin?.s.includes('TON') && coin?.s.includes('USDT'))
              || (coin?.s.includes('BTC') && coin?.s.includes('USDT'))
            )
          ) {
            console.log("🚀 ________________BUY START________________:", coin)

            if (coin?.s.includes('TON')) {
              console.log("🚀 ________________BUY START________________:", coin)
              handleOrder({
                symbol: coin?.s, // "TON_USDT",
                side: "LIMIT",
                type: "MARKET",
                timeInForce: "GTC",
                quantity: 0.1,
                price: 0.0001
              })
              console.log("🚀 ________________BUY STOP________________:", coin)
            }
            acc.push({
              symbol: coin?.s,
              oc: `${coin?.o} - ${coin?.c}`,
              hl: `${coin?.h} - ${coin?.l}`,
              price: coin?.c,
              quantity: coin?.q,
              time: coin?.T,
            })
          }
          return acc
        }, [])
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


  const tableColumns = [
    {
      key: "symbol",
      label: "NAME",
    },
    {
      key: "price",
      label: "Price",
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
