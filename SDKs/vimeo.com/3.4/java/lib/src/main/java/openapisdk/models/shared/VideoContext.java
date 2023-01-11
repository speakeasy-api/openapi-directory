package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoContext
 * The context of the video's subscription, if this video is part of a subscription.
**/
public class VideoContext {
    @JsonProperty("action")
    public VideoContextActionEnum action;
    public VideoContext withAction(VideoContextActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("resource")
    public java.util.Map<String, Object> resource;
    public VideoContext withResource(java.util.Map<String, Object> resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("resource_type")
    public String resourceType;
    public VideoContext withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}