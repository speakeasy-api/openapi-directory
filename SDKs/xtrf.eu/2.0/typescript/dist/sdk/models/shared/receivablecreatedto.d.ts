import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeLanguageCombinationDTO } from "./chargelanguagecombinationdto";
import { FileDTO } from "./filedto";
export declare enum ReceivableCreateDTORateOriginEnum {
    PriceProfile = "PRICE_PROFILE",
    PriceList = "PRICE_LIST",
    FilledManually = "FILLED_MANUALLY",
    Autocalculated = "AUTOCALCULATED"
}
export declare enum ReceivableCreateDTOTypeEnum {
    Simple = "SIMPLE",
    Cat = "CAT"
}
/**
 * Adds a receivable.
 */
export declare class ReceivableCreateDTO extends SpeakeasyBase {
    calculationUnitId?: number;
    catLogFile?: FileDTO;
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
    rateOrigin?: ReceivableCreateDTORateOriginEnum;
    taskId?: number;
    total?: number;
    type?: ReceivableCreateDTOTypeEnum;
}
