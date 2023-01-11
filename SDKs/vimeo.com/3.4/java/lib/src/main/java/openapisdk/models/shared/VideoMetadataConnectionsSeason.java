package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoMetadataConnectionsSeason
 * Information about the video's season.
**/
public class VideoMetadataConnectionsSeason {
    @JsonProperty("name")
    public String name;
    public VideoMetadataConnectionsSeason withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public VideoMetadataConnectionsSeason withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoMetadataConnectionsSeason withUri(String uri) {
        this.uri = uri;
        return this;
    }
}