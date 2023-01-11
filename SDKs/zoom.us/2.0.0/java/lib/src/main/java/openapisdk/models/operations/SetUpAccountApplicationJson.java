package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SetUpAccountApplicationJson {
    @JsonProperty("emergency_address")
    public SetUpAccountApplicationJsonEmergencyAddress emergencyAddress;
    public SetUpAccountApplicationJson withEmergencyAddress(SetUpAccountApplicationJsonEmergencyAddress emergencyAddress) {
        this.emergencyAddress = emergencyAddress;
        return this;
    }
    @JsonProperty("extension_number")
    public String extensionNumber;
    public SetUpAccountApplicationJson withExtensionNumber(String extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
}