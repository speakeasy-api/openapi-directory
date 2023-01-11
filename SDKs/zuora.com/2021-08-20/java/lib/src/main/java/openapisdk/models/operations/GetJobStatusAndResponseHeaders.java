package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJobStatusAndResponseHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Track-Id")
    public String zuoraTrackId;
    public GetJobStatusAndResponseHeaders withZuoraTrackId(String zuoraTrackId) {
        this.zuoraTrackId = zuoraTrackId;
        return this;
    }
}