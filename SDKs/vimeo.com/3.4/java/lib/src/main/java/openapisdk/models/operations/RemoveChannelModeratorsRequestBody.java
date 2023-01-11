package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveChannelModeratorsRequestBody {
    @JsonProperty("user_uri")
    public String userUri;
    public RemoveChannelModeratorsRequestBody withUserUri(String userUri) {
        this.userUri = userUri;
        return this;
    }
}