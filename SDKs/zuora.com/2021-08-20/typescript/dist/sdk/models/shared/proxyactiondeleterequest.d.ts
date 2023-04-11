import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProxyActiondeleteRequest extends SpeakeasyBase {
    /**
     * A list of one or more IDs for the objects you want to delete.
     *
     * @remarks
     *
     */
    ids: string[];
    /**
     * The type of object that you are deleting.
     *
     * @remarks
     *
     */
    type: string;
}
