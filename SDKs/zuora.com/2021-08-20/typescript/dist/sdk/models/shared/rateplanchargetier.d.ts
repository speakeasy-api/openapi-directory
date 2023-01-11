import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RatePlanChargeTierPriceFormatEnum {
    FlatFee = "FlatFee",
    PerUnit = "PerUnit"
}
export declare class RatePlanChargeTier extends SpeakeasyBase {
    createdById?: string;
    createdDate?: Date;
    endingUnit?: number;
    isOveragePrice?: boolean;
    price?: number;
    priceFormat?: RatePlanChargeTierPriceFormatEnum;
    ratePlanChargeId: string;
    startingUnit?: number;
    tier?: number;
    updatedById?: string;
    updatedDate?: Date;
}
