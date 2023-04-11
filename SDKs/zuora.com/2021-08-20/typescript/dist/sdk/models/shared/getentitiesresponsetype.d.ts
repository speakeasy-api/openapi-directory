import { SpeakeasyBase } from "../../../internal/utils";
import { GETEntitiesType } from "./getentitiestype";
export declare class GETEntitiesResponseType extends SpeakeasyBase {
    /**
     * Container for one or more entities in a multi-entity hierarchy.
     */
    entities?: GETEntitiesType[];
    /**
     * Returns `true` if the request is successful.
     */
    success?: boolean;
}
