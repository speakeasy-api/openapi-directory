package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignPhoneNumbersAutoReceptionistMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=phone_numbers,json")
    public AssignPhoneNumbersAutoReceptionistMultipartFormDataPhoneNumbers[] phoneNumbers;
    public AssignPhoneNumbersAutoReceptionistMultipartFormData1 withPhoneNumbers(AssignPhoneNumbersAutoReceptionistMultipartFormDataPhoneNumbers[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
}