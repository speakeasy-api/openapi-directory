package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupUserMetadataInteractions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add_privacy_user")
    public GroupUserMetadataInteractionsAddPrivacyUser addPrivacyUser;
    public GroupUserMetadataInteractions withAddPrivacyUser(GroupUserMetadataInteractionsAddPrivacyUser addPrivacyUser) {
        this.addPrivacyUser = addPrivacyUser;
        return this;
    }
    @JsonProperty("block")
    public GroupUserMetadataInteractionsBlock block;
    public GroupUserMetadataInteractions withBlock(GroupUserMetadataInteractionsBlock block) {
        this.block = block;
        return this;
    }
    @JsonProperty("follow")
    public GroupUserMetadataInteractionsFollow follow;
    public GroupUserMetadataInteractions withFollow(GroupUserMetadataInteractionsFollow follow) {
        this.follow = follow;
        return this;
    }
    @JsonProperty("report")
    public GroupUserMetadataInteractionsReport report;
    public GroupUserMetadataInteractions withReport(GroupUserMetadataInteractionsReport report) {
        this.report = report;
        return this;
    }
}