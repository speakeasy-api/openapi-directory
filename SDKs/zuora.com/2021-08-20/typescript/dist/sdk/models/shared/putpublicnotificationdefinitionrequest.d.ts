import { SpeakeasyBase } from "../../../internal/utils";
import { CalloutAuth } from "./calloutauth";
import { FilterRuleParameterDefinition } from "./filterruleparameterdefinition";
export declare enum PutPublicNotificationDefinitionRequestCalloutHttpMethodEnum {
    Get = "GET",
    Put = "PUT",
    Post = "POST",
    Delete = "DELETE"
}
export declare class PutPublicNotificationDefinitionRequestCallout extends SpeakeasyBase {
    active?: boolean;
    calloutAuth?: CalloutAuth;
    calloutBaseurl: string;
    calloutParams?: Record<string, string>;
    calloutRetry?: boolean;
    description?: string;
    httpMethod: PutPublicNotificationDefinitionRequestCalloutHttpMethodEnum;
    name: string;
    requiredAuth: boolean;
}
export declare class PutPublicNotificationDefinitionRequestFilterRule extends SpeakeasyBase {
    condition: string;
    description?: string;
    parameters: Record<string, FilterRuleParameterDefinition>;
}
export declare class PutPublicNotificationDefinitionRequest extends SpeakeasyBase {
    active?: boolean;
    callout?: PutPublicNotificationDefinitionRequestCallout;
    calloutActive?: boolean;
    communicationProfileId?: string;
    description?: string;
    emailActive?: boolean;
    emailTemplateId?: string;
    filterRule?: PutPublicNotificationDefinitionRequestFilterRule;
    filterRuleParams?: Record<string, string>;
    name?: string;
}
