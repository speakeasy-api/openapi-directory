import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalComponent } from "./additionalcomponent";
export declare class InsertAddressesbygroupIdRequest extends SpeakeasyBase {
    additionalComponents: AdditionalComponent[];
    addressId: string;
    addressName: string;
    addressType: string;
    city: string;
    complement: string;
    country: string;
    formattedAddress: string;
    geoCoordinate: number[];
    neighborhood: string;
    number: string;
    postalCode: string;
    receiverName: string;
    reference: string;
    state: string;
    street: string;
}
