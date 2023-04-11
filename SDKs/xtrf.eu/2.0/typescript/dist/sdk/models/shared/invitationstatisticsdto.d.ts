import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class InvitationStatisticsDTO extends SpeakeasyBase {
    alreadyRegisteredPersonsCount?: number;
    invitedPersonsCount?: number;
    providersWithAlreadyRegisteredPersonCount?: number;
    providersWithInvitedPersonCount?: number;
    providersWithoutPersonCount?: number;
}
