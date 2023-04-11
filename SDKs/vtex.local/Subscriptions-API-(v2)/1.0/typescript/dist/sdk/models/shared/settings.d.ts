import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Subscriptions settings
 */
export declare class Settings extends SpeakeasyBase {
    /**
     * Default delivery method.
     */
    defaultSla: string;
    /**
     * Array containing delivery channels.
     */
    deliveryChannels: string[];
    /**
     * Indicates the time future subscription orders will be generated.
     */
    executionHourInUtc: number;
    /**
     * Defines whether or not multiple installments are enabled when a subscription is created.
     */
    isMultipleInstallmentsEnabledOnCreation: boolean;
    /**
     * Defines whether or not multiple installments are enabled when a subscription is updated.
     */
    isMultipleInstallmentsEnabledOnUpdate: boolean;
    /**
     * Indicates whether or not Subscriptions V3 is enabled.
     */
    isUsingV3: boolean;
    /**
     * When set to `true`, this property enables manual price configuration in subscription items. This is valid for all existing subscriptions, provided that there is a manual price configured and that `isUsingV3` is `true`.
     */
    manualPriceAllowed: boolean;
    /**
     * Indicates whether or not the account is in the migration process to Subscriptions V3.
     */
    onMigrationProcess: boolean;
    /**
     * When filled, this field passes along the `customData` infomration in the order to the future recurrent subscription orders.
     */
    orderCustomDataAppId: string;
    /**
     * Defines whether or not the expiration of subscriptions can be postponed.
     */
    postponeExpiration: boolean;
    /**
     * Defines whether or not the subscription order IDs will be randomly generated.
     */
    randomIdGeneration: boolean;
    /**
     * Delivery method.
     */
    slaOption: string;
    /**
     * When set to `true`, this property enables using the manual price for each item from the original subscription order. This is only valid for new subscriptions, created from the moment this configuration is enabled. For this to work, it is mandatory that the `manualPriceAllowed` property is set to `true` and that `isUsingV3` is `true`.
     */
    useItemPriceFromOriginalOrder: boolean;
    /**
     * Workflow version.
     */
    workflowVersion: string;
}
