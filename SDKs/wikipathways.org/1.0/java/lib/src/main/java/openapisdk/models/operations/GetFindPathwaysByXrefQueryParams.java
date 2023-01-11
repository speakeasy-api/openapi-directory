package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFindPathwaysByXrefQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=codes")
    public Object[] codes;
    public GetFindPathwaysByXrefQueryParams withCodes(Object[] codes) {
        this.codes = codes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetFindPathwaysByXrefFormatEnum format;
    public GetFindPathwaysByXrefQueryParams withFormat(GetFindPathwaysByXrefFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=ids")
    public Object[] ids;
    public GetFindPathwaysByXrefQueryParams withIds(Object[] ids) {
        this.ids = ids;
        return this;
    }
}