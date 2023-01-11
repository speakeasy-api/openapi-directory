package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateADeviceMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=assigned_to")
    public String assignedTo;
    public UpdateADeviceMultipartFormData withAssignedTo(String assignedTo) {
        this.assignedTo = assignedTo;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=display_name")
    public String displayName;
    public UpdateADeviceMultipartFormData withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=mac_address")
    public String macAddress;
    public UpdateADeviceMultipartFormData withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
}