import * as React from "react";
import { fork, serialize, type Scope } from "effector";

let clientScope: Scope;

const initializeScope = (initialData: Record<string, unknown>) => {
  clientScope && console.log(serialize(clientScope));
  let scope = fork({
    values: {
      ...(clientScope ? serialize(clientScope) : {}),
      ...initialData,
    },
  });

  if (typeof window !== "undefined") {
    clientScope = scope;
  }

  return scope;
};

export const useScope = (initialData = {}) =>
  React.useMemo(() => initializeScope(initialData), [initialData]);

export const getClientScope = (): Scope | undefined => clientScope;
