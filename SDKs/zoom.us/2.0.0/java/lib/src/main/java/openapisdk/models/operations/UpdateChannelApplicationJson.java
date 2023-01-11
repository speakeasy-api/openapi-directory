package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateChannelApplicationJson {
    @JsonProperty("name")
    public String name;
    public UpdateChannelApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
}