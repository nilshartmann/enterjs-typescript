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

// Aufgabe:
// wir wollen eine Funktion haben, der wir endpoints übergeben,
// und die eine liste von hook-Funktionen zurückliefert

// FunctionName als Demo für String Template Literal
// QueryFn ohne Conditional Type
// QueryFunctions mit allen Keys im Objekt (als Beispiel)
// Api-Typen definieren
// QueryFn mit Conditional Type
