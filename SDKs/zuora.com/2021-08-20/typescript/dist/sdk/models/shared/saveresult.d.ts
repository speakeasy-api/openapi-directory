import { SpeakeasyBase } from "../../../internal/utils";
import { ActionsErrorResponse } from "./actionserrorresponse";
export declare class SaveResult extends SpeakeasyBase {
    errors?: ActionsErrorResponse[];
    id?: string;
    success?: boolean;
}
