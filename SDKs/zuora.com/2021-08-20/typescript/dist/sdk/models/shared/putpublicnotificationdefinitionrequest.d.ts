import { SpeakeasyBase } from "../../../internal/utils";
import { CalloutAuth } from "./calloutauth";
import { FilterRuleParameterDefinition } from "./filterruleparameterdefinition";
/**
 * The HTTP method of the callout.
 */
export declare enum PUTPublicNotificationDefinitionRequestCalloutHttpMethodEnum {
    Get = "GET",
    Put = "PUT",
    Post = "POST",
    Delete = "DELETE"
}
export declare class PUTPublicNotificationDefinitionRequestCallout extends SpeakeasyBase {
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
     * The HTTP method of the callout.
     */
    httpMethod: PUTPublicNotificationDefinitionRequestCalloutHttpMethodEnum;
    /**
     * The name of the created callout.
     */
    name: string;
    /**
     * Specifies whether the callout requires auth.
     */
    requiredAuth: boolean;
}
export declare class PUTPublicNotificationDefinitionRequestFilterRule extends SpeakeasyBase {
    /**
     * The filter rule conditions, written in [JEXL](http://commons.apache.org/proper/commons-jexl/).
     *
     * @remarks
     * The rule might contain event context merge fields and data source merge fields. Data source merge fields must be from [the base object of the event or from the joined objects of the base object](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL#Data_Sources_and_Objects). Notifications with invalid merge fields will fail to evaluate, thus will not be invoked. For example, to trigger an event when an invoice is posted with the amount over 1000, you would define the following condition on the `Invoice` object:
     *
     * ```changeType == 'UPDATE' && Invoice.Status == 'Posted' && Invoice.Status_old != 'Posted' && Invoice.Amount > 1000```
     *
     * There are conventions and keywords you need to be aware of. For example:
     *
     * * `changeType` is a keyword to specify what kind of change happened to the object. Allowed values are `INSERT`, `UPDATE` or `DELETE`.
     *
     * * `Invoice.Status` refers to field `Status` of the Zuora object `Invoice`.
     *
     * * A variable with the `_old` suffix means it’s a previous value of the corresponding object field. The "_old" fields are only available on the base objects.
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
 * The request body of the notification definition to be updated.
 */
export declare class PUTPublicNotificationDefinitionRequest extends SpeakeasyBase {
    /**
     * The status of the notification definition. The default value is true.
     */
    active?: boolean;
    callout?: PUTPublicNotificationDefinitionRequestCallout;
    /**
     * The status of the callout action. The default value is false.
     */
    calloutActive?: boolean;
    /**
     * The profile that notification definition belongs to. If you want to
     *
     * @remarks
     * update the notification to a system notification, you should pass
     * 'SystemNotification'. '
     *
     * * When EventType is CDC/External and 'ReferenceObjectType' in EventType is associated to Account, comunicationProfileId can be 'SystemNotification'/Empty/UUID.
     *
     * * When EventType is CDC/External and 'ReferenceObjectType' in EventType is not  associated to Account, comunicationProfileId can be 'SystemNotification'/Empty.
     *
     * * When EventType is CDC/External and 'ReferenceObjectType' in EventType is EMPTY, comunicationProfileId can be 'SystemNotification'/Empty.
     *
     */
    communicationProfileId?: string;
    /**
     * The description of the notification definition.
     */
    description?: string;
    /**
     * The status of the email action. The default is false.
     */
    emailActive?: boolean;
    /**
     * The ID of the email template. If emailActive is updated from
     *
     * @remarks
     * false to true, an email template is required, and the EventType of
     * the email template MUST be the same as the EventType of the notification definition.
     *
     */
    emailTemplateId?: string;
    filterRule?: PUTPublicNotificationDefinitionRequestFilterRule;
    /**
     * The parameter values used to configure the filter rule.
     *
     * @remarks
     *
     */
    filterRuleParams?: Record<string, string>;
    /**
     * The name of the notification definition, which is unique in the profile.
     */
    name?: string;
}
