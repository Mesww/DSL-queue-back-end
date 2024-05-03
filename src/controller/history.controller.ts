// ! used for catch error
const asynchandler = require("express-async-handler");

import { $Enums } from "@prisma/client";

import { getHistory, addHistory } from "../service/historyRepository";
import moment from "moment";

// HistoryData.ts
export const histroyData = asynchandler(async (req: any, res: any) => {
  const gethistoryData = await getHistory();
  gethistoryData.forEach((item: any) => {
    item.datetime = new Date(moment(item.datetime).tz("Asia/Bangkok").format());
  });
  res.status(200).send(gethistoryData);
});

// historyCreate.post.ts
export const historyCreate = asynchandler(async (req: any, res: any) => {
  const { studentid, type, rate, comment, orders, channel } = req.body;
  const gethistoryCreate = await addHistory({
    studentid: studentid,
    type: type,
    rate: rate,
    comment: comment,
    orders: orders,
    channel: channel,
  });
  res.status(200).send(gethistoryCreate);
});
