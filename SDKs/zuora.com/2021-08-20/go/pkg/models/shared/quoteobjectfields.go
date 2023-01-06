package shared

// QuoteObjectFields
// The fields populated for a quote when a quote is sent to Zuora Billing from Zuora Quote.
type QuoteObjectFields struct {
	OpportunityCloseDateQT *string `json:"OpportunityCloseDate__QT,omitempty"`
	OpportunityNameQT      *string `json:"OpportunityName__QT,omitempty"`
	QuoteBusinessTypeQT    *string `json:"QuoteBusinessType__QT,omitempty"`
	QuoteNumberQT          *string `json:"QuoteNumber__QT,omitempty"`
	QuoteTypeQT            *string `json:"QuoteType__QT,omitempty"`
}
