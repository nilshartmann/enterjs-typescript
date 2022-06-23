function getLength<T extends string | null>(
  s: T
): T extends string ? number : null {
  // @ts-ignore
  return 0;
}

const x = getLength("fasdfasdf");
const y = getLength(null);

type IncrementAction = {
  incrementBy: number;
};

type MultiplyAction = {
  multiplyBy: number;
};

const reducers = {
  increment(state: any, action: IncrementAction) {},
  multiply(state: any, action: MultiplyAction) {},
};

type Reducers = typeof reducers;

type MakeActionCreator<T extends Function> = T extends (
  s: any,
  action: infer ActionType
) => any
  ? (action: ActionType) => ActionType
  : never;

type IncrementActionCreator = MakeActionCreator<typeof reducers.increment>;

type MakeActionCreators<T extends object> = {
  [K in keyof T]: T[K] extends Function ? MakeActionCreator<T[K]> : never;
};

function createActionCreators<R extends object>(
  reducerMap: R
): MakeActionCreators<R> {
  // @ts-ignore
  return "";
}

const result = createActionCreators(reducers);

type ActionCreators = MakeActionCreators<Reducers>;

// Aufgabe: ich will ein Objekt, dass aus Funktionen besteht,
// die genauso heißen, wie in reducers,
// deren Keys aber Funktionen sind, die vom der action sind

// type Reducers
// type MakeActionCreatorFunction
// type ActionCreators
