package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupMetadataInteractions
 * User actions that have involved the group. This data requires a bearer token with the `private` scope.
**/
public class GroupMetadataInteractions {
    @JsonProperty("join")
    public GroupMetadataInteractionsJoin join;
    public GroupMetadataInteractions withJoin(GroupMetadataInteractionsJoin join) {
        this.join = join;
        return this;
    }
}