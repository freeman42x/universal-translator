import { serve } from "https://deno.land/std@0.98.0/http/server.ts";

for await (const req of serve({ port: 8000 })) {
  req.respond({ body: "Hello from Deno!" });
}