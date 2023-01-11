import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ChargeTierPriceFormatEnum {
    FlatFee = "FlatFee",
    PerUnit = "PerUnit"
}
export declare class ChargeTier extends SpeakeasyBase {
    endingUnit?: number;
    price: number;
    priceFormat: ChargeTierPriceFormatEnum;
    startingUnit: number;
    tier: number;
}
