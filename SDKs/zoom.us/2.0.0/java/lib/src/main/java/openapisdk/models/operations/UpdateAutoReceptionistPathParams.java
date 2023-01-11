package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAutoReceptionistPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=autoReceptionistId")
    public String autoReceptionistId;
    public UpdateAutoReceptionistPathParams withAutoReceptionistId(String autoReceptionistId) {
        this.autoReceptionistId = autoReceptionistId;
        return this;
    }
}