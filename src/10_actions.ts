// type PayloadAction<PL, AN = string> = {
//   actionName: AN,
//   payload: PL
// }
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

// Aufgabe: ich will ein Objekt, dass aus Funktionen besteht,
// die genauso heißen, wie in reducers,
// deren Keys aber Funktionen sind, die vom der action sind

// type Reducers
// type MakeActionCreatorFunction
// type ActionCreators
