import { SpeakeasyBase } from "../../../internal/utils";
import { ManualTaxTypeEnum } from "./manualtaxtypeenum";
export declare class TaxLine extends SpeakeasyBase {
    amount?: number;
    description?: string;
    liabilityAccount?: string;
    manualTaxType?: ManualTaxTypeEnum;
    payslipTaxLineID?: string;
    taxTypeName?: string;
}
