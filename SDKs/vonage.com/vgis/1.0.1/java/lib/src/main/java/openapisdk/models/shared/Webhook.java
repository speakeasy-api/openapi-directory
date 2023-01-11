package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Webhook {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public Webhook withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdAt")
    public String createdAt;
    public Webhook withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public WebhookEventsEnum[] events;
    public Webhook withEvents(WebhookEventsEnum[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireAt")
    public String expireAt;
    public Webhook withExpireAt(String expireAt) {
        this.expireAt = expireAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Webhook withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataPolicy")
    public WebhookMetadataPolicyEnum metadataPolicy;
    public Webhook withMetadataPolicy(WebhookMetadataPolicyEnum metadataPolicy) {
        this.metadataPolicy = metadataPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purgeAt")
    public String purgeAt;
    public Webhook withPurgeAt(String purgeAt) {
        this.purgeAt = purgeAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewedAt")
    public String renewedAt;
    public Webhook withRenewedAt(String renewedAt) {
        this.renewedAt = renewedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingAlgo")
    public WebhookSigningAlgoEnum signingAlgo;
    public Webhook withSigningAlgo(WebhookSigningAlgoEnum signingAlgo) {
        this.signingAlgo = signingAlgo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingKey")
    public String signingKey;
    public Webhook withSigningKey(String signingKey) {
        this.signingKey = signingKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statistics")
    public WebhookStatistics statistics;
    public Webhook withStatistics(WebhookStatistics statistics) {
        this.statistics = statistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public WebhookStatusEnum status;
    public Webhook withStatus(WebhookStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Webhook withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public Webhook withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}