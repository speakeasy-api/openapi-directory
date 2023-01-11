package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateUserLevelChannelApplicationJson {
    @JsonProperty("name")
    public String name;
    public UpdateUserLevelChannelApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
}