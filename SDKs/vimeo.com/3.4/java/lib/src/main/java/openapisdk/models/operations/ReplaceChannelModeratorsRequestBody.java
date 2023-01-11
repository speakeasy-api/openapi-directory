package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReplaceChannelModeratorsRequestBody {
    @JsonProperty("user_uri")
    public String userUri;
    public ReplaceChannelModeratorsRequestBody withUserUri(String userUri) {
        this.userUri = userUri;
        return this;
    }
}