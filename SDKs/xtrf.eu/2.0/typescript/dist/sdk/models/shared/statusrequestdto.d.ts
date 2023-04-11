import { SpeakeasyBase } from "../../../internal/utils";
export declare enum StatusRequestDTOStatusEnum {
    Postponed = "POSTPONED",
    ToBeSent = "TO_BE_SENT",
    Sent = "SENT",
    Confirmed = "CONFIRMED",
    BillCreated = "BILL_CREATED"
}
/**
 * Changed invoice status to given status.
 */
export declare class StatusRequestDTO extends SpeakeasyBase {
    status?: StatusRequestDTOStatusEnum;
}
