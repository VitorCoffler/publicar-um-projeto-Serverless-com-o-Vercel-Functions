export async function GET(request: Request) {
  const response = await fetch("https://api.vercel.app/pokemon")
  const products = await response.json()
  return Response.json(products)
}
