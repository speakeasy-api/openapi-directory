package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSuperfundProductsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ABN")
    public String abn;
    public GetSuperfundProductsQueryParams withAbn(String abn) {
        this.abn = abn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=USI")
    public String usi;
    public GetSuperfundProductsQueryParams withUsi(String usi) {
        this.usi = usi;
        return this;
    }
}