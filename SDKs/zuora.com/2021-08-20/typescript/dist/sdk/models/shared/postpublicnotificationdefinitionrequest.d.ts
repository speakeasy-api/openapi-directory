import { SpeakeasyBase } from "../../../internal/utils";
import { CalloutAuth } from "./calloutauth";
import { FilterRuleParameterDefinition } from "./filterruleparameterdefinition";
/**
 * The HTTP method of the callout.
 */
export declare enum POSTPublicNotificationDefinitionRequestCalloutHttpMethodEnum {
    Get = "GET",
    Put = "PUT",
    Post = "POST",
    Delete = "DELETE"
}
export declare class POSTPublicNotificationDefinitionRequestCallout extends SpeakeasyBase {
    /**
     * The status of the callout. The default is true.
     */
    active?: boolean;
    /**
     * If requiredAuth is true, this object is required.
     */
    calloutAuth?: CalloutAuth;
    /**
     * The callout URL. It must start with 'https://'
     */
    calloutBaseurl: string;
    /**
     * A key-value map of merge fields of this callout.
     *
     * @remarks
     *
     */
    calloutParams?: Record<string, string>;
    /**
     * Specified whether to retry the callout when the callout fails. The default is true.
     */
    calloutRetry?: boolean;
    /**
     * Description for the callout.
     */
    description?: string;
    /**
     * The name of the event type.
     */
    eventTypeName: string;
    /**
     * The HTTP method of the callout.
     */
    httpMethod: POSTPublicNotificationDefinitionRequestCalloutHttpMethodEnum;
    /**
     * The name of the created callout.
     */
    name: string;
    /**
     * Specifies whether the callout requires auth.
     */
    requiredAuth: boolean;
}
export declare class POSTPublicNotificationDefinitionRequestFilterRule extends SpeakeasyBase {
    /**
     * The filter rule conditions, written in [JEXL](http://commons.apache.org/proper/commons-jexl/).
     *
     * @remarks
     * The rule might contain event context merge fields and data source merge fields. Data source merge fields must be from [the base object of the event or from the joined objects of the base object](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL#Data_Sources_and_Objects). Notifications with invalid merge fields will fail to evaluate, thus will not be invoked. For example, to filter an invoice posted notification to only invoices with an amount over 1000, you would define the following condition:
     *
     * ```Invoice.Amount > 1000```
     *
     * There are conventions and keywords you need to be aware of. For example:
     *
     * * `Invoice.Amount` refers to the `Amount` field of the Zuora object `Invoice`.
     *
     * * Unlike Event Triggers, there is no access to variables with the `_old` suffix. Fields with the `_old` suffix are only available on Event Trigger conditions.
     *
     */
    condition: string;
    /**
     * The description of the filter rule.
     */
    description?: string;
    /**
     * The parameters of the filter rule and their name must match those in the filter rule. And all parameters must be defined in the event type payload. The name of parameters can't be duplicate. The following reserved keywords should not be used as a parameter name: `AttachmentList`, `RecipientList`, `RecipientType`, `Exceptions`, `OCP_OBJECT_TYPE`, `OCP_OBJECT_ID`, `OCP_TRIGGER_BY`
     *
     * @remarks
     *
     */
    parameters: Record<string, FilterRuleParameterDefinition>;
}
/**
 * The request body used to create the notification definition.
 */
export declare class POSTPublicNotificationDefinitionRequest extends SpeakeasyBase {
    /**
     * The status of the notification definition. The default value is true.
     */
    active?: boolean;
    callout?: POSTPublicNotificationDefinitionRequestCallout;
    /**
     * The status of the callout action. Default value is false.
     */
    calloutActive?: boolean;
    /**
     * The profile that notification definition belongs to.
     *
     * @remarks
     *
     * You can use the [Query Action](https://www.zuora.com/developer/api-reference/#operation/Action_POSTquery) to get the communication profile Id. See the following request sample:
     *
     * `{
     *     "queryString": "select Id, ProfileName from CommunicationProfile"
     *  }`
     *
     * If you do not pass the communicationProfileId, notification service will be automatically added to the 'Default Profile'.
     *
     */
    communicationProfileId?: string;
    /**
     * The description of the notification definition.
     */
    description?: string;
    /**
     * The status of the email action. The default value is false.
     */
    emailActive?: boolean;
    /**
     * The ID of the email template. If emailActive is true, an email template is required. And EventType of the email template MUST be the same as the eventType.
     */
    emailTemplateId?: string;
    /**
     * The name of the event type.
     *
     * @remarks
     *
     */
    eventTypeName: string;
    /**
     * The namespace of the `eventTypeName` field. The `eventTypeName` has the `user.notification` namespace by default.
     *
     * @remarks
     *
     * For example, if you want to create a notification definition on the `OrderActionProcessed` event, you must specify `com.zuora.notification` for this field.
     *
     */
    eventTypeNamespace?: string;
    filterRule?: POSTPublicNotificationDefinitionRequestFilterRule;
    /**
     * The parameter values used to configure the filter rule.
     *
     * @remarks
     *
     */
    filterRuleParams?: Record<string, string>;
    /**
     * The name of the notification definition, unique per communication profile.
     */
    name: string;
}
