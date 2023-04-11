import { SpeakeasyBase } from "../../../internal/utils";
import { ActionsErrorResponse } from "./actionserrorresponse";
export declare class ExecuteResult extends SpeakeasyBase {
    errors?: ActionsErrorResponse[];
    /**
     * The ID of the object in the call. The value is the same as the value you provide in the `ids` field for the request.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * Returns `true` if the call was processed successfully, otherwise `false`.
     *
     * @remarks
     *
     */
    success?: boolean;
}
