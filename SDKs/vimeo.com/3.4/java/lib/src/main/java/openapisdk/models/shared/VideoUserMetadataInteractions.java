package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VideoUserMetadataInteractions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add_privacy_user")
    public VideoUserMetadataInteractionsAddPrivacyUser addPrivacyUser;
    public VideoUserMetadataInteractions withAddPrivacyUser(VideoUserMetadataInteractionsAddPrivacyUser addPrivacyUser) {
        this.addPrivacyUser = addPrivacyUser;
        return this;
    }
    @JsonProperty("block")
    public VideoUserMetadataInteractionsBlock block;
    public VideoUserMetadataInteractions withBlock(VideoUserMetadataInteractionsBlock block) {
        this.block = block;
        return this;
    }
    @JsonProperty("follow")
    public VideoUserMetadataInteractionsFollow follow;
    public VideoUserMetadataInteractions withFollow(VideoUserMetadataInteractionsFollow follow) {
        this.follow = follow;
        return this;
    }
    @JsonProperty("report")
    public VideoUserMetadataInteractionsReport report;
    public VideoUserMetadataInteractions withReport(VideoUserMetadataInteractionsReport report) {
        this.report = report;
        return this;
    }
}