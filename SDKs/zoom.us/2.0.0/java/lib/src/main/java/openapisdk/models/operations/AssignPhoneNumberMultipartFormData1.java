package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignPhoneNumberMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=phone_numbers,json")
    public AssignPhoneNumberMultipartFormDataPhoneNumbers[] phoneNumbers;
    public AssignPhoneNumberMultipartFormData1 withPhoneNumbers(AssignPhoneNumberMultipartFormDataPhoneNumbers[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
}