package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddPhoneDeviceApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assigned_to")
    public String assignedTo;
    public AddPhoneDeviceApplicationJson withAssignedTo(String assignedTo) {
        this.assignedTo = assignedTo;
        return this;
    }
    @JsonProperty("display_name")
    public String displayName;
    public AddPhoneDeviceApplicationJson withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("mac_address")
    public String macAddress;
    public AddPhoneDeviceApplicationJson withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public AddPhoneDeviceApplicationJson withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AddPhoneDeviceApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}