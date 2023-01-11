import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Active Directory service principal common properties shared among GET, POST and PATCH
**/
export declare class ServicePrincipalCreateParameters extends SpeakeasyBase {
    accountEnabled?: boolean;
    appId: string;
    appRoleAssignmentRequired?: boolean;
    keyCredentials?: Record<string, Record<string, any>>[];
    passwordCredentials?: Record<string, Record<string, any>>[];
    servicePrincipalType?: string;
    tags?: string[];
}
