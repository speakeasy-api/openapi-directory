package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateADeviceApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assigned_to")
    public String assignedTo;
    public UpdateADeviceApplicationJson withAssignedTo(String assignedTo) {
        this.assignedTo = assignedTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public UpdateADeviceApplicationJson withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac_address")
    public String macAddress;
    public UpdateADeviceApplicationJson withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
}