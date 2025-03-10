/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class CreateReceivable3Request {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.ReceivableCreateDTO receivableCreateDTO;

    public CreateReceivable3Request withReceivableCreateDTO(org.openapis.openapi.models.shared.ReceivableCreateDTO receivableCreateDTO) {
        this.receivableCreateDTO = receivableCreateDTO;
        return this;
    }
    
    /**
     * quote's internal identifier
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=quoteId")
    public String quoteId;

    public CreateReceivable3Request withQuoteId(String quoteId) {
        this.quoteId = quoteId;
        return this;
    }
    
    public CreateReceivable3Request(@JsonProperty("ReceivableCreateDTO") org.openapis.openapi.models.shared.ReceivableCreateDTO receivableCreateDTO, @JsonProperty("quoteId") String quoteId) {
        this.receivableCreateDTO = receivableCreateDTO;
        this.quoteId = quoteId;
  }
}
