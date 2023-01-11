package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OnDemandSeason {
    @JsonProperty("description")
    public String description;
    public OnDemandSeason withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("metadata")
    public OnDemandSeasonMetadata metadata;
    public OnDemandSeason withMetadata(OnDemandSeasonMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public OnDemandSeason withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("position")
    public Double position;
    public OnDemandSeason withPosition(Double position) {
        this.position = position;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public OnDemandSeason withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public OnDemandSeason withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeason withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonProperty("user")
    public OnDemandSeasonUser user;
    public OnDemandSeason withUser(OnDemandSeasonUser user) {
        this.user = user;
        return this;
    }
}