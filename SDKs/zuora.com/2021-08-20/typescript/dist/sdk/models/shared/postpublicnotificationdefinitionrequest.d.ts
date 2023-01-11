import { SpeakeasyBase } from "../../../internal/utils";
import { CalloutAuth } from "./calloutauth";
import { FilterRuleParameterDefinition } from "./filterruleparameterdefinition";
export declare enum PostPublicNotificationDefinitionRequestCalloutHttpMethodEnum {
    Get = "GET",
    Put = "PUT",
    Post = "POST",
    Delete = "DELETE"
}
export declare class PostPublicNotificationDefinitionRequestCallout extends SpeakeasyBase {
    active?: boolean;
    calloutAuth?: CalloutAuth;
    calloutBaseurl: string;
    calloutParams?: Record<string, string>;
    calloutRetry?: boolean;
    description?: string;
    eventTypeName: string;
    httpMethod: PostPublicNotificationDefinitionRequestCalloutHttpMethodEnum;
    name: string;
    requiredAuth: boolean;
}
export declare class PostPublicNotificationDefinitionRequestFilterRule extends SpeakeasyBase {
    condition: string;
    description?: string;
    parameters: Record<string, FilterRuleParameterDefinition>;
}
export declare class PostPublicNotificationDefinitionRequest extends SpeakeasyBase {
    active?: boolean;
    callout?: PostPublicNotificationDefinitionRequestCallout;
    calloutActive?: boolean;
    communicationProfileId?: string;
    description?: string;
    emailActive?: boolean;
    emailTemplateId?: string;
    eventTypeName: string;
    eventTypeNamespace?: string;
    filterRule?: PostPublicNotificationDefinitionRequestFilterRule;
    filterRuleParams?: Record<string, string>;
    name: string;
}
