import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeLanguageCombinationDTO } from "./chargelanguagecombinationdto";
export declare enum ReceivableDTORateOriginEnum {
    PriceProfile = "PRICE_PROFILE",
    PriceList = "PRICE_LIST",
    FilledManually = "FILLED_MANUALLY",
    Autocalculated = "AUTOCALCULATED"
}
export declare enum ReceivableDTOTypeEnum {
    Simple = "SIMPLE",
    Cat = "CAT"
}
/**
 * Success
 */
export declare class ReceivableDTO extends SpeakeasyBase {
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
    quantity?: number;
    rate?: number;
    rateOrigin?: ReceivableDTORateOriginEnum;
    taskId?: number;
    total?: number;
    type?: ReceivableDTOTypeEnum;
}
