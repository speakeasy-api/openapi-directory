import { SpeakeasyBase } from "../../../internal/utils";
export declare class Validator extends SpeakeasyBase {
    cardCodeMask: string;
    cardCodeRegex: string;
    mask: string;
    regex: string;
    useBillingAddress: boolean;
    useCardHolderName: boolean;
    useCvv: boolean;
    useExpirationDate: boolean;
    validCardLengths: string;
    weights: number[];
}
