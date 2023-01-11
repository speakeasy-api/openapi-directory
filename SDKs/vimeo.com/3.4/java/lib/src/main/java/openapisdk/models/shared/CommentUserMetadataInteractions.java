package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CommentUserMetadataInteractions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add_privacy_user")
    public CommentUserMetadataInteractionsAddPrivacyUser addPrivacyUser;
    public CommentUserMetadataInteractions withAddPrivacyUser(CommentUserMetadataInteractionsAddPrivacyUser addPrivacyUser) {
        this.addPrivacyUser = addPrivacyUser;
        return this;
    }
    @JsonProperty("block")
    public CommentUserMetadataInteractionsBlock block;
    public CommentUserMetadataInteractions withBlock(CommentUserMetadataInteractionsBlock block) {
        this.block = block;
        return this;
    }
    @JsonProperty("follow")
    public CommentUserMetadataInteractionsFollow follow;
    public CommentUserMetadataInteractions withFollow(CommentUserMetadataInteractionsFollow follow) {
        this.follow = follow;
        return this;
    }
    @JsonProperty("report")
    public CommentUserMetadataInteractionsReport report;
    public CommentUserMetadataInteractions withReport(CommentUserMetadataInteractionsReport report) {
        this.report = report;
        return this;
    }
}