import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import { BaseHtml } from "./components/BaseHtml";
import { db } from "./db";
import { todos } from "./db/schema";

const app = new Elysia()
  .use(html())
  .get("/", () => (
    <BaseHtml>
      <body>
        <div class="justify-center items-center h-full flex">
          <p>Hello, world!</p>
        </div>
      </body>
    </BaseHtml>
  ))
  .get("/todos", async () => {
    return await db.select().from(todos).all();
  })
  .get("/styles.css", () => Bun.file("./tailwind-gen/styles.css"))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
