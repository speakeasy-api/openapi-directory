package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoMetadataConnectionsSeason
 * Information about the video's season.
**/
public class OnDemandPageVideoMetadataConnectionsSeason {
    @JsonProperty("name")
    public String name;
    public OnDemandPageVideoMetadataConnectionsSeason withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoMetadataConnectionsSeason withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoMetadataConnectionsSeason withUri(String uri) {
        this.uri = uri;
        return this;
    }
}