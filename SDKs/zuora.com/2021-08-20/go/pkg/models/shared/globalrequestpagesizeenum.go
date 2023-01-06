package shared

type GlobalRequestPageSizeEnum string

const (
	GLOBALREQUESTPageSizeEnumAccount      GlobalRequestPageSizeEnum = "account"
	GLOBALREQUESTPageSizeEnumInvoice      GlobalRequestPageSizeEnum = "invoice"
	GLOBALREQUESTPageSizeEnumSubscription GlobalRequestPageSizeEnum = "subscription"
	GLOBALREQUESTPageSizeEnumCreditmemo   GlobalRequestPageSizeEnum = "creditmemo"
	GLOBALREQUESTPageSizeEnumDebitmemo    GlobalRequestPageSizeEnum = "debitmemo"
)
