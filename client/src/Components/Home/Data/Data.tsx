import {
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/stat';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Data {
  label: string;
}
interface IPrice {
  ch: number;
  chp: number;
  currency: string;
  date: Date;
  exchange: string;
  metal: string;
  prev_close_price: number;
  price: number;
  timestamp: number;
}
const Data: React.FC<Data> = ({ label }) => {
  const [priceNow, setPriceNow] = useState<IPrice>();
  const [priceDayAgo, setPriceDayAgo] = useState<IPrice>();
  const [gap, setGap] = useState(0);

  React.useEffect(() => {
    axios
      .get(`http://localhost:4000/${label}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res.data);
        setPriceNow(res.data);
      });
    axios
      .get(`http://localhost:4000/${label}/1`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res.data);
        setPriceDayAgo(res.data);
      });
  }, []);

  useEffect(() => {
    setGap(
      Math.round(
        (((priceNow! && priceNow?.price) -
          (priceDayAgo! && priceDayAgo?.price)) /
          (priceDayAgo! && priceDayAgo?.price)) *
          10000,
      ) / 10000,
    );
  }, [priceNow, priceDayAgo]);

  return (
    <StatGroup m="30px">
      <Stat>
        <StatLabel>{label.toUpperCase()}</StatLabel>
        <StatNumber>{priceNow?.price}</StatNumber>
        <StatHelpText>
          <StatArrow type={!gap || gap >= 0 ? 'increase' : 'decrease'} />
          {gap}%
        </StatHelpText>
      </Stat>
    </StatGroup>
  );
};

export default Data;
