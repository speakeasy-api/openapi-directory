import { SpeakeasyBase } from "../../../internal/utils";
export declare class CustomerResponsiblePersonsDTO extends SpeakeasyBase {
    /**
     * account manager
     */
    accountManagerId?: number;
    /**
     * project coordinator
     */
    projectCoordinatorId?: number;
    /**
     * project manager
     */
    projectManagerId: number;
    /**
     * sales person
     */
    salesPersonId: number;
}
