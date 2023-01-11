package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRSforCreditMemoItemDistributeByDateRangePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cmi-id")
    public String cmiId;
    public PostRSforCreditMemoItemDistributeByDateRangePathParams withCmiId(String cmiId) {
        this.cmiId = cmiId;
        return this;
    }
}