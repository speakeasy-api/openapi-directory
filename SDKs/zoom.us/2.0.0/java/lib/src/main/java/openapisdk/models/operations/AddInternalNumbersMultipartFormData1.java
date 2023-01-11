package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddInternalNumbersMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=internal_numbers,json")
    public AddInternalNumbersMultipartFormDataInternalNumbers[] internalNumbers;
    public AddInternalNumbersMultipartFormData1 withInternalNumbers(AddInternalNumbersMultipartFormDataInternalNumbers[] internalNumbers) {
        this.internalNumbers = internalNumbers;
        return this;
    }
}