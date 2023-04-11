import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WebhookCreateEventsEnum {
    Call = "CALL"
}
/**
 * Metadata policy for the webhook
 */
export declare enum WebhookCreateMetadataPolicyEnum {
    None = "NONE",
    Header = "HEADER",
    Body = "BODY"
}
/**
 * Signing algorithm for the webhook
 */
export declare enum WebhookCreateSigningAlgoEnum {
    HmacSha256 = "HMAC_SHA256"
}
/**
 * Webhook create parameters
 */
export declare class WebhookCreate extends SpeakeasyBase {
    /**
     * Events to subscribe to the webhook
     */
    events?: WebhookCreateEventsEnum[];
    /**
     * Metadata policy for the webhook
     */
    metadataPolicy?: WebhookCreateMetadataPolicyEnum;
    /**
     * Signing algorithm for the webhook
     */
    signingAlgo?: WebhookCreateSigningAlgoEnum;
    /**
     * Signing key for the webhook
     */
    signingKey?: string;
    /**
     * Destination URL for events
     */
    url?: string;
}
