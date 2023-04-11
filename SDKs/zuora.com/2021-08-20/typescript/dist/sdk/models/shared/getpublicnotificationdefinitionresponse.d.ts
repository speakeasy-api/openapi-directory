import { SpeakeasyBase } from "../../../internal/utils";
import { CalloutAuth } from "./calloutauth";
import { FilterRuleParameterDefinition } from "./filterruleparameterdefinition";
/**
 * The HTTP method of the callout.
 */
export declare enum GETPublicNotificationDefinitionResponseCalloutHttpMethodEnum {
    Get = "GET",
    Put = "PUT",
    Post = "POST",
    Delete = "DELETE"
}
export declare class GETPublicNotificationDefinitionResponseCallout extends SpeakeasyBase {
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
    calloutBaseurl?: string;
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
    eventTypeName?: string;
    /**
     * The HTTP method of the callout.
     */
    httpMethod?: GETPublicNotificationDefinitionResponseCalloutHttpMethodEnum;
    /**
     * The ID of the callout. If `calloutActive` is true, a callout is required. The eventTypeName of the callout MUST be the same as the eventTypeName.
     */
    id?: string;
    /**
     * The name of the created callout.
     */
    name?: string;
    /**
     * Specifies whether the callout requires auth.
     */
    requiredAuth?: boolean;
}
export declare class GETPublicNotificationDefinitionResponseFilterRule extends SpeakeasyBase {
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
    condition?: string;
    /**
     * The description of the filter rule.
     */
    description?: string;
    /**
     * The value is `null`.
     */
    eventTypeName?: string;
    /**
     * The ID of the filter rule. If not specified or null, the notification definition is always qualified to process events of "eventType".
     */
    id?: string;
    /**
     * The parameters of the filter rule and their name must match those in the filter rule. And all parameters must be defined in the event type payload. The name of parameters can't be duplicate. The following reserved keywords should not be used as a parameter name: `AttachmentList`, `RecipientList`, `RecipientType`, `Exceptions`, `OCP_OBJECT_TYPE`, `OCP_OBJECT_ID`, `OCP_TRIGGER_BY`
     *
     * @remarks
     *
     */
    parameters?: Record<string, FilterRuleParameterDefinition>;
}
/**
 * OK
 */
export declare class GETPublicNotificationDefinitionResponse extends SpeakeasyBase {
    /**
     * The status of the notification definition. The default value is true.
     */
    active?: boolean;
    callout?: GETPublicNotificationDefinitionResponseCallout;
    /**
     * The status of the callout action. The default value is false.
     */
    calloutActive?: boolean;
    /**
     * The profile that the notification definition belongs to.
     */
    communicationProfileId?: string;
    /**
     * The ID of the user who created the notification definition.
     */
    createdBy?: string;
    /**
     * The time when the notification definition was created. Specified in the UTC timezone in the ISO860 format (YYYY-MM-DDThh:mm:ss.sTZD). E.g. 1997-07-16T19:20:30.45+00:00
     */
    createdOn?: Date;
    /**
     * Description of the notification definition
     */
    description?: string;
    /**
     * The status of the email action. The default value is false.
     */
    emailActive?: boolean;
    /**
     * The ID of the email template. In the request, there should be at least one email template or callout.
     */
    emailTemplateId?: string;
    /**
     * The name of the event type.
     */
    eventTypeName?: string;
    /**
     * The namespace of the `eventTypeName` field.
     *
     * @remarks
     *
     */
    eventTypeNamespace?: string;
    filterRule?: GETPublicNotificationDefinitionResponseFilterRule;
    /**
     * The parameter values used to configure the filter rule.
     *
     * @remarks
     *
     */
    filterRuleParams?: Record<string, string>;
    /**
     * The filter rule associated with this notification definition.
     */
    id?: string;
    /**
     * The name of the notification definition.
     */
    name?: string;
    /**
     * The ID of the user who updated the notification definition.
     */
    updatedBy?: string;
    /**
     * The time when the notification was updated. Specified in the UTC timezone in the ISO860 format (YYYY-MM-DDThh:mm:ss.sTZD). E.g. 1997-07-16T19:20:30.45+00:00
     */
    updatedOn?: Date;
}
