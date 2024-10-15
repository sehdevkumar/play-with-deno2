export const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(2, 3));

try {
  // Ensure you're reading the correct directory and file
  const entries = Deno.readDirSync(".");
  for (const entry of entries) {
    console.log(entry.name);
  }
} catch (error) {
  console.error("Error reading directories:", error);
}


Deno.serve((_req)=> {
   return new Response("something changes")
})