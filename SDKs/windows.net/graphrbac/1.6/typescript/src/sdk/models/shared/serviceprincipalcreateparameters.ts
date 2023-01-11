import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServicePrincipalCreateParameters
/** 
 * Active Directory service principal common properties shared among GET, POST and PATCH
**/
export class ServicePrincipalCreateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountEnabled" })
  accountEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId: string;

  @SpeakeasyMetadata({ data: "json, name=appRoleAssignmentRequired" })
  appRoleAssignmentRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=keyCredentials" })
  keyCredentials?: Record<string, Record<string, any>>[];

  @SpeakeasyMetadata({ data: "json, name=passwordCredentials" })
  passwordCredentials?: Record<string, Record<string, any>>[];

  @SpeakeasyMetadata({ data: "json, name=servicePrincipalType" })
  servicePrincipalType?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
