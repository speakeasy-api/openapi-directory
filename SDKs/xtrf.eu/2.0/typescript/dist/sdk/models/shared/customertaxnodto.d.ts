import { SpeakeasyBase } from "../../../internal/utils";
export declare class CustomerTaxNoDTO extends SpeakeasyBase {
    /**
     * tax number
     */
    number?: string;
    /**
     * type (ie. NIP, VAT Reg No, P.IVA) or empty value if unknown
     */
    type?: string;
}
