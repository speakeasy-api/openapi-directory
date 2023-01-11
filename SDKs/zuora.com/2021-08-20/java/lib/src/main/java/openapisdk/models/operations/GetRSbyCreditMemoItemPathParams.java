package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRSbyCreditMemoItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cmi-id")
    public String cmiId;
    public GetRSbyCreditMemoItemPathParams withCmiId(String cmiId) {
        this.cmiId = cmiId;
        return this;
    }
}