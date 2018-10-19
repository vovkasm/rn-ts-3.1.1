
interface TextStyle extends ViewStyle { fontWeight?: "900"; }
interface ViewStyle { marginTop?: number; }
declare function create<T extends { [P: string]: TextStyle | ViewStyle }>(styles: T): T

const s = create({
  didNotWork: {
    fontWeight: '900', // if we comment this line, errors gone
    marginTop: 5, // if this line commented, errors also gone
  },
})
const f1: TextStyle = s.didNotWork
const f2: ViewStyle = s.notExists
// ^--- Property 'notExists' does not exist on type '{ didNotWork: { fontWeight: "900"; marginTop: number; }; }'.
