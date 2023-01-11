package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignPhoneToCallQueueMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=phone_numbers,json")
    public AssignPhoneToCallQueueMultipartFormDataPhoneNumbers[] phoneNumbers;
    public AssignPhoneToCallQueueMultipartFormData1 withPhoneNumbers(AssignPhoneToCallQueueMultipartFormDataPhoneNumbers[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
}