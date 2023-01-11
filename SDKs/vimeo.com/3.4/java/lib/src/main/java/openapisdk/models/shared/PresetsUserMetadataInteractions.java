package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PresetsUserMetadataInteractions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add_privacy_user")
    public PresetsUserMetadataInteractionsAddPrivacyUser addPrivacyUser;
    public PresetsUserMetadataInteractions withAddPrivacyUser(PresetsUserMetadataInteractionsAddPrivacyUser addPrivacyUser) {
        this.addPrivacyUser = addPrivacyUser;
        return this;
    }
    @JsonProperty("block")
    public PresetsUserMetadataInteractionsBlock block;
    public PresetsUserMetadataInteractions withBlock(PresetsUserMetadataInteractionsBlock block) {
        this.block = block;
        return this;
    }
    @JsonProperty("follow")
    public PresetsUserMetadataInteractionsFollow follow;
    public PresetsUserMetadataInteractions withFollow(PresetsUserMetadataInteractionsFollow follow) {
        this.follow = follow;
        return this;
    }
    @JsonProperty("report")
    public PresetsUserMetadataInteractionsReport report;
    public PresetsUserMetadataInteractions withReport(PresetsUserMetadataInteractionsReport report) {
        this.report = report;
        return this;
    }
}