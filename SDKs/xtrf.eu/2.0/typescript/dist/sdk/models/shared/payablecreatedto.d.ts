import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeLanguageCombinationDTO } from "./chargelanguagecombinationdto";
import { FileDTO } from "./filedto";
export declare enum PayableCreateDTORateOriginEnum {
    PriceProfile = "PRICE_PROFILE",
    PriceList = "PRICE_LIST",
    FilledManually = "FILLED_MANUALLY",
    Autocalculated = "AUTOCALCULATED"
}
export declare enum PayableCreateDTOTypeEnum {
    Simple = "SIMPLE",
    Cat = "CAT"
}
/**
 * Adds a payable.
 */
export declare class PayableCreateDTO extends SpeakeasyBase {
    calculationUnitId?: number;
    catLogFile?: FileDTO;
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
    rateOrigin?: PayableCreateDTORateOriginEnum;
    total?: number;
    type?: PayableCreateDTOTypeEnum;
}
