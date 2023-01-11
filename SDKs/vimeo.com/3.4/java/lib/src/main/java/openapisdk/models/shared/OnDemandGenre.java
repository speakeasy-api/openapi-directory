package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OnDemandGenre {
    @JsonProperty("canonical")
    public String canonical;
    public OnDemandGenre withCanonical(String canonical) {
        this.canonical = canonical;
        return this;
    }
    @JsonProperty("interactions")
    public OnDemandGenreInteractions interactions;
    public OnDemandGenre withInteractions(OnDemandGenreInteractions interactions) {
        this.interactions = interactions;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public OnDemandGenre withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("metadata")
    public OnDemandGenreMetadata metadata;
    public OnDemandGenre withMetadata(OnDemandGenreMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public OnDemandGenre withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandGenre withUri(String uri) {
        this.uri = uri;
        return this;
    }
}