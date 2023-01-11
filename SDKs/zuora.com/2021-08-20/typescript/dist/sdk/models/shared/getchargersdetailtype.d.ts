import { SpeakeasyBase } from "../../../internal/utils";
import { GetRevenueItemTypeResponse } from "./getrevenueitemtyperesponse";
export declare class GetChargeRsDetailType extends SpeakeasyBase {
    accountId?: string;
    amount?: string;
    currency?: string;
    notes?: string;
    number?: string;
    recognitionRuleName?: string;
    recognizedRevenue?: string;
    revenueItems?: GetRevenueItemTypeResponse[];
    subscriptionChargeId?: string;
    subscriptionId?: string;
    success?: boolean;
    undistributedUnrecognizedRevenue?: string;
    unrecognizedRevenue?: string;
}
