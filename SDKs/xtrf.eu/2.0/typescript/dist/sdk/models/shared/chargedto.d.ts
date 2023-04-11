import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeLanguageCombinationDTO } from "./chargelanguagecombinationdto";
export declare enum ChargeDTORateOriginEnum {
    PriceProfile = "PRICE_PROFILE",
    PriceList = "PRICE_LIST",
    FilledManually = "FILLED_MANUALLY",
    Autocalculated = "AUTOCALCULATED"
}
export declare enum ChargeDTOTypeEnum {
    Simple = "SIMPLE",
    Cat = "CAT"
}
export declare class ChargeDTO extends SpeakeasyBase {
    calculationUnitId?: number;
    currencyId?: number;
    description?: string;
    id?: number;
    ignoreMinimumCharge?: boolean;
    invoiceId?: string;
    jobTypeId?: number;
    languageCombination?: ChargeLanguageCombinationDTO;
    languageCombinationIdNumber?: string;
    minimumCharge?: number;
    rateOrigin?: ChargeDTORateOriginEnum;
    total?: number;
    type?: ChargeDTOTypeEnum;
}
