import { SpeakeasyBase } from "../../../internal/utils";
import { ManualTaxTypeEnum } from "./manualtaxtypeenum";
export declare class TaxLine extends SpeakeasyBase {
    /**
     * The tax line amount
     */
    amount?: number;
    /**
     * Description of the tax line.
     */
    description?: string;
    /**
     * The tax line liability account code. For posted pay run you should be able to see liability account code
     */
    liabilityAccount?: string;
    manualTaxType?: ManualTaxTypeEnum;
    /**
     * Xero identifier for payslip tax line ID.
     */
    payslipTaxLineID?: string;
    /**
     * Name of the tax type.
     */
    taxTypeName?: string;
}
