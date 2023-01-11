package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignPhoneNumbersAutoReceptionistPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=autoReceptionistId")
    public String autoReceptionistId;
    public AssignPhoneNumbersAutoReceptionistPathParams withAutoReceptionistId(String autoReceptionistId) {
        this.autoReceptionistId = autoReceptionistId;
        return this;
    }
}