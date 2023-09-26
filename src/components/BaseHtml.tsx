import { PropsWithChildren } from "@kitajs/html";

export const BaseHtml = ({ children }: PropsWithChildren) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Twitter Clone</title>
    <script src="https://unpkg.com/htmx.org@1.9.6"></script>
    <script src="https://unpkg.com/hyperscript.org@0.9.11"></script>
    <link rel="stylesheet" href="/styles.css">
  </head>
  ${children}
</html>
`;