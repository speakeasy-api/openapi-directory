package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VideoVersionsUserMetadataInteractions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add_privacy_user")
    public VideoVersionsUserMetadataInteractionsAddPrivacyUser addPrivacyUser;
    public VideoVersionsUserMetadataInteractions withAddPrivacyUser(VideoVersionsUserMetadataInteractionsAddPrivacyUser addPrivacyUser) {
        this.addPrivacyUser = addPrivacyUser;
        return this;
    }
    @JsonProperty("block")
    public VideoVersionsUserMetadataInteractionsBlock block;
    public VideoVersionsUserMetadataInteractions withBlock(VideoVersionsUserMetadataInteractionsBlock block) {
        this.block = block;
        return this;
    }
    @JsonProperty("follow")
    public VideoVersionsUserMetadataInteractionsFollow follow;
    public VideoVersionsUserMetadataInteractions withFollow(VideoVersionsUserMetadataInteractionsFollow follow) {
        this.follow = follow;
        return this;
    }
    @JsonProperty("report")
    public VideoVersionsUserMetadataInteractionsReport report;
    public VideoVersionsUserMetadataInteractions withReport(VideoVersionsUserMetadataInteractionsReport report) {
        this.report = report;
        return this;
    }
}