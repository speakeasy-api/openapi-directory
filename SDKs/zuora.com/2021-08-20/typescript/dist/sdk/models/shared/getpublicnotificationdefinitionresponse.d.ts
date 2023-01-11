import { SpeakeasyBase } from "../../../internal/utils";
import { CalloutAuth } from "./calloutauth";
import { FilterRuleParameterDefinition } from "./filterruleparameterdefinition";
export declare enum GetPublicNotificationDefinitionResponseCalloutHttpMethodEnum {
    Get = "GET",
    Put = "PUT",
    Post = "POST",
    Delete = "DELETE"
}
export declare class GetPublicNotificationDefinitionResponseCallout extends SpeakeasyBase {
    active?: boolean;
    calloutAuth?: CalloutAuth;
    calloutBaseurl?: string;
    calloutParams?: Record<string, string>;
    calloutRetry?: boolean;
    description?: string;
    eventTypeName?: string;
    httpMethod?: GetPublicNotificationDefinitionResponseCalloutHttpMethodEnum;
    id?: string;
    name?: string;
    requiredAuth?: boolean;
}
export declare class GetPublicNotificationDefinitionResponseFilterRule extends SpeakeasyBase {
    condition?: string;
    description?: string;
    eventTypeName?: string;
    id?: string;
    parameters?: Record<string, FilterRuleParameterDefinition>;
}
export declare class GetPublicNotificationDefinitionResponse extends SpeakeasyBase {
    active?: boolean;
    callout?: GetPublicNotificationDefinitionResponseCallout;
    calloutActive?: boolean;
    communicationProfileId?: string;
    createdBy?: string;
    createdOn?: Date;
    description?: string;
    emailActive?: boolean;
    emailTemplateId?: string;
    eventTypeName?: string;
    eventTypeNamespace?: string;
    filterRule?: GetPublicNotificationDefinitionResponseFilterRule;
    filterRuleParams?: Record<string, string>;
    id?: string;
    name?: string;
    updatedBy?: string;
    updatedOn?: Date;
}
