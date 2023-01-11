package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWorkflowImportHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Track-Id")
    public String zuoraTrackId;
    public PostWorkflowImportHeaders withZuoraTrackId(String zuoraTrackId) {
        this.zuoraTrackId = zuoraTrackId;
        return this;
    }
}