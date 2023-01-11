import { SpeakeasyBase } from "../../../internal/utils";
import { GetBillingDocumentsResponseType } from "./getbillingdocumentsresponsetype";
export declare class BillingDocumentQueryResponseElementType extends SpeakeasyBase {
    documents?: GetBillingDocumentsResponseType[];
    nextPage?: string;
    success?: boolean;
}
