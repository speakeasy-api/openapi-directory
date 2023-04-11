import { SpeakeasyBase } from "../../../internal/utils";
import { Item1 } from "./item1";
export declare class InvoiceNotificationRequest extends SpeakeasyBase {
    /**
     * The name of the carrier responsible for delivering the order. *This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).*
     */
    courier?: string;
    /**
     * Order dispatch date. May be `null`.
     */
    dispatchedDate?: string;
    /**
     * XML text of the invoice, not the URL. This field is very important for external marketplace integrations such as Mercado Libre.
     */
    embeddedInvoice?: string;
    invoiceKey?: string;
    /**
     * Number that identifies the invoice.
     */
    invoiceNumber: string;
    /**
     * URL of the invoice. Can be used to send the URL of an XML file, for example, which is useful for some integrations.
     */
    invoiceUrl?: string;
    /**
     * Total amount being invoiced in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.
     */
    invoiceValue: string;
    /**
     * Issuance date of the invoice. You must add date and time in this field.
     */
    issuanceDate: string;
    /**
     * Array containing the SKUs that are being invoiced.
     */
    items: Item1[];
    /**
     * The number code that identifies the order tracking. *This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).*
     */
    trackingNumber?: string;
    /**
     * The URL used to track the order. *This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).*
     */
    trackingUrl?: string;
    /**
     * The type of invoice. There are two possible values: **Output** and **Input**. The Output type should be used when the invoice you are sending is a selling invoice. The Input type should be used when you send a return invoice.
     */
    type: string;
}
