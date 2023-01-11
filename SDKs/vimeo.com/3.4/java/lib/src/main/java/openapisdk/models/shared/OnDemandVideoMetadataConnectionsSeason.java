package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandVideoMetadataConnectionsSeason
 * Information about this season.
**/
public class OnDemandVideoMetadataConnectionsSeason {
    @JsonProperty("name")
    public String name;
    public OnDemandVideoMetadataConnectionsSeason withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public OnDemandVideoMetadataConnectionsSeason withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandVideoMetadataConnectionsSeason withUri(String uri) {
        this.uri = uri;
        return this;
    }
}