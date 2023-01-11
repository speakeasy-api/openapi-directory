package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserMetadataInteractions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add_privacy_user")
    public UserMetadataInteractionsAddPrivacyUser addPrivacyUser;
    public UserMetadataInteractions withAddPrivacyUser(UserMetadataInteractionsAddPrivacyUser addPrivacyUser) {
        this.addPrivacyUser = addPrivacyUser;
        return this;
    }
    @JsonProperty("block")
    public UserMetadataInteractionsBlock block;
    public UserMetadataInteractions withBlock(UserMetadataInteractionsBlock block) {
        this.block = block;
        return this;
    }
    @JsonProperty("follow")
    public UserMetadataInteractionsFollow follow;
    public UserMetadataInteractions withFollow(UserMetadataInteractionsFollow follow) {
        this.follow = follow;
        return this;
    }
    @JsonProperty("report")
    public UserMetadataInteractionsReport report;
    public UserMetadataInteractions withReport(UserMetadataInteractionsReport report) {
        this.report = report;
        return this;
    }
}