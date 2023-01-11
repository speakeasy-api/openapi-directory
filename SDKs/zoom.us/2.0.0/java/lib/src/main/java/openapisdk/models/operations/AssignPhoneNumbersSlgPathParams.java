package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignPhoneNumbersSlgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sharedLineGroupId")
    public String sharedLineGroupId;
    public AssignPhoneNumbersSlgPathParams withSharedLineGroupId(String sharedLineGroupId) {
        this.sharedLineGroupId = sharedLineGroupId;
        return this;
    }
}