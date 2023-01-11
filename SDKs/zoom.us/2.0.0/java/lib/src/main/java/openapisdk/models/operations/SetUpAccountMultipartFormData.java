package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetUpAccountMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=emergency_address,json")
    public SetUpAccountMultipartFormDataEmergencyAddress emergencyAddress;
    public SetUpAccountMultipartFormData withEmergencyAddress(SetUpAccountMultipartFormDataEmergencyAddress emergencyAddress) {
        this.emergencyAddress = emergencyAddress;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=extension_number")
    public String extensionNumber;
    public SetUpAccountMultipartFormData withExtensionNumber(String extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
}