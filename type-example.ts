export interface Point2D {
  x: number;
  y: number;
}

export interface Point3D extends Point2D {
  z: number;
}

export class Point implements Point3D {
  z: number = 0;
  x: number = 0;
  y: number = 0;
}

/**      Point  */

export type Point2D1 = {
    x: number;
    y: number;
  }


export type Point3D1 = Point2D1 & {
    z: number;
  }

  export const point: Point3D1 = {
    x:0,
    y:0,
    z:0
  };

  export class Point1 implements Point3D1 {
    x: number = 0;
    y: number = 0;
    z: number = 0;
  }
  