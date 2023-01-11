package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReleaseEventSeriesApiGetOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public ReleaseEventSeriesApiGetOneFieldsEnum fields;
    public ReleaseEventSeriesApiGetOneQueryParams withFields(ReleaseEventSeriesApiGetOneFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public ReleaseEventSeriesApiGetOneLangEnum lang;
    public ReleaseEventSeriesApiGetOneQueryParams withLang(ReleaseEventSeriesApiGetOneLangEnum lang) {
        this.lang = lang;
        return this;
    }
}