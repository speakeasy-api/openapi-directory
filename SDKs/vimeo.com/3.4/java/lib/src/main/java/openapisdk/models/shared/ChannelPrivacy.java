package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChannelPrivacy
 * The privacy settings of the channel.
**/
public class ChannelPrivacy {
    @JsonProperty("view")
    public ChannelPrivacyViewEnum view;
    public ChannelPrivacy withView(ChannelPrivacyViewEnum view) {
        this.view = view;
        return this;
    }
}