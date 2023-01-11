package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrackingfieldDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fieldId")
    public String fieldId;
    public TrackingfieldDeletePathParams withFieldId(String fieldId) {
        this.fieldId = fieldId;
        return this;
    }
}