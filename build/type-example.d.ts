export interface Point2D {
    x: number;
    y: number;
}
export interface Point3D extends Point2D {
    z: number;
}
export declare class Point implements Point3D {
    z: number;
    x: number;
    y: number;
}
/**      Point  */
export declare type Point2D1 = {
    x: number;
    y: number;
};
export declare type Point3D1 = Point2D1 & {
    z: number;
};
export declare const point: Point3D1;
export declare class Point1 implements Point3D1 {
    x: number;
    y: number;
    z: number;
}
