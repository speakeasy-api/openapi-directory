import { SpeakeasyBase } from "../../../internal/utils";
export declare class PayeeLocation extends SpeakeasyBase {
    /**
     * Whether or not the payee location has been deleted.  Deleted payee locations will only be included in delta requests.
     */
    deleted: boolean;
    id: string;
    latitude: string;
    longitude: string;
    payeeId: string;
}
