package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OnDemandSeasonUserMetadataInteractions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add_privacy_user")
    public OnDemandSeasonUserMetadataInteractionsAddPrivacyUser addPrivacyUser;
    public OnDemandSeasonUserMetadataInteractions withAddPrivacyUser(OnDemandSeasonUserMetadataInteractionsAddPrivacyUser addPrivacyUser) {
        this.addPrivacyUser = addPrivacyUser;
        return this;
    }
    @JsonProperty("block")
    public OnDemandSeasonUserMetadataInteractionsBlock block;
    public OnDemandSeasonUserMetadataInteractions withBlock(OnDemandSeasonUserMetadataInteractionsBlock block) {
        this.block = block;
        return this;
    }
    @JsonProperty("follow")
    public OnDemandSeasonUserMetadataInteractionsFollow follow;
    public OnDemandSeasonUserMetadataInteractions withFollow(OnDemandSeasonUserMetadataInteractionsFollow follow) {
        this.follow = follow;
        return this;
    }
    @JsonProperty("report")
    public OnDemandSeasonUserMetadataInteractionsReport report;
    public OnDemandSeasonUserMetadataInteractions withReport(OnDemandSeasonUserMetadataInteractionsReport report) {
        this.report = report;
        return this;
    }
}