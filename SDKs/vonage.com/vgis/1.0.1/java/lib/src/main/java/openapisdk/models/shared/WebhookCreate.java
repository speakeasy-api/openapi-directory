package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookCreate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public WebhookCreateEventsEnum[] events;
    public WebhookCreate withEvents(WebhookCreateEventsEnum[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataPolicy")
    public WebhookCreateMetadataPolicyEnum metadataPolicy;
    public WebhookCreate withMetadataPolicy(WebhookCreateMetadataPolicyEnum metadataPolicy) {
        this.metadataPolicy = metadataPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingAlgo")
    public WebhookCreateSigningAlgoEnum signingAlgo;
    public WebhookCreate withSigningAlgo(WebhookCreateSigningAlgoEnum signingAlgo) {
        this.signingAlgo = signingAlgo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingKey")
    public String signingKey;
    public WebhookCreate withSigningKey(String signingKey) {
        this.signingKey = signingKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public WebhookCreate withUrl(String url) {
        this.url = url;
        return this;
    }
}