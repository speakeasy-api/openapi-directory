package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Tag {
    @JsonProperty("canonical")
    public String canonical;
    public Tag withCanonical(String canonical) {
        this.canonical = canonical;
        return this;
    }
    @JsonProperty("metadata")
    public TagMetadata metadata;
    public Tag withMetadata(TagMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Tag withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public Tag withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public Tag withUri(String uri) {
        this.uri = uri;
        return this;
    }
}