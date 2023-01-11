package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecordingDeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=action")
    public RecordingDeleteActionEnum action;
    public RecordingDeleteQueryParams withAction(RecordingDeleteActionEnum action) {
        this.action = action;
        return this;
    }
}