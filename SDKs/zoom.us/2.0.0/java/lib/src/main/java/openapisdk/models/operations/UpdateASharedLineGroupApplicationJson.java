package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateASharedLineGroupApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public UpdateASharedLineGroupApplicationJson withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public Long extensionNumber;
    public UpdateASharedLineGroupApplicationJson withExtensionNumber(Long extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_number")
    public UpdateASharedLineGroupApplicationJsonPrimaryNumber primaryNumber;
    public UpdateASharedLineGroupApplicationJson withPrimaryNumber(UpdateASharedLineGroupApplicationJsonPrimaryNumber primaryNumber) {
        this.primaryNumber = primaryNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public UpdateASharedLineGroupApplicationJsonStatusEnum status;
    public UpdateASharedLineGroupApplicationJson withStatus(UpdateASharedLineGroupApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public UpdateASharedLineGroupApplicationJson withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}