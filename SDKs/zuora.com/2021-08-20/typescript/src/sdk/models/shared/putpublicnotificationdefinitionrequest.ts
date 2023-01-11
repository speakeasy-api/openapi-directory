import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CalloutAuth } from "./calloutauth";
import { FilterRuleParameterDefinition } from "./filterruleparameterdefinition";


export enum PutPublicNotificationDefinitionRequestCalloutHttpMethodEnum {
    Get = "GET",
    Put = "PUT",
    Post = "POST",
    Delete = "DELETE"
}


export class PutPublicNotificationDefinitionRequestCallout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=calloutAuth" })
  calloutAuth?: CalloutAuth;

  @SpeakeasyMetadata({ data: "json, name=calloutBaseurl" })
  calloutBaseurl: string;

  @SpeakeasyMetadata({ data: "json, name=calloutParams" })
  calloutParams?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=calloutRetry" })
  calloutRetry?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=httpMethod" })
  httpMethod: PutPublicNotificationDefinitionRequestCalloutHttpMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=requiredAuth" })
  requiredAuth: boolean;
}


export class PutPublicNotificationDefinitionRequestFilterRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: FilterRuleParameterDefinition })
  parameters: Record<string, FilterRuleParameterDefinition>;
}


export class PutPublicNotificationDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=callout" })
  callout?: PutPublicNotificationDefinitionRequestCallout;

  @SpeakeasyMetadata({ data: "json, name=calloutActive" })
  calloutActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=communicationProfileId" })
  communicationProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=emailActive" })
  emailActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=emailTemplateId" })
  emailTemplateId?: string;

  @SpeakeasyMetadata({ data: "json, name=filterRule" })
  filterRule?: PutPublicNotificationDefinitionRequestFilterRule;

  @SpeakeasyMetadata({ data: "json, name=filterRuleParams" })
  filterRuleParams?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
