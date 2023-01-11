package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChannelMetadataConnectionsPrivacyUsers
 * Information provided to channel moderators about which users they have specifically permitted to access a private channel. This data requires a bearer token with the `private` scope.
**/
public class ChannelMetadataConnectionsPrivacyUsers {
    @JsonProperty("options")
    public String[] options;
    public ChannelMetadataConnectionsPrivacyUsers withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public ChannelMetadataConnectionsPrivacyUsers withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public ChannelMetadataConnectionsPrivacyUsers withUri(String uri) {
        this.uri = uri;
        return this;
    }
}