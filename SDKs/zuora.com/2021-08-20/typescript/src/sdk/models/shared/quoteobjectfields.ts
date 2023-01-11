import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QuoteObjectFields
/** 
 * The fields populated for a quote when a quote is sent to Zuora Billing from Zuora Quote.
 * 
**/
export class QuoteObjectFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OpportunityCloseDate__QT" })
  opportunityCloseDateQT?: string;

  @SpeakeasyMetadata({ data: "json, name=OpportunityName__QT" })
  opportunityNameQT?: string;

  @SpeakeasyMetadata({ data: "json, name=QuoteBusinessType__QT" })
  quoteBusinessTypeQT?: string;

  @SpeakeasyMetadata({ data: "json, name=QuoteNumber__QT" })
  quoteNumberQT?: string;

  @SpeakeasyMetadata({ data: "json, name=QuoteType__QT" })
  quoteTypeQT?: string;
}
