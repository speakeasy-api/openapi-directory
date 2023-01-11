package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddPhoneDeviceMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=assigned_to")
    public String assignedTo;
    public AddPhoneDeviceMultipartFormData withAssignedTo(String assignedTo) {
        this.assignedTo = assignedTo;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=display_name")
    public String displayName;
    public AddPhoneDeviceMultipartFormData withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=mac_address")
    public String macAddress;
    public AddPhoneDeviceMultipartFormData withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=model")
    public String model;
    public AddPhoneDeviceMultipartFormData withModel(String model) {
        this.model = model;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public String type;
    public AddPhoneDeviceMultipartFormData withType(String type) {
        this.type = type;
        return this;
    }
}