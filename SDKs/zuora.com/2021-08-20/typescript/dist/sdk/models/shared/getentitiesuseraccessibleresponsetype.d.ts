import { SpeakeasyBase } from "../../../internal/utils";
import { GETEntitiesType } from "./getentitiestype";
export declare class GETEntitiesUserAccessibleResponseType extends SpeakeasyBase {
    /**
     * Container for one or more entities in a multi-entity hierarchy.
     *
     * @remarks
     *
     */
    entities?: GETEntitiesType[];
    /**
     * Returns `true` if the request is successful.
     *
     * @remarks
     *
     */
    success?: boolean;
}
