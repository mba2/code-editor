import { ComponentClass } from "./ComponentClass";
import { Metadata } from "./Metadata";


export const Component = (data) => {
  Metadata.addComponentInfo(data);
}

