import { SpeakeasyBase } from "../../../internal/utils";
import { CustomFieldDTO } from "./customfielddto";
/**
 * Success
 */
export declare class UserDTO extends SpeakeasyBase {
    customFields?: CustomFieldDTO[];
    email?: string;
    firstName?: string;
    gender?: string;
    id?: number;
    lastName?: string;
    login?: string;
    mobilePhone?: string;
    phone?: string;
    positionName?: string;
    timeZoneId?: string;
    userGroupName?: string;
}
