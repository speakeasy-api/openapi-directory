package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OnDemandPageUserMetadataInteractions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add_privacy_user")
    public OnDemandPageUserMetadataInteractionsAddPrivacyUser addPrivacyUser;
    public OnDemandPageUserMetadataInteractions withAddPrivacyUser(OnDemandPageUserMetadataInteractionsAddPrivacyUser addPrivacyUser) {
        this.addPrivacyUser = addPrivacyUser;
        return this;
    }
    @JsonProperty("block")
    public OnDemandPageUserMetadataInteractionsBlock block;
    public OnDemandPageUserMetadataInteractions withBlock(OnDemandPageUserMetadataInteractionsBlock block) {
        this.block = block;
        return this;
    }
    @JsonProperty("follow")
    public OnDemandPageUserMetadataInteractionsFollow follow;
    public OnDemandPageUserMetadataInteractions withFollow(OnDemandPageUserMetadataInteractionsFollow follow) {
        this.follow = follow;
        return this;
    }
    @JsonProperty("report")
    public OnDemandPageUserMetadataInteractionsReport report;
    public OnDemandPageUserMetadataInteractions withReport(OnDemandPageUserMetadataInteractionsReport report) {
        this.report = report;
        return this;
    }
}