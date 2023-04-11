import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether to send a debit memo to the additional email addresses of the memo account.
 *
 * @remarks
 *
 *
 * You can set the additional email addresses in the **Additional Email Addresses** field on the account detail page from the Zuora UI. See [Create a Customer Account](https://knowledgecenter.zuora.com/BC_Subscription_Management/Customer_Accounts/B_Create_a_Customer_Account#section_2) for more information.
 *
 */
export declare enum PostDebitMemoEmailTypeIncludeAdditionalEmailAddressesEnum {
    True = "true",
    False = "false"
}
/**
 * Indicates whether to email a debit memo based on the email template setting.
 *
 * @remarks
 *
 * If you set this field to `true`, the debit memo is sent to the email addresses specified in the **To Email** field of the email template. The email template is the one you set in the **Delivery Options** panel of the **Edit notification** dialog from the Zuora UI. See [Edit Email Templates](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/Create_Email_Templates) for more information about how to edit the **To Email** field in the email template.
 *
 */
export declare enum PostDebitMemoEmailTypeUseEmailTemplateSettingEnum {
    True = "true",
    False = "false"
}
export declare class PostDebitMemoEmailType extends SpeakeasyBase {
    /**
     * The valid email addresses you want to email a debit memo to. Use commas to separate email addresses.
     *
     * @remarks
     *
     * **Note:** This field is only applicable if you set the `useEmailTemplateSetting` field to `false`.
     *
     */
    emailAddresses?: string;
    /**
     * Indicates whether to send a debit memo to the additional email addresses of the memo account.
     *
     * @remarks
     *
     *
     * You can set the additional email addresses in the **Additional Email Addresses** field on the account detail page from the Zuora UI. See [Create a Customer Account](https://knowledgecenter.zuora.com/BC_Subscription_Management/Customer_Accounts/B_Create_a_Customer_Account#section_2) for more information.
     *
     */
    includeAdditionalEmailAddresses?: PostDebitMemoEmailTypeIncludeAdditionalEmailAddressesEnum;
    /**
     * Indicates whether to email a debit memo based on the email template setting.
     *
     * @remarks
     *
     * If you set this field to `true`, the debit memo is sent to the email addresses specified in the **To Email** field of the email template. The email template is the one you set in the **Delivery Options** panel of the **Edit notification** dialog from the Zuora UI. See [Edit Email Templates](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/Create_Email_Templates) for more information about how to edit the **To Email** field in the email template.
     *
     */
    useEmailTemplateSetting?: PostDebitMemoEmailTypeUseEmailTemplateSettingEnum;
}
