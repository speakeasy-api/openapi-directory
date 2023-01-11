package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OnDemandPageVideoUserMetadataInteractions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add_privacy_user")
    public OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser addPrivacyUser;
    public OnDemandPageVideoUserMetadataInteractions withAddPrivacyUser(OnDemandPageVideoUserMetadataInteractionsAddPrivacyUser addPrivacyUser) {
        this.addPrivacyUser = addPrivacyUser;
        return this;
    }
    @JsonProperty("block")
    public OnDemandPageVideoUserMetadataInteractionsBlock block;
    public OnDemandPageVideoUserMetadataInteractions withBlock(OnDemandPageVideoUserMetadataInteractionsBlock block) {
        this.block = block;
        return this;
    }
    @JsonProperty("follow")
    public OnDemandPageVideoUserMetadataInteractionsFollow follow;
    public OnDemandPageVideoUserMetadataInteractions withFollow(OnDemandPageVideoUserMetadataInteractionsFollow follow) {
        this.follow = follow;
        return this;
    }
    @JsonProperty("report")
    public OnDemandPageVideoUserMetadataInteractionsReport report;
    public OnDemandPageVideoUserMetadataInteractions withReport(OnDemandPageVideoUserMetadataInteractionsReport report) {
        this.report = report;
        return this;
    }
}