package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnassignAllPhoneNumsAutoReceptionistPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=autoReceptionistId")
    public String autoReceptionistId;
    public UnassignAllPhoneNumsAutoReceptionistPathParams withAutoReceptionistId(String autoReceptionistId) {
        this.autoReceptionistId = autoReceptionistId;
        return this;
    }
}