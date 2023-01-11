package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignSipTrunkNumbersMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=phone_numbers,json")
    public String[] phoneNumbers;
    public AssignSipTrunkNumbersMultipartFormData withPhoneNumbers(String[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
}