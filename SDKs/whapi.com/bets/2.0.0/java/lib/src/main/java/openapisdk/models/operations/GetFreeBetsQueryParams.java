package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFreeBetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=exclude")
    public String[] exclude;
    public GetFreeBetsQueryParams withExclude(String[] exclude) {
        this.exclude = exclude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public String[] fields;
    public GetFreeBetsQueryParams withFields(String[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=include")
    public String[] include;
    public GetFreeBetsQueryParams withInclude(String[] include) {
        this.include = include;
        return this;
    }
}