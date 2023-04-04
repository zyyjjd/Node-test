/*
 * @Date: 2023-04-04 13:29:57
 * @LastEditTime: 2023-04-04 14:30:57
 * @FilePath: /Node-test/index.ts
 * @Description:
 *
 */
import express, { Express, Router, Request, Response } from "express";
import axios from "axios";

const app: Express = express();

//node.js中epress的Router路由的使用为了方便我们更好的根据路由去分模块。避免将所有路由都写入在入口文件中。
const router: Router = express.Router();

app.use("/api", router);

router.get("/list", async (req: Request, res: Response) => {
  const result = await axios.post(
    "https://opendata.sz.gov.cn/api/120238293/1/service.xhtml?appKey=7a15606062414a48a6c1d69b2beb5c55",
    {
      page: 1,
      rows: 2,
      startDate: 20210101,
      endDate: 20211230,
    }
  );
  res.json({
    data: result.data,
  });
});

app.listen(3333, () => {
  console.log("server is running http://localhost:3333");
});
