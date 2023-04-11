import { SpeakeasyBase } from "../../../internal/utils";
export declare class Payee extends SpeakeasyBase {
    /**
     * Whether or not the payee has been deleted.  Deleted payees will only be included in delta requests.
     */
    deleted: boolean;
    id: string;
    name: string;
    /**
     * If a transfer payee, the `account_id` to which this payee transfers to
     */
    transferAccountId?: string;
}
