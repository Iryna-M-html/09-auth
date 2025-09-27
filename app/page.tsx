import HomePage from "../app/home/page";

export interface PropsPar {
  searchParams?: { query?: string; page?: string };
}

export default async function Page({ searchParams }: PropsPar) {
  return HomePage();
}
