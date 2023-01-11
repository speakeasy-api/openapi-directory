import { SpeakeasyBase } from "../../../internal/utils";
import { Term } from "./term";
export declare class GetSubscriptionTermInfoResponseTypeReasons extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class GetSubscriptionTermInfoResponseType extends SpeakeasyBase {
    nextPage?: string;
    processId?: string;
    reasons?: GetSubscriptionTermInfoResponseTypeReasons[];
    success?: boolean;
    terms?: Term[];
}
