import { SpeakeasyBase } from "../../../internal/utils";
import { ActionsErrorResponse } from "./actionserrorresponse";
export declare class DeleteResult extends SpeakeasyBase {
    /**
     * If the delete failed, this contains an array of Error objects.
     *
     * @remarks
     *
     */
    errors?: ActionsErrorResponse[];
    /**
     * ID of the deleted object.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * A boolean field indicating the success of the delete operation. If the delete was successful, it is `true`. Otherwise, `false`.
     *
     * @remarks
     *
     */
    success?: boolean;
}
