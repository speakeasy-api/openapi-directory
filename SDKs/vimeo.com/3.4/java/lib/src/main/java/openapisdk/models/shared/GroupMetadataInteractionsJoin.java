package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupMetadataInteractionsJoin
 * An action indicating that someone has joined the group. This data requires a bearer token with the `private` scope.
**/
public class GroupMetadataInteractionsJoin {
    @JsonProperty("added")
    public Boolean added;
    public GroupMetadataInteractionsJoin withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("added_time")
    public String addedTime;
    public GroupMetadataInteractionsJoin withAddedTime(String addedTime) {
        this.addedTime = addedTime;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public GroupMetadataInteractionsJoin withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public GroupMetadataInteractionsJoinTypeEnum type;
    public GroupMetadataInteractionsJoin withType(GroupMetadataInteractionsJoinTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public GroupMetadataInteractionsJoin withUri(String uri) {
        this.uri = uri;
        return this;
    }
}