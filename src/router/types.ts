export type RenderFn = () => string;
export type InitEventsFn = () => void;

export interface Route {
  path: string;
  render: RenderFn;
  initEvents?: InitEventsFn;
  title?: string;
}

export type RoutesMap = Record<string, Route>;
