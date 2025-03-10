// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type StartTransactionResponse struct {
	AcceptHeader           string        `json:"acceptHeader"`
	AntifraudAffiliationID string        `json:"antifraudAffiliationId"`
	AntifraudTid           string        `json:"antifraudTid"`
	AuthorizationDate      string        `json:"authorizationDate"`
	AuthorizationToken     string        `json:"authorizationToken"`
	Buyer                  string        `json:"buyer"`
	CancelationDate        string        `json:"cancelationDate"`
	CancelationToken       string        `json:"cancelationToken"`
	Cancellations          Cancellations `json:"cancellations"`
	Channel                string        `json:"channel"`
	CommitmentDate         string        `json:"commitmentDate"`
	CommitmentToken        string        `json:"commitmentToken"`
	Fields                 []Field       `json:"fields"`
	ID                     string        `json:"id"`
	Interactions           Interactions  `json:"interactions"`
	IPAddress              string        `json:"ipAddress"`
	MarkedForRecurrence    bool          `json:"markedForRecurrence"`
	Owner                  string        `json:"owner"`
	Payments               Payments      `json:"payments"`
	ReceiverURI            string        `json:"receiverUri"`
	ReferenceKey           string        `json:"referenceKey"`
	RefundingDate          string        `json:"refundingDate"`
	RefundingToken         string        `json:"refundingToken"`
	Refunds                Refunds       `json:"refunds"`
	SalesChannel           string        `json:"salesChannel"`
	Settlements            Settlements   `json:"settlements"`
	SoftDescriptor         string        `json:"softDescriptor"`
	StartDate              string        `json:"startDate"`
	Status                 string        `json:"status"`
	TimeoutStatus          int           `json:"timeoutStatus"`
	TotalRefunds           float64       `json:"totalRefunds"`
	TransactionID          string        `json:"transactionId"`
	Urn                    string        `json:"urn"`
	UserAgent              string        `json:"userAgent"`
	Value                  int           `json:"value"`
}
