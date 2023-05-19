import PlayersModel from "~/server/models/Players.model";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name } = body;
  //createError
  if (!name) {
    return {
      status: 400,
      body: "name is required",
    };
  }
  const anyUser = await PlayersModel.findOne({ name });
  if (anyUser) {
    return {
      status: 400,
      body: `${name}已经存在`,
    };
  }
  try {
    const player = await PlayersModel.create(body);
    return {
      status: 200,
      body: player,
      message: "创建成功",
    };
  } catch (e: any) {
    throw createError({
      message: e.message,
    });
  }
});