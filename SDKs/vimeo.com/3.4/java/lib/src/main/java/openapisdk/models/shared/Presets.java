package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Presets {
    @JsonProperty("metadata")
    public PresetsMetadata metadata;
    public Presets withMetadata(PresetsMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Presets withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("settings")
    public PresetsSettings settings;
    public Presets withSettings(PresetsSettings settings) {
        this.settings = settings;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public Presets withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonProperty("user")
    public PresetsUser user;
    public Presets withUser(PresetsUser user) {
        this.user = user;
        return this;
    }
}