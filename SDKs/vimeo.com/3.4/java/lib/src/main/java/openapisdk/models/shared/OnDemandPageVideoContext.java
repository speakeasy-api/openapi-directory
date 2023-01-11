package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoContext
 * The context of the video's subscription, if this video is part of a subscription.
**/
public class OnDemandPageVideoContext {
    @JsonProperty("action")
    public OnDemandPageVideoContextActionEnum action;
    public OnDemandPageVideoContext withAction(OnDemandPageVideoContextActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("resource")
    public java.util.Map<String, Object> resource;
    public OnDemandPageVideoContext withResource(java.util.Map<String, Object> resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("resource_type")
    public String resourceType;
    public OnDemandPageVideoContext withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}