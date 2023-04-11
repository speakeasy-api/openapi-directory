import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class POSTAttachmentsRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class POSTAttachmentsRequestBody extends SpeakeasyBase {
    /**
     * The file to be attached. Files with the following extensions are supported: .pdf, .csv, .png, .xlsx, .xls, .doc, .docx, .msg, .jpg, .txt, .htm, .html, .eml, .pptx, .gif, .rtf, .xml, .jpeg, .log, .cls
     *
     * @remarks
     *
     * The maximum file size is 4 MB.
     *
     */
    file: POSTAttachmentsRequestBodyFile;
}
/**
 * The type of the object to add attachements for.
 *
 * @remarks
 *
 */
export declare enum POSTAttachmentsAssociatedObjectTypeEnum {
    Account = "Account",
    Invoice = "Invoice",
    Subscription = "Subscription",
    CreditMemo = "CreditMemo",
    DebitMemo = "DebitMemo"
}
export declare class POSTAttachmentsRequest extends SpeakeasyBase {
    requestBody: POSTAttachmentsRequestBody;
    /**
     * An entity ID. If you have [Zuora Multi-entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity) enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you do not need to set this header.
     *
     * @remarks
     *
     */
    zuoraEntityIds?: string;
    /**
     * A custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.
     *
     * @remarks
     *
     * The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (`:`), semicolon (`;`), double quote (`"`), and quote (`'`).
     *
     */
    zuoraTrackId?: string;
    /**
     * For the Subscription type, specify the Subscription Number. An attachment is tied to the Subscription Number and thus viewable with every subscription version.
     *
     * @remarks
     *
     * For Account, Invoice, Credit Memo, and Debit Memo, specify the correponding ID.
     *
     */
    associatedObjectKey: string;
    /**
     * The type of the object to add attachements for.
     *
     * @remarks
     *
     */
    associatedObjectType: POSTAttachmentsAssociatedObjectTypeEnum;
    /**
     * Description of the attachment document.
     *
     * @remarks
     *
     */
    description?: string;
}
export declare class POSTAttachmentsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    postAttachmentResponseType?: shared.POSTAttachmentResponseType;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
