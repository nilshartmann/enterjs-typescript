export default undefined;

type Endpoint = {
  url: string;
  method: "GET" | "POST";
};

type EndpointConfig = Record<string, Endpoint>;

const endpoints = {
  getPost: {
    url: "https://myapp.de/api/posts",
    method: "GET",
  },

  updateUser: {
    url: "https://myapp.de/api/users",
    method: "POST",
  },
} as const;

function createApi<T extends object>(endpoint: T): Api<T> {
  // @ts-ignore
  return null;
}

const myApi = createApi(endpoints);
myApi.useGetPostQuery();

// type MyRestApi = {
//   useGetPostQuery: Function,
//   useUpdateUserQuery: Function
// }

type QueryFunction<T extends string> = `use${Capitalize<T>}Query`;

type Api<T extends object> = {
  [K in keyof T as K extends string ? QueryFunction<K> : never]: Function;
};

type MyRestApi = Api<typeof endpoints>;

type UseGetPostQuery = QueryFunction<"getPost">;

// Aufgabe:
// wir wollen eine Funktion haben, der wir endpoints übergeben,
// und die eine liste von hook-Funktionen zurückliefert

// FunctionName als Demo für String Template Literal
// QueryFn ohne Conditional Type
// QueryFunctions mit allen Keys im Objekt (als Beispiel)
// Api-Typen definieren
// QueryFn mit Conditional Type
