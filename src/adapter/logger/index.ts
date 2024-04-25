import { LoggerI } from "@/domain/ports";

function buildLogger(): LoggerI {
  function info(message: string) {
    console.log(message);
  }

  return { info };
}

export const logger = buildLogger();
