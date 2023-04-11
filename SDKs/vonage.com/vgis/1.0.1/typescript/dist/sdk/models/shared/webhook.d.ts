import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WebhookEventsEnum {
    Call = "CALL"
}
/**
 * Metadata policy for the webhook
 */
export declare enum WebhookMetadataPolicyEnum {
    None = "NONE",
    Header = "HEADER",
    Body = "BODY"
}
/**
 * Signing algorithm for the webhook
 */
export declare enum WebhookSigningAlgoEnum {
    HmacSha256 = "HMAC_SHA256",
    None = "NONE"
}
export declare class WebhookStatistics extends SpeakeasyBase {
    /**
     * Current delivery status
     */
    failed?: boolean;
    /**
     * Total delivery attempts
     */
    totalAttempts?: number;
    /**
     * Total failed deliveries
     */
    totalFailures?: number;
    /**
     * Total successful deliveries
     */
    totalSuccesses?: number;
}
/**
 * Status for the webhook
 */
export declare enum WebhookStatusEnum {
    Active = "ACTIVE",
    Paused = "PAUSED"
}
/**
 * Successful
 */
export declare class Webhook extends SpeakeasyBase {
    /**
     * Unique identifier of the account
     */
    accountId?: string;
    /**
     * Created time for the webhook
     */
    createdAt?: string;
    /**
     * Subscribed events for the webhook
     */
    events?: WebhookEventsEnum[];
    /**
     * Expiration time for the webhook
     */
    expireAt?: string;
    /**
     * Unique identifier for the webhook
     */
    id?: string;
    /**
     * Metadata policy for the webhook
     */
    metadataPolicy?: WebhookMetadataPolicyEnum;
    /**
     * Scheduled purge time for the webhook
     */
    purgeAt?: string;
    /**
     * Last renewed time for the webhook
     */
    renewedAt?: string;
    /**
     * Signing algorithm for the webhook
     */
    signingAlgo?: WebhookSigningAlgoEnum;
    /**
     * Signing key for the webhook
     */
    signingKey?: string;
    statistics?: WebhookStatistics;
    /**
     * Status for the webhook
     */
    status?: WebhookStatusEnum;
    /**
     * Destination URL for events
     */
    url?: string;
    /**
     * Unique identifier of the user
     */
    userId?: string;
}
