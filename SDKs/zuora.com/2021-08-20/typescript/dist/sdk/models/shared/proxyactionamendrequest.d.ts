import { SpeakeasyBase } from "../../../internal/utils";
import { AmendRequest } from "./amendrequest";
export declare class ProxyActionamendRequest extends SpeakeasyBase {
    /**
     * The value of this field must be an array that contains a single AmendRequest object. To specify multiple Amendment objects, use the `Amendments` field of the AmendRequest object.
     *
     * @remarks
     *
     */
    requests?: AmendRequest[];
}
