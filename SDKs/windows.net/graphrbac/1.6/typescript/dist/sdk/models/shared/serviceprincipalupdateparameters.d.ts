import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Active Directory service principal common properties shared among GET, POST and PATCH
**/
export declare class ServicePrincipalUpdateParameters extends SpeakeasyBase {
    accountEnabled?: boolean;
    appRoleAssignmentRequired?: boolean;
    keyCredentials?: Record<string, Record<string, any>>[];
    passwordCredentials?: Record<string, Record<string, any>>[];
    servicePrincipalType?: string;
    tags?: string[];
}
