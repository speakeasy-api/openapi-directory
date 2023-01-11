package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWordOfTheDayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date")
    public String date;
    public GetWordOfTheDayQueryParams withDate(String date) {
        this.date = date;
        return this;
    }
}