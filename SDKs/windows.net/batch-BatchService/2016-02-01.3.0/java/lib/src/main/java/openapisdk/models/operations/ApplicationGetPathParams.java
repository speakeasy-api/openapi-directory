package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApplicationGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationId")
    public String applicationId;
    public ApplicationGetPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}