package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChannelMetadataInteractionsFollow
 * An action indicating if the authenticated user has followed this channel. This data requires a bearer token with the `private` scope.
**/
public class ChannelMetadataInteractionsFollow {
    @JsonProperty("added")
    public Boolean added;
    public ChannelMetadataInteractionsFollow withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("added_time")
    public String addedTime;
    public ChannelMetadataInteractionsFollow withAddedTime(String addedTime) {
        this.addedTime = addedTime;
        return this;
    }
    @JsonProperty("type")
    public ChannelMetadataInteractionsFollowTypeEnum type;
    public ChannelMetadataInteractionsFollow withType(ChannelMetadataInteractionsFollowTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public ChannelMetadataInteractionsFollow withUri(String uri) {
        this.uri = uri;
        return this;
    }
}