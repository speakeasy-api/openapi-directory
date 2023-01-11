package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetChannels200ApplicationJsonChannels {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channels_settings")
    public GetChannels200ApplicationJsonChannelsChannelsSettings channelsSettings;
    public GetChannels200ApplicationJsonChannels withChannelsSettings(GetChannels200ApplicationJsonChannelsChannelsSettings channelsSettings) {
        this.channelsSettings = channelsSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetChannels200ApplicationJsonChannels withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetChannels200ApplicationJsonChannels withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public GetChannels200ApplicationJsonChannels withType(Long type) {
        this.type = type;
        return this;
    }
}