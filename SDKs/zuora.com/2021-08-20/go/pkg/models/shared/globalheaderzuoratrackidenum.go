package shared

type GlobalHeaderZuoraTrackIDEnum string

const (
	GLOBALHEADERZuoraTrackIDEnumAccepted   GlobalHeaderZuoraTrackIDEnum = "accepted"
	GLOBALHEADERZuoraTrackIDEnumInProgress GlobalHeaderZuoraTrackIDEnum = "in_progress"
	GLOBALHEADERZuoraTrackIDEnumCompleted  GlobalHeaderZuoraTrackIDEnum = "completed"
	GLOBALHEADERZuoraTrackIDEnumFailed     GlobalHeaderZuoraTrackIDEnum = "failed"
	GLOBALHEADERZuoraTrackIDEnumCancelled  GlobalHeaderZuoraTrackIDEnum = "cancelled"
)
