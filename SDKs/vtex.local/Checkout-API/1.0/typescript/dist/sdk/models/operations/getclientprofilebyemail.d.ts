import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetClientProfileByEmailRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * Client's email address to be searched.
     */
    email: string;
}
export declare class GetClientProfileByEmail200ApplicationJSONAvailableAddresses extends SpeakeasyBase {
    /**
     * Address ID.
     */
    addressId?: string;
    /**
     * Address type.
     */
    addressType?: string;
    /**
     * City of the address.
     */
    city?: string;
    /**
     * Complement to the address.
     */
    complement?: string;
    /**
     * Country of the address. ISO three-letter code.
     */
    country?: string;
    /**
     * Array containing two floats with geocoordinates, first longitude, then latitude.
     */
    geoCoordinates?: number[];
    /**
     * Indicates whether address is disposable.
     */
    isDisposable?: boolean;
    /**
     * Neighborhood of the address.
     */
    neighborhood?: string;
    /**
     * Number of the address.
     */
    number?: string;
    /**
     * Name of the receiver.
     */
    receiverName?: string;
    /**
     * Reference that may help in the location of the address.
     */
    reference?: string;
    /**
     * State of the address.
     */
    state?: string;
    /**
     * Street of the address.
     */
    street?: string;
}
/**
 * Customer profile information.
 */
export declare class GetClientProfileByEmail200ApplicationJSONUserProfile extends SpeakeasyBase {
    /**
     * Document. Used for corporate clients.
     */
    corporateDocument?: string;
    /**
     * Name of the company. Used for corporate clients.
     */
    corporateName?: string;
    /**
     * Telephone number. Used for corporate clients.
     */
    corporatePhone?: string;
    /**
     * Customer class.
     */
    customerClass?: string;
    /**
     * Document.
     */
    document?: string;
    /**
     * Document type.
     */
    documentType?: string;
    /**
     * Email address.
     */
    email?: string;
    /**
     * First name.
     */
    firstName?: string;
    /**
     * Indicates whether client is corporate.
     */
    isCorporate?: boolean;
    /**
     * Last name.
     */
    lastName?: string;
    /**
     * Telephone number.
     */
    phone?: string;
    /**
     * Profile complete when loading.
     */
    profileCompleteOnLoading?: string;
    /**
     * Profile error when loading.
     */
    profileErrorOnLoading?: string;
    /**
     * State inscription. Used for corporate clients.
     */
    stateInscription?: string;
    /**
     * Trade name. Used for corporate clients.
     */
    tradeName?: string;
}
/**
 * OK
 */
export declare class GetClientProfileByEmail200ApplicationJSON extends SpeakeasyBase {
    /**
     * Available accounts.
     */
    availableAccounts?: string[];
    /**
     * Information on each available address.
     */
    availableAddresses?: GetClientProfileByEmail200ApplicationJSONAvailableAddresses[];
    /**
     * Indicates whether customer profile is complete.
     */
    isComplete?: boolean;
    /**
     * Profile provider.
     */
    profileProvider?: string;
    /**
     * Customer profile information.
     */
    userProfile?: GetClientProfileByEmail200ApplicationJSONUserProfile;
    /**
     * Unique ID associated with the customer profile.
     */
    userProfileId?: string;
}
export declare class GetClientProfileByEmailResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getClientProfileByEmail200ApplicationJSONObject?: GetClientProfileByEmail200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
