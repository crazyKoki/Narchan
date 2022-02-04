import { sequelize, Videos } from "./models.js";
import * as data from "./sample-data.js";

await sequelize.sync({ force: true });
for (const { id, movie } of data.videos) {
  await Videos.create({ id, movie });
}

