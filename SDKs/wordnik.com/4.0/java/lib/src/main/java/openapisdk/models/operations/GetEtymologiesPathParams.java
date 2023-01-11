package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEtymologiesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=word")
    public String word;
    public GetEtymologiesPathParams withWord(String word) {
        this.word = word;
        return this;
    }
}