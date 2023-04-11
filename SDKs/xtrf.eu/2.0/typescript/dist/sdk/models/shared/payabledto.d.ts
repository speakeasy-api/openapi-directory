import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeLanguageCombinationDTO } from "./chargelanguagecombinationdto";
export declare enum PayableDTORateOriginEnum {
    PriceProfile = "PRICE_PROFILE",
    PriceList = "PRICE_LIST",
    FilledManually = "FILLED_MANUALLY",
    Autocalculated = "AUTOCALCULATED"
}
export declare enum PayableDTOTypeEnum {
    Simple = "SIMPLE",
    Cat = "CAT"
}
/**
 * Success
 */
export declare class PayableDTO extends SpeakeasyBase {
    calculationUnitId?: number;
    currencyId?: number;
    description?: string;
    id?: number;
    ignoreMinimumCharge?: boolean;
    invoiceId?: string;
    jobId?: Record<string, any>;
    jobTypeId?: number;
    languageCombination?: ChargeLanguageCombinationDTO;
    languageCombinationIdNumber?: string;
    minimumCharge?: number;
    quantity?: number;
    rate?: number;
    rateOrigin?: PayableDTORateOriginEnum;
    total?: number;
    type?: PayableDTOTypeEnum;
}
