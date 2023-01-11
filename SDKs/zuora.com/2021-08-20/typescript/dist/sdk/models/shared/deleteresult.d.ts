import { SpeakeasyBase } from "../../../internal/utils";
import { ActionsErrorResponse } from "./actionserrorresponse";
export declare class DeleteResult extends SpeakeasyBase {
    errors?: ActionsErrorResponse[];
    id?: string;
    success?: boolean;
}
