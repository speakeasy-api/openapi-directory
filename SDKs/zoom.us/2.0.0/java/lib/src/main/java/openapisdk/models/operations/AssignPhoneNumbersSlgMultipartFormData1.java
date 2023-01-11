package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignPhoneNumbersSlgMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=phone_numbers,json")
    public AssignPhoneNumbersSlgMultipartFormDataPhoneNumbers[] phoneNumbers;
    public AssignPhoneNumbersSlgMultipartFormData1 withPhoneNumbers(AssignPhoneNumbersSlgMultipartFormDataPhoneNumbers[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
}