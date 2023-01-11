package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAmendmentsByKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=amendment-key")
    public String amendmentKey;
    public GetAmendmentsByKeyPathParams withAmendmentKey(String amendmentKey) {
        this.amendmentKey = amendmentKey;
        return this;
    }
}